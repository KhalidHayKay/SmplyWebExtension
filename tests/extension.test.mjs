import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { shortenUrl } from '../services/api.js';
import { copyToClipboard } from '../utils/helper.js';

let saved = {};
let failStorage = false;
let calls = 0;
let reply;
let opened = 0;
let copied;
globalThis.chrome = {
  storage: { local: {
    async get() { if (failStorage) throw Error('internal'); return { ...saved }; },
    async set(data) { if (failStorage) throw Error('internal'); Object.assign(saved, data); },
    async remove(key) { if (failStorage) throw Error('internal'); delete saved[key]; },
  } },
  tabs: { query: async () => [{ url: 'https://example.com' }], create() {} },
  runtime: { openOptionsPage() { opened++; } },
};
globalThis.fetch = async (url, options) => {
  calls++;
  assert.equal(url, 'https://smply.cc/api/v1/shorten');
  assert.equal(options.method, 'POST');
  assert.equal(options.headers['X-API-Key'], 'secret');
  assert.equal(options.body.get('url'), 'https://example.com');
  if (reply instanceof Error) throw reply;
  return reply;
};
Object.defineProperty(globalThis, 'navigator', { configurable: true, value: {
  clipboard: { async writeText(text) { copied = text; } },
} });

function element() {
  const classes = new Set(['hidden']);
  return {
    value: '', textContent: '', disabled: false, style: {}, children: [], events: {},
    classList: { add: x => classes.add(x), remove: x => classes.delete(x), contains: x => classes.has(x) },
    addEventListener(event, handler) { this.events[event] = handler; },
    appendChild(child) { this.children.push(child); },
    querySelector() { return this.message ??= element(); },
  };
}
async function page(path, imports = {}) {
  const elements = new Map();
  const get = id => { if (!elements.has(id)) elements.set(id, element()); return elements.get(id); };
  const events = {};
  const document = {
    getElementById: get, querySelector: get,
    addEventListener: (name, fn) => { events[name] = fn; },
    createElement: element, createTextNode: text => ({ textContent: text }),
  };
  const source = (await readFile(new URL(path, import.meta.url), 'utf8')).replace(/^import .*;\n/gm, '');
  vm.runInNewContext(source, { document, chrome, console, ...imports });
  await events.DOMContentLoaded();
  return get;
}

test('shortening, storage, Options, and popup flows', async () => {
  for (const apiKey of [undefined, '', '   ', 123]) {
    saved = { apiKey };
    await assert.rejects(shortenUrl('https://example.com'), /API key is required/);
  }
  assert.equal(calls, 0);
  saved = { apiKey: ' secret ' };
  reply = { ok: true, json: async () => ({ success: true, data: { short_url: 'https://smply.cc/4gos' } }) };
  assert.equal(await shortenUrl('https://example.com'), 'https://smply.cc/4gos');
  for (const [status, message] of [[401, /invalid or expired/], [400, /could not accept/], [422, /could not accept/], [429, /Rate limit/], [500, /temporarily unavailable/], [404, /Unable to shorten/]]) {
    reply = { ok: false, status };
    await assert.rejects(shortenUrl('https://example.com'), message);
  }
  for (const data of [null, {}, { data: {} }, { data: { short_url: '' } }, { data: { short_url: 5 } }, { data: { short_url: 'javascript:alert(1)' } }, { success: false, data: { short_url: 'https://smply.cc/a' } }]) {
    reply = { ok: true, json: async () => data };
    await assert.rejects(shortenUrl('https://example.com'), /invalid response/);
  }
  reply = { ok: true, json: async () => { throw SyntaxError('internal'); } };
  await assert.rejects(shortenUrl('https://example.com'), /invalid response/);
  reply = TypeError('internal');
  await assert.rejects(shortenUrl('https://example.com'), /internet connection/);
  await assert.rejects(shortenUrl('chrome://extensions'), /HTTP or HTTPS/);
  failStorage = true;
  await assert.rejects(shortenUrl('https://example.com'), /Unable to read/);
  failStorage = false;

  let options = await page('../options/options.js');
  options('api-key').value = ' secret ';
  await options('save').events.click();
  assert.equal(saved.apiKey, 'secret');
  await options('clear').events.click();
  assert.equal(saved.apiKey, undefined);
  assert.equal(options('api-key').value, '');
  assert.equal(options('success-message').querySelector().textContent, 'API key removed.');
  options = await page('../options/options.js');
  assert.equal(options('api-key').value, '');
  saved = { apiKey: 'secret' };
  failStorage = true;
  await options('clear').events.click();
  assert.equal(saved.apiKey, 'secret');
  assert.equal(options('success-message').classList.contains('hidden'), true);
  assert.match(options('error-text').textContent, /Unable to remove/);
  failStorage = false;
  options('api-key').value = ' ';
  await options('save').events.click();
  assert.equal(saved.apiKey, undefined);

  const popup = await page('../popup/popup.js', { shortenUrl, copyToClipboard });
  assert.equal(popup('.url-entry').textContent, 'https://example.com');
  const before = calls;
  await popup('.btn-primary').events.click();
  assert.equal(calls, before);
  assert.match(popup('.error').textContent, /API key is required/);
  const link = popup('.error').children.find(child => child.textContent === 'Configure API key');
  link.events.click({ preventDefault() {} });
  assert.equal(opened, 1);
  saved = { apiKey: 'secret' };
  reply = { ok: false, status: 401 };
  await popup('.btn-primary').events.click();
  assert.match(popup('.error').textContent, /invalid or expired/);
  reply = { ok: true, json: async () => ({ data: { short_url: 'https://smply.cc/4gos' } }) };
  await popup('.btn-primary').events.click();
  assert.equal(popup('.result-container').classList.contains('hidden'), false);
  await popup('.btn-copy').events.click();
  assert.equal(copied, 'https://smply.cc/4gos');
  assert.equal(popup('.btn-primary').disabled, false);
});

# Smply Chrome Extension

Read the active page URL, shorten it through Smply, and copy the resulting short link.

## Getting started

1. Get an API key from [smply.cc/api](https://smply.cc/api).
2. Clone this repository, open `chrome://extensions`, enable **Developer mode**, and choose **Load unpacked** with this project folder.
3. Open the extension's **Options** page from Chrome's extension menu and save your API key.
4. Open an HTTP or HTTPS page, click the extension icon, then **Go**.
5. Use the copy button beside the resulting short URL.

A missing or invalid API key shows a **Configure API key** link that opens Options.
The extension does not expose custom aliases, analytics, or stats views.

## API key and privacy

The API key is saved in `chrome.storage.local` for this browser profile; new saves do not sync across devices. **Clear**, or saving an empty field, removes the local key and confirms removal. Clearing the key does not delete links already created on Smply.

Users upgrading from the sync-storage version must re-enter their key. This version does not read or migrate old synced keys. Historical sync storage is not erased by clearing the local key; to remove that legacy copy, open this extension's Options DevTools and run `chrome.storage.sync.remove('apiKey')` once.

Opening the popup reads only the active tab URL. Clicking **Go** sends that URL and the API key to `https://smply.cc/api/v1/shorten` over HTTPS. There is no background browsing collection.

Permissions are limited to `activeTab` (read the active URL after user interaction), `storage` (save settings), and `https://smply.cc/*` (call the API). There is no broad tab or all-sites access.

## Verification and release

Run `node --test tests/extension.test.mjs` for the mocked API, storage, Options, and popup regression checks.

Run `python3 scripts/package.py` to create `dist/smply.zip`. The ZIP contains only an explicit list of runtime files, with `manifest.json` at its root. Git metadata, tests, documentation, and build scripts are excluded. Do not ZIP the entire repository.

Before publishing, load unpacked in Chrome and check Options save/clear/reopen, missing and invalid keys, shortening, and copying with a valid Smply key. Increase the manifest version above any previously published version. Keep the store listing and privacy disclosures consistent with the URL/API-key transfer and the permissions above.

Built by Khalid. JavaScript · CSS · Chrome Extensions API · Smply REST API.

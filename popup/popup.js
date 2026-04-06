import { shortenUrl } from '../services/api.js';

const navBtn = document.querySelector('.btn-outline');
const urlInput = document.querySelector('.url-entry');
const button = document.querySelector('.btn-primary');
const errorEl = document.querySelector('.error');
const resultContainer = document.querySelector('.result-container');
const shortUrlEl = document.querySelector('.short-url-text');
const copyBtn = document.querySelector('.btn-copy');

// Auto-fill current tab URL
(async () => {
	const [tab] = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	});

	urlInput.textContent = tab.url;
})();

// Shorten
button.addEventListener('click', async () => {
	errorEl.classList.add('hidden');

	button.disabled = true;
	button.textContent = 'Shortening...';
	try {
		const shortUrl = await shortenUrl(urlInput.textContent);

		shortUrlEl.textContent = shortUrl;
		resultContainer.classList.remove('hidden');
	} catch (err) {
		console.error(err);

		errorEl.textContent = err.message;
		errorEl.classList.remove('hidden');
	} finally {
		button.disabled = false;
		button.textContent = 'Go';
	}
});

// Copy
copyBtn.addEventListener('click', () => {
	navigator.clipboard.writeText(shortUrlEl.textContent);
});

navBtn.addEventListener('click', () => {
	chrome.tabs.create({ url: 'https://smply.cc' });
});

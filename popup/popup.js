import { shortenUrl } from '../services/api.js';
import { copyToClipboard } from '../utils/helper.js';

const navBtn = document.querySelector('.btn-outline');
const urlInput = document.querySelector('.url-entry');
const button = document.querySelector('.btn-primary');
const errorEl = document.querySelector('.error');
const resultContainer = document.querySelector('.result-container');
const shortUrlEl = document.querySelector('.short-url-text');
const copyBtn = document.querySelector('.btn-copy');

// Auto-fill current tab URL
document.addEventListener('DOMContentLoaded', async () => {
	try {
		const [tab] = await chrome.tabs.query({
			active: true,
			currentWindow: true,
		});
		if (tab?.url) urlInput.textContent = tab.url;
	} catch (err) {
		console.warn('Failed to get tab URL:', err);
	}
});

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
		errorEl.textContent = err.message;

		// Add helpful link for API key errors
		if (err.message.includes('API key') || err.message.includes('Unauthorized')) {
			const helpLink = document.createElement('a');
			helpLink.href = '#';
			helpLink.style.color = 'inherit';
			helpLink.style.textDecoration = 'underline';
			helpLink.style.marginLeft = '4px';
			helpLink.textContent = 'Configure API key';
			helpLink.addEventListener('click', (e) => {
				e.preventDefault();
				chrome.runtime.openOptionsPage();
			});
			errorEl.appendChild(document.createTextNode(' — '));
			errorEl.appendChild(helpLink);
		}

		errorEl.classList.remove('hidden');
	} finally {
		button.disabled = false;
		button.textContent = 'Go';
	}
});

// Copy
copyBtn.addEventListener('click', () => {
	copyToClipboard(shortUrlEl.textContent);
});

navBtn.addEventListener('click', () => {
	chrome.tabs.create({ url: 'https://smply.cc' });
});

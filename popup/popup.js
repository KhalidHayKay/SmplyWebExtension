import { shortenUrl } from '../services/api.js';

const urlInput = document.querySelector('.url-entry');
const button = document.querySelector('.btn-primary');
const resultBox = document.getElementById('result');
const shortUrlEl = document.getElementById('shortUrl');
const copyBtn = document.getElementById('copyBtn');

// Auto-fill current tab URL
(async () => {
	const [tab] = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	});

	console.log(urlInput);
	urlInput.textContent = tab.url;
})();

// Shorten
button.addEventListener('click', async () => {
	const longUrl = urlInput.textContent;

	const shortUrl = await shortenUrl(longUrl);

	shortUrlEl.textContent = shortUrl;
	resultBox.classList.remove('hidden');
});

// Copy
copyBtn.addEventListener('click', () => {
	navigator.clipboard.writeText(shortUrlEl.textContent);
});

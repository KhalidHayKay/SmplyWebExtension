import { shortenUrl } from '../services/api.js';

const urlInput = document.getElementById('urlInput');
const button = document.getElementById('shortenBtn');
const resultBox = document.getElementById('result');
const shortUrlEl = document.getElementById('shortUrl');
const copyBtn = document.getElementById('copyBtn');

// Auto-fill current tab URL
(async () => {
	const [tab] = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	});

	urlInput.value = tab.url;
})();

// Shorten
button.addEventListener('click', async () => {
	const longUrl = urlInput.value;

	const shortUrl = await shortenUrl(longUrl);

	shortUrlEl.textContent = shortUrl;
	resultBox.classList.remove('hidden');
});

// Copy
copyBtn.addEventListener('click', () => {
	navigator.clipboard.writeText(shortUrlEl.textContent);
});

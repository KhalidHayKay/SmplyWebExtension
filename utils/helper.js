export function copyToClipboard(text) {
	navigator.clipboard.writeText(text);
}

export function getApiKey() {
	return new Promise((resolve) => {
		chrome.storage.sync.get('apiKey', (data) => {
			resolve(data.apiKey || null);
		});
	});
}

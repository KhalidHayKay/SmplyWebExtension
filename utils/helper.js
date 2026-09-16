export function copyToClipboard(text) {
	return navigator.clipboard.writeText(text);
}

export async function getApiKey() {
	try {
		const { apiKey } = await chrome.storage.local.get('apiKey');
		return typeof apiKey === 'string' ? apiKey.trim() || null : null;
	} catch (_) {
		throw new Error('Unable to read your API key. Reopen the extension and try again.');
	}
}

const apiKeyInput = document.getElementById('api-key');
const saveBtn = document.getElementById('save');
const clearBtn = document.getElementById('clear');
const successMsg = document.getElementById('success-message');
const errorMsg = document.getElementById('error-message');
const errorText = document.getElementById('error-text');
const infoLink = document.querySelector('.info-link');

infoLink.addEventListener('click', () => {
	chrome.tabs.create({ url: 'https://smply.cc/api' });
});

function setBusy(busy) {
	apiKeyInput.disabled = busy;
	saveBtn.disabled = busy;
	clearBtn.disabled = busy;
}

function showError(message) {
	errorText.textContent = message;
	errorMsg.classList.remove('hidden');
}

// Prevent a slow initial read from overwriting a save or clear.
setBusy(true);
document.addEventListener('DOMContentLoaded', async () => {
	try {
		const { apiKey } = await chrome.storage.local.get('apiKey');
		apiKeyInput.value = typeof apiKey === 'string' ? apiKey : '';
	} catch (_) {
		showError('Unable to load your API key. Please reopen settings and try again.');
	} finally {
		setBusy(false);
	}
});

async function persistKey(key) {
	setBusy(true);
	successMsg.classList.add('hidden');
	errorMsg.classList.add('hidden');
	try {
		if (key) {
			await chrome.storage.local.set({ apiKey: key });
		} else {
			await chrome.storage.local.remove('apiKey');
		}
		apiKeyInput.value = key;
		successMsg.querySelector('.message-text').textContent = key
			? 'API key saved successfully!'
			: 'API key removed.';
		successMsg.classList.remove('hidden');
	} catch (_) {
		showError(key
			? 'Unable to save your API key. Please try again.'
			: 'Unable to remove your API key. Please try again.');
	} finally {
		setBusy(false);
	}
}

saveBtn.addEventListener('click', () => persistKey(apiKeyInput.value.trim()));
clearBtn.addEventListener('click', () => persistKey(''));

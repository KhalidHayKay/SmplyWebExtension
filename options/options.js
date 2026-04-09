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

// Load existing key on page open
document.addEventListener('DOMContentLoaded', () => {
	chrome.storage.sync.get('apiKey', (data) => {
		if (data.apiKey) {
			apiKeyInput.value = data.apiKey;
		}
	});
});

// Save API key
saveBtn.addEventListener('click', () => {
	const key = apiKeyInput.value.trim();

	// Hide previous messages
	successMsg.classList.add('hidden');
	errorMsg.classList.add('hidden');

	if (!key) {
		// If empty, remove the key
		chrome.storage.sync.remove('apiKey', () => {
			successMsg.classList.remove('hidden');
			successMsg.querySelector('.message-text').textContent = 'API key removed.';
		});
		return;
	}

	// Save the key
	chrome.storage.sync.set({ apiKey: key }, () => {
		successMsg.classList.remove('hidden');
		successMsg.querySelector('.message-text').textContent =
			'API key saved successfully!';
	});
});

// Clear API key
clearBtn.addEventListener('click', () => {
	apiKeyInput.value = '';
	successMsg.classList.add('hidden');
	errorMsg.classList.add('hidden');
});

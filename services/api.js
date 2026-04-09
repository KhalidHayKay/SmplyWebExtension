import { getApiKey } from '../utils/helper.js';

export async function shortenUrl(longUrl) {
	try {
		const body = new FormData();
		body.append('url', longUrl);

		const apiKey = await getApiKey();

		const response = await fetch('https://smply.cc/api/v1/shorten', {
			method: 'POST',
			headers: {
				'X-API-Key': apiKey || '',
			},
			body,
		});

		// Server responded, but with error status
		if (!response.ok) {
			let errorData = {};

			try {
				errorData = await response.json();
			} catch (_) {}

			if (response.status === 422) {
				throw new Error(errorData.error || 'Invalid URL');
			} else if (response.status === 429) {
				throw new Error('Rate limit exceeded. Please try again later.');
			} else if (response.status >= 500) {
				throw new Error('Server error. Please try again later.');
			} else if (response.status === 404) {
				throw new Error('API endpoint not found.');
			} else if (response.status === 401) {
				throw new Error(
					'Unauthorized. Check your API key in the extension settings.',
				);
			}

			throw new Error('Failed to shorten URL.');
		}

		const { data } = await response.json();
		return data.short;
	} catch (err) {
		if (err instanceof TypeError) {
			throw new Error('Network error. Check your internet connection or CORS.');
		}

		throw err;
	}
}

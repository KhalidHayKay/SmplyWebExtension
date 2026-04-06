export async function shortenUrl(longUrl) {
	try {
		const body = new FormData();
		body.append('url', longUrl);

		const response = await fetch('http://localhost:8000/api/v1/shorten', {
			// const response = await fetch('https://smply.cc/api/shorten', {
			method: 'POST',
			headers: {
				'X-API-Key':
					'sk_internal_4a7f9c2e1b8d5f3a9c6e2b1f4d7a9c3e5b8f2a4d6c9e1b3f5a7d9c2e4f6a8b',
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
				throw new Error('Unauthorized. Check credentials.');
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

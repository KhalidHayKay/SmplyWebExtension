export async function shortenUrl(longUrl) {
	const response = await fetch('http://localhost:8000/api/shorten', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ url: longUrl }),
	});

	const data = await response.json();

	return data.short_url;
}

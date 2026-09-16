import { getApiKey } from "../utils/helper.js";

export async function shortenUrl(longUrl) {
  const apiKey = await getApiKey();
  if (!apiKey) {
    throw new Error("An API key is required. Configure it in the extension settings.");
  }

  try {
    const url = new URL(longUrl);
    if (!["http:", "https:"].includes(url.protocol)) throw new Error();
  } catch (_) {
    throw new Error("Please open a valid HTTP or HTTPS page to shorten.");
  }

  const body = new FormData();
  body.append("url", longUrl);

  let response;
  try {
    response = await fetch("https://smply.cc/api/v1/shorten", {
      method: "POST",
      headers: { "X-API-Key": apiKey },
      body,
    });
  } catch (_) {
    throw new Error("Unable to reach Smply. Check your internet connection and try again.");
  }

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Your API key is invalid or expired. Update it in the extension settings.");
    }
    if (response.status === 400 || response.status === 422) {
      throw new Error("Smply could not accept this URL. Check the page address and try again.");
    }
    if (response.status === 429) {
      throw new Error("Rate limit exceeded. Please try again later.");
    }
    if (response.status >= 500) {
      throw new Error("Smply is temporarily unavailable. Please try again later.");
    }
    throw new Error("Unable to shorten this URL. Please try again later.");
  }

  try {
    const responseData = await response.json();
    const shortUrl = responseData?.data?.short_url;
    if (responseData?.success === false || typeof shortUrl !== "string" || !shortUrl.trim()) {
      throw new Error();
    }
    const parsed = new URL(shortUrl);
    if (!["http:", "https:"].includes(parsed.protocol)) throw new Error();
    return shortUrl;
  } catch (_) {
    throw new Error("Smply returned an invalid response. Please try again later.");
  }
}

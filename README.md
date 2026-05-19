# SmplyWebExtension — Browser Extension

A browser extension that brings the Smply URL shortening service directly into your browser. Shorten any page URL instantly with one click — no copying, no tab switching, no friction.

---

## What It Does

- Shortens the current page URL instantly from the browser toolbar
- Supports custom aliases for shortened links
- Tracks per-link click analytics via the Smply stats page
- Authenticates via a personal API key from smply.cc

---

## 🚀 Features

- ⚡ One-click shortening of the current page
- 🔗 Custom alias support
- 📊 Per-link click analytics at `/stats`
- 🔑 API key authentication — your links, tied to your key

---

## 🧪 Getting Started

### 1️⃣ Get an API Key

Visit [smply.cc/api](https://smply.cc/api) and request a free API key.

### 2️⃣ Install the Extension

Clone the repository and load it as an unpacked extension:

```bash
git clone https://github.com/KhalidHayKay/SmplyWebExtension.git
```

Then in your browser:
- Open `chrome://extensions`
- Enable **Developer mode**
- Click **Load unpacked** and select the project folder

### 3️⃣ Configure Your API Key

Open the extension settings and paste your API key once. That's it.

---

## ⚙️ How It Works

1. Navigate to any page you want to share
2. Click the Smply extension icon in the browser toolbar
3. Optionally set a custom alias
4. Get a clean short link instantly, ready to copy and share
5. Visit the link's stats page to track click activity

---

## 👨‍💻 Author

Built by Khalid

**Tech Stack:** JavaScript · CSS · Chrome Extensions API · Smply REST API

<!-- layout -->

{{define "layout"}}

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>{{.Title}} — snip.fyi</title>
  <meta name="description" content="snip.fyi — A personal link shortener. Fast, clean, no noise."/>
  <link rel="stylesheet" href="/static/css/style.css"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js" defer></script>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%230d0f12'/><path d='M9 16a7 7 0 0 1 14 0' stroke='white' stroke-width='2.2' fill='none' stroke-linecap='round'/><circle cx='16' cy='16' r='2.5' fill='white'/></svg>"/>
</head>
<body>

<nav class="nav" id="nav">
  <div class="container">
    <div class="nav-inner">

      <a href="/" class="nav-logo">
        <div class="logo-mark">
          <svg viewBox="0 0 24 24"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        </div>
        smply<span class="logo-tld">.cc</span>
      </a>

      <!-- desktop links -->
      <ul class="nav-links">
        <li><a href="/" {{if eq .Page "home"}}class="active"{{end}}>Home</a></li>
        <li><a href="/shorten" {{if eq .Page "shorten"}}class="active"{{end}}>Shorten</a></li>
        <li><a href="/api" {{if eq .Page "api"}}class="active"{{end}}>API</a></li>
      </ul>

      <div class="nav-right">
        <a href="https://github.com/YOUR_USERNAME/snipfyi" class="nav-github" target="_blank" rel="noopener" aria-label="GitHub repo">
          <svg viewBox="0 0 98 96"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>
        </a>

        <!-- hamburger — mobile only -->
        <button class="nav-burger" id="nav-burger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>

    </div>

  </div>

  <!-- mobile drawer -->
  <div class="nav-drawer" id="nav-drawer" aria-hidden="true">
    <ul class="nav-drawer-links">
      <li><a href="/" {{if eq .Page "home"}}class="active"{{end}}>Home</a></li>
      <li><a href="/shorten" {{if eq .Page "shorten"}}class="active"{{end}}>Shorten</a></li>
      <li><a href="/api" {{if eq .Page "api"}}class="active"{{end}}>API</a></li>
    </ul>
  </div>
</nav>

{{block "content" .}}{{end}}

<footer class="footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-left">
        <span class="footer-wordmark">smply<span class="tld">.cc</span></span>
        <div class="footer-sep"></div>
        <span class="footer-byline">
          long URLs, simplified.
        </span>
      </div>
      <div class="footer-right">
        <a href="https://x.com/khalidhaykay" class="footer-icon-link" target="_blank" rel="noopener" aria-label="X / Twitter">
          <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://github.com/KhalidHayKay/Smply" class="footer-icon-link" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 98 96"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>

<script src="/static/js/app.js"></script>
<script>
  // ── Mobile nav ──
  (function () {
    var burger = document.getElementById('nav-burger');
    var drawer = document.getElementById('nav-drawer');
    var open   = false;

    burger.addEventListener('click', function () {
      open = !open;
      burger.classList.toggle('is-open', open);
      drawer.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open);
      drawer.setAttribute('aria-hidden', !open);
    });

    // close on link tap
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        open = false;
        burger.classList.remove('is-open');
        drawer.classList.remove('is-open');
        burger.setAttribute('aria-expanded', false);
        drawer.setAttribute('aria-hidden', true);
      });
    });
  }());
</script>
</body>
</html>
{{end}}

<!-- home -->

{{define "content"}}

<!-- ── Hero ── -->
<section class="hero">
	<div class="container">
		<div class="hero-inner">
			<div class="hero-badge">
				<span class="badge-dot"></span>
				Simplify your links
			</div>

    		<h1 class="hero-title">
    			Long URLs,<br />
    			<em>simplified.</em>
    		</h1>

    		<p class="hero-sub">
    			Paste any link, get a short one. Tracks clicks, supports custom slugs, and
    			each link gets its own
    			<code class="code-badge">/stats</code>
    		</p>

    		<!-- Error message display -->
    		{{ if .Error }}
    		<div
    			class="error-message"
    			style="
    				margin-bottom: 1.5rem;
    				padding: 1rem;
    				background-color: #ffebee;
    				border: 1px solid #f44336;
    				border-radius: 0.5rem;
    				color: #c62828;
    			"
    		>
    			{{ .Error }}
    		</div>
    		{{ end }}

    		<form method="POST" action="/">
    			<div class="hero-bar">
    				<input
    					type="url"
    					name="url"
    					value="{{ if .Data }} {{ .Data.Original }} {{ end }}"
    					placeholder="https://a-very-long-url-you-want-to-shorten.com/…"
    					required
    					autocomplete="off"
    					spellcheck="false"
    				/>
    				<button type="submit" class="btn btn-primary">
    					Simplify
    					<svg
    						width="14"
    						height="14"
    						viewBox="0 0 24 24"
    						fill="none"
    						stroke="currentColor"
    						stroke-width="2.5"
    						stroke-linecap="round"
    					>
    						<line x1="5" y1="12" x2="19" y2="12" />
    						<polyline points="12 5 19 12 12 19" />
    					</svg>
    				</button>
    			</div>

    			<!-- Result appears here (server-rendered if successful) -->
    			{{ if .Data }}
    			<div class="hero-result show" style="margin-bottom: 10px">
    				<div class="result-tag">Link ready</div>
    				<div class="result-row">
    					<div class="result-url">
    						<a href="{{ .Data.Short }}" target="_blank" rel="noopener"
    							>{{ .Data.Short }}</a
    						>
    					</div>
    					<div class="result-btns">
    						<button
    							type="button"
    							class="btn btn-primary btn-sm"
    							onclick="copyText('{{ .Data.Short }}')"
    						>
    							Copy
    						</button>
    						<a
    							href="{{ .Data.Short }}"
    							class="btn btn-ghost btn-sm"
    							target="_blank"
    							rel="noopener"
    							>Open ↗</a
    						>
    					</div>
    				</div>
    				<div class="result-divider"></div>
    				<div class="result-bottom">
    					<div class="result-qr-wrap">
    						<div class="result-qr-box" id="hero-qr"></div>
    						<button
    							type="button"
    							class="result-qr-dl"
    							onclick="downloadQR('hero-qr', 'smply-qr.png')"
    						>
    							<svg
    								viewBox="0 0 24 24"
    								fill="none"
    								stroke="currentColor"
    								stroke-width="2.2"
    								stroke-linecap="round"
    							>
    								<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    								<polyline points="7 10 12 15 17 10" />
    								<line x1="12" y1="15" x2="12" y2="3" />
    							</svg>
    							Download PNG
    						</button>
    						<script>
    							document.addEventListener('DOMContentLoaded', () => {
    								const qrBox = document.getElementById('hero-qr');
    								const shortLink = qrBox
    									?.closest('.hero-result')
    									?.querySelector('.result-url a')?.href;
    								if (qrBox && shortLink) {
    									generateQR('hero-qr', shortLink);
    								}
    							});
    						</script>
    					</div>
    					<div class="result-stats-col">
    						<span class="result-stats-note">Track clicks at</span>
    						<a
    							href="{{ .Data.Stat }}"
    							class="result-stats-link"
    							target="_blank"
    							rel="noopener"
    						>
    							<svg viewBox="0 0 24 24">
    								<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    							</svg>
    							{{ .Data.Stat }}
    						</a>
    					</div>
    				</div>
    			</div>
    			{{ end }}
    		</form>

    		<div class="hero-hints">
    			<span class="hero-hint">
    				<svg viewBox="0 0 24 24">
    					<path
    						d="M20 6L9 17l-5-5"
    						stroke-linecap="round"
    						stroke-linejoin="round"
    					/>
    				</svg>
    				No account needed
    			</span>
    			<span class="hero-hint">
    				<svg viewBox="0 0 24 24">
    					<path
    						d="M20 6L9 17l-5-5"
    						stroke-linecap="round"
    						stroke-linejoin="round"
    					/>
    				</svg>
    				Custom slugs
    			</span>
    			<span class="hero-hint">
    				<svg viewBox="0 0 24 24">
    					<path
    						d="M20 6L9 17l-5-5"
    						stroke-linecap="round"
    						stroke-linejoin="round"
    					/>
    				</svg>
    				Click analytics
    			</span>
    		</div>
    	</div>
    </div>

</section>

<!-- ── Marquee strip ── -->
<div class="strip">
	<div class="strip-track">
		<span class="strip-item">Short links</span>
		<span class="strip-item">·</span>
		<span class="strip-item"><b>Custom slugs</b></span>
		<span class="strip-item">·</span>
		<span class="strip-item">QR Code</span>
		<span class="strip-item">·</span>
		<span class="strip-item"><b>Fast redirects</b></span>
		<span class="strip-item">·</span>
		<span class="strip-item">Link stats</span>
		<span class="strip-item">·</span>
		<span class="strip-item"><b>Built with Go</b></span>
		<span class="strip-item">·</span>
		<!-- duplicate for seamless loop -->
		<span class="strip-item">Short links</span>
		<span class="strip-item">·</span>
		<span class="strip-item"><b>Custom slugs</b></span>
		<span class="strip-item">·</span>
		<span class="strip-item">QR Code</span>
		<span class="strip-item">·</span>
		<span class="strip-item"><b>Fast redirects</b></span>
		<span class="strip-item">·</span>
		<span class="strip-item">Link stats</span>
		<span class="strip-item">·</span>
		<span class="strip-item"><b>Built with Go</b></span>
		<span class="strip-item">·</span>
	</div>
</div>

<!-- ── About / features ── -->
<section class="about-section">
	<div class="container">
		<div class="about-grid">
			<div>
				<div class="about-kicker">What it does</div>
				<h2 class="about-heading">
					A URL shortener<br />
					that <em>stays out of the way</em>
				</h2>
				<p class="about-body">
					smply.cc is built to make link shortening effortless — no friction, no
					clutter. Shorten any URL, set a custom alias, and see exactly how many
					times each link has been clicked. Fast, clean, and nothing you don't need.
				</p>
			</div>

    		<div class="features-list">
    			<div class="feat-item">
    				<div class="feat-icon">
    					<svg viewBox="0 0 24 24">
    						<path
    							d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
    						/>
    						<line x1="8" y1="12" x2="16" y2="12" />
    					</svg>
    				</div>
    				<div class="feat-text">
    					<h4>Instant shortening</h4>
    					<p>Paste any URL, get a short link. No signup required to shorten.</p>
    				</div>
    			</div>

    			<div class="feat-item">
    				<div class="feat-icon">
    					<svg viewBox="0 0 24 24">
    						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    					</svg>
    				</div>
    				<div class="feat-text">
    					<h4>Custom aliases</h4>
    					<p>
    						Pick your own slug —
    						<code class="code-badge code-badge-sm">smply.cc/anything</code>.
    					</p>
    				</div>
    			</div>

    			<div class="feat-item">
    				<div class="feat-icon">
    					<svg viewBox="0 0 24 24">
    						<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    					</svg>
    				</div>
    				<div class="feat-text">
    					<h4>Per-link analytics</h4>
    					<p>
    						Every short link has a
    						<code class="code-badge code-badge-sm">/stats</code>
    						page with click counts.
    					</p>
    				</div>
    			</div>

    			<div class="feat-item">
    				<div class="feat-icon">
    					<svg viewBox="0 0 24 24">
    						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    					</svg>
    				</div>
    				<div class="feat-text">
    					<h4>Fast & clean</h4>
    					<p>Go backend, no client-side frameworks, sub-100ms redirects.</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>

</section>

{{end}}

<!-- css -->

/\* ============================================
STYLE ARCHITECTURE
============================================

This stylesheet is organized in the following sections:

1. FOUNDATION — Imports, resets, variables
2. GLOBAL — Base element styles
3. LAYOUT — Container, grid, spacing
4. COMPONENTS — Buttons, forms, cards
5. PAGES — Page-specific layouts
6. UTILITIES — Animations, responsive, badges

============================================ \*/

@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap');

/_ ── FOUNDATION: Reset & Variables ── _/

_,
_::before,
\*::after {
box-sizing: border-box;
margin: 0;
padding: 0;
}

:root {
--ink: #0d0f12;
--ink2: #1a1d24;
--ink3: #252932;
--blue: #2563eb;
--blue2: #3b82f6;
--white: #ffffff;
--warm: #fafaf9;
--grey1: #f4f4f5;
--grey2: #e4e4e7;
--grey3: #a1a1aa;
--grey4: #52525b;
--success: #16a34a;
--danger: #dc2626;

    --font-serif: 'Instrument Serif', Georgia, serif;
    --font-sans: 'Inter', system-ui, sans-serif;

    --radius-sm: 6px;
    --radius: 10px;
    --radius-lg: 16px;
    --radius-xl: 24px;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.08);
    --shadow: 0 4px 16px rgba(0, 0, 0, 0.09);
    --shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.14);
    --shadow-blue: 0 4px 16px rgba(37, 99, 235, 0.28);

    --transition: 0.17s cubic-bezier(0.4, 0, 0.2, 1);

}

html {
scroll-behavior: smooth;
}

/_ ── GLOBAL: Base Elements ── _/

body {
font-family: var(--font-sans);
background: var(--warm);
color: var(--ink);
line-height: 1.6;
font-size: 15px;
overflow-x: hidden;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

img {
display: block;
max-width: 100%;
}
a {
text-decoration: none;
color: inherit;
}
button {
cursor: pointer;
font-family: var(--font-sans);
border: none;
outline: none;
}
input {
font-family: var(--font-sans);
outline: none;
}

/_ ── LAYOUT: Container ── _/
.container {
width: 100%;
max-width: 1080px;
margin: 0 auto;
padding: 0 28px;
}

/_ ── COMPONENTS: Buttons & Navigation ── _/
/_ Buttons _/
.btn {
display: inline-flex;
align-items: center;
gap: 6px;
padding: 9px 18px;
border-radius: var(--radius);
font-size: 14px;
font-weight: 500;
letter-spacing: -0.01em;
transition: var(--transition);
white-space: nowrap;
}
.btn-primary {
background: var(--blue);
color: var(--white);
box-shadow: var(--shadow-blue);
}
.btn-primary:hover {
background: var(--blue2);
transform: translateY(-1px);
}
.btn-primary:active {
transform: none;
}
.btn-ghost {
background: transparent;
color: var(--grey4);
border: 1px solid var(--grey2);
}
.btn-ghost:hover {
border-color: var(--grey3);
color: var(--ink);
background: var(--grey1);
}
.btn-sm {
padding: 6px 12px;
font-size: 13px;
}

.btn-full {
width: 100%;
justify-content: center;
}

/_ ── Nav ── _/
/_ ── Nav ── _/
.nav {
position: sticky;
top: 0;
z-index: 100;
background: rgba(250, 250, 249, 0.94);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border-bottom: 1px solid var(--grey2);
}
.nav-inner {
display: flex;
align-items: center;
justify-content: space-between;
height: 56px;
}
.nav-logo {
display: flex;
align-items: center;
font-size: 16px;
font-weight: 600;
color: var(--ink);
letter-spacing: -0.03em;
flex-shrink: 0;
}
.logo-mark {
width: 27px;
height: 27px;
margin-right: 7px;
background: var(--ink);
border-radius: 7px;
display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0;
}
.logo-mark svg {
width: 14px;
height: 14px;
stroke: white;
fill: none;
stroke-width: 2.3;
}
.logo-tld {
color: var(--blue);
}

.nav-links {
display: flex;
align-items: center;
list-style: none;
}
.nav-links a {
font-size: 14px;
font-weight: 400;
color: var(--grey4);
padding: 5px 11px;
border-radius: var(--radius-sm);
transition: var(--transition);
}
.nav-links a:hover {
color: var(--ink);
background: var(--grey1);
}
.nav-links a.active {
color: var(--ink);
font-weight: 500;
}

.nav-right {
display: flex;
align-items: center;
gap: 6px;
flex-shrink: 0;
}
.nav-github {
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
border-radius: var(--radius-sm);
color: var(--grey4);
border: 1px solid var(--grey2);
transition: var(--transition);
flex-shrink: 0;
}
.nav-github:hover {
color: var(--ink);
border-color: var(--grey3);
background: var(--grey1);
}
.nav-github svg {
width: 16px;
height: 16px;
fill: currentColor;
}

/_ hamburger — mobile only _/
.nav-burger {
display: none;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;
width: 32px;
height: 32px;
background: none;
border: 1px solid var(--grey2);
border-radius: var(--radius-sm);
cursor: pointer;
transition: var(--transition);
flex-shrink: 0;
}
.nav-burger:hover {
border-color: var(--grey3);
background: var(--grey1);
}
.nav-burger span {
display: block;
width: 14px;
height: 1.5px;
background: var(--grey4);
border-radius: 2px;
transition: var(--transition);
transform-origin: center;
}
.nav-burger.is-open span:nth-child(1) {
transform: translateY(6.5px) rotate(45deg);
}
.nav-burger.is-open span:nth-child(2) {
opacity: 0;
transform: scaleX(0);
}
.nav-burger.is-open span:nth-child(3) {
transform: translateY(-6.5px) rotate(-45deg);
}

/_ mobile drawer _/
.nav-drawer {
display: none;
border-top: 1px solid var(--grey2);
background: rgba(250, 250, 249, 0.98);
max-height: 0;
overflow: hidden;
transition: max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.nav-drawer.is-open {
max-height: 200px;
}
.nav-drawer-links {
list-style: none;
padding: 8px 0 12px;
}
.nav-drawer-links a {
display: block;
padding: 11px 28px;
font-size: 15px;
font-weight: 400;
color: var(--grey4);
transition: var(--transition);
}
.nav-drawer-links a:hover,
.nav-drawer-links a.active {
color: var(--ink);
background: var(--grey1);
}
.nav-drawer-links a.active {
font-weight: 500;
}

/_ ── PAGES: Hero & Home ── _/
/_ Hero _/
.hero {
padding: 96px 0 80px;
position: relative;
overflow: hidden;
}
.hero::before {
content: '';
position: absolute;
inset: 0;
background-image:
linear-gradient(var(--grey2) 1px, transparent 1px),
linear-gradient(90deg, var(--grey2) 1px, transparent 1px);
background-size: 52px 52px;
opacity: 0.4;
-webkit-mask-image: radial-gradient(
ellipse 90% 80% at 50% 0%,
black 20%,
transparent 100%
);
mask-image: radial-gradient(
ellipse 90% 80% at 50% 0%,
black 20%,
transparent 100%
);
}

.hero-inner {
position: relative;
max-width: 680px;
margin: 0 auto;
text-align: center;
}

.hero-badge {
display: inline-flex;
align-items: center;
gap: 7px;
font-size: 12px;
font-weight: 500;
color: var(--grey4);
background: var(--white);
border: 1px solid var(--grey2);
border-radius: 100px;
padding: 4px 13px 4px 8px;
margin-bottom: 30px;
box-shadow: var(--shadow-sm);
}
.badge-dot {
width: 7px;
height: 7px;
border-radius: 50%;
background: var(--success);
box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.18);
animation: dot-pulse 2.4s ease-in-out infinite;
}

.hero-title {
font-family: var(--font-serif);
font-size: clamp(46px, 8vw, 80px);
font-weight: 400;
line-height: 1.03;
color: var(--ink);
letter-spacing: -0.025em;
margin-bottom: 22px;
}
.hero-title em {
font-style: italic;
color: var(--blue);
}

.hero-sub {
font-size: 16px;
color: var(--grey4);
line-height: 1.75;
max-width: 420px;
margin: 0 auto 40px;
}

/_ The main input box _/
.hero-bar {
display: flex;
align-items: center;
background: var(--white);
border: 1px solid var(--grey2);
border-radius: var(--radius-xl);
padding: 5px 5px 5px 18px;
box-shadow:
var(--shadow),
0 0 0 5px rgba(37, 99, 235, 0.05);
max-width: 580px;
margin: 0 auto 24px;
transition: var(--transition);
}
.hero-bar:focus-within {
border-color: rgba(37, 99, 235, 0.5);
box-shadow:
var(--shadow),
0 0 0 5px rgba(37, 99, 235, 0.1);
}
.hero-bar input {
flex: 1;
border: none;
background: transparent;
font-size: 15px;
color: var(--ink);
min-width: 0;
}
.hero-bar input::placeholder {
color: var(--grey3);
}

.hero-hints {
display: flex;
justify-content: center;
gap: 20px;
flex-wrap: wrap;
}
.hero-hint {
display: flex;
align-items: center;
gap: 5px;
font-size: 12px;
color: var(--grey3);
}
.hero-hint svg {
width: 12px;
height: 12px;
stroke: var(--success);
fill: none;
stroke-width: 2.5;
}

/_ Hero result _/
.hero-result {
max-width: 580px;
margin: 14px auto 0;
background: var(--white);
border: 1px solid var(--grey2);
border-radius: var(--radius-lg);
padding: 18px 22px;
text-align: left;
box-shadow: var(--shadow-sm);
}
.hero-result.show {
display: block;
animation: fadeSlideUp 0.22s ease;
}
.result-tag {
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
color: var(--success);
display: flex;
align-items: center;
gap: 5px;
margin-bottom: 8px;
}
.result-tag::before {
content: '';
width: 5px;
height: 5px;
border-radius: 50%;
background: var(--success);
}
.result-row {
display: flex;
align-items: center;
gap: 8px;
flex-wrap: wrap;
}
.result-url {
font-size: 19px;
font-weight: 600;
letter-spacing: -0.02em;
flex: 1;
min-width: 0;
}
.result-url a {
color: var(--blue);
}
.result-btns {
display: flex;
gap: 6px;
}
.result-divider {
height: 1px;
background: var(--grey2);
margin: 12px 0;
}
.result-stats-row {
display: flex;
align-items: center;
justify-content: space-between;
gap: 8px;
flex-wrap: wrap;
}
.result-stats-note {
font-size: 12px;
color: var(--grey3);
}
.result-stats-link {
display: inline-flex;
align-items: center;
gap: 5px;
font-size: 12px;
font-weight: 500;
color: var(--blue);
background: rgba(37, 99, 235, 0.06);
border: 1px solid rgba(37, 99, 235, 0.15);
border-radius: var(--radius-sm);
padding: 5px 10px;
transition: var(--transition);
font-family: monospace;
}
.result-stats-link:hover {
background: rgba(37, 99, 235, 0.12);
}
.result-stats-link svg {
width: 11px;
height: 11px;
stroke: currentColor;
fill: none;
stroke-width: 2.5;
}

/_ Marquee Strip _/
.strip {
border-top: 1px solid var(--grey2);
border-bottom: 1px solid var(--grey2);
background: var(--grey1);
padding: 11px 0;
overflow: hidden;
}
.strip-track {
display: flex;
gap: 36px;
width: max-content;
animation: marquee 28s linear infinite;
}
.strip-item {
font-size: 11px;
font-weight: 500;
color: var(--grey3);
letter-spacing: 1.8px;
text-transform: uppercase;
white-space: nowrap;
}
.strip-item b {
color: var(--grey4);
}

/_ About & Features _/
.about-section {
padding: 88px 0;
}
.about-grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 80px;
align-items: start;
}

.about-kicker {
font-size: 11px;
font-weight: 600;
color: var(--grey3);
text-transform: uppercase;
letter-spacing: 2px;
margin-bottom: 14px;
}
.about-heading {
font-family: var(--font-serif);
font-size: clamp(26px, 3vw, 38px);
font-weight: 400;
color: var(--ink);
letter-spacing: -0.02em;
line-height: 1.2;
margin-bottom: 14px;
}
.about-heading em {
font-style: italic;
color: var(--blue);
}
.about-body {
font-size: 14px;
color: var(--grey4);
line-height: 1.8;
}

.features-list {
display: flex;
flex-direction: column;
gap: 4px;
}
.feat-item {
display: flex;
align-items: flex-start;
gap: 13px;
padding: 14px;
border-radius: var(--radius);
transition: var(--transition);
}
.feat-item:hover {
background: var(--white);
box-shadow: var(--shadow-sm);
}
.feat-icon {
width: 32px;
height: 32px;
flex-shrink: 0;
background: var(--grey1);
border: 1px solid var(--grey2);
border-radius: var(--radius-sm);
display: flex;
align-items: center;
justify-content: center;
transition: var(--transition);
}
.feat-item:hover .feat-icon {
background: var(--ink);
border-color: var(--ink);
}
.feat-icon svg {
width: 15px;
height: 15px;
stroke: var(--grey4);
fill: none;
stroke-width: 1.8;
transition: var(--transition);
}
.feat-item:hover .feat-icon svg {
stroke: var(--white);
}
.feat-text h4 {
font-size: 13px;
font-weight: 600;
color: var(--ink);
margin-bottom: 1px;
}
.feat-text p {
font-size: 13px;
color: var(--grey4);
line-height: 1.55;
}

/_ ── PAGES: Shorten & URL Shortening ── _/
/_ Shorten Page _/
.shorten-page {
min-height: calc(100vh - 56px);
padding: 60px 0 80px;
}
.shorten-layout {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 60px;
align-items: start;
max-width: 900px;
}

.page-kicker {
font-size: 11px;
font-weight: 600;
color: var(--grey3);
text-transform: uppercase;
letter-spacing: 2px;
margin-bottom: 12px;
}
.page-title {
font-family: var(--font-serif);
font-size: clamp(30px, 4vw, 44px);
font-weight: 400;
color: var(--ink);
letter-spacing: -0.02em;
line-height: 1.1;
margin-bottom: 10px;
}
.page-title em {
font-style: italic;
color: var(--blue);
}
.page-sub {
font-size: 14px;
color: var(--grey4);
line-height: 1.7;
margin-bottom: 36px;
}

.form-card {
background: var(--white);
border: 1px solid var(--grey2);
border-radius: var(--radius-xl);
padding: 30px;
box-shadow: var(--shadow-sm);
}

.field {
margin-bottom: 18px;
}
.field label {
display: block;
font-size: 13px;
font-weight: 500;
color: var(--ink);
margin-bottom: 6px;
}
.field .opt {
font-weight: 400;
color: var(--grey3);
font-size: 12px;
}
.field input {
width: 100%;
padding: 10px 13px;
border: 1px solid var(--grey2);
border-radius: var(--radius);
font-size: 14px;
color: var(--ink);
background: var(--warm);
transition: var(--transition);
}
.field input:focus {
border-color: var(--blue2);
background: var(--white);
box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.08);
}
.field input::placeholder {
color: var(--grey3);
}
.field-hint {
font-size: 11px;
color: var(--grey3);
margin-top: 4px;
}

.alias-wrap {
display: flex;
}
.alias-pre {
padding: 10px 12px;
background: var(--grey1);
border: 1px solid var(--grey2);
border-right: none;
border-radius: var(--radius) 0 0 var(--radius);
font-size: 13px;
font-weight: 500;
color: var(--grey4);
display: flex;
align-items: center;
white-space: nowrap;
flex-shrink: 0;
}
.alias-wrap input {
border-radius: 0 var(--radius) var(--radius) 0;
}

.form-sep {
height: 1px;
background: var(--grey2);
margin: 22px 0;
}

/_ result on shorten page _/
.shorten-result {
background: var(--white);
border: 1px solid var(--grey2);
border-radius: var(--radius-xl);
padding: 28px 30px;
display: none;
box-shadow: var(--shadow-sm);
animation: fadeSlideUp 0.22s ease;
}
.shorten-result.show {
display: block;
}
.sr-tag {
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
color: var(--success);
display: flex;
align-items: center;
gap: 6px;
margin-bottom: 14px;
}
.sr-pulse {
width: 7px;
height: 7px;
border-radius: 50%;
background: var(--success);
animation: dot-pulse 2s infinite;
}
.sr-url {
font-size: 22px;
font-weight: 600;
letter-spacing: -0.025em;
color: var(--blue);
margin-bottom: 14px;
word-break: break-all;
}
.sr-btns {
display: flex;
gap: 7px;
flex-wrap: wrap;
margin-bottom: 18px;
}
.sr-divider {
height: 1px;
background: var(--grey2);
margin-bottom: 16px;
}
.sr-stats {
display: flex;
align-items: center;
justify-content: space-between;
gap: 8px;
flex-wrap: wrap;
}
.sr-stats-note {
font-size: 12px;
color: var(--grey4);
line-height: 1.5;
}
.sr-stats-note strong {
color: var(--ink);
}
.sr-stats-btn {
display: inline-flex;
align-items: center;
gap: 5px;
font-size: 12px;
font-weight: 500;
color: var(--blue);
background: rgba(37, 99, 235, 0.06);
border: 1px solid rgba(37, 99, 235, 0.15);
border-radius: var(--radius-sm);
padding: 5px 11px;
transition: var(--transition);
font-family: monospace;
letter-spacing: -0.01em;
}
.sr-stats-btn:hover {
background: rgba(37, 99, 235, 0.11);
}
.sr-stats-btn svg {
width: 11px;
height: 11px;
stroke: currentColor;
fill: none;
stroke-width: 2.2;
flex-shrink: 0;
}

/_ Footer _/
.footer {
border-top: 1px solid var(--grey2);
padding: 20px 0;
background: var(--warm);
}
.footer-inner {
display: flex;
align-items: center;
justify-content: space-between;
gap: 16px;
flex-wrap: wrap;
}
.footer-left {
display: flex;
align-items: center;
gap: 10px;
}
.footer-wordmark {
font-size: 14px;
font-weight: 600;
color: var(--ink);
letter-spacing: -0.03em;
}
.footer-wordmark .tld {
color: var(--blue);
}
.footer-sep {
width: 1px;
height: 12px;
background: var(--grey2);
flex-shrink: 0;
}
.footer-byline {
font-size: 12px;
color: var(--grey3);
}
.footer-byline a {
color: var(--grey4);
transition: var(--transition);
}
.footer-byline a:hover {
color: var(--ink);
}
.footer-right {
display: flex;
align-items: center;
gap: 6px;
}
.footer-icon-link {
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: var(--radius-sm);
border: 1px solid var(--grey2);
color: var(--grey4);
transition: var(--transition);
}
.footer-icon-link:hover {
color: var(--ink);
border-color: var(--grey3);
background: var(--grey1);
}
.footer-icon-link svg {
width: 14px;
height: 14px;
fill: currentColor;
}

@media (max-width: 640px) {
.footer-inner {
flex-direction: row;
align-items: center;
flex-wrap: nowrap;
}
}

/_ ── Result QR additions ── _/

/_ hero result bottom row: QR left, stats link right _/
.result-bottom {
display: flex;
align-items: flex-start;
gap: 16px;
}

.result-qr-wrap {
display: flex;
flex-direction: column;
align-items: center;
gap: 6px;
flex-shrink: 0;
}
.result-qr-box {
width: 112px;
height: 112px;
background: var(--white);
border: 1px solid var(--grey2);
border-radius: var(--radius-sm);
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
}
.result-qr-box img,
.result-qr-box canvas {
display: block;
width: 112px !important;
height: 112px !important;
}
.result-qr-dl {
font-size: 11px;
font-weight: 500;
color: var(--grey4);
background: var(--grey1);
border: 1px solid var(--grey2);
border-radius: var(--radius-sm);
padding: 4px 10px;
display: flex;
align-items: center;
gap: 4px;
transition: var(--transition);
cursor: pointer;
}
.result-qr-dl:hover {
color: var(--ink);
border-color: var(--grey3);
}
.result-qr-dl svg {
width: 12px;
height: 12px;
flex-shrink: 0;
}

.result-stats-col {
flex: 1;
display: flex;
flex-direction: column;
gap: 8px;
justify-content: center;
padding-top: 4px;
}

/_ shorten page result: side-by-side layout _/
.sr-main {
display: flex;
align-items: flex-start;
gap: 20px;
}
.sr-left {
flex: 1;
min-width: 0;
}

.sr-qr-col {
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
}
.sr-qr-box {
width: 128px;
height: 128px;
background: var(--white);
border: 1px solid var(--grey2);
border-radius: var(--radius);
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
}
.sr-qr-box img,
.sr-qr-box canvas {
display: block;
width: 128px !important;
height: 128px !important;
}
.sr-qr-dl {
font-size: 12px;
font-weight: 500;
color: var(--grey4);
background: var(--grey1);
border: 1px solid var(--grey2);
border-radius: var(--radius-sm);
padding: 6px 12px;
display: flex;
align-items: center;
gap: 5px;
transition: var(--transition);
white-space: nowrap;
cursor: pointer;
}
.sr-qr-dl:hover {
color: var(--ink);
border-color: var(--grey3);
background: var(--white);
}
.sr-qr-dl svg {
width: 13px;
height: 13px;
flex-shrink: 0;
}

@media (max-width: 480px) {
.result-bottom {
flex-direction: column;
}
.sr-main {
flex-direction: column-reverse;
}
.sr-qr-col {
flex-direction: row;
align-items: center;
gap: 12px;
}
.sr-qr-box {
width: 80px;
height: 80px;
}
.sr-qr-box img,
.sr-qr-box canvas {
width: 80px !important;
height: 80px !important;
}
}

/_ ── PAGES: Stats & Analytics ── _/
/_ Stats Page _/
.stats-page {
min-height: calc(100vh - 56px);
padding: 56px 0 80px;
}
.stats-layout {
max-width: 660px;
}

/_ back link _/
.stats-back {
display: inline-flex;
align-items: center;
gap: 6px;
font-size: 13px;
color: var(--grey4);
margin-bottom: 36px;
transition: var(--transition);
}
.stats-back:hover {
color: var(--ink);
}
.stats-back svg {
width: 14px;
height: 14px;
stroke: currentColor;
fill: none;
stroke-width: 2;
}

/_ header _/
.stats-kicker {
font-size: 11px;
font-weight: 600;
color: var(--grey3);
text-transform: uppercase;
letter-spacing: 2px;
margin-bottom: 10px;
}
.stats-title {
font-family: var(--font-serif);
font-size: clamp(28px, 4vw, 40px);
font-weight: 400;
color: var(--ink);
letter-spacing: -0.02em;
line-height: 1.1;
margin-bottom: 6px;
}
.stats-title em {
font-style: italic;
color: var(--blue);
}
.stats-created {
font-size: 12px;
color: var(--grey3);
margin-bottom: 36px;
}

/_ main stat number _/
.stats-hero-num {
background: var(--white);
border: 1px solid var(--grey2);
border-radius: var(--radius-xl);
padding: 28px 32px;
display: flex;
align-items: center;
gap: 20px;
margin-bottom: 20px;
box-shadow: var(--shadow-sm);
}
.stats-big-num {
font-family: var(--font-serif);
font-size: clamp(52px, 10vw, 80px);
font-weight: 400;
color: var(--ink);
line-height: 1;
letter-spacing: -0.03em;
}
.stats-big-label {
font-size: 14px;
color: var(--grey4);
margin-top: 4px;
line-height: 1.4;
}
.stats-big-label strong {
display: block;
font-size: 16px;
font-weight: 600;
color: var(--ink);
}

/_ info cards row _/
.stats-cards {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 12px;
margin-bottom: 20px;
}
.stats-card {
background: var(--white);
border: 1px solid var(--grey2);
border-radius: var(--radius-lg);
padding: 18px 20px;
}
.stats-card-label {
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1.2px;
color: var(--grey3);
margin-bottom: 8px;
}
.stats-card-value {
font-size: 15px;
font-weight: 600;
color: var(--ink);
letter-spacing: -0.01em;
word-break: break-all;
}
.stats-card-value.mono {
font-family: monospace;
font-size: 13px;
font-weight: 400;
}
.stats-card-value a {
color: var(--blue);
}
.stats-card-value a:hover {
text-decoration: underline;
}

/_ QR section _/
.stats-qr-card {
background: var(--white);
border: 1px solid var(--grey2);
border-radius: var(--radius-lg);
padding: 20px;
display: flex;
align-items: center;
gap: 20px;
}
.stats-qr-box {
width: 120px;
height: 120px;
flex-shrink: 0;
border: 1px solid var(--grey2);
border-radius: var(--radius-sm);
overflow: hidden;
background: var(--white);
display: flex;
align-items: center;
justify-content: center;
}
.stats-qr-box img,
.stats-qr-box canvas {
width: 120px !important;
height: 120px !important;
display: block;
}
.stats-qr-info h4 {
font-size: 14px;
font-weight: 600;
color: var(--ink);
margin-bottom: 4px;
}
.stats-qr-info p {
font-size: 13px;
color: var(--grey4);
line-height: 1.55;
margin-bottom: 12px;
}

/_ ── UTILITIES: Messages, Animations & Responsive ── _/
/_ Toast Notifications _/
.toast {
position: fixed;
bottom: 18px;
right: 18px;
z-index: 9999;
background: var(--ink2);
color: var(--white);
border-radius: var(--radius);
padding: 10px 15px;
font-size: 13px;
font-weight: 500;
display: flex;
align-items: center;
gap: 8px;
box-shadow: var(--shadow-lg);
animation: fadeSlideUp 0.22s ease;
}
.toast.success {
border-left: 2px solid var(--success);
}
.toast.error {
border-left: 2px solid var(--danger);
}

/_ ── Animations ── _/
@keyframes dot-pulse {
0%,
100% {
box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.35);
}
50% {
box-shadow: 0 0 0 5px rgba(22, 163, 74, 0);
}
}
@keyframes marquee {
0% {
transform: translateX(0);
}
100% {
transform: translateX(-50%);
}
}
@keyframes fadeSlideUp {
from {
opacity: 0;
transform: translateY(7px);
}
to {
opacity: 1;
transform: translateY(0);
}
}

/_ ── Responsive ── _/
@media (max-width: 768px) {
.about-grid,
.shorten-layout {
grid-template-columns: 1fr;
gap: 40px;
}
.hero-title {
font-size: 44px;
}
}

@media (max-width: 640px) {
/_ nav: swap desktop links for hamburger _/
.nav-links {
display: none;
}
.nav-burger {
display: flex;
}
.nav-drawer {
display: block;
}

    /* footer: stack brand + tagline */
    .footer-top {
    	flex-direction: column;
    	gap: 10px;
    }
    .footer-tagline {
    	max-width: 100%;
    }

}
@media (max-width: 480px) {
.hero-title {
font-size: 38px;
}
.hero-bar {
border-radius: var(--radius-lg);
padding: 4px 4px 4px 14px;
}
.container {
padding: 0 18px;
}
}

/_ ── PAGES: API & Documentation ── _/
/_ API Page _/
.api-page {
min-height: calc(100vh - 56px);
padding: 56px 0 96px;
}

.api-page-header {
margin-bottom: 48px;
max-width: 560px;
}

.api-body {
display: grid;
grid-template-columns: 300px 1fr;
gap: 48px;
align-items: start;
min-width: 0;
}

/_ ── Sidebar ── _/
.api-sidebar {
min-width: 0;
max-width: 100%;
}
.api-sidebar-sticky {
position: sticky;
top: calc(56px + 24px); /_ nav height + breathing room _/
min-width: 0;
}
.api-sidebar-heading {
font-size: 13px;
font-weight: 600;
color: var(--ink);
margin-bottom: 4px;
}
.api-sidebar-sub {
font-size: 13px;
color: var(--grey4);
line-height: 1.6;
margin-bottom: 16px;
}

/_ success message _/
.api-success {
display: flex;
align-items: flex-start;
gap: 10px;
background: rgba(22, 163, 74, 0.06);
border: 1px solid rgba(22, 163, 74, 0.2);
border-radius: var(--radius);
padding: 12px 14px;
margin-top: 4px;
animation: fadeSlideUp 0.22s ease;
}
.api-success-icon {
width: 26px;
height: 26px;
flex-shrink: 0;
background: rgba(22, 163, 74, 0.12);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
}
.api-success-icon svg {
width: 13px;
height: 13px;
stroke: var(--success);
}
.api-success-title {
font-size: 13px;
font-weight: 600;
color: var(--ink);
margin-bottom: 2px;
}
.api-success-body {
font-size: 12px;
color: var(--grey4);
line-height: 1.5;
}
.api-success-body strong {
color: var(--ink);
font-weight: 500;
}

/_ key card _/
.api-key-card {
background: var(--white);
border: 1px solid var(--grey2);
border-radius: var(--radius-lg);
overflow: hidden;
margin-top: 12px;
animation: fadeSlideUp 0.22s ease;
}
.api-key-header {
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 14px;
background: var(--grey1);
border-bottom: 1px solid var(--grey2);
}
.api-key-label {
font-size: 12px;
font-weight: 600;
color: var(--ink);
}
.api-key-warning {
display: flex;
align-items: center;
gap: 4px;
font-size: 10px;
font-weight: 600;
color: #92400e;
background: rgba(251, 191, 36, 0.1);
border: 1px solid rgba(251, 191, 36, 0.25);
border-radius: 5px;
padding: 2px 7px;
text-transform: uppercase;
letter-spacing: 0.5px;
}
.api-key-warning svg {
width: 10px;
height: 10px;
stroke: #d97706;
flex-shrink: 0;
}
.api-key-display {
display: flex;
align-items: center;
gap: 8px;
padding: 12px 14px;
}
.api-key-display code {
flex: 1;
font-family: monospace;
font-size: 13px;
color: var(--ink);
word-break: break-all;
}
.api-key-copy {
display: flex;
align-items: center;
gap: 4px;
font-size: 11px;
font-weight: 500;
color: var(--grey4);
background: var(--grey1);
border: 1px solid var(--grey2);
border-radius: var(--radius-sm);
padding: 4px 9px;
transition: var(--transition);
flex-shrink: 0;
cursor: pointer;
}
.api-key-copy:hover {
color: var(--ink);
border-color: var(--grey3);
}
.api-key-note {
font-size: 11px;
color: var(--grey3);
padding: 0 14px 12px;
line-height: 1.5;
}

.api-demo-toggle {
margin-top: 10px;
font-size: 11px;
color: var(--grey3);
background: none;
border: none;
cursor: pointer;
text-decoration: underline;
text-decoration-style: dashed;
text-underline-offset: 3px;
transition: var(--transition);
font-family: var(--font-sans);
}
.api-demo-toggle:hover {
color: var(--grey4);
}

/_ ── Docs (right column) ── _/
.api-base-note {
background: var(--grey1);
border: 1px solid var(--grey2);
border-radius: var(--radius-lg);
padding: 14px 18px;
margin-bottom: 20px;
display: flex;
flex-direction: column;
gap: 8px;
}
.api-base-row {
display: flex;
align-items: baseline;
gap: 12px;
flex-wrap: wrap;
}
.api-base-label {
font-size: 11px;
font-weight: 600;
color: var(--grey3);
text-transform: uppercase;
letter-spacing: 1px;
width: 90px;
flex-shrink: 0;
}
.api-base-row code {
font-family: monospace;
font-size: 12px;
color: var(--ink4, var(--ink));
word-break: break-all;
}

/_ API docs main container _/
.api-docs {
min-width: 0;
max-width: 100%;
}

.api-doc-block {
background: var(--white);
border: 1px solid var(--grey2);
border-radius: var(--radius-lg);
overflow: hidden;
margin-bottom: 16px;
min-width: 0;
}

.api-endpoint-bar {
display: flex;
align-items: center;
gap: 10px;
flex-wrap: wrap;
padding: 16px 20px;
border-bottom: 1px solid var(--grey2);
background: var(--grey1);
}
.api-method {
font-size: 10px;
font-weight: 700;
letter-spacing: 1px;
text-transform: uppercase;
border-radius: 5px;
padding: 3px 7px;
flex-shrink: 0;
}
.api-method.post {
color: #1d4ed8;
background: rgba(37, 99, 235, 0.1);
border: 1px solid rgba(37, 99, 235, 0.2);
}
.api-method.get {
color: #065f46;
background: rgba(16, 185, 129, 0.1);
border: 1px solid rgba(16, 185, 129, 0.2);
}
.api-path {
font-family: monospace;
font-size: 14px;
font-weight: 600;
color: var(--ink);
letter-spacing: -0.01em;
}
.api-param {
color: var(--grey3);
}
.api-endpoint-title {
font-size: 13px;
color: var(--grey4);
margin-left: auto;
}

.api-doc-group {
padding: 16px 20px;
border-bottom: 1px solid var(--grey2);
min-width: 0;
max-width: 100%;
}
.api-doc-group:last-child {
border-bottom: none;
}
.api-doc-group-label {
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1.2px;
color: var(--grey3);
margin-bottom: 10px;
display: flex;
align-items: center;
gap: 8px;
}

.api-status {
font-size: 10px;
font-weight: 700;
letter-spacing: 0.5px;
border-radius: 4px;
padding: 2px 6px;
}
.api-status.ok {
color: #065f46;
background: rgba(16, 185, 129, 0.1);
border: 1px solid rgba(16, 185, 129, 0.2);
}
.api-status.redirect {
color: #1e40af;
background: rgba(59, 130, 246, 0.1);
border: 1px solid rgba(59, 130, 246, 0.2);
}

.api-code-block {
background: var(--ink);
border-radius: var(--radius);
overflow: hidden;
max-width: 100%;
width: 100%;
min-width: 0;
display: flex;
flex-direction: column;
}
.api-code-bar {
display: flex;
align-items: center;
justify-content: space-between;
padding: 7px 12px;
border-bottom: 1px solid rgba(255, 255, 255, 0.06);
flex-shrink: 0;
}
.api-code-bar > span {
font-size: 10px;
font-weight: 500;
color: rgba(255, 255, 255, 0.28);
letter-spacing: 0.5px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
.api-code-copy {
font-family: var(--font-sans);
font-size: 11px;
font-weight: 500;
color: rgba(255, 255, 255, 0.35);
background: none;
border: none;
cursor: pointer;
transition: var(--transition);
white-space: nowrap;
flex-shrink: 0;
}
.api-code-copy:hover {
color: rgba(255, 255, 255, 0.75);
}
.api-code-block pre {
padding: 14px 16px;
margin: 0;
font-family: monospace;
font-size: 12.5px;
line-height: 1.75;
color: rgba(255, 255, 255, 0.82);
overflow-x: auto;
overflow-y: hidden;
white-space: pre;
max-width: 100%;
min-width: 0;
flex-shrink: 1;
}

/_ param table _/
.api-param-table {
display: flex;
flex-direction: column;
gap: 6px;
}
.api-param-row {
display: flex;
align-items: baseline;
gap: 10px;
flex-wrap: wrap;
padding: 8px 12px;
background: var(--grey1);
border: 1px solid var(--grey2);
border-radius: var(--radius-sm);
}
.api-param-name {
font-family: monospace;
font-size: 13px;
font-weight: 600;
color: var(--blue);
}
.api-param-type {
font-size: 11px;
font-weight: 500;
color: var(--grey3);
background: var(--grey2);
border-radius: 4px;
padding: 1px 6px;
}
.api-param-desc {
font-size: 13px;
color: var(--grey4);
}
.api-param-desc code {
font-family: monospace;
font-size: 12px;
color: var(--ink);
background: var(--grey2);
padding: 1px 4px;
border-radius: 3px;
}

/_ prose in doc group _/
.api-prose {
font-size: 13px;
color: var(--grey4);
line-height: 1.7;
}
.api-inline-code {
font-family: monospace;
font-size: 12px;
color: var(--ink);
background: var(--grey1);
border: 1px solid var(--grey2);
padding: 1px 5px;
border-radius: 4px;
}

.api-footer-note {
display: flex;
align-items: flex-start;
gap: 7px;
font-size: 12px;
color: var(--grey3);
line-height: 1.65;
padding: 4px 0;
}
.api-footer-note svg {
stroke: var(--grey3);
flex-shrink: 0;
margin-top: 1px;
}
.api-footer-note code {
font-family: monospace;
font-size: 11px;
color: var(--grey4);
background: var(--grey1);
border: 1px solid var(--grey2);
padding: 1px 4px;
border-radius: 3px;
}

/_ ── Responsive ── _/
@media (max-width: 900px) {
.api-body {
grid-template-columns: 1fr;
}
.api-sidebar-sticky {
position: static;
}
}

@media (max-width: 520px) {
.container {
padding: 0 16px;
}
.api-code-block pre {
font-size: 11px;
padding: 12px 12px;
}
}

@media (max-width: 450px) {
.container {
padding: 0 14px;
}
.api-body {
gap: 20px;
}
.api-code-block pre {
font-size: 10px;
padding: 10px 12px;
}
.api-endpoint-bar {
padding: 12px 14px;
gap: 6px;
font-size: 13px;
}
.api-doc-group {
padding: 12px 14px;
}
.api-sidebar-heading {
font-size: 12px;
}
}

@media (max-width: 360px) {
.container {
padding: 0 12px;
}
.api-body {
gap: 16px;
}
.api-code-block pre {
font-size: 9px;
padding: 8px 10px;
line-height: 1.5;
}
.api-doc-group {
padding: 10px 12px;
}
}

/_ ── Card Component (for api-key page) ── _/
.card {
width: 100%;
max-width: 480px;
background: #fff;
border: 1px solid var(--grey2);
border-radius: 20px;
box-shadow: var(--shadow);
overflow: hidden;
margin: 0 auto;
}

.card-top {
padding: 32px 32px 24px;
border-bottom: 1px solid var(--grey2);
}

.card-wordmark {
font-family: var(--font-sans);
font-size: 14px;
font-weight: 600;
color: var(--ink);
letter-spacing: -0.03em;
margin-bottom: 24px;
display: flex;
align-items: center;
gap: 6px;
}

.card-wordmark .mark {
width: 24px;
height: 24px;
background: var(--ink);
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
}

.card-wordmark .mark svg {
width: 13px;
height: 13px;
stroke: white;
fill: none;
stroke-width: 2.3;
}

.card-wordmark .tld {
color: var(--blue);
}

.card-title {
font-family: var(--font-serif);
font-size: 28px;
font-weight: 400;
letter-spacing: -0.02em;
color: var(--ink);
line-height: 1.1;
margin-bottom: 8px;
}

.card-title em {
font-style: italic;
color: var(--blue);
}

.card-sub {
font-size: 14px;
color: var(--grey4);
line-height: 1.6;
}

.card-body {
padding: 24px 32px 28px;
}

.key-label {
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1.2px;
color: var(--grey3);
margin-bottom: 8px;
}

.key-box {
display: flex;
align-items: center;
gap: 8px;
background: var(--grey1);
border: 1px solid var(--grey2);
border-radius: var(--radius);
padding: 11px 14px;
margin-bottom: 12px;
}

.key-box code {
flex: 1;
font-family: monospace;
font-size: 14px;
color: var(--ink);
letter-spacing: 0.02em;
word-break: break-all;
}

.key-copy {
display: flex;
align-items: center;
gap: 4px;
font-family: var(--font-sans);
font-size: 12px;
font-weight: 500;
color: var(--grey4);
background: #fff;
border: 1px solid var(--grey2);
border-radius: 7px;
padding: 5px 10px;
cursor: pointer;
transition: 0.15s;
white-space: nowrap;
flex-shrink: 0;
}

.key-copy:hover {
color: var(--ink);
border-color: #a1a1aa;
}

.key-copy svg {
flex-shrink: 0;
}

.key-warning {
display: flex;
align-items: flex-start;
gap: 8px;
background: rgba(251, 191, 36, 0.08);
border: 1px solid rgba(251, 191, 36, 0.25);
border-radius: var(--radius);
padding: 11px 13px;
font-size: 13px;
color: #92400e;
line-height: 1.55;
margin-bottom: 20px;
}

.key-warning svg {
width: 14px;
height: 14px;
stroke: #d97706;
flex-shrink: 0;
margin-top: 1px;
}

.key-copied {
display: none;
align-items: center;
gap: 7px;
background: rgba(22, 163, 74, 0.07);
border: 1px solid rgba(22, 163, 74, 0.2);
border-radius: var(--radius);
padding: 10px 13px;
font-size: 13px;
font-weight: 500;
color: var(--success);
margin-bottom: 12px;
animation: fadeUp 0.2s ease;
}

.key-copied.show {
display: flex;
}

.key-copied svg {
width: 13px;
height: 13px;
stroke: var(--success);
flex-shrink: 0;
}

.card-action {
display: block;
width: 100%;
text-align: center;
padding: 10px;
border-radius: var(--radius);
background: var(--ink);
color: #fff;
font-family: var(--font-sans);
font-size: 14px;
font-weight: 500;
text-decoration: none;
letter-spacing: -0.01em;
transition: 0.15s;
cursor: pointer;
border: none;
}

.card-action:hover {
background: #1a1d24;
}

.card-footer {
padding: 16px 32px;
border-top: 1px solid var(--grey2);
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
gap: 8px;
}

.card-footer-note {
font-size: 12px;
color: var(--grey3);
}

.card-footer a {
font-size: 12px;
color: var(--grey3);
text-decoration: none;
}

.card-footer a:hover {
color: var(--ink);
}

@keyframes fadeUp {
from {
opacity: 0;
transform: translateY(4px);
}
to {
opacity: 1;
transform: translateY(0);
}
}

/_ ── Inline Code Badge ── _/
.code-badge {
font-family: monospace;
font-size: 12px;
background: var(--grey1);
padding: 1px 5px;
border-radius: 4px;
border: 1px solid var(--grey2);
display: inline-block;
}

.code-badge-sm {
font-size: 11px;
padding: 1px 4px;
border-radius: 3px;
}

/_ ── How It Works Section ── _/
.steps-container {
margin-top: 36px;
padding: 20px;
background: var(--white);
border: 1px solid var(--grey2);
border-radius: var(--radius-lg);
}

.steps-label {
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1.5px;
color: var(--grey3);
margin-bottom: 14px;
}

.steps-list {
display: flex;
flex-direction: column;
gap: 10px;
}

.step-item {
display: flex;
align-items: flex-start;
gap: 10px;
}

.step-number {
width: 22px;
height: 22px;
background: var(--ink);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0;
margin-top: 1px;
font-size: 11px;
font-weight: 700;
color: white;
}

.step-number.accent {
background: var(--blue);
}

.step-text h4 {
font-size: 13px;
font-weight: 500;
color: var(--ink);
margin-bottom: 2px;
}

.step-text p {
font-size: 12px;
color: var(--grey4);
}

/_ ── Stats Page Utilities ── _/
.stats-card-empty {
color: var(--grey3);
font-weight: 400;
}

.stats-card-time {
display: block;
font-size: 12px;
font-weight: 400;
color: var(--grey3);
margin-top: 2px;
}

.stats-card-full {
grid-column: 1 / -1;
}

/_ Spacing Utilities _/
.mt-1 {
margin-top: 16px;
}

.flex-center {
width: 100%;
justify-content: center;
}

.text-subtle {
font-weight: 400;
color: var(--grey3);
}

/_ ERROR PAGE _/
.error-page {
min-height: calc(100vh - 56px - 65px);
display: flex;
align-items: center;
padding: 72px 0 80px;
}

.error-layout {
display: grid;
grid-template-columns: auto 1fr;
gap: 64px;
align-items: center;
max-width: 840px;
}

/_ Visual container _/
.error-visual {
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
}

/_ Code display (supports both styles) _/
.error-code-display {
display: flex;
align-items: center;
gap: 0;
user-select: none;
}

/_ 5xx style _/
.error-status-num {
font-family: var(--font-serif);
font-size: clamp(80px, 12vw, 140px);
font-weight: 400;
color: var(--grey2);
line-height: 1;
letter-spacing: -0.04em;
display: block;
}

/_ 404 style _/
.error-num {
font-family: var(--font-serif);
font-size: clamp(100px, 14vw, 160px);
font-weight: 400;
color: var(--grey2);
line-height: 1;
letter-spacing: -0.04em;
}

/_ Status dots (5xx) _/
.error-status-bar {
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
}

.error-status-dot {
width: 10px;
height: 10px;
border-radius: 50%;
}

.error-status-dot--err {
background: var(--danger);
opacity: 0.9;
}

.error-status-dot--warn {
background: #f59e0b;
opacity: 0.5;
}

.error-status-dot--ok {
background: var(--success);
opacity: 0.25;
}

/_ 404 icon ring _/
.error-icon-ring {
width: clamp(80px, 11vw, 130px);
height: clamp(80px, 11vw, 130px);
border-radius: 50%;
border: 3px solid var(--grey2);
display: flex;
align-items: center;
justify-content: center;
margin: 0 -4px;
flex-shrink: 0;
}

.error-icon-ring svg {
width: 40%;
height: 40%;
stroke: var(--grey3);
}

/_ Text content _/
.error-kicker {
font-size: 11px;
font-weight: 600;
color: var(--grey3);
text-transform: uppercase;
letter-spacing: 2px;
margin-bottom: 14px;
}

.error-title {
font-family: var(--font-serif);
font-size: clamp(32px, 4.5vw, 52px);
font-weight: 400;
color: var(--ink);
letter-spacing: -0.025em;
line-height: 1.08;
margin-bottom: 18px;
}

/_ Allow both color variants _/

.error-title em {
font-style: italic;
color: var(--danger); /_ fallback _/
}

.error-page[data-error='404'] .error-title em {
color: var(--blue);
}

.error-body {
font-size: 15px;
color: var(--grey4);
line-height: 1.75;
max-width: 380px;
margin-bottom: 32px;
}

.error-actions {
display: flex;
align-items: center;
gap: 10px;
flex-wrap: wrap;
margin-bottom: 24px;
}

.error-hint {
display: flex;
align-items: center;
gap: 6px;
flex-wrap: wrap;
font-size: 12px;
color: var(--grey3);
line-height: 1.6;
}

.error-hint svg {
flex-shrink: 0;
color: var(--grey3);
}

/_ Responsive _/
@media (max-width: 680px) {
.error-layout {
grid-template-columns: 1fr;
gap: 32px;
}

    .error-visual {
    	text-align: center;
    	align-items: center;
    }

    .error-code-display {
    	justify-content: center;
    }

    .error-body {
    	max-width: 100%;
    }

}

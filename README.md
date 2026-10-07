# AP ULTIMATE – static resource website

Pure HTML + CSS + JavaScript. No server, no database, no build step.

## 1. Upload to your hosting
Upload all 6 files (`index.html`, `style.css`, `script.js`, `robots.txt`, `sitemap.xml`, `README.md`) to the root folder of any static host. Open the address. Done.

## 2. Google Sheet (add resources)
Share the sheet as **Anyone with the link: Viewer**. Tab name must match `sheetTab` in `script.js` (now `LIVING AI`).
Row 1 (lowercase): `id, title, category, description, image, downloadurl, rating, downloads, views, size, version, updated`.
One resource per row from row 2. Columns A-F required, G-L optional. A row with category `logo` (link in `image`) becomes the site logo.
The site re-reads the sheet automatically (default every 60 s). No code edit needed.

## 3. Change settings (top of `script.js`, section CONFIG)
- Countdown time: `secondsPerStep`  | Number of steps: `steps` | Page length: `pageScreens`
- Download links: only in the sheet, column `downloadurl`
- Secret word: `secret`  | Telegram channels: `telegram`  | Email: `email`
- Analytics: `analytics.goatcounter` or `analytics.gaId`

## 4. Ads
All ad codes are in `CONFIG.ads` (key, width, height). `CONFIG.slots` decides which ad appears in which place and from which screen width.
To use a new banner: add an entry in `ads`, then use its name in `slots`.
Popunder, social bar and direct-link codes are intentionally not used.

## 5. Replace placeholders
Replace `https://YOUR-DOMAIN.com/` in `index.html` (canonical, og:url), `script.js` (`siteUrl`), `robots.txt` and `sitemap.xml` with your real address.
Change `secret: 'change-this-secret-word'` to your own word.

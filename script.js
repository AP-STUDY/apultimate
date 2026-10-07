/* =====================================================================
   CONFIG  -  change everything here. No other code needs editing.
   ===================================================================== */
const CONFIG = {
  siteName: 'AP ULTIMATE',
  tagline: 'APK files, notes, books PDF, online courses and more, all in one place.',
  logo: '',                                   // optional image link. A sheet row with category "logo" (image column) overrides this
  email: 'ap.ultimateall@gmail.com',
  siteUrl: 'https://YOUR-DOMAIN.com/',        // PLACEHOLDER: your final website address
  sheetId: '162a9lnAZ_LqGK-OkGTdPkBIGfUjVZQvLsHYzS0qodJA',  // id or the full sheet link
  sheetTab: 'LIVING AI',
  refreshSeconds: 60,                         // re-read the sheet every N seconds

  steps: 6,
  secondsPerStep: 30,
  pageScreens: 25,                            // approx. length of each step page
  secret: 'change-this-secret-word',          // used for the progress checksum
  readyValidMinutes: 60,                      // the final page stays open this long
  stepTexts: [
    'Step 1: Welcome! Your resource is being prepared. Please stay on this page until the timer ends, then scroll down and press Continue.',
    'Step 2: Good going! While you wait, you can read the short study and safety tips below.',
    'Step 3: Halfway there. Keep this page open, the timer only runs while the tab is visible.',
    'Step 4: Almost there. Join our Telegram channels for new uploads and updates.',
    'Step 5: One more step after this one. Thank you for your patience.',
    'Step 6: Last step! After this you will get your download button.'
  ],
  buttons: { get: 'Get resource', cont: 'Continue', ready: 'READY TO DOWNLOAD', join: 'CLICK TO JOIN', share: 'Share' },

  telegram: ['ultimateapkmods', 'apstudymods', 'editvaultresources'],
  mascot: {
    enabled: true, emoji: 'ðŸ§¸',
    firstDelaySeconds: 8, walkSeconds: 7, talkSeconds: 9, returnAfterSeconds: 60,
    lines: ['Hi friend! Join @{ch} for free updates ðŸŽ‰', 'New uploads daily on @{ch}. Come say hi! ðŸ‘‹', 'Don\'t miss anything, join @{ch} now ðŸš€']
  },

  analytics: { goatcounter: '', gaId: '' },   // e.g. goatcounter: 'mysite'  (https://mysite.goatcounter.com) or gaId: 'G-XXXXXXX'

  /* ---------- ADS (your own network code) ----------
     Banner style = atOptions + invoke.js. Native style = invoke.js + container div.
     Each ad is loaded inside its own sandboxed iframe, lazily.
     Left out on purpose (popunder / social bar / direct link, not allowed in this safe design):
       pl31704838...js, pl31704840...js, the direct link "cqm9k4qn?key=...", and d0b2209c...invoke.js (no banner size given). */
  adHost: 'www.highrevenueformat.com',
  sandbox: 'allow-scripts allow-popups allow-popups-to-escape-sandbox',
  ads: {
    b728:   { type: 'banner', key: '910a63d2783b9e608d43469d96f5202c', w: 728, h: 90 },
    b468:   { type: 'banner', key: 'abcc5e01a40206d1fe2ec63f065e9c5e', w: 468, h: 60 },
    b320:   { type: 'banner', key: '236e3733ac7c3f36e8ed6fb30d7a36ce', w: 320, h: 50 },
    b300:   { type: 'banner', key: 'fba38899153f39457b116648119a2cf8', w: 300, h: 250 },
    b160:   { type: 'banner', key: 'c62e98ecc3e5893ab137b717806a9985', w: 160, h: 300 },
    native: { type: 'native', src: 'https://pl31704841.profitableratecpmnetwork.com/5bfd254fa644a2dd76a044a591fdc436/invoke.js', container: 'container-5bfd254fa644a2dd76a044a591fdc436', h: 300 }
  },
  /* slot -> [ [adName, minScreenWidth], ... ]  first match from top wins */
  slots: {
    top:          [['b728', 760], ['b320', 0]],
    belowHeading: [['b468', 520], ['b320', 0]],
    aboveTimer:   [['b468', 520], ['b320', 0]],
    belowTimer:   [['b300', 0]],
    between:      [['b300', 0]],
    inContent2:   [['native', 0]],
    inContent3:   [['b468', 520], ['b320', 0]],
    bottom:       [['b728', 760], ['b468', 520], ['b320', 0]],
    left:         [['b160', 1300]],
    right:        [['b160', 1300]]
  },
  contentSlots: ['between', 'inContent2', 'inContent3'],   // rotated between text sections

  pages: {
    about: ['About us', [
      ['Who we are', '{site} is a free resource library. We collect links to APK files, study notes, books in PDF, online courses and other useful material and keep them in one tidy place.'],
      ['What we do', 'We do not host the files ourselves. Every card on this site points to a file or channel that is stored on a third-party service such as Google Drive or Telegram.'],
      ['Why the steps and ads?', 'Running a website costs time and money. The short waiting steps and the advertisements help us keep {site} free for everyone.']]],
    contact: ['Contact', [
      ['Email us', 'Write to {email} for questions, resource requests, broken links or removal requests. We try to answer within a few days.'],
      ['Telegram', 'You can also reach us through our Telegram channels listed in the footer and on the home page.']]],
    privacy: ['Privacy Policy', [
      ['What we store', 'This site has no accounts. Your theme, saved items, star ratings and unlock progress are stored only in your own browser (localStorage). We cannot see them.'],
      ['Analytics', 'If enabled by the site owner, privacy-friendly or standard analytics may count page views. No personal profile is built by us.'],
      ['Advertising', 'We show ads from a third-party ad network. Such networks may use cookies or similar technology to show ads. Please read their policies and use your browser settings to control cookies.'],
      ['External links', 'Links lead to other websites (Google Drive, Telegram and others). We are not responsible for their privacy practices.'],
      ['Contact', 'Questions about this policy: {email}.']]],
    disclaimer: ['Disclaimer', [
      ['No hosting', '{site} only shares links. We do not upload, store or control the linked files.'],
      ['Use at your own risk', 'Always scan downloaded files with a trusted security app and check the permissions an app asks for. We give no warranty about the safety, accuracy or availability of any resource.'],
      ['Copyright', 'If you are a rights owner and want a link removed, email {email} with the link and proof, and we will review it quickly.']]],
    terms: ['Terms of Use', [
      ['Using the site', 'By using {site} you agree to use it lawfully and not to misuse, copy or attack the site.'],
      ['Ads and steps', 'You agree that the unlock steps and advertisements are part of how this free service works. Please do not use tools that bypass them.'],
      ['Changes', 'We may change resources, links and these terms at any time without notice.']]]
  }
};

/* =====================================================================
   APP CODE
   ===================================================================== */
(function () {
  'use strict';
  const C = CONFIG;
  const SHEET_ID = (String(C.sheetId).match(/\/d\/([\w-]+)/) || [0, C.sheetId])[1];
  const $ = (s, r = document) => r.querySelector(s);
  const h = (tag, a, ...kids) => {
    const e = document.createElement(tag);
    if (a) for (const k in a) {
      const v = a[k]; if (v == null || v === false) continue;
      if (k === 'class') e.className = v; else if (k === 'text') e.textContent = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v); else e.setAttribute(k, v === true ? '' : v);
    }
    for (const kid of kids.flat()) { if (kid == null || kid === false) continue; e.append(kid.nodeType ? kid : document.createTextNode(kid)); }
    return e;
  };
  const jget = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const jset = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } };
  const num = v => { const m = String(v || '').replace(/,/g, '').match(/([\d.]+)\s*([kKmMlL]?)/); if (!m) return 0; const u = m[2].toLowerCase(); return parseFloat(m[1]) * (u === 'k' ? 1e3 : u === 'm' ? 1e6 : u === 'l' ? 1e5 : 1); };
  const slug = s => String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const firstUrl = s => { const m = String(s || '').match(/https?:\/\/[^\s"'<>]+/i); return m ? m[0] : ''; };
  const hash = s => { let x = 5381; for (const ch of s) x = ((x << 5) + x + ch.charCodeAt(0)) >>> 0; return x.toString(36); };
  const txt = s => String(s).replace(/\{site\}/g, C.siteName).replace(/\{email\}/g, C.email);

  /* ---------- CSV + data ---------- */
  function parseCSV(t) {
    const rows = []; let r = [], c = '', q = false;
    for (let i = 0; i < t.length; i++) {
      const ch = t[i];
      if (q) { if (ch === '"') { if (t[i + 1] === '"') { c += '"'; i++; } else q = false; } else c += ch; }
      else if (ch === '"') q = true;
      else if (ch === ',') { r.push(c); c = ''; }
      else if (ch === '\n' || ch === '\r') { if (ch === '\r' && t[i + 1] === '\n') i++; r.push(c); c = ''; rows.push(r); r = []; }
      else c += ch;
    }
    if (c !== '' || r.length) { r.push(c); rows.push(r); }
    return rows;
  }
  function normalize(rows) {
    if (!rows.length) return { items: [], logo: '' };
    const head = rows[0].map(x => x.trim().toLowerCase());
    const get = (r, n) => { const i = head.indexOf(n); return i < 0 ? '' : (r[i] || '').trim(); };
    const used = new Set(), items = []; let logo = '';
    for (const r of rows.slice(1)) {
      const title = get(r, 'title'), cat = get(r, 'category') || 'General';
      if (cat.toLowerCase() === 'logo') { const u = firstUrl(get(r, 'image')) || firstUrl(get(r, 'downloadurl')); if (u) logo = u; continue; }
      const url = firstUrl(get(r, 'downloadurl'));
      if (!title || !url) continue;
      let id = slug(get(r, 'id') || title) || 'item'; const base = id; let n = 2;
      while (used.has(id)) id = base + '-' + n++;
      used.add(id);
      const rt = parseFloat(get(r, 'rating'));
      items.push({ id, title, category: cat, description: get(r, 'description'), image: firstUrl(get(r, 'image')), url, rating: isNaN(rt) ? null : Math.min(5, Math.max(0, rt)), downloads: get(r, 'downloads'), views: get(r, 'views'), size: get(r, 'size'), version: get(r, 'version'), updated: get(r, 'updated'), order: items.length });
    }
    return { items, logo };
  }
  let DATA = jget('apu_data', { items: [], logo: C.logo }), SIG = JSON.stringify(DATA);
  async function load() {
    try {
      const res = await fetch(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(C.sheetTab)}`, { cache: 'no-store' });
      if (!res.ok) throw new Error('bad');
      const d = normalize(parseCSV(await res.text()));
      if (!d.logo) d.logo = C.logo;
      if (!d.items.length) return false;
      const s = JSON.stringify(d);
      if (s === SIG) return false;
      DATA = d; SIG = s; jset('apu_data', d); return true;
    } catch (e) { return false; }
  }
  const favs = () => jget('apu_fav', []);
  const rates = () => jget('apu_rate', {});

  /* ---------- progress ---------- */
  function getProg(id) {
    const p = jget('apu_p_' + id);
    if (p && p.s >= 1 && p.s <= C.steps + 1 && p.sig === hash(`${id}|${p.s}|${p.t}|${C.secret}`) && (p.s <= C.steps || Date.now() - p.t < C.readyValidMinutes * 6e4)) return p.s;
    return 1;
  }
  function setProg(id, s) { const t = Date.now(); jset('apu_p_' + id, { s, t, sig: hash(`${id}|${s}|${t}|${C.secret}`) }); }

  /* ---------- ads ---------- */
  let adN = 0;
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); mountAd(e.target); } }), { rootMargin: '300px' }) : null;
  function adSlot(slot) {
    let key = null; for (const [a, min] of (C.slots[slot] || [])) if (innerWidth >= min) { key = a; break; }
    if (!key || !C.ads[key]) return null;
    const box = h('div', { class: 'ad-box' }); box.dataset.ad = key; box.style.minHeight = C.ads[key].h + 'px';
    const wrap = h('aside', { class: 'ad ad-' + slot, id: `ad-${slot}-${++adN}`, 'aria-label': 'Advertisement' }, h('small', { class: 'ad-label', text: 'Advertisement' }), box);
    if (io) io.observe(box); else mountAd(box);
    return wrap;
  }
  function mountAd(box) {
    const cfg = C.ads[box.dataset.ad]; if (!cfg || box.firstChild || !box.isConnected) return;
    const f = document.createElement('iframe');
    f.setAttribute('sandbox', C.sandbox); f.title = 'Advertisement'; f.scrolling = 'no';
    f.style.cssText = `border:0;width:${cfg.type === 'native' ? '100%' : cfg.w + 'px'};height:${cfg.h}px;max-width:100%`;
    const body = cfg.type === 'native'
      ? `<script async data-cfasync="false" src="${cfg.src}"><\/script><div id="${cfg.container}"></div>`
      : `<script>atOptions={'key':'${cfg.key}','format':'iframe','height':${cfg.h},'width':${cfg.w},'params':{}};<\/script><script src="https://${cfg.host || C.adHost}/${cfg.key}/invoke.js"><\/script>`;
    f.srcdoc = '<!doctype html><html><body style="margin:0;display:flex;justify-content:center;background:transparent">' + body + '</body></html>';
    box.append(f);
  }
  const contentAd = i => adSlot(C.contentSlots[i % C.contentSlots.length]);

  /* ---------- shared parts ---------- */
  function tgCard() {
    return h('section', { class: 'tg' }, h('h3', { text: 'Join our Telegram channels' }), h('p', { text: 'New uploads, updates and help. Pick the channel you like.' }),
      h('div', { class: 'tg-list' }, C.telegram.map(u => h('a', { class: 'tg-pill', href: 'https://t.me/' + u, target: '_blank', rel: 'noopener noreferrer' }, h('span', { text: '@' + u }), h('span', { class: 'tg-chip', text: 'JOIN NOW' })))));
  }
  const info = it => [it.rating != null && 'â­ ' + it.rating, it.views && 'ðŸ‘ ' + it.views, it.downloads && 'â¬‡ ' + it.downloads, it.size && 'ðŸ’¾ ' + it.size, it.version, it.updated && 'ðŸ•’ ' + it.updated].filter(Boolean).map(t => h('span', { class: 'chip', text: t }));
  function thumb(it) {
    const box = h('div', { class: 'thumb' });
    const letter = () => box.replaceChildren(h('span', { class: 'ltr', text: (it.title[0] || '?').toUpperCase() }));
    if (it.image) { const im = h('img', { src: it.image, alt: it.title, loading: 'lazy', referrerpolicy: 'no-referrer' }); im.addEventListener('error', letter); box.append(im); } else letter();
    return box;
  }
  const popularIds = () => new Set(DATA.items.filter(i => num(i.downloads) > 0).sort((a, b) => num(b.downloads) - num(a.downloads)).slice(0, 3).map(i => i.id));
  function card(it, pop) {
    const fav = h('button', { class: 'fav', type: 'button', 'aria-label': 'Save ' + it.title, 'aria-pressed': String(favs().includes(it.id)), text: 'â™¥' });
    fav.addEventListener('click', () => { let f = favs(); f = f.includes(it.id) ? f.filter(x => x !== it.id) : f.concat(it.id); jset('apu_fav', f); fav.setAttribute('aria-pressed', String(f.includes(it.id))); });
    return h('article', { class: 'card' }, thumb(it), pop && h('span', { class: 'badge', text: 'Popular' }), fav,
      h('div', { class: 'cbody' }, h('span', { class: 'cat', text: it.category }), h('h3', { text: it.title }), it.description && h('p', { text: it.description }), h('div', { class: 'chips' }, info(it)),
        h('a', { class: 'btn', href: '#/r/' + it.id + '/' + getProg(it.id), text: C.buttons.get })));
  }

  /* ---------- list views ---------- */
  const F = { q: '', cat: '', sort: 'sheet', saved: false };
  function filtered() {
    const fv = favs();
    const cmp = { sheet: (x, y) => x.order - y.order, new: (x, y) => (Date.parse(y.updated) || 0) - (Date.parse(x.updated) || 0) || x.order - y.order, rating: (x, y) => (y.rating || 0) - (x.rating || 0), dl: (x, y) => num(y.downloads) - num(x.downloads), az: (x, y) => x.title.localeCompare(y.title) }[F.sort];
    return DATA.items.filter(i => (!F.cat || i.category === F.cat) && (!F.saved || fv.includes(i.id)) && (!F.q || (i.title + ' ' + i.description + ' ' + i.category).toLowerCase().includes(F.q))).sort(cmp);
  }
  function listBlock() {
    const grid = h('div', { class: 'grid', 'aria-live': 'polite' });
    const fill = () => { const pop = popularIds(), l = filtered(); grid.replaceChildren(...(l.length ? l.map(i => card(i, pop.has(i.id))) : [h('p', { class: 'empty', text: DATA.items.length ? 'No resources match your search.' : 'Loading resourcesâ€¦ If this stays empty, check that the Google Sheet is shared as "Anyone with the link: Viewer".' })])); };
    const cats = [...new Set(DATA.items.map(i => i.category))].sort();
    const q = h('input', { type: 'search', placeholder: 'Search resourcesâ€¦', 'aria-label': 'Search', value: F.q });
    q.addEventListener('input', () => { F.q = q.value.trim().toLowerCase(); fill(); });
    const cs = h('select', { 'aria-label': 'Category' }, h('option', { value: '', text: 'All categories' }), cats.map(c => h('option', { value: c, text: c, selected: c === F.cat })));
    cs.addEventListener('change', () => { F.cat = cs.value; fill(); });
    const ss = h('select', { 'aria-label': 'Sort' }, [['sheet', 'Sheet order'], ['new', 'Newest'], ['rating', 'Top rated'], ['dl', 'Most downloaded'], ['az', 'A to Z']].map(([v, t]) => h('option', { value: v, text: t, selected: v === F.sort })));
    ss.addEventListener('change', () => { F.sort = ss.value; fill(); });
    const sv = h('button', { class: 'chip-btn', type: 'button', 'aria-pressed': String(F.saved), text: 'â™¥ Saved' });
    sv.addEventListener('click', () => { F.saved = !F.saved; sv.setAttribute('aria-pressed', String(F.saved)); fill(); });
    fill();
    return h('div', null, h('div', { class: 'tools' }, q, cs, ss, sv), grid);
  }
  function statsBar() {
    const it = DATA.items, r = it.filter(i => i.rating != null), avg = r.length ? (r.reduce((s, i) => s + i.rating, 0) / r.length).toFixed(1) : 'â€“';
    return h('div', { class: 'stats' }, [[it.length, 'Resources'], [new Set(it.map(i => i.category)).size, 'Categories'], [avg, 'Average rating']].map(([n, l]) => h('div', { class: 'stat' }, h('b', { text: n }), h('span', { text: l }))));
  }
  let dep = false;
  function homeView() {
    dep = true;
    return h('div', null, adSlot('top'), h('section', { class: 'hero' }, h('h1', { text: C.siteName }), h('p', { text: C.tagline })), statsBar(), listBlock(), adSlot('between'), tgCard(), adSlot('bottom'));
  }
  function resourcesView() { dep = true; return h('div', null, adSlot('top'), h('h1', { text: 'All resources' }), listBlock(), adSlot('bottom')); }
  function categoriesView() {
    dep = true;
    const m = {}; DATA.items.forEach(i => m[i.category] = (m[i.category] || 0) + 1);
    return h('div', null, adSlot('top'), h('h1', { text: 'Categories' }), h('div', { class: 'cats' }, Object.keys(m).sort().map(c => h('button', { type: 'button', onclick: () => { F.cat = c; F.q = ''; F.saved = false; location.hash = '#/resources'; } }, h('b', { text: c }), h('span', { class: 'muted', text: m[c] + (m[c] === 1 ? ' resource' : ' resources') })))), tgCard(), adSlot('bottom'));
  }
  function pageView(k) {
    const [t, secs] = C.pages[k];
    return h('div', null, adSlot('top'), h('article', { class: 'prose' }, h('h1', { text: t }), secs.map(([a, b]) => [h('h2', { text: a }), h('p', { text: txt(b) })])), tgCard(), adSlot('bottom'));
  }

  /* ---------- step flow ---------- */
  const TIPS = [
    ['Plan your study week', 'Write down what you want to finish each day. Small, clear goals are easier to complete than a vague plan to study a lot. Keep one free slot per week for catching up.'],
    ['Use active recall', 'After reading a page, close the book and write what you remember. Trying to recall an answer builds memory much better than reading the same text again.'],
    ['Spaced repetition', 'Review new material after one day, three days and one week. Short, spread-out reviews beat one long late-night session.'],
    ['Take smart breaks', 'Study for 25 to 45 minutes, then rest for five. Stand up, drink water and look away from the screen so your eyes and mind can recover.'],
    ['Organise your notes', 'Use clear headings, short points and your own words. Good notes are ones you can scan quickly the night before an exam.'],
    ['Sleep and focus', 'A tired brain stores less. Aim for regular sleep, and keep your phone away from the bed during study hours to protect your focus.'],
    ['Practise past papers', 'Solving old question papers shows the real pattern of questions and your weak topics. Time yourself to build exam speed.'],
    ['Learn with a goal', 'Before starting a course or book, decide what you want to be able to do at the end. Check your progress against that goal every week.'],
    ['Stay safe online', 'Download files only from sources you trust, scan them with a security app and read the permissions an app asks for before installing it. If something looks wrong, do not install it.'],
    ['Manage screen time', 'Use focus mode while studying and set a daily limit for social apps. Your future self will thank you for the extra hour.'],
    ['Build a daily routine', 'Study at the same time each day. A routine removes the daily decision of when to start, and starting is usually the hardest part.'],
    ['Revise before exams', 'In the last days, focus on summaries, formulas and mistakes you made earlier. Do not start big new topics at the last minute.']
  ];
  let cleanup = () => { }, locked = false;
  function stepView(it, n) {
    const T = C.steps, secs = C.secondsPerStep, R = 54, CI = 2 * Math.PI * R, id = it.id;
    const done = n - 1;
    const NS = 'http://www.w3.org/2000/svg', se = (t, a) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); return e; };
    const svg = se('svg', { width: 150, height: 150, viewBox: '0 0 130 130', 'aria-hidden': 'true' });
    const defs = se('defs', {}), g = se('linearGradient', { id: 'g', x1: 0, y1: 0, x2: 1, y2: 1 });
    g.append(se('stop', { offset: '0', 'stop-color': '#2f5bff' }), se('stop', { offset: '1', 'stop-color': '#ff7a1a' })); defs.append(g);
    const fg = se('circle', { class: 'fg', cx: 65, cy: 65, r: R, 'stroke-dasharray': CI, 'stroke-dashoffset': 0 });
    svg.append(defs, se('circle', { class: 'bg', cx: 65, cy: 65, r: R }), fg);
    const numEl = h('b', { text: secs }), wait = h('p', { class: 'muted', role: 'status', text: `Please wait ${secs} seconds before continuing` });
    const doneMsg = h('div', { class: 'done-msg', hidden: true }, 'Time complete! Scroll down to continue', h('span', { class: 'arrow', 'aria-hidden': 'true', text: 'â¬‡' }));
    const btn = h('button', { class: 'btn big', type: 'button', disabled: true, 'aria-disabled': 'true', text: C.buttons.cont });
    const wrap = h('div', null,
      adSlot('top'),
      h('header', { class: 'step-head' }, h('p', { class: 'muted', text: it.title }), h('h1', { text: `Step ${n} of ${T}` }),
        h('div', { class: 'pbar', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': T, 'aria-valuenow': done }, h('i', { style: `width:${(done / T) * 100}%` })),
        h('div', { class: 'dots' }, Array.from({ length: T }, (_, i) => h('span', { class: i + 1 < n ? 'done' : i + 1 === n ? 'now' : '', text: i + 1 < n ? 'âœ“' : i + 1 }))),
        h('p', { text: `Completed: ${done} steps, Remaining: ${T - done} steps` })),
      adSlot('belowHeading'),
      h('p', { class: 'prose', text: C.stepTexts[n - 1] || '' }),
      adSlot('aboveTimer'),
      h('div', { class: 'timer' }, h('div', { class: 'ring' }, svg, numEl), wait),
      adSlot('belowTimer'), doneMsg);
    for (let i = 0; i < C.pageScreens; i++) {
      const [t, p] = TIPS[i % TIPS.length];
      wrap.append(h('section', { class: 'sec-block' }, h('h2', { text: (i + 1) + '. ' + t }), h('p', { text: p })), contentAd(i));
      if (i % 4 === 3) wrap.append(tgCard());
    }
    wrap.append(adSlot('bottom'), h('div', { class: 'cont-zone' }, btn));
    /* timer: counts only while the tab is visible */
    let left = secs * 1000, last = performance.now(); locked = true;
    const tid = setInterval(() => {
      const now = performance.now(); if (!document.hidden) left -= now - last; last = now; if (left < 0) left = 0;
      const s = Math.ceil(left / 1000); numEl.textContent = s; fg.setAttribute('stroke-dashoffset', CI * (1 - left / (secs * 1000)));
      wait.textContent = s > 0 ? `Please wait ${s} seconds before continuing` : 'You can continue now';
      if (left <= 0) { clearInterval(tid); locked = false; doneMsg.hidden = false; btn.disabled = false; btn.setAttribute('aria-disabled', 'false'); }
    }, 200);
    btn.addEventListener('click', () => {
      if (left > 0 || getProg(id) !== n) return;
      setProg(id, n + 1); location.hash = n < T ? `#/r/${id}/${n + 1}` : `#/r/${id}/ready`;
    });
    const rails = $('#rails'); rails.replaceChildren(...[adSlot('left'), adSlot('right')].filter(Boolean)); rails.className = 'on';
    const obs = 'IntersectionObserver' in window ? new IntersectionObserver(e => document.body.classList.toggle('btn-visible', e[0].isIntersecting)) : null; if (obs) obs.observe(btn);
    cleanup = () => { clearInterval(tid); locked = false; if (obs) obs.disconnect(); document.body.classList.remove('btn-visible'); rails.replaceChildren(); rails.className = ''; };
    return wrap;
  }
  function readyView(it) {
    const isTg = /^https?:\/\/(t\.me|telegram\.me)\//i.test(it.url);
    const share = h('button', { class: 'chip-btn', type: 'button', text: 'â†— ' + C.buttons.share });
    share.addEventListener('click', async () => {
      const u = location.href.split('#')[0] + '#/r/' + it.id + '/1';
      try { if (navigator.share) await navigator.share({ title: it.title, url: u }); else { await navigator.clipboard.writeText(u); share.textContent = 'âœ“ Link copied'; } } catch (e) { }
    });
    const r = rates(), stars = h('div', { class: 'stars', role: 'group', 'aria-label': 'Rate this resource' });
    const paint = () => [...stars.children].forEach((b, i) => { b.classList.toggle('on', i < (rates()[it.id] || 0)); b.setAttribute('aria-pressed', String(i < (rates()[it.id] || 0))); });
    for (let i = 1; i <= 5; i++) stars.append(h('button', { type: 'button', 'aria-label': i + ' star' + (i > 1 ? 's' : ''), text: 'â˜…', onclick: () => { const x = rates(); x[it.id] = i; jset('apu_rate', x); paint(); } }));
    paint();
    return h('div', { class: 'ready' }, adSlot('top'), h('h1', { text: 'Your resource is ready' }), thumb(it), h('h2', { text: it.title }), it.description && h('p', { class: 'muted', text: it.description }), h('div', { class: 'chips' }, info(it)),
      h('p', null, h('a', { class: 'btn big', href: it.url, target: '_blank', rel: 'noopener noreferrer', text: C.buttons.ready })),
      isTg && h('p', null, h('strong', { text: C.buttons.join })),
      h('p', null, share), h('p', { class: 'muted', text: 'Rate this resource' }), stars, adSlot('between'), tgCard(), adSlot('bottom'));
  }

  /* ---------- router ---------- */
  const app = $('#app');
  const TITLES = { '': '', resources: 'Resources', categories: 'Categories', about: 'About', contact: 'Contact', privacy: 'Privacy Policy', disclaimer: 'Disclaimer', terms: 'Terms of Use' };
  function render(keep) {
    cleanup(); cleanup = () => { }; locked = false; dep = false;
    const [a, b, c] = location.hash.replace(/^#\/?/, '').split('/'); const k = a || '';
    let view, title = TITLES[k];
    if (k === 'r') {
      const it = DATA.items.find(i => i.id === b);
      if (!it) { dep = true; view = h('p', { class: 'loading', text: DATA.items.length ? 'Resource not found. Go back to the home page.' : 'Loadingâ€¦' }); }
      else {
        const cur = getProg(it.id), T = C.steps; title = it.title;
        if (c === 'ready') { if (cur <= T) { location.replace(`#/r/${it.id}/${cur}`); return; } view = readyView(it); }
        else { const n = parseInt(c, 10); if (cur > T) { location.replace(`#/r/${it.id}/ready`); return; } if (n !== cur) { location.replace(`#/r/${it.id}/${cur}`); return; } view = stepView(it, n); }
      }
    } else if (k === '') view = homeView();
    else if (k === 'resources') view = resourcesView();
    else if (k === 'categories') view = categoriesView();
    else if (C.pages[k]) view = pageView(k);
    else { location.replace('#/'); return; }
    app.replaceChildren(view);
    document.title = (title ? title + ' | ' : '') + C.siteName;
    document.querySelectorAll('#nav a').forEach(x => x.classList.toggle('on', x.getAttribute('href') === '#/' + k || (k === '' && x.getAttribute('href') === '#/')));
    if (!keep) { scrollTo(0, 0); track(); }
  }
  async function refresh() {
    const changed = await load();
    if (changed) { renderHeader(); if (dep && !locked && !/INPUT|SELECT|TEXTAREA/.test((document.activeElement || {}).tagName || '')) { const y = scrollY; render(true); scrollTo(0, y); } }
  }

  /* ---------- analytics ---------- */
  function track() {
    const path = location.pathname + location.hash;
    try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path, title: document.title }); } catch (e) { }
    try { if (window.gtag && C.analytics.gaId) window.gtag('event', 'page_view', { page_path: path, page_title: document.title }); } catch (e) { }
  }
  function initAnalytics() {
    const A = C.analytics;
    if (A.goatcounter) { window.goatcounter = { no_onload: true }; document.head.append(h('script', { async: true, src: '//gc.zgo.at/count.js', 'data-goatcounter': `https://${A.goatcounter}.goatcounter.com/count` })); }
    if (A.gaId) { window.dataLayer = window.dataLayer || []; window.gtag = function () { dataLayer.push(arguments); }; gtag('js', new Date()); gtag('config', A.gaId, { send_page_view: false }); document.head.append(h('script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(A.gaId) })); }
  }

  /* ---------- mascot ---------- */
  function mascot() {
    const M = C.mascot; if (!M.enabled) return;
    let closed = false, idx = 0;
    const bub = h('a', { class: 'm-bubble', target: '_blank', rel: 'noopener noreferrer' });
    const box = h('div', { class: 'mascot' }, h('button', { class: 'm-x', type: 'button', 'aria-label': 'Close mascot', text: 'Ã—', onclick: () => { closed = true; box.remove(); } }), bub, h('div', { class: 'm-doll', 'aria-hidden': 'true', text: M.emoji }));
    box.style.setProperty('--walk', M.walkSeconds + 's'); document.body.append(box);
    const sleep = s => new Promise(r => setTimeout(r, s * 1000));
    (async () => {
      await sleep(M.firstDelaySeconds);
      while (!closed) {
        const ch = C.telegram[idx % C.telegram.length]; bub.textContent = M.lines[idx % M.lines.length].replace('{ch}', '@' + ch); bub.href = 'https://t.me/' + ch; idx++;
        box.classList.add('in', 'walking'); await sleep(M.walkSeconds); box.classList.remove('walking'); box.classList.add('talk');
        await sleep(M.talkSeconds); box.classList.remove('talk'); box.classList.add('walking'); box.classList.remove('in');
        await sleep(M.walkSeconds); box.classList.remove('walking'); await sleep(M.returnAfterSeconds);
      }
    })();
  }

  /* ---------- header / footer / theme ---------- */
  function renderHeader() {
    const logo = $('#logo');
    if (DATA.logo) { const im = h('img', { src: DATA.logo, alt: '', referrerpolicy: 'no-referrer' }); im.addEventListener('error', () => logo.textContent = 'AP'); logo.replaceChildren(im); }
  }
  function init() {
    $('#siteName').textContent = C.siteName;
    $('#nav').append(...[['#/', 'Home'], ['#/resources', 'Resources'], ['#/categories', 'Categories'], ['#/about', 'About'], ['#/contact', 'Contact']].map(([u, t]) => h('a', { href: u, text: t })));
    const fl = $('#footLinks'); [['privacy', 'Privacy Policy'], ['disclaimer', 'Disclaimer'], ['terms', 'Terms'], ['contact', 'Contact']].forEach(([k, t]) => fl.append(h('a', { href: '#/' + k, text: t })));
    C.telegram.forEach(u => fl.append(h('a', { href: 'https://t.me/' + u, target: '_blank', rel: 'noopener noreferrer', text: '@' + u })));
    $('#footCopy').textContent = `Â© ${new Date().getFullYear()} ${C.siteName}. Contact: ${C.email}`;
    const root = document.documentElement, saved = jget('apu_theme');
    root.dataset.theme = saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    $('#themeBtn').addEventListener('click', () => { const t = root.dataset.theme === 'dark' ? 'light' : 'dark'; root.dataset.theme = t; jset('apu_theme', t); });
    renderHeader(); initAnalytics(); render(); mascot();
    addEventListener('hashchange', () => render());
    setInterval(refresh, Math.max(15, C.refreshSeconds) * 1000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
    refresh();
  }
  init();
})();

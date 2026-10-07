/* =====================================================================
   CONFIG  -  EDIT ONLY THIS SECTION (and the resources list below it)
   ===================================================================== */
const CONFIG = {
  siteName: "AP STUDY",
  tagline: "Free study notes, PDFs, batch material and useful apps in one place. Pick a resource, finish a few short steps and get your link.",
  logo: "images/logo.png",
  contactEmail: "ap.ultimateall@gmail.com",

  /* GOOGLE SHEET: all resources come from this sheet. Share it as "Anyone with the link: Viewer".
     Columns (row 1): id, title, category, description, image, downloadurl */
  sheetId: "1RzZkw3LiC0ICwT-Gmp47potgY0OvWw2-iC9XsDeSNNQ",
  sheetName: "Sheet1",
  pageScreens: 25,      /* step page is about this many screens long (lower it for a shorter page) */
  joinText: "CLICK TO JOIN",        /* final button text when the link is a Telegram link */
  downloadText: "Download / Open",  /* final button text for any other link */
  readyText: "READY TO DOWNLOAD",   /* big button shown only after all 6 steps are done */
  secret: "change-this-word",       /* any word; used to check saved progress was not edited by hand */
  /* REAL traffic stats (optional): put your GoatCounter name (example "mysite") and/or Google Analytics id (example "G-XXXXXXX").
     Leave "" to switch off. Numbers then appear in YOUR analytics dashboard. */
  analytics: { goatcounter: "", ga4: "" },
  refreshSeconds: 30,   /* site re-reads the sheet this often, so new rows appear by themselves */

  /* TELEGRAM channels (usernames without @) */
  telegram: ["ultimateapkmods", "apstudymods", "editvaultresources", "physicswallahapk"],
  /* Fun mascot that walks in from far away and invites people to your channels */
  mascot: {
    enabled: true, emoji: "🧸", firstAfterSec: 6, stayForSec: 12, everySec: 25,
    lines: [
      "Hello dost! 🧸 Free APK aur notes chahiye? {channel} join karo!",
      "Psst... main bahut door se aaya hu sirf ye batane: {channel} pe free resources milte hain!",
      "Telegram pe milta hai sab kuch! {channel} abhi join karo 👇",
      "Thoda sa support do, {channel} join kar lo 💙"
    ]
  },

  /* Seconds to wait on each step. One number per step (6 steps). */
  stepDurations: [30, 30, 30, 30, 30, 30],
  waitText: "Please wait {s} seconds before continuing.",
  stepText: [
    "Your resource is being prepared. Read the notes on this page while you wait.",
    "Step 2 is almost the same. Your progress is saved if you refresh.",
    "Halfway there. Keep this tab open.",
    "Two more steps after this one.",
    "Almost done. One more step after this.",
    "Last step. Your download link appears next."
  ],

  /* Long text shown under the countdown on every step (ads appear between sections). */
  waitContent: [
    { h: "How to download safely", p: "Always download files only from the final button on this page. Check the file name and size before you open it, and keep your phone or computer protected with an updated security app." },
    { h: "Check your storage", p: "Large PDFs and app files need free space. Before you download, make sure you have at least a few hundred MB free so the file is not cut halfway." },
    { h: "Opening PDF notes", p: "Most phones open PDFs in the Files or Drive app. For best reading, use a PDF reader that lets you zoom, search and highlight important lines for revision." },
    { h: "Installing app files", p: "If you download an Android app file, open it from your Downloads folder and allow installation from this source only when you trust it. Turn that permission off again afterwards." },
    { h: "Keep your files organized", p: "Create a folder for each class or subject and rename files clearly. This saves time before exams and when you want to share notes with friends." },
    { h: "Study smart, not just hard", p: "Short, focused sessions with small breaks work better than studying for hours without rest. Revise the same notes again after one day, one week and one month." },
    { h: "Make a study timetable", p: "Write a simple daily timetable with fixed slots for each subject. A clear plan removes confusion and saves the time you waste deciding what to study next." },
    { h: "Sleep is part of studying", p: "Your brain stores what you learned while you sleep. Try to sleep 7 to 8 hours, especially before an exam day." },
    { h: "Use active recall", p: "After reading a topic, close the book and try to write it from memory. Testing yourself is stronger than reading again and again." },
    { h: "Drink enough water", p: "Even mild thirst can reduce focus. Keep a bottle near your desk and take small sips through your study session." },
    { h: "Keep a doubt notebook", p: "Write every doubt in one notebook as soon as it comes. Clear them in one sitting with a teacher or friend so nothing piles up." },
    { h: "Solve previous papers", p: "Practising old papers shows the real exam pattern. Time yourself so speed and accuracy improve together." },
    { h: "Avoid distractions", p: "Put your phone on silent while studying and check it only during breaks. Even a short notification can break your concentration for minutes." },
    { h: "Study with friends", p: "A small group helps you explain topics aloud, and explaining is one of the best ways to learn. Keep the group focused and short." },
    { h: "Take care of your eyes", p: "Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds. Read in good light and hold the screen at a comfortable distance." },
    { h: "Use your phone wisely", p: "Your phone can hold notes, videos and flashcards. Turn it into a study tool by organizing apps and removing the ones that waste time." },
    { h: "Revise formulas daily", p: "Keep a one-page formula sheet and read it every morning. Small daily revision beats a last-night rush." },
    { h: "Eat light and healthy", p: "Fruits, nuts and home food keep energy steady. Heavy and oily meals make you sleepy during study hours." },
    { h: "Make short notes", p: "After each chapter, write a half-page summary in your own words. These notes are perfect for quick revision before exams." },
    { h: "Stay positive", p: "Everyone learns at a different speed. Celebrate small progress and do not compare your day one with someone else's day hundred." },
    { h: "Share what you learn", p: "Teaching a younger friend or sibling makes your own concepts stronger. Share useful resources and help others grow too." },
    { h: "Almost there", p: "Thank you for waiting. The ads on this site keep these resources free. Your download link appears right after the last countdown." }
  ],

  /* ADS: paste the key / size from your ad network for each place.
     host = domain of the invoke.js script. minWidth hides the ad on small screens. */
  ads: {
    top:          { host: "www.highperformanceformat.com", key: "cfd65b36b045c07cef9a05df77feefad", w: 320, h: 50 },
    belowHeading: { host: "www.highrevenueformat.com", key: "7999654a3a35eff45688cff161a625e9", w: 300, h: 250 },
    between:      { host: "www.highrevenueformat.com", key: "1c94fa584a396abc50c7723d0e098ed4", w: 468, h: 60, minWidth: 500 },
    aboveTimer:   { host: "www.highrevenueformat.com", key: "0c17a1d10fe847fc28802f322a670fb9", w: 320, h: 50 },
    belowTimer:   { host: "www.highrevenueformat.com", key: "faba2f7541fd81c5380c3ed9bc08d21a", w: 160, h: 300 },
    bottom:       { host: "www.highrevenueformat.com", key: "0796fee33dfc2504b467d46de6de2a99", w: 728, h: 90, minWidth: 760 },
    left:         { host: "www.highrevenueformat.com", key: "fa55270959fc04ef3b4349a4dc9e68fc", w: 160, h: 600, minWidth: 1180 },
    right:        { host: "www.highrevenueformat.com", key: "faba2f7541fd81c5380c3ed9bc08d21a", w: 160, h: 300, minWidth: 1180 },
    feed:         { host: "www.highrevenueformat.com", key: "7999654a3a35eff45688cff161a625e9", w: 300, h: 250 },
    mid:          { host: "www.highrevenueformat.com", key: "1c94fa584a396abc50c7723d0e098ed4", w: 468, h: 60, minWidth: 500 },
    wide:         { host: "www.highrevenueformat.com", key: "0796fee33dfc2504b467d46de6de2a99", w: 728, h: 90, minWidth: 760 },
    banner:       { host: "www.highrevenueformat.com", key: "0c17a1d10fe847fc28802f322a670fb9", w: 320, h: 50 },
    tall:         { host: "www.highrevenueformat.com", key: "faba2f7541fd81c5380c3ed9bc08d21a", w: 160, h: 300 }
  },

  /* Text of the extra pages. Each string is one paragraph. */
  pages: {
    about: { title: "About AP STUDY", text: [
      "AP STUDY is a free learning resource hub for students. We bring study notes, PDFs, batch material, apps and handy tools together in one clean place, so you do not have to search through many channels and links.",
      "How it works: choose a resource, complete the short steps, and you get the link. The ads you see on the site are what keep everything free for everyone, so thank you for your patience.",
      "New resources are added regularly and appear on the home page automatically. Our community lives on Telegram, where we share updates, new material and announcements.",
      "Our goal is simple: make good study material easy to find for every student, on any phone, without paying anything."] },
    contact: { title: "Contact Us", text: [
      "Found a broken link, want to request a resource, or have a suggestion? We would love to hear from you.",
      "The fastest way is Telegram: message us on @apstudymods. You can also send an email using the button below.",
      "Copyright owners who want something removed can write to us with the page link and we will review it promptly."] },
    privacy: { title: "Privacy Policy", text: [
      "AP STUDY does not ask you to create an account and we do not collect your name, phone number or email when you browse.",
      "Your browser stores a few small settings on your own device, such as light or dark theme, your step progress, saved items and ratings. You can clear them any time from your browser settings.",
      "This site shows advertisements from third-party ad networks. These networks may use cookies or similar technology to show ads and measure performance. Please read their own privacy policies to learn more.",
      "We may use a privacy-friendly analytics tool to count page visits. Resource links lead to external sites such as Telegram, which have their own privacy policies.",
      "This site is meant for general audiences. If you have a question about this policy, contact us using the Contact page."] },
    disclaimer: { title: "Disclaimer", text: [
      "All material on AP STUDY is shared for educational purposes only. We try to keep information correct and links working, but we do not promise that every file is complete, up to date or error free.",
      "Names, logos and trademarks of apps, courses and brands belong to their respective owners. AP STUDY is not affiliated with or endorsed by them unless clearly stated.",
      "Download links point to third-party locations. Please check files before opening them and use them at your own risk. We are not responsible for content on external websites or channels.",
      "If you are a rights holder and want content removed, please use the Contact page."] },
    terms: { title: "Terms of Use", text: [
      "By using AP STUDY you agree to these terms. Please use the site and its resources lawfully and respectfully.",
      "You may not misuse the site, try to bypass its steps by technical tricks, interfere with advertisements, or copy the site and present it as your own.",
      "Resources may be changed, moved or removed at any time without notice. We may update these terms from time to time, and continued use means you accept the changes.",
      "The site is provided as is, without warranties. To the extent allowed by law, AP STUDY is not liable for any loss arising from the use of the site or its links."] }
  }
};

/* RESOURCES are loaded from your Google Sheet (see CONFIG.sheetId). Nothing to edit here. */
let resources = [];

function parseCSV(t) {
  const rows = []; let r = [], c = "", q = false;
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (q) { if (ch === '"') { if (t[i + 1] === '"') { c += '"'; i++; } else q = false; } else c += ch; }
    else if (ch === '"') q = true;
    else if (ch === ",") { r.push(c); c = ""; }
    else if (ch === "\n" || ch === "\r") { if (ch === "\r" && t[i + 1] === "\n") i++; r.push(c); rows.push(r); r = []; c = ""; }
    else c += ch;
  }
  if (c || r.length) { r.push(c); rows.push(r); }
  return rows;
}
const slug = s => s.toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
const firstUrl = s => (String(s).match(/https?:\/\/[^\s|\]\[,;"]+/) || [""])[0];

async function loadResources() {
  const url = `https://docs.google.com/spreadsheets/d/${CONFIG.sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(CONFIG.sheetName)}&_=${Date.now()}`;
  try {
    const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 8000);
    const res = await fetch(url, { signal: ctl.signal }); clearTimeout(to);
    if (!res.ok) throw new Error("sheet");
    const [head, ...rows] = parseCSV(await res.text());
    const cols = head.map(x => x.trim().toLowerCase());
    const get = (row, k) => (row[cols.indexOf(k)] || "").trim();
    const seen = new Set(), list = []; let lg = "";
    for (const row of rows) {
      const title = get(row, "title"), dl = firstUrl(get(row, "downloadurl"));
      if (get(row, "category").toLowerCase() === "logo") { lg = firstUrl(get(row, "image")); continue; }
      if (!title || !dl) continue;
      let id = slug(get(row, "id")) || slug(title) || "item";
      while (seen.has(id)) id += "-2";
      seen.add(id);
      list.push({ id, title, category: get(row, "category") || "General", description: get(row, "description"), image: firstUrl(get(row, "image")), downloadUrl: dl,
        rating: Math.min(5, Math.max(0, parseFloat(get(row, "rating")) || 0)), downloads: get(row, "downloads"), views: get(row, "views"), size: get(row, "size"), version: get(row, "version"), updated: get(row, "updated") });
    }
    if (!list.length) throw new Error("empty");
    const changed = JSON.stringify(list) + lg !== JSON.stringify(resources) + siteLogo;
    siteLogo = lg; store.set("logo-cache", lg); applyLogo();
    resources = list; store.set("res-cache", JSON.stringify(list));
    return changed;
  } catch {
    try { const c = JSON.parse(store.get("res-cache") || "null"); if (Array.isArray(c) && c.length) resources = c; } catch { /* no cache */ }
  }
  return false;
}

/* =====================================================================
   APP CODE  -  no need to edit below this line
   ===================================================================== */
const app = document.getElementById("app");
let timer = null;

const h = (tag, attrs = {}, ...kids) => {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) if (v !== false && v != null) e.setAttribute(k, v);
  e.append(...kids.flat().filter(x => x != null));
  return e;
};
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage blocked */ } }
};
const dec = s => { try { return decodeURIComponent(s); } catch { return ""; } };
const isTg = u => { try { return new URL(u).hostname === "t.me"; } catch { return false; } };
const safeUrl = u => { try { const x = new URL(u, location.href); return /^https?:$/.test(x.protocol) ? x.href : "#"; } catch { return "#"; } };
let siteLogo = store.get("logo-cache") || "";

/* ---------- ads: each ad runs inside its own sandboxed iframe, only after its slot exists ---------- */
const adSlot = (name, n, cls = "") => h("div", { class: "ad " + cls, id: "ad-" + name + (n !== undefined ? "-" + n : ""), "data-slot": name }, h("small", {}, "Advertisement"), h("div", { class: "ad-box" }));
const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); loadAd(e.target); } }), { rootMargin: "400px" }) : null;
function loadAd(el) {
  const a = CONFIG.ads[el.dataset.slot], box = el.querySelector(".ad-box");
  const f = h("iframe", { title: "Advertisement", width: a.w, height: a.h, sandbox: "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" });
  f.srcdoc = `<body style="margin:0"><script>atOptions={'key':'${a.key}','format':'iframe','height':${a.h},'width':${a.w},'params':{}};<\/script><script src="https://${a.host}/${a.key}/invoke.js"><\/script></body>`;
  box.replaceChildren(f);
}
/* Ads load only when they come near the screen (keeps the site fast). */
function mountAds(root) {
  root.querySelectorAll(".ad:not([data-on])").forEach(el => {
    el.dataset.on = "1";
    const a = CONFIG.ads[el.dataset.slot];
    if (!a || !a.key || innerWidth < (a.minWidth || 0)) { el.hidden = true; return; }
    el.querySelector(".ad-box").style.minHeight = a.h + "px";
    io ? io.observe(el) : loadAd(el);
  });
}
const withAds = (list, every) => list.flatMap((r, i) => (i + 1) % every === 0 && i < list.length - 1 ? [card(r), adSlot("feed", i, "wide")] : [card(r)]);
const tgUsers = () => CONFIG.telegram.filter(u => /^[A-Za-z0-9_]{4,32}$/.test(u));
const tgCard = () => h("section", { class: "tg" }, h("h3", {}, "📢 Join our Telegram channels"), h("p", {}, "Free APK mods, notes and edit resources. Tap a channel to join."),
  h("div", { class: "tgs" }, tgUsers().map(u => h("a", { class: "tgbtn", href: "https://t.me/" + u, target: "_blank", rel: "noopener noreferrer", "aria-label": "JOIN NOW @" + u }, h("span", {}, "✈ @" + u), h("b", {}, "JOIN NOW")))));
const AD_CYCLE = ["feed", "mid", "banner", "feed", "wide", "tall", "feed"];
const longContent = n => {
  const list = CONFIG.waitContent, out = [], count = Math.max(1, (CONFIG.pageScreens || 25) - 3);
  for (let i = 0; i < count; i++) {
    const t = list[i % list.length];
    out.push(h("section", { class: "sec" }, h("h2", {}, t.h), h("p", {}, t.p),
      adSlot(AD_CYCLE[(2 * i) % AD_CYCLE.length], n + "-" + i + "a", "wide"),
      i % 3 === 2 ? tgCard() : null,
      adSlot(AD_CYCLE[(2 * i + 1) % AD_CYCLE.length], n + "-" + i + "b", "wide")));
  }
  return out;
};

function startMascot() {
  const M = CONFIG.mascot, tg = tgUsers();
  if (!M.enabled || !tg.length) return;
  let i = 0, off = false;
  const text = h("span"), link = h("a", { class: "tgbtn", target: "_blank", rel: "noopener noreferrer" });
  const close = h("button", { class: "x", type: "button", "aria-label": "Close" }, "✕");
  const el = h("aside", { class: "mascot", "aria-label": "Telegram invitation" }, h("div", { class: "bubble" }, close, h("p", {}, text), link), h("div", { class: "doll", "aria-hidden": "true" }, M.emoji));
  close.onclick = () => { off = true; el.remove(); };
  document.body.append(el);
  const show = () => {
    if (off) return;
    const u = tg[i % tg.length], line = M.lines[i % M.lines.length]; i++;
    text.textContent = line.replace("{channel}", "@" + u);
    link.href = "https://t.me/" + u; link.textContent = "✈ JOIN NOW";
    el.classList.add("in");
    setTimeout(() => { el.classList.remove("in"); setTimeout(show, M.everySec * 1000); }, M.stayForSec * 1000);
  };
  setTimeout(show, M.firstAfterSec * 1000);
}

/* ---------- building blocks ---------- */
const thumb = r => {
  const d = h("div", { class: "thumb" }, h("span", {}, (r.title || "?")[0]));
  if (r.image) { const i = h("img", { src: r.image, alt: "", loading: "lazy" }); i.onerror = () => i.remove(); d.append(i); }
  return d;
};
const num = v => { const m = String(v).trim().toLowerCase().match(/^([\d.,]+)\s*([km])?/); if (!m) return 0; const x = parseFloat(m[1].replace(/,/g, "")) || 0; return m[2] === "k" ? x * 1e3 : m[2] === "m" ? x * 1e6 : x; };
const sig = (id, n) => { let x = 5381; for (const c of id + "|" + n + "|" + CONFIG.secret) x = ((x << 5) + x + c.charCodeAt(0)) | 0; return (x >>> 0).toString(36); };
const getProg = id => { const [n, g] = (store.get("prog:" + id) || "").split("."), v = parseInt(n, 10); return v >= 1 && v <= CONFIG.stepDurations.length + 1 && g === sig(id, v) ? v : 1; };
const setProg = (id, n) => store.set("prog:" + id, n + "." + sig(id, n));
const getFavs = () => { try { return JSON.parse(store.get("favs") || "[]"); } catch { return []; } };
let hot = new Set();
const calcHot = () => { hot = new Set([...resources].filter(r => num(r.downloads) > 0).sort((a, b) => num(b.downloads) - num(a.downloads)).slice(0, 3).map(r => r.id)); };
const chips = r => {
  const it = [], mine = parseInt(store.get("rate:" + r.id), 10);
  if (r.rating > 0) it.push("⭐ " + r.rating.toFixed(1));
  if (mine) it.push("You: " + mine + "★");
  if (r.views) it.push("👁 " + r.views);
  if (r.downloads) it.push("📥 " + r.downloads);
  if (r.size) it.push("📦 " + r.size);
  if (r.version) it.push("🏷 " + r.version);
  if (r.updated) it.push("🕒 " + r.updated);
  return it.length ? h("div", { class: "chips" }, it.map(t => h("span", {}, t))) : null;
};
const heart = r => {
  const b = h("button", { type: "button", class: "fav", "aria-label": "Save " + r.title });
  const paint = () => { const on = getFavs().includes(r.id); b.textContent = on ? "♥" : "♡"; b.setAttribute("aria-pressed", String(on)); };
  b.onclick = () => { const f = getFavs(); store.set("favs", JSON.stringify(f.includes(r.id) ? f.filter(x => x !== r.id) : [...f, r.id])); paint(); };
  paint(); return b;
};
const card = r => h("article", { class: "card" }, thumb(r),
  h("div", { class: "cb" }, h("span", { class: "cat" }, (hot.has(r.id) ? "🔥 Popular · " : "") + r.category), h("h3", {}, r.title), h("p", {}, r.description), chips(r),
    h("div", { class: "row" }, h("a", { class: "btn", href: "#/r/" + encodeURIComponent(r.id), "aria-label": "Get resource: " + r.title }, "Get resource"), heart(r))));
const statsBar = () => {
  const rated = resources.filter(r => r.rating > 0), avg = rated.length ? (rated.reduce((t, r) => t + r.rating, 0) / rated.length).toFixed(1) : null;
  return h("div", { class: "stats" }, [`📚 ${resources.length} resources`, `🗂 ${new Set(resources.map(r => r.category)).size} categories`, avg ? `⭐ ${avg} average rating` : null, "🔄 updates automatically"].filter(Boolean).map(t => h("span", {}, t)));
};
function loadAnalytics() {
  const A = CONFIG.analytics || {};
  if (/^[a-z0-9-]{2,}$/i.test(A.goatcounter || "")) document.head.append(h("script", { async: "", src: "https://gc.zgo.at/count.js", "data-goatcounter": `https://${A.goatcounter}.goatcounter.com/count`, "data-goatcounter-settings": '{"no_onload":true}' }));
  if (/^G-[A-Z0-9]{4,}$/.test(A.ga4 || "")) {
    document.head.append(h("script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=" + A.ga4 }));
    window.dataLayer = window.dataLayer || []; window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date()); gtag("config", A.ga4, { send_page_view: false });
  }
}
const track = () => { try { window.goatcounter?.count?.({ path: location.pathname + location.hash }); window.gtag?.("event", "page_view", { page_location: location.href, page_title: document.title }); } catch { /* ignore */ } };
const cats = () => [...new Set(resources.map(r => r.category))].sort();

/* ---------- views ---------- */
const ui = { q: "", cat: "", sort: "", fav: false };
let lastRoute = null;
function viewHome() {
  return [h("section", { class: "hero" }, h("h1", {}, CONFIG.siteName), h("p", {}, CONFIG.tagline), h("a", { class: "btn", href: "#/resources" }, "Browse resources")),
    /* ============ AD SLOT 3 (between content): CONFIG.ads.between ============ */
    statsBar(), adSlot("between"), tgCard(), h("h2", {}, "All apps and resources"), ...viewResources("", true)];
}
function viewResources(cat, home) {
  const q = h("input", { type: "search", id: "q", placeholder: "Search resources", "aria-label": "Search resources" });
  const s = h("select", { id: "cat", "aria-label": "Filter by category" }, h("option", { value: "" }, "All categories"), cats().map(c => h("option", { value: c }, c)));
  const so = h("select", { id: "sort", "aria-label": "Sort resources" }, [["", "Sheet order"], ["new", "Newest first"], ["rate", "Top rated"], ["dl", "Most downloaded"], ["az", "A to Z"]].map(([v, t]) => h("option", { value: v }, t)));
  const fv = h("button", { type: "button", class: "chip-btn", "aria-pressed": String(ui.fav) }, "♥ Saved");
  q.value = ui.q; so.value = ui.sort; fv.classList.toggle("on", ui.fav);
  s.value = cats().includes(cat) ? cat : (cats().includes(ui.cat) ? ui.cat : "");
  const g = h("div", { class: "grid" });
  const upd = () => {
    ui.q = q.value; ui.cat = s.value; ui.sort = so.value;
    const t = q.value.trim().toLowerCase(), favs = getFavs();
    let l = resources.filter(r => (!s.value || r.category === s.value) && (!ui.fav || favs.includes(r.id)) && (r.title + " " + r.description + " " + r.category).toLowerCase().includes(t));
    if (ui.sort === "new") l = [...l].reverse();
    else if (ui.sort === "rate") l = [...l].sort((a, b) => b.rating - a.rating);
    else if (ui.sort === "dl") l = [...l].sort((a, b) => num(b.downloads) - num(a.downloads));
    else if (ui.sort === "az") l = [...l].sort((a, b) => a.title.localeCompare(b.title));
    g.replaceChildren(...(l.length ? withAds(l, 4) : [h("p", { class: "empty" }, ui.fav ? "No saved items yet. Tap ♡ on a card to save it." : "No resources match. Try another word or category.")])); mountAds(g);
  };
  fv.onclick = () => { ui.fav = !ui.fav; fv.setAttribute("aria-pressed", String(ui.fav)); fv.classList.toggle("on", ui.fav); upd(); };
  q.oninput = s.onchange = so.onchange = upd; upd();
  return [...(home ? [] : [h("h1", {}, "Resources")]), h("div", { class: "filters" }, q, s, so, fv), g];
}
function viewCategories() {
  return [h("h1", {}, "Categories"), h("div", { class: "grid" }, cats().map(c => {
    const n = resources.filter(r => r.category === c).length;
    return h("a", { class: "tile", href: "#/resources/" + encodeURIComponent(c) }, h("h3", {}, c), h("small", {}, n + (n === 1 ? " resource" : " resources")));
  }))];
}
function viewPage(key) {
  const p = CONFIG.pages[key];
  const out = [h("h1", {}, p.title), h("div", { class: "prose" }, p.text.flatMap((t, i) => [h("p", {}, t), adSlot("feed", "p" + i)]))];
  out.push(tgCard());
  if (key === "contact" && CONFIG.contactEmail) out[1].append(h("a", { class: "btn", href: "mailto:" + CONFIG.contactEmail }, "Email us"));
  return out;
}
function viewFlow(id, stepArg) {
  const r = resources.find(x => x.id === id);
  if (!r) return [h("h1", {}, "Resource not found"), h("p", {}, "This link may be old."), h("a", { class: "btn", href: "#/resources" }, "Browse resources")];
  const total = CONFIG.stepDurations.length, n = getProg(r.id);
  const go = p => "#/r/" + encodeURIComponent(r.id) + "/" + (p > total ? "ready" : p);
  const want = stepArg === "ready" ? total + 1 : parseInt(stepArg, 10);
  /* Every step is its own page. A page ahead of your saved progress is never shown. */
  if (want !== n) { location.replace(go(n)); return [h("p", { class: "empty" }, "Loading...")]; }

  if (n > total) {   /* all steps done: final page */
    const stars = h("div", { class: "stars", role: "group", "aria-label": "Rate this resource" }), msg = h("p", { class: "note" });
    const paint = () => { const v = parseInt(store.get("rate:" + r.id), 10) || 0; [...stars.children].forEach((b, i) => { b.textContent = i < v ? "★" : "☆"; b.setAttribute("aria-pressed", String(i < v)); }); msg.textContent = v ? `Your rating: ${v}/5 (saved on this device). Thanks!` : "Tap a star to rate this resource."; };
    for (let i = 1; i <= 5; i++) { const b = h("button", { type: "button", class: "star", "aria-label": `${i} star${i > 1 ? "s" : ""}` }); b.onclick = () => { store.set("rate:" + r.id, i); paint(); }; stars.append(b); }
    paint();
    const shareUrl = location.href.split("#")[0] + "#/r/" + encodeURIComponent(r.id);
    const share = h("button", { type: "button", class: "btn alt" }, "🔗 Share");
    share.onclick = async () => { try { if (navigator.share) await navigator.share({ title: r.title, url: shareUrl }); else { await navigator.clipboard.writeText(shareUrl); share.textContent = "✅ Link copied"; } } catch { /* cancelled */ } };
    const dl = h("a", { class: "btn big ready-btn", href: safeUrl(r.downloadUrl), target: "_blank", rel: "noopener noreferrer" }, h("span", {}, "✅ " + CONFIG.readyText), h("small", {}, isTg(r.downloadUrl) ? CONFIG.joinText : CONFIG.downloadText));
    return [h("div", { class: "flow" }, h("div", { class: "ready" }, h("h1", {}, "Your resource is ready"), thumb(r), h("h2", {}, r.title), h("p", {}, r.description), chips(r), h("div", { class: "contbox small" }, dl), h("div", { class: "row center" }, share), h("h3", {}, "Rate this resource"), stars, msg), tgCard(), adSlot("banner", "r"))];
  }

  const d = CONFIG.stepDurations[n - 1] || 30;
  const num2 = h("b", {}, d), ring = h("div", { class: "ring", role: "timer", "aria-label": "Countdown" }, num2, h("small", {}, "seconds"));
  const note = h("p", { class: "note", "aria-live": "polite" });
  const btn = h("button", { class: "btn big", type: "button", disabled: "" }, n < total ? `Continue to step ${n + 1}` : "Finish and get my resource");
  const end = Date.now() + d * 1000;
  const tick = () => {
    const left = Math.max(0, Math.ceil((end - Date.now()) / 1000));
    num2.textContent = left; ring.style.setProperty("--p", left / d * 100);
    if (left) note.textContent = CONFIG.waitText.replace("{s}", left);
    else { clearInterval(timer); ring.classList.add("done"); num2.textContent = "✓"; note.replaceChildren("✅ Time complete! Scroll down to continue ", h("span", { class: "arrow" }, "⬇")); btn.disabled = false; }
  };
  btn.onclick = () => { if (Date.now() < end) return; setProg(r.id, n + 1); location.hash = go(n + 1); scrollTo(0, 0); };
  timer = setInterval(tick, 250); tick();
  const dots = h("div", { class: "dots", "aria-hidden": "true" }, Array.from({ length: total }, (_, k) => h("i", { class: k < n - 1 ? "d" : k === n - 1 ? "c" : "" })));
  return [h("div", { class: "flow" }, h("p", { class: "stepno" }, `Step ${n} of ${total}`), h("h1", {}, r.title),
    h("div", { class: "bar", role: "progressbar", "aria-label": "Progress", "aria-valuemin": 0, "aria-valuemax": total, "aria-valuenow": n - 1 }, h("i", { style: `width:${(n - 1) / total * 100}%` })),
    dots, h("p", { class: "status" }, `✅ Completed: ${n - 1} steps · ⏳ Remaining: ${total - n + 1} steps`),
    /* ===== AD SLOT 2 (below heading): CONFIG.ads.belowHeading ===== */
    adSlot("belowHeading"),
    h("p", { class: "info" }, CONFIG.stepText[n - 1] || ""),
    /* ===== AD SLOT 3 (between content): CONFIG.ads.between ===== */
    adSlot("between"),
    /* ===== AD SLOT 4 (above countdown): CONFIG.ads.aboveTimer ===== */
    adSlot("aboveTimer"),
    h("div", { class: "timerbox" }, ring, note),
    /* ===== AD SLOT 5 (below countdown): CONFIG.ads.belowTimer ===== */
    adSlot("belowTimer"),
    tgCard(),
    ...longContent(n),
    /* Continue button is at the very bottom, with empty space around it (no ads touching it). */
    h("div", { class: "contbox" }, h("p", { class: "note" }, `You reached the end of step ${n} of ${total}.`), btn))];
}

/* ---------- router ---------- */
function render(keep) {
  clearInterval(timer); calcHot();
  const [route = "", arg = "", arg2 = ""] = location.hash.replace(/^#\/?/, "").split("/");
  if (route !== lastRoute) { ui.q = ""; ui.cat = ""; lastRoute = route; }
  let title = "", view;
  if (route === "resources") { title = "Resources"; view = viewResources(dec(arg)); }
  else if (route === "categories") { title = "Categories"; view = viewCategories(); }
  else if (route === "r") { const r = resources.find(x => x.id === dec(arg)); title = r ? r.title : "Not found"; view = viewFlow(dec(arg), dec(arg2)); }
  else if (Object.hasOwn(CONFIG.pages, route)) { title = CONFIG.pages[route].title; view = viewPage(route); }
  else view = viewHome();
  document.title = (title ? title + " | " : "") + CONFIG.siteName;
  app.replaceChildren(...view);
  mountAds(app);
  document.querySelectorAll(".top nav a").forEach(a => a.toggleAttribute("aria-current", a.getAttribute("href") === "#/" + route || (route === "" && a.getAttribute("href") === "#/")));
  if (!keep) { scrollTo(0, 0); track(); }
}

/* ---------- start ---------- */
document.getElementById("siteName").textContent = CONFIG.siteName;
document.getElementById("copy").textContent = "© " + new Date().getFullYear() + " " + CONFIG.siteName;
const logo = document.getElementById("logo");
logo.src = siteLogo || CONFIG.logo; logo.onerror = () => { logo.hidden = true; };
function applyLogo() { if (siteLogo) { logo.hidden = false; logo.src = siteLogo; } }
const root = document.documentElement;
root.dataset.theme = store.get("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
document.getElementById("theme").onclick = () => { root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark"; store.set("theme", root.dataset.theme); };
addEventListener("hashchange", () => render());
mountAds(document);
app.replaceChildren(h("p", { class: "empty" }, "Loading..."));
loadResources().then(() => render());
startMascot();
loadAnalytics();

/* Auto refresh: re-read the sheet regularly and when the tab becomes visible again.
   The page is redrawn only when the sheet changed, and never while a countdown is running. */
async function poll() {
  if (document.hidden) return;
  if (await loadResources() && !/^#\/r\//.test(location.hash)) render(true);
}
setInterval(poll, Math.max(10, CONFIG.refreshSeconds || 30) * 1000);
document.addEventListener("visibilitychange", poll);

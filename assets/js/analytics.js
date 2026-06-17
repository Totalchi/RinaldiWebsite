/* ── Anonymous usage analytics (first-party, Supabase) ── */
function initAnalytics() {
  const cfg = window.SDM_CONFIG;
  if (!cfg || !cfg.SUPABASE_URL) return;
  const ENDPOINT = cfg.SUPABASE_URL + '/rest/v1/analytics_events';
  const KEY = cfg.SUPABASE_ANON_KEY;

  let sid = sessionStorage.getItem('sdm-sid');
  if (!sid) {
    sid = (crypto.randomUUID && crypto.randomUUID()) || ('s-' + Date.now() + '-' + Math.random().toString(36).slice(2));
    sessionStorage.setItem('sdm-sid', sid);
  }
  const device = window.matchMedia('(max-width: 760px)').matches ? 'mobile' : 'desktop';
  const page = location.pathname.split('/').pop() || 'index.html';
  const curLang = () => localStorage.getItem('sdm-lang') || 'it';
  let geo = {};
  let lastSection = page;

  function send(event_type, label, value) {
    const body = Object.assign({
      session_id: sid, event_type,
      label: label != null ? String(label).slice(0, 80) : null,
      value: value != null ? value : null,
      device, lang: curLang()
    }, geo);
    try {
      fetch(ENDPOINT, {
        method: 'POST', keepalive: true,
        headers: { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
        body: JSON.stringify(body)
      }).catch(function () {});
    } catch (e) {}
  }

  /* pageview, after a best-effort IP geolocation */
  (async () => {
    try {
      const ctrl = new AbortController();
      const to = setTimeout(() => ctrl.abort(), 3000);
      const r = await fetch('https://ipapi.co/json/', { signal: ctrl.signal });
      clearTimeout(to);
      if (r.ok) {
        const d = await r.json();
        geo = {
          city: d.city || null, region: d.region || null,
          country: d.country_name || d.country || null,
          latitude: d.latitude || null, longitude: d.longitude || null
        };
      }
    } catch (e) {}
    send('pageview', page);
  })();

  /* section visibility (once each) */
  if ('IntersectionObserver' in window) {
    const seen = new Set();
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const name = el.dataset.track || el.id || (el.className && el.className.toString().split(' ')[0]) || 'section';
        lastSection = name;
        if (!seen.has(name)) { seen.add(name); send('section', name); }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('section, .cta-band, .pull-quote, .stats-row, [data-track]').forEach(s => io.observe(s));
  }

  /* clicks on links/buttons */
  document.addEventListener('click', e => {
    const el = e.target.closest('a, button');
    if (!el) return;
    let label = el.dataset.track || el.getAttribute('aria-label') || (el.textContent || '').replace(/\s+/g, ' ').trim();
    const href = el.getAttribute && el.getAttribute('href');
    if (href && href.indexOf('tel:') === 0) label = 'tel ' + href.slice(4);
    if (label) send('click', label);
  }, true);

  /* time on page */
  let start = Date.now(), durationSent = false;
  function flushDuration() {
    if (durationSent) return;
    durationSent = true;
    send('duration', page, Math.round((Date.now() - start) / 1000));
  }
  window.addEventListener('pagehide', flushDuration);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flushDuration(); });

  /* heartbeat keeps the session "live" in the dashboard */
  setInterval(() => { if (document.visibilityState === 'visible') send('heartbeat', lastSection); }, 30000);

  /* precise location (consent already given) — requested once per session */
  if (navigator.geolocation && !sessionStorage.getItem('sdm-geo')) {
    sessionStorage.setItem('sdm-geo', '1');
    navigator.geolocation.getCurrentPosition(async pos => {
      const lat = pos.coords.latitude, lng = pos.coords.longitude;
      let city = null, region = null, country = null;
      try {
        const r = await fetch('https://nominatim.openstreetmap.org/reverse?format=json&zoom=10&lat=' + lat + '&lon=' + lng);
        if (r.ok) {
          const d = await r.json(); const a = d.address || {};
          city = a.city || a.town || a.village || a.municipality || null;
          region = a.state || null; country = a.country || null;
        }
      } catch (e) {}
      geo = { city, region, country, latitude: lat, longitude: lng };
      send('geo', 'gps');
    }, () => {}, { timeout: 8000, maximumAge: 600000 });
  }
}


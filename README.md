# Studio Dentistico Rinaldi Montalbano — website

Statische website (HTML + CSS + vanilla JS, geen build-stap) met een Supabase-backend
voor team-beheer en anonieme analytics. Tweetalig (Italiaans standaard, Engels via
client-side toggle op dezelfde URL). Live gehost op Vercel.

## Projectstructuur

```
RinaldiWebsite/
├── index.html                  # Home
├── chi-siamo.html              # Over ons — team + biografieën
├── trattamenti.html            # Behandelingen
├── urgenze.html                # Spoed / urgenze
├── domande-frequenti.html      # FAQ (FAQPage structured data)
├── contatti.html               # Contact (adres, Google Maps, openingsuren)
├── privacy.html                # Privacy / GDPR
├── cookie.html                 # Cookiebeleid
├── admin.html                  # Intern dashboard (team-CRUD + analytics) — los, noindex
│
├── assets/
│   ├── css/
│   │   ├── variables.css        # :root design-tokens (kleuren, fonts, spacing) + Google Fonts @import
│   │   ├── base.css             # reset, layout-containers, typografie-schaal, knoppen
│   │   ├── components.css       # nav, hero, secties, team, footer, cookiebar … (responsive per component)
│   │   └── utilities.css        # reveal-animaties + achtergrond-helpers
│   │
│   ├── js/
│   │   ├── config.js            # window.SDM_CONFIG — Supabase-URL/key + WhatsApp-nummer
│   │   ├── i18n.js              # vertaalwoordenboek (IT/EN) + statische-tekstvertaling
│   │   ├── team.js              # dynamische team-kaarten uit Supabase (loadTeam/renderTeam)
│   │   ├── analytics.js         # first-party analytics tracking (initAnalytics)
│   │   └── main.js              # init bij DOMContentLoaded: nav, taalwissel, consent, carousel, WhatsApp
│   │
│   └── images/
│       └── favicon.svg
│
├── og-image.png                # social preview (1200×630) — via absolute URL, blijft in root
├── og-image.svg                # bewerkbare bron voor og-image (niet mee-gedeployed)
├── sitemap.xml                 # SEO sitemap (8 publieke pagina's)
├── robots.txt                  # crawler-config (sluit /admin.html uit, verwijst sitemap)
├── vercel.json                 # security-headers + CSP
├── supabase_setup.sql          # DB-schema (niet mee-gedeployed, zie .vercelignore)
└── README.md                   # dit bestand
```

## CSS-laadvolgorde

De stylesheets worden in deze volgorde geladen (de cascade hangt hiervan af):

`variables.css` → `base.css` → `components.css` → `utilities.css`

De opdeling volgt exact de bron-vololgorde van de oorspronkelijke `style.css`, zodat de
cascade identiek blijft. Responsive regels (`@media`) staan bewust **bij hun component**
in `components.css` in plaats van in een apart `responsive.css` — zo vind je alles over
één onderdeel op één plek, en blijft de volgorde gegarandeerd correct.

## JS-laadvolgorde

```
config.js → i18n.js → team.js → analytics.js → main.js
```

Het zijn gewone (classic) scripts die een gedeelde globale scope delen: `i18n.js`,
`team.js` en `analytics.js` definiëren de woordenboeken en functies, en `main.js` draait
de init bij `DOMContentLoaded` en gebruikt die. De volgorde moet behouden blijven.

## Ontwikkelen & deployen

- Lokaal bekijken: open `index.html` via een statische server (bv. `npx serve` of de
  Live Server-extensie). Direct als `file://` openen werkt niet door de `fetch`-calls.
- **Host = Vercel** (niet git-gekoppeld). Na elke wijziging: `vercel deploy --prod`
  vanuit de projectmap, én committen + pushen naar GitHub (`Totalchi/RinaldiWebsite`).
- Nieuwe externe bron (script/font/API)? Voeg de origin toe aan de CSP in `vercel.json`,
  anders blokkeert die.

# PluriHub — Project Context for Claude

## What this repo is

Landing page for the **PluriHub Chrome extension** — a side-panel that lets users save, organise, and switch between AI conversations (ChatGPT, Claude, Gemini, and 8 others) without tab chaos.

Stack: React 19 + Vite + Tailwind v4 + Framer Motion + react-router-dom. No backend in this repo — the extension itself uses Supabase (auth + DB) and Stripe (billing).

---

## File map

```
src/
  App.tsx                  — Landing page (hero, features, pricing, FAQ, footer). Main route "/".
  main.tsx                 — BrowserRouter + Routes (/, /privacy, /terms)
  index.css                — Tailwind + custom utilities (dot-grid, marquee, glow, text-gradient)

  components/
    BrowserMockup.tsx      — Interactive product demo (browser chrome + extension side panel)
    ComparisonTable.tsx    — Before/after table
    FAQ.tsx                — Accordion FAQ
    FeatureCard.tsx        — Individual feature card
    LegalContent.tsx       — Shared privacy/terms content (SectionTitle, P, Li, Ul, PrivacyContent, TermsContent)
    PluriHubMark.tsx       — SVG logo mark
    PricingCard.tsx        — Pricing tier card (accepts href + cta props, both point to CHROME_STORE_URL)
    ProviderTape.tsx       — Scrolling marquee of AI provider logos
    WaitlistForm.tsx       — Email capture form (Formspree) — no longer used; kept for reference

  pages/
    PrivacyPage.tsx        — Full page at /privacy (updates document.title)
    TermsPage.tsx          — Full page at /terms (updates document.title)
```

---

## CTA strategy — extension is LIVE on CWS

`CHROME_STORE_URL` is set in `App.tsx` to the live extension URL.

- **Navbar** → "Add to Chrome" button → `CHROME_STORE_URL` (opens in new tab)
- **Hero** → `<motion.a href={CHROME_STORE_URL}>Add to Chrome — Free</motion.a>`
- **Pricing cards** → CTA button in each card links to `CHROME_STORE_URL`
- **Final CTA section** → same download button

`WaitlistForm.tsx` is no longer used but kept in the repo.

---

## Routing

- `/` → `App.tsx` (landing page)
- `/privacy` → `PrivacyPage.tsx`
- `/terms` → `TermsPage.tsx`

Footer links use `<Link>` from react-router-dom. Vite base is `'/'` (not `'./'`).
Legal content lives in `LegalContent.tsx` imported by both page components.

---

## Chrome Web Store audit — status after fixes (April 2026)

### Fixed ✓

| # | Issue | Fix applied |
|---|-------|-------------|
| 2 | "Zero data collection" false claim | Changed to "Your conversations never touch our servers. Only metadata is stored — never chat content." |
| 3 | "Official Chrome Extension" badge | Changed to "Chrome Extension · Launching Soon" |
| 4 | Placeholder `/ID` CTA URLs | All CTAs now use `#waitlist` / `WaitlistForm` |
| 6 | Pro CTA linking to Chrome Store | Pricing CTAs now link to `#waitlist` |
| 7 | Italian text "Chiedi a Gemini" | Replaced with actual Gemini response text |
| 8 | Typo "purihub" | Fixed to "How does PluriHub work?" |
| 9 | Board nav renders nothing | Board panel added (stats + recent chats) |
| 11 | GDPR data controller address missing | Placeholder added to Privacy §1 — **fill in real name/address** |
| 12 | Refund clause illegal under EU law | Terms §7 updated with 14-day EU withdrawal right language |
| 13 | Legal pages don't update document.title | useEffect added to both pages |
| 14 | LegalModal.tsx dead code | Deleted |

### Still pending ⚠

| # | Issue | Action needed |
|---|-------|---------------|
| 1 | Security header stripping (Privacy §7) | §7 reworded to use technical language (`declarativeNetRequest`). **But**: the real fix is in the extension's manifest + CWS submission justification — prepare a written explanation for reviewers explaining why specific domains need header modification for side-panel embedding. |
| 5 | AI provider ToS (embedding via iframes) | Legal review recommended before launch. Document that the extension uses Chrome's native Side Panel API (not arbitrary iframes) and that users log in through the providers' own interfaces. |
| 10 | No cookie consent for Google Fonts | Options: (a) self-host Inter font, (b) add a minimal cookie notice banner. Currently deferred. |
| GDPR §1 | Data controller personal info | Replace `[Your Full Name]` and `[Your Address]` in `LegalContent.tsx` Privacy §1 with real details. |

---

## Providers supported (11 total)

ChatGPT, Claude, Gemini, Perplexity, NotebookLM, Grok, DeepSeek, Mistral, Copilot, Meta AI, Poe.

Hero copy: "ChatGPT, Claude, Gemini, and 8 more tools" — consistent with 11 total.

---

## Pricing tiers

| Plan | Price | Key features |
|------|-------|--------------|
| Free Forever | $0 | 3 workspaces, all providers, Cmd+Shift+P, context preservation |
| Pro | $3.99/mo | Unlimited workspaces, multi-account per AI, custom shortcuts, priority support |

Payment via Stripe (handled outside extension). Subscription management in extension Settings panel.
Pro trial duration: **not yet stated** anywhere on the site — add this before launch (7 days? 14 days?).

---

## Tone / brand notes

- Dark theme only (`#0a0a0a` base). Accent: `#0EA5E9` (sky blue).
- Copy is direct, slightly irreverent. No corporate fluff.
- BETA badge shown in navbar.
- Target: power users, developers, heavy AI users.

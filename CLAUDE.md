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
    PricingCard.tsx        — Pricing tier card (accepts href prop, defaults to '#waitlist')
    ProviderTape.tsx       — Scrolling marquee of AI provider logos
    WaitlistForm.tsx       — Email capture form (Formspree, pre-launch CTA replacement)

  pages/
    PrivacyPage.tsx        — Full page at /privacy (updates document.title)
    TermsPage.tsx          — Full page at /terms (updates document.title)
```

---

## Pre-launch CTA strategy

The extension is **not yet on the Chrome Web Store**. All CTAs use the waitlist flow:

- **Navbar** → `<a href="#waitlist">Get Early Access</a>` (scrolls to hero form)
- **Hero** → `<WaitlistForm size="lg" />` with `id="waitlist"` anchor
- **Pricing cards** → `href="#waitlist"` (both tiers)
- **Final CTA section** → `<WaitlistForm size="lg" />`
- **Footer** → Chrome Store link removed

### When the extension is approved on CWS:
1. Uncomment `CHROME_STORE_URL` in `App.tsx:6` and fill in the real extension ID.
2. Replace `<WaitlistForm />` instances with `<motion.a href={CHROME_STORE_URL}>Add to Chrome — Free</motion.a>`.
3. Update `PricingCard` hrefs from `'#waitlist'` to the real CWS URL.
4. Update the navbar button back to "Add to Chrome".

### Formspree setup (waitlist emails):
- Go to formspree.io → create a free form → copy the endpoint ID.
- Replace `REPLACE_ME` in `WaitlistForm.tsx:4`.

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

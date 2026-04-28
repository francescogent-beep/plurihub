export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[#0EA5E9] text-base font-semibold mt-10 mb-3 first:mt-0">
      {children}
    </h2>
  )
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[#a1a1aa] text-sm leading-relaxed mb-3">{children}</p>
}

export function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-[#a1a1aa] text-sm leading-relaxed flex gap-2">
      <span className="text-[#0EA5E9] mt-0.5 flex-shrink-0">•</span>
      <span>{children}</span>
    </li>
  )
}

export function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2 mb-3">{children}</ul>
}

export function PrivacyContent() {
  return (
    <>
      <p className="text-[#52525b] text-xs mb-8">Last updated: April 2026 · Applies to the PluriHub Chrome Extension</p>

      <SectionTitle>1. Who We Are</SectionTitle>
      <P>PluriHub is a Chrome extension developed and operated by an individual developer based in Spain. For GDPR purposes, the data controller is: <strong className="text-white">[Your Full Name]</strong>, [Your Address], Spain. All privacy-related enquiries: <a href="mailto:info@plurihub.com" className="text-[#0EA5E9] hover:underline">info@plurihub.com</a></P>

      <SectionTitle>2. Our Approach to Data</SectionTitle>
      <P>PluriHub is built with a privacy-first philosophy. We collect the absolute minimum data necessary to operate the service. We do not store sensitive information in readable form — all data managed through our infrastructure is handled by Supabase, a secure and certified database provider, and is stored in encrypted or vectorised (numerical) form. We never read, store, or transmit the content of your AI conversations.</P>

      <SectionTitle>3. What Data We Collect</SectionTitle>
      <P>The only personal data that is identifiable in our systems is your email address, used solely for authentication. Everything else is stored as encrypted or anonymised values:</P>
      <Ul>
        <Li><strong className="text-white">Email address:</strong> stored securely via Supabase Auth and used only for login and account recovery.</Li>
        <Li><strong className="text-white">Password:</strong> never stored in readable form. Passwords are hashed using bcrypt by Supabase before storage. We cannot read your password at any point.</Li>
        <Li><strong className="text-white">Chat URLs:</strong> the URLs of AI conversations you manually save are stored as text. We do not access the content of those conversations.</Li>
        <Li><strong className="text-white">File names (if applicable):</strong> if you attach or reference documents within the extension, only the file name is read for display purposes. The content of files is never accessed, stored, or transmitted.</Li>
        <Li><strong className="text-white">Usage statistics:</strong> anonymous numerical data (minutes of use per session) is stored to display personal usage stats in your dashboard. This data is not linked to any identifiable information beyond your account ID, which is itself a randomly generated UUID with no personal meaning.</Li>
      </Ul>

      <SectionTitle>4. What We Do NOT Collect</SectionTitle>
      <P>To be explicit, PluriHub does not collect:</P>
      <Ul>
        <Li>The content of any AI conversation on any platform.</Li>
        <Li>Browsing history outside of the AI provider domains listed in the extension.</Li>
        <Li>Keystrokes, screenshots, or any form of screen capture.</Li>
        <Li>The contents of any file you open or reference.</Li>
        <Li>Any biometric or sensitive personal data.</Li>
        <Li>Any data for advertising or profiling purposes.</Li>
      </Ul>

      <SectionTitle>5. How Your Data Is Stored</SectionTitle>
      <P>All data is managed by Supabase (eu-west region, Frankfurt, Germany). Supabase is SOC 2 Type II certified. Data is encrypted in transit using TLS 1.2+ and encrypted at rest. Row-level security policies in Supabase ensure each user can only access their own data. Your account identifier is a randomly generated UUID — not your email — making it impossible to identify you from the database records alone.</P>

      <SectionTitle>6. Third-Party Services</SectionTitle>
      <P>PluriHub uses the following third-party services:</P>
      <Ul>
        <Li><strong className="text-white">Supabase (supabase.com):</strong> authentication and database. EU-based storage.</Li>
        <Li><strong className="text-white">Google OAuth, GitHub OAuth, Discord OAuth:</strong> for social sign-in only. We receive your email and public name from these providers and store nothing else from those sessions.</Li>
        <Li><strong className="text-white">Stripe:</strong> for payment processing. PluriHub never handles or stores card details. All payment data is managed exclusively by Stripe.</Li>
      </Ul>
      <P>PluriHub does not sell, share, or transfer your data to any other third parties.</P>

      <SectionTitle>7. Technical Header Adjustment</SectionTitle>
      <P>To render AI provider interfaces within Chrome's native Side Panel, PluriHub uses Chrome's <code className="text-[#0EA5E9] text-xs">declarativeNetRequest</code> API to adjust certain HTTP response headers on explicitly listed AI provider domains. This is required for side-panel embedding and is a standard Chrome extension technique. PluriHub does not intercept, read, or modify the content of any network request or response — only framing-related headers are adjusted, and only on the specific domains declared in the extension manifest.</P>

      <SectionTitle>8. Your Rights (GDPR)</SectionTitle>
      <P>As a person in the EU, you have the following rights:</P>
      <Ul>
        <Li><strong className="text-white">Access:</strong> request a copy of your personal data.</Li>
        <Li><strong className="text-white">Erasure:</strong> delete your account at any time from Settings. All data is permanently deleted within 24 hours.</Li>
        <Li><strong className="text-white">Rectification:</strong> update your email at any time.</Li>
        <Li><strong className="text-white">Portability:</strong> export your saved chat list at any time.</Li>
        <Li><strong className="text-white">Objection:</strong> contact us to object to any specific data processing.</Li>
      </Ul>
      <P>To exercise any right: <a href="mailto:info@plurihub.com" className="text-[#0EA5E9] hover:underline">info@plurihub.com</a></P>

      <SectionTitle>9. Data Retention</SectionTitle>
      <P>Data is retained for as long as your account is active. On account deletion, all personal data is permanently and irreversibly deleted within 24 hours. Anonymised numerical statistics may be retained in aggregate form for internal analysis.</P>

      <SectionTitle>10. Children</SectionTitle>
      <P>PluriHub is not directed at children under 13. We do not knowingly collect data from children. Contact <a href="mailto:info@plurihub.com" className="text-[#0EA5E9] hover:underline">info@plurihub.com</a> if you believe this has occurred.</P>

      <SectionTitle>11. Changes</SectionTitle>
      <P>We may update this policy. Material changes will be communicated via the extension or email. Continued use constitutes acceptance.</P>

      <SectionTitle>12. Contact</SectionTitle>
      <P>All privacy enquiries: <a href="mailto:info@plurihub.com" className="text-[#0EA5E9] hover:underline">info@plurihub.com</a></P>
    </>
  )
}

export function TermsContent() {
  return (
    <>
      <p className="text-[#52525b] text-xs mb-8">Last updated: April 2026 · Applies to the PluriHub Chrome Extension and related services</p>

      <SectionTitle>1. Acceptance of Terms</SectionTitle>
      <P>By installing or using the PluriHub Chrome Extension, you agree to be bound by these Terms of Service. If you do not agree, please uninstall the extension and discontinue use of the service.</P>

      <SectionTitle>2. Description of Service</SectionTitle>
      <P>PluriHub is a Chrome extension that allows users to organise, save, and reopen AI chat conversations from multiple providers (Claude, ChatGPT, Gemini, Perplexity, and others) within a Chrome side panel. PluriHub does not provide AI services itself — it is an organisational interface for existing AI platforms. PluriHub does not store or process the content of any AI conversation.</P>

      <SectionTitle>3. User Accounts</SectionTitle>
      <P>To use PluriHub, you must create an account with a valid email address or via a supported OAuth provider (Google, GitHub, or Discord). You are responsible for maintaining the security of your account. PluriHub is not liable for any loss resulting from unauthorised access to your account.</P>

      <SectionTitle>4. Acceptable Use</SectionTitle>
      <P>You agree to use PluriHub only for lawful purposes. You agree not to:</P>
      <Ul>
        <Li>Use the extension to circumvent the terms of service of any AI provider.</Li>
        <Li>Attempt to reverse-engineer, decompile, or extract the source code of the extension.</Li>
        <Li>Use the extension to scrape or harvest data from AI provider platforms in an automated manner.</Li>
        <Li>Interfere with or disrupt the integrity or performance of the service.</Li>
        <Li>Use the extension for any illegal purpose.</Li>
      </Ul>

      <SectionTitle>5. Third-Party AI Providers</SectionTitle>
      <P>PluriHub integrates with third-party AI platforms including Claude (Anthropic), ChatGPT (OpenAI), Gemini (Google), Perplexity, Grok (xAI), DeepSeek, Mistral, Copilot (Microsoft), and Meta AI. Your use of those platforms is governed by their respective terms of service. PluriHub is not affiliated with, endorsed by, or sponsored by any of these providers.</P>

      <SectionTitle>6. Data and Privacy</SectionTitle>
      <P>PluriHub collects and stores the minimum data necessary to operate the service. The only identifiable personal data we hold is your email address. All other data (usage statistics, saved chat references) is stored in anonymised or encrypted numerical form and managed securely by Supabase. We never access the content of your AI conversations or the contents of any files. For full details, please refer to our Privacy Policy.</P>

      <SectionTitle>7. Subscription and Payments</SectionTitle>
      <P>PluriHub offers a free trial period followed by a paid Pro plan. Subscription fees are charged in advance on a monthly or annual basis via Stripe. EU consumers have the right to withdraw from a purchase within 14 days of the transaction date, unless they have begun using the paid service and have explicitly waived this right during the purchase process. Outside the statutory withdrawal period, fees are non-refundable. We reserve the right to modify pricing with 30 days' notice to active subscribers.</P>

      <SectionTitle>8. Intellectual Property</SectionTitle>
      <P>All intellectual property rights in PluriHub, including its design, code, and branding, belong to the developer. You are granted a limited, non-exclusive, non-transferable licence to use the extension for personal or professional purposes in accordance with these Terms.</P>

      <SectionTitle>9. Disclaimer of Warranties</SectionTitle>
      <P>PluriHub is provided 'as is' without warranties of any kind. We do not warrant that the extension will be uninterrupted or error-free. AI providers may change their interfaces at any time, which may affect PluriHub functionality without prior notice.</P>

      <SectionTitle>10. Limitation of Liability</SectionTitle>
      <P>To the maximum extent permitted by law, PluriHub and its developer shall not be liable for any indirect, incidental, or consequential damages. Total liability shall not exceed the amount paid by you in the three months preceding the claim.</P>

      <SectionTitle>11. Termination</SectionTitle>
      <P>We may suspend or terminate your account for violation of these Terms. You may delete your account at any time from the Settings section of the extension. All personal data is permanently deleted within 24 hours of account deletion.</P>

      <SectionTitle>12. Governing Law</SectionTitle>
      <P>These Terms are governed by the laws of Spain. Disputes are subject to the jurisdiction of Spanish courts. EU consumers may also use the EU Online Dispute Resolution platform.</P>

      <SectionTitle>13. Changes to Terms</SectionTitle>
      <P>We may update these Terms. Material changes will be communicated via the extension or email. Continued use after changes constitutes acceptance.</P>

      <SectionTitle>14. Contact</SectionTitle>
      <P>For any questions regarding these Terms: <a href="mailto:info@plurihub.com" className="text-[#0EA5E9] hover:underline">info@plurihub.com</a></P>
    </>
  )
}

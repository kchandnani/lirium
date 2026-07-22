import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy — Lirium',
  description:
    'How Lirium collects, uses, and protects information across our website, client services, and applications including Etiqa Health and Polario.',
  alternates: { canonical: '/privacy' },
}

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="July 22, 2026">
      <h2>1. Introduction</h2>
      <p>
        Lirium is a software studio operated by Challenger Corporation USA,
        S.A. (&ldquo;Lirium,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
        &ldquo;us&rdquo;). This Privacy Policy describes how we collect, use,
        disclose, and safeguard information across the website at lirium.ai,
        our professional services, and our consumer applications, including
        Etiqa Health and Polario (collectively, the &ldquo;Services&rdquo;).
      </p>
      <p>
        By using the Services, you agree to this Privacy Policy. If you do not
        agree, please do not use the Services. Where a professional services
        engagement is governed by a separately executed agreement (including a
        non-disclosure agreement or data processing terms), that agreement
        controls in the event of a conflict with this policy.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>Information you provide</h3>
      <ul>
        <li>
          Contact information (name, email address, company) when you contact
          us by email or engage our services
        </li>
        <li>
          Business information shared in the course of a consulting or
          development engagement
        </li>
        <li>Content you voluntarily submit through our applications</li>
      </ul>
      <h3>Automatically collected information</h3>
      <ul>
        <li>
          Device information (device type, operating system, unique device
          identifiers)
        </li>
        <li>Usage data (app interactions, features used, crash reports)</li>
        <li>Aggregate website analytics</li>
      </ul>
      <h3>Information we do not collect</h3>
      <ul>
        <li>We do not collect precise location data</li>
        <li>
          We do not access your contacts, camera, or microphone without your
          explicit permission
        </li>
        <li>We do not sell personal data or share it with advertisers</li>
      </ul>

      <h2>3. How We Use Information</h2>
      <ul>
        <li>To provide, maintain, and improve the Services</li>
        <li>To respond to inquiries and deliver contracted work</li>
        <li>To monitor and analyze usage trends and improve user experience</li>
        <li>To detect and prevent technical issues, fraud, or abuse</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>4. Client Data and Confidentiality</h2>
      <p>
        Data shared with us in the course of a professional engagement is
        treated as confidential by default. Client data is used solely to
        deliver the engagement, is accessible only to personnel working on it,
        and is stored in the client&rsquo;s own infrastructure or in dedicated
        environments wherever the engagement calls for it.
      </p>

      <h2>5. AI and Model Training</h2>
      <p>
        We do not use client data or personal information collected through
        our applications to train artificial intelligence models. Where our
        applications rely on third-party AI services to deliver a feature,
        inputs are processed for that feature and are not retained by us for
        training purposes.
      </p>

      <h2>6. Data Sharing and Third Parties</h2>
      <p>
        We do not sell personal information. We may share limited data with
        service providers who assist us in operating the Services, such as
        cloud hosting providers, analytics providers, and payment or form
        processing services. These providers are bound by contractual
        obligations to protect your information and may use it only for the
        purposes we specify. We may also disclose information where required
        by law, regulation, or valid legal process.
      </p>

      <h2>7. International Transfers</h2>
      <p>
        We operate from the United States and Panama, and our service
        providers may process data in other jurisdictions. Where data is
        transferred internationally, we take reasonable steps to ensure it
        receives a consistent standard of protection.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to
        fulfill the purposes described in this policy, unless a longer
        retention period is required by law or by the terms of a client
        engagement. Analytics data is retained in aggregate, anonymized form.
      </p>

      <h2>9. Data Security</h2>
      <p>
        We implement reasonable technical and organizational measures to
        protect information against unauthorized access, alteration,
        disclosure, or destruction. No method of transmission or storage is
        completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>10. Children&rsquo;s Privacy</h2>
      <p>
        The Services are not directed to children under 13. We do not
        knowingly collect personal information from children under 13; if we
        become aware that we have, we will delete it.
      </p>

      <h2>11. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction or deletion of your personal data</li>
        <li>Object to or restrict processing of your personal data</li>
        <li>Request a portable copy of your personal data</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at the address below. We
        will respond within the timeframe required by applicable law.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes are
        posted on this page with an updated &ldquo;Last updated&rdquo; date.
        Continued use of the Services after changes are posted constitutes
        acceptance of the updated policy.
      </p>

      <h2>13. Contact</h2>
      <p>
        <strong>Challenger Corporation USA, S.A.</strong> (operating as
        Lirium)
        <br />
        Email: <a href="mailto:team@lirium.ai">team@lirium.ai</a>
        <br />
        Miami, FL, United States · Ciudad de Panamá, Panama
      </p>
    </LegalPage>
  )
}

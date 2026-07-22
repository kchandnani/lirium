import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms of Service — Lirium',
  description:
    'The terms and conditions governing use of Lirium’s website, applications, and services.',
  alternates: { canonical: '/terms' },
}

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="July 22, 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using any application or service provided by
        Challenger Corporation USA, S.A., operating as Lirium
        (&ldquo;Lirium,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
        &ldquo;us&rdquo;) — including Etiqa Health, Polario, and the website
        at lirium.ai (collectively, the &ldquo;Services&rdquo;) — you agree to
        be bound by these Terms of Service. If you do not agree, do not use
        the Services.
      </p>

      <h2>2. Description of Services</h2>
      <p>Lirium provides software applications and professional services:</p>
      <ul>
        <li>
          <strong>Etiqa Health</strong> — a nutrition scanning app that
          provides health scores for grocery store products
        </li>
        <li>
          <strong>Polario</strong> — an AI-powered image editing tool that
          removes unwanted objects, text, and distractions from photos
        </li>
        <li>
          <strong>Professional services</strong> — advisory, custom software
          development, and AI systems work for business clients
        </li>
      </ul>
      <p>
        We reserve the right to modify, suspend, or discontinue any part of
        the Services at any time without prior notice.
      </p>

      <h2>3. Professional Services Engagements</h2>
      <p>
        Consulting and development engagements are governed by individually
        executed agreements (statements of work, master services agreements,
        or equivalent). Where such an agreement exists, its terms control over
        these Terms for that engagement. These Terms govern all use of the
        Services where no separate agreement applies. Nothing on this website
        constitutes a binding offer of services, a warranty of particular
        results, or professional, legal, or financial advice.
      </p>

      <h2>4. User Responsibilities</h2>
      <p>When using the Services, you agree to:</p>
      <ul>
        <li>Use the Services only for lawful purposes</li>
        <li>
          Not attempt to reverse-engineer, decompile, or tamper with our
          applications
        </li>
        <li>
          Not use our tools to infringe the intellectual property, privacy, or
          publicity rights of others — you are solely responsible for content
          you process through our applications and for having the rights to do
          so
        </li>
        <li>Not attempt to disrupt, probe, or overload our systems</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        All content, features, and functionality of the Services — including
        text, graphics, logos, and software — are owned by Lirium or its
        licensors and protected by applicable intellectual property laws. You
        may not reproduce, distribute, or create derivative works without our
        express written permission. Ownership of deliverables produced under a
        professional services engagement is defined by that engagement&rsquo;s
        agreement.
      </p>

      <h2>6. Disclaimer of Warranties</h2>
      <p>
        The Services are provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; without warranties of any kind, express or implied,
        including warranties of merchantability, fitness for a particular
        purpose, and non-infringement. We do not guarantee that the Services
        will be uninterrupted, error-free, or free of harmful components.
      </p>
      <p>
        <strong>Etiqa Health:</strong> health scores and nutritional
        information are provided for informational purposes only and are not
        medical advice. Always consult a qualified healthcare professional for
        dietary and health decisions.
      </p>
      <p>
        <strong>AI-generated output:</strong> features powered by artificial
        intelligence may produce inaccurate or incomplete results. You are
        responsible for reviewing output before relying on it.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Lirium shall not be liable for
        any indirect, incidental, special, consequential, or punitive damages
        arising from your use of the Services, even if advised of the
        possibility of such damages. To the fullest extent permitted by law,
        our total aggregate liability arising out of or relating to the
        Services shall not exceed the greater of the amounts you paid us in
        the twelve months preceding the claim or one hundred U.S. dollars
        (USD $100).
      </p>

      <h2>8. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Lirium and its officers,
        employees, and agents from any claims, damages, or expenses (including
        reasonable attorneys&rsquo; fees) arising from your violation of these
        Terms or your misuse of the Services, including processing content
        through our applications that you did not have the right to use.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Florida, United
        States, without regard to conflict-of-law principles. Any dispute
        arising under these Terms shall be brought exclusively in the state or
        federal courts located in Miami-Dade County, Florida, and you consent
        to the jurisdiction of those courts.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        We may revise these Terms at any time by updating this page.
        Continued use of the Services after changes are posted constitutes
        acceptance of the revised Terms.
      </p>

      <h2>11. Contact</h2>
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

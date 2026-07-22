import type { Metadata } from 'next'
import { Archivo, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lirium.ai'),
  title: 'Lirium — AI systems built with Fortune 100 discipline',
  description:
    'Lirium is an independent AI studio in Miami and Panama. Seven years of governance, risk, and compliance platforms for Fortune 100 financial institutions — the same engineering standard, applied to your operation.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Lirium — AI systems built with Fortune 100 discipline',
    description:
      'An independent AI studio in Miami and Panama. Custom systems, enterprise rigor.',
    url: 'https://lirium.ai',
    siteName: 'Lirium',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Lirium' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lirium — AI systems built with Fortune 100 discipline',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lirium',
  legalName: 'Challenger Corporation USA, S.A.',
  url: 'https://lirium.ai',
  logo: 'https://lirium.ai/icon-512.png',
  email: 'team@lirium.ai',
  description:
    'Independent AI studio building custom systems with Fortune 100 engineering discipline. Based in Miami and Panama, operating in English and Spanish.',
  foundingDate: '2019',
  knowsLanguage: ['en', 'es'],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad de Panamá',
      addressCountry: 'PA',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}

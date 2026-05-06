import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/lirium_favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/lirium_favicon_16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/lirium_favicon_32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/lirium_favicon_48x48.png" />
        <link rel="apple-touch-icon" sizes="48x48" href="/lirium_favicon_48x48.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

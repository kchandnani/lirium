import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lirium - AI built to scale life</title>
        <meta
          name="description"
          content="Lirium builds AI-first digital products that enhance creative and everyday workflows. We focus on simplicity, automation, and scale."
        />
        <meta property="og:title" content="Lirium - AI built to scale life" />
        <meta
          property="og:description"
          content="Lirium builds AI-first digital products that enhance creative and everyday workflows. We focus on simplicity, automation, and scale."
        />
        <meta property="og:image" content="https://lirium.ai/lirium-logo.png" />
        <meta property="og:url" content="https://lirium.ai/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lirium - AI built to scale life" />
        <meta
          name="twitter:description"
          content="Lirium builds AI-first digital products that enhance creative and everyday workflows. We focus on simplicity, automation, and scale."
        />
        <meta name="twitter:image" content="https://lirium.ai/lirium-logo.png" />
        <link rel="canonical" href="https://lirium.ai/" />
        <link rel="icon" href="/lirium-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <main className="space-y-0">
          <Hero />
          <About />
          <Projects />
        </main>
      </Layout>
    </>
  );
}

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
        <meta name="description" content="Lirium builds AI-first digital products that enhance creative and everyday workflows. We focus on simplicity, automation, and scale." />
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

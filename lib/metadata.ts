export interface PageMetadata {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
}

export const defaultMetadata: PageMetadata = {
  title: 'Lirium - AI built to scale life',
  description: 'Lirium builds AI-first digital products that enhance creative and everyday workflows. We focus on simplicity, automation, and scale.',
  url: 'https://lirium.ai',
  image: '/og-image.png',
  type: 'website'
};

export function generateMetaTags(metadata: Partial<PageMetadata> = {}) {
  const meta = { ...defaultMetadata, ...metadata };
  
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.url,
      type: meta.type,
      images: [
        {
          url: meta.image!,
          width: 1200,
          height: 630,
          alt: meta.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      image: meta.image
    }
  };
} 
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'live' | 'coming-soon';
  statusLabel: string;
  gradient: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'etiqa-health',
    title: 'Etiqa Health',
    subtitle: 'Smart Grocery Nutrition Scanner',
    description: 'Scan any product at the grocery store and instantly get a health score powered by AI. Etiqa analyzes ingredients, nutritional data, and additives to help you make informed choices — no guesswork, just clarity.',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-400',
    link: 'https://etiqahealth.com',
  },
  {
    id: 'polario',
    title: 'Polario',
    subtitle: 'AI Image Editing Tool',
    description: 'Remove unwanted objects, text, blemishes, and distractions from any photo in seconds. Polario uses state-of-the-art AI to clean up your images with one tap — built for creators, designers, and anyone who wants polished photos without the learning curve.',
    status: 'live',
    statusLabel: 'Live',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-400',
    link: '#',
  },
];

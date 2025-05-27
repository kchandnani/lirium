export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed' | 'secret';
  statusLabel: string;
  statusColor: string;
  emoji: string;
  link?: string;
  technologies?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    id: 'art-tutor-ai',
    title: 'Art Tutor AI',
    description: 'Revolutionary AI-powered learning companion that analyzes your digital art in real-time, providing personalized feedback, technique suggestions, and guided exercises to accelerate your artistic growth.',
    status: 'in-progress',
    statusLabel: 'Work in Progress 🛠️',
    statusColor: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    emoji: '🎨',
    technologies: ['Next.js', 'OpenAI', 'Canvas API', 'Computer Vision'],
    features: [
      'Real-time art analysis',
      'Personalized feedback',
      'Skill progression tracking',
      'Interactive tutorials'
    ]
  },
  {
    id: 'secret-project',
    title: 'Project ████████',
    description: '██████ ███ ██ ██████. ██ ██ ████████████ ████ ████ ██████ ███ ██ ████████ ████████ █████████. █████████ ██ ██████ ████ ████ ██████████████ █████████.',
    status: 'secret',
    statusLabel: '⚠️ CLASSIFIED',
    statusColor: 'bg-red-500/20 text-red-300 border border-red-500/30',
    emoji: '🔒',
    features: [
      '██ ████ ██ ███ ████',
      '██ ██████ ██████ ████',
      '██ ██████████████ ████'
    ]
  }
]; 
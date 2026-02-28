export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'in-progress' | 'completed' | 'secret';
  statusLabel: string;
  classified: boolean;
  client?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 'project-opal',
    title: 'Project Opal',
    subtitle: 'Wellness Intelligence Platform',
    description: 'Personalized insights engine that surfaces contextual health and wellness data through intuitive dashboards.',
    status: 'completed',
    statusLabel: 'Completed',
    classified: true,

    client: 'CLASSIFIED',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-400',
  },
  {
    id: 'project-flint',
    title: 'Project Flint',
    subtitle: 'Community League Discovery',
    description: 'Location-aware matchmaking system connecting players to local sport leagues, pickup games, and organized events.',
    status: 'completed',
    statusLabel: 'Completed',
    classified: true,
client: 'CLASSIFIED',
    gradient: 'from-sky-500 via-blue-500 to-indigo-400',
  },
  {
    id: 'project-prism',
    title: 'Project Prism',
    subtitle: '2D-to-3D Rendering Pipeline',
    description: 'AI-driven tool that reconstructs three-dimensional geometry and lighting from flat imagery in real time.',
    status: 'in-progress',
    statusLabel: 'Work in Progress',
    classified: true,
client: 'CLASSIFIED',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-400',
  },
  {
    id: 'project-nectar',
    title: 'Project Nectar',
    subtitle: 'Adaptive Content Engine',
    description: 'Context-aware generation system that tailors long-form content to audience segments and brand voice.',
    status: 'completed',
    statusLabel: 'Completed',
    classified: true,
client: 'CLASSIFIED',
    gradient: 'from-rose-500 via-pink-500 to-orange-400',
  },
  {
    id: 'project-cobalt',
    title: 'Project Cobalt',
    subtitle: 'Workflow Orchestration Suite',
    description: 'End-to-end automation framework that chains AI micro-services into repeatable, auditable pipelines.',
    status: 'in-progress',
    statusLabel: 'Work in Progress',
    classified: true,
client: 'CLASSIFIED',
    gradient: 'from-amber-500 via-orange-500 to-red-400',
  },
];

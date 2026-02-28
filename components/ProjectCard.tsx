import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 card-glow transition-all duration-300 hover:border-primary-500/30">
      {/* Gradient image area */}
      <div className={`relative h-32 sm:h-40 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Abstract shapes */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-white/20 blur-xl"></div>
          <div className="absolute bottom-4 right-8 w-24 h-24 rounded-full bg-black/20 blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/10 blur-lg"></div>
        </div>
        {/* Status badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
            project.status === 'completed'
              ? 'bg-emerald-500/90 text-emerald-950'
              : 'bg-yellow-500/90 text-yellow-950'
          }`}>
            {project.statusLabel}
          </span>
          {project.classified && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-red-500/90 text-white">
              CLASSIFIED
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400">{project.subtitle}</p>
        </div>

        {project.client && (
          <p className="text-xs text-gray-500">
            <span className="text-gray-400">Client:</span>{' '}
            {project.client === 'CLASSIFIED' ? (
              <span className="bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wide">CLASSIFIED</span>
            ) : (
              project.client
            )}
          </p>
        )}

        <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>

        <a
          href="#"
          className="inline-flex items-center text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors group/link"
        >
          Explore Product
          <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

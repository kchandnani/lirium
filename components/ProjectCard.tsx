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

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-dark-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 card-glow transition-all duration-300 hover:border-primary-500/30 hover:bg-dark-800/70">
      {/* Project emoji and status */}
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <div className="text-3xl sm:text-4xl">{project.emoji}</div>
        <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${project.statusColor}`}>
          {project.statusLabel}
        </span>
      </div>

      {/* Project title */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-primary-300 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
        {project.description}
      </p>

      {/* Features or Technologies */}
      {project.features && (
        <div className="space-y-2 mb-4 sm:mb-6">
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-center text-xs sm:text-sm text-gray-400">
              <span className="text-primary-400 mr-2">*</span>
              {feature}
            </div>
          ))}
        </div>
      )}

      {project.technologies && (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-dark-700/50 text-gray-300 rounded text-xs border border-gray-600/30">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}

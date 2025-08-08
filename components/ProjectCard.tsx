import Image from 'next/image';
import Link from 'next/link';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed' | 'secret';
  statusLabel: string;
  statusColor: string;
  emoji: string;
  image?: string;
  link?: string;
  technologies?: string[];
  features?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-dark-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 transition-all duration-300 hover:border-gray-600/70 hover:bg-dark-800/60 hover:shadow-lg">
      {/* Project emoji and status */}
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <div className="text-3xl sm:text-4xl">{project.emoji}</div>
        <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${project.statusColor}`}>
          {project.statusLabel}
        </span>
      </div>

      {/* Project image */}
      {project.image && (
        <div className="mb-4 sm:mb-6">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            className="w-full h-40 sm:h-48 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Project title */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-gray-100 transition-colors">
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

      {project.link && (
        <div className="mt-4 sm:mt-6">
          <Link href={project.link} className="text-primary-400 hover:text-primary-300 text-sm font-medium">
            Learn more →
          </Link>
        </div>
      )}
    </div>
  );
}

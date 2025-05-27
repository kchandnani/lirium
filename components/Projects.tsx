import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20 px-4">
      <div className="space-y-12 sm:space-y-16">
        {/* Section header - mobile optimized */}
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white">
            What We&apos;ve Built
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our AI-powered tools, creative achievements, and innovative solutions.
          </p>
        </div>

        {/* Projects section tabs - mobile responsive */}
        <div className="flex justify-center">
          <div className="inline-flex bg-dark-800/50 p-1 rounded-lg border border-gray-700/50 w-full max-w-md sm:w-auto">
            <button className="flex-1 sm:flex-none px-4 sm:px-6 py-2 text-white bg-primary-500/20 rounded-md font-medium border border-primary-500/30 text-sm sm:text-base">
              Projects
            </button>
            <button className="flex-1 sm:flex-none px-3 sm:px-6 py-2 text-gray-600 cursor-not-allowed opacity-50 text-sm sm:text-base" disabled>
              AI Tools
              <span className="ml-1 sm:ml-2 text-xs bg-gray-700/50 px-1 sm:px-2 py-1 rounded">Soon</span>
            </button>
            <button className="flex-1 sm:flex-none px-3 sm:px-6 py-2 text-gray-600 cursor-not-allowed opacity-50 text-sm sm:text-base" disabled>
              Innovation
              <span className="ml-1 sm:ml-2 text-xs bg-gray-700/50 px-1 sm:px-2 py-1 rounded">Soon</span>
            </button>
          </div>
        </div>

        {/* Projects grid - mobile responsive */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
} 
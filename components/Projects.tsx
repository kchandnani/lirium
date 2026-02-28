import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14">
        {/* Section header */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase">
            Our Portfolio: What We&apos;ve Built
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 sm:gap-3">
          <button className="px-4 sm:px-5 py-2 text-sm font-medium text-white bg-primary-500/20 rounded-lg border border-primary-500/30 transition-colors">
            Projects ({projects.length})
          </button>
          <button className="px-4 sm:px-5 py-2 text-sm font-medium text-gray-500 rounded-lg border border-gray-700/50 cursor-not-allowed" disabled>
            AI Tools (2)
          </button>
          <button className="px-4 sm:px-5 py-2 text-sm font-medium text-gray-500 rounded-lg border border-gray-700/50 cursor-not-allowed" disabled>
            Innovation (3)
          </button>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

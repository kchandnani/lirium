import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14">
        {/* Section header */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase">
            Our Apps
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
            Products we&apos;ve built to make everyday tasks smarter, simpler, and more accessible.
          </p>
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

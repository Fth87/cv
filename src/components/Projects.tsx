import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects, type Project } from '../data';
import ProjectDetailModal from './ProjectDetailModal';
import { HeroParallax } from './ui/hero-parallax';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const parallaxProjects = projects
    .filter((project) => project.images[0])
    .slice(0, 15)
    .map((project) => ({
      ...project,
      title: project.title,
      thumbnail: project.images[0],
    }));

  return (
    <section className="bg-zinc-950 text-white">
      <HeroParallax
        products={parallaxProjects}
        title="04. Projects"
        subtitle="A focused selection of products and research work across web engineering, AI, and event platforms."
        className="bg-zinc-950 text-white"
        headerClassName="text-white"
        onProductSelect={setSelectedProject}
      />
      <div className="mx-auto flex max-w-7xl justify-center px-6 pb-20">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
        >
          View all projects
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

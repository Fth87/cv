import { useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects, type Project } from '../data';
import ProjectDetailModal from './ProjectDetailModal';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';

export default function ProjectsList() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <StarsBackground starDensity={0.00018} minTwinkleSpeed={0.7} maxTwinkleSpeed={1.4} />
        <ShootingStars minSpeed={12} maxSpeed={24} minDelay={1800} maxDelay={5200} starColor="#fafafa" trailColor="#a1a1aa" starWidth={14} />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-zinc-950/20 via-zinc-950/70 to-zinc-950" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:px-6 md:py-16">
          <a
            href="/"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back home
          </a>

          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-wider text-zinc-500">04. Projects</p>
            <h1 className="mt-4 text-4xl font-bold tracking-normal md:text-6xl">All Projects</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
              A complete list of web engineering, AI, research, event platform, and competition work.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="group flex min-h-full flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm shadow-zinc-200/40 transition-colors hover:border-zinc-300">
              <button type="button" onClick={() => setSelectedProject(project)} className="aspect-video w-full overflow-hidden bg-zinc-100 text-left" aria-label={`View ${project.title} project details`}>
                <img src={project.images[0]} alt={project.title} className="h-full w-full object-cover object-left-top transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" />
              </button>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex flex-col gap-2">
                  {project.role ? <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{project.role}</p> : null}
                  <h2 className="text-lg font-semibold leading-snug text-zinc-950">{project.title}</h2>
                  <p className="text-sm leading-relaxed text-zinc-600">{project.shortDescription}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 ? <span className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-500">+{project.techStack.length - 4}</span> : null}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    Detail
                  </button>

                  {project.links[0] ? (
                    <a
                      href={project.links[0]}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-white"
                    >
                      Visit
                      <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}

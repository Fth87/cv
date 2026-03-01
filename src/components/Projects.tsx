import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  const [expandedDesc, setExpandedDesc] = useState<Record<string, boolean>>({});
  const [showAll, setShowAll] = useState(false);

  const toggleDesc = (id: string) => {
    setExpandedDesc((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h3 data-aos="fade-right" className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-12">
            04. Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => {
              const isExpanded = !!expandedDesc[project.id];
              return (
                <div key={project.id} data-aos="fade-up" data-aos-delay={(index % 6) * 80} className="group bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Cover Image */}
                  {project.images[0] && (
                    <div className="relative overflow-hidden aspect-video bg-zinc-800">
                      <img src={project.images[0]} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-linear-to-t from-zinc-900/80 to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h4>
                      {project.role && <span className="text-[11px] font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">{project.role}</span>}
                    </div>

                    <div className="mb-4">
                      <p className={`text-sm text-zinc-400 leading-relaxed ${!isExpanded ? 'line-clamp-2' : ''}`}>{project.longDescription}</p>
                      <button onClick={() => toggleDesc(project.id)} className="text-[11px] font-mono mt-1 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer">
                        {isExpanded ? 'Show less' : 'Read more...'}
                      </button>
                    </div>

                    {/* Spacer */}
                    <div className="mt-auto" />

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5 mt-4">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions row */}
                    {project.links.length > 0 && (
                      <div className="flex items-center gap-2 pt-4 border-t border-zinc-800/60 mt-auto">
                        <div className="flex items-center gap-2">
                          {project.links.map((link, i) => (
                            <a
                              key={i}
                              href={link}
                              aria-label={`Preview link ${i + 1} for ${project.title}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
                            >
                              <ExternalLink size={12} />
                              {project.links.length > 1 ? `Link ${i + 1}` : 'Live Preview'}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {projects.length > 6 && (
            <div data-aos="fade-up" className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 border border-zinc-700 text-zinc-300 rounded-full font-mono text-sm hover:bg-zinc-800 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                {showAll ? 'Show Less Projects' : `Show All Projects (${projects.length})`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

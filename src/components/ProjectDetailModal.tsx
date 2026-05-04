import { useEffect, useRef } from 'react';
import { ExternalLink, X } from 'lucide-react';
import type { Project } from '../data';

export default function ProjectDetailModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) {
      return;
    }

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => titleRef.current?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
      );

      if (!focusableElements.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (document.activeElement === titleRef.current) {
        event.preventDefault();
        (event.shiftKey ? lastElement : firstElement).focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  const primaryLink = project.links[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm" onMouseDown={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-lg bg-white text-zinc-950 shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-white"
          aria-label="Close project details"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div className="grid md:grid-cols-[0.95fr_1.05fr]">
          <div className="flex items-center bg-zinc-100 p-4 md:p-5">
            <img src={project.images[0]} alt={project.title} className="max-h-[70vh] w-full rounded-lg border border-zinc-200 bg-white object-contain" />
          </div>

          <div className="flex flex-col gap-6 p-6 md:p-8">
            <div className="flex flex-col gap-3 pr-10">
              {project.role ? <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{project.role}</p> : null}
              <h3 id="project-dialog-title" ref={titleRef} tabIndex={-1} className="text-2xl font-bold leading-tight text-zinc-950 outline-none md:text-3xl">
                {project.title}
              </h3>
              <p className="text-base leading-relaxed text-zinc-600">{project.longDescription}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-md bg-zinc-100 px-2.5 py-1 text-sm text-zinc-600">
                  {tech}
                </span>
              ))}
            </div>

            {project.links.length ? (
              <div className="flex flex-wrap gap-3 border-t border-zinc-200 pt-5">
                {project.links.map((link, index) => (
                  <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    {index === 0 && primaryLink === link ? 'Visit Project' : `Link ${index + 1}`}
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

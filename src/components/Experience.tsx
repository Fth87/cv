import { MapPin } from 'lucide-react';
import { experience } from '../data';
import { Timeline } from './ui/timeline';

export default function Experience() {
  const timelineData = experience.map((job) => ({
    title: job.company,
    content: (
      <div className="bg-zinc-50 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <h4 className="font-bold text-lg text-zinc-900">{job.role}</h4>
            <p className="text-sm text-zinc-500 mt-1">{job.company}</p>
          </div>
          <span className="text-xs py-1 px-2 bg-zinc-200 rounded text-zinc-600 whitespace-nowrap">{job.period}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-600 mb-4 font-medium">
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {job.location}
          </span>
        </div>
        <ul className="space-y-2">
          {job.description.map((desc, index) => (
            <li key={`${job.company}-${index}`} className="text-zinc-600 text-sm leading-relaxed flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0"></span>
              {desc}
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <section className="bg-white">
      <Timeline data={timelineData} title="02. Experience" subtitle="Roles, leadership, and delivery across web, AI, and event platforms." />
    </section>
  );
}

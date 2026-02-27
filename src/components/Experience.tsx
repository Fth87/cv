import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '../data';

export default function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h3 
            data-aos="fade-right"
            className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-12"
          >
            02. Experience
          </h3>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-zinc-300 before:to-transparent">
            {experience.map((job, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Icon Node */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-zinc-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={16} className="text-zinc-600" />
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-zinc-300 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h4 className="font-bold text-lg text-zinc-900">{job.role}</h4>
                    <span className="text-xs font-mono py-1 px-2 bg-zinc-200 rounded text-zinc-600 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-600 mb-4 font-medium">
                    <span>{job.company}</span>
                    <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-zinc-600 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

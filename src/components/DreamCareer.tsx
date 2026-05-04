import { Hammer, TreePine } from 'lucide-react';
import { dreamCareer } from '../data';

export default function DreamCareer() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h3 data-aos="fade-right" className="text-sm text-zinc-500 uppercase tracking-wider mb-12">
            06. {dreamCareer.headline}
          </h3>

          <div className="space-y-6">
            {dreamCareer.visions.map((vision, index) => {
              const isWorkshop = vision.icon === 'workshop';
              const Icon = isWorkshop ? Hammer : TreePine;

              return (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-zinc-300 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-600">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-zinc-900 mb-2">{vision.title}</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">{vision.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Lightbulb } from 'lucide-react';
import { finalProject } from '../data';

export default function FinalProject() {
  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h3 data-aos="fade-right" className="text-sm text-zinc-500 uppercase tracking-wider mb-12">
            07. {finalProject.headline}
          </h3>

          <div data-aos="fade-up" className="p-6 bg-white rounded-2xl border border-zinc-100 hover:border-zinc-300 hover:shadow-md transition-all">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-600">
                <Lightbulb size={18} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-zinc-900 mb-2">{finalProject.title}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{finalProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

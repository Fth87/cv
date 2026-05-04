import { Award, GraduationCap } from 'lucide-react';
import { achievements, education } from '../data';
import { HoverBorderGradient } from './ui/hover-border-gradient';

export default function EducationAwards() {
  return (
    <>
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 data-aos="fade-right" className="text-sm text-zinc-500 uppercase tracking-wider mb-10 flex items-center gap-2">
              <GraduationCap size={16} /> 04. Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <HoverBorderGradient key={index} as="div" duration={1.4} containerClassName="rounded-2xl" className="w-full bg-white rounded-2xl p-6">
                  <div data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-zinc-900 text-lg">{edu.school}</h4>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded text-zinc-600">{edu.period}</span>
                    </div>
                    <p className="text-zinc-700 font-medium mb-4">{edu.degree}</p>
                    <ul className="space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="text-sm text-zinc-600 flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-zinc-400 rounded-full shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </HoverBorderGradient>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 data-aos="fade-right" data-aos-delay="100" className="text-sm text-zinc-500 uppercase tracking-wider mb-10 flex items-center gap-2">
              <Award size={16} /> 05. Achievements
            </h3>

            <div className="space-y-3">
              {achievements.map((award, index) => (
                <HoverBorderGradient key={index} as="div" duration={1.2} containerClassName="rounded-2xl" className="w-full bg-white rounded-2xl px-5 py-4">
                  <div data-aos="fade-left" data-aos-delay={index * 50} className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-zinc-400 shrink-0">
                        <Award size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium text-zinc-900">{award.title}</h4>
                        <p className="text-sm text-zinc-500 mt-1">{award.organization}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-zinc-100 px-2 py-1 rounded text-zinc-600 whitespace-nowrap">{award.year}</span>
                  </div>
                </HoverBorderGradient>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

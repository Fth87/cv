import { Award, GraduationCap } from 'lucide-react';
import { achievements, education } from '../data';

export default function EducationAwards() {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <h3 
              data-aos="fade-right"
              className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-8 flex items-center gap-2"
            >
              <GraduationCap size={16} /> 04. Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-zinc-900 text-lg">{edu.school}</h4>
                    <span className="text-xs font-mono bg-zinc-100 px-2 py-1 rounded text-zinc-600">{edu.period}</span>
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
              ))}
            </div>
          </div>

          {/* Awards Column */}
          <div>
            <h3 
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-8 flex items-center gap-2"
            >
              <Award size={16} /> 05. Achievements
            </h3>

            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
              {achievements.map((award, index) => (
                <div 
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 50}
                  className="p-4 border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors flex items-start gap-4"
                >
                  <div className="mt-1 text-amber-500 shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900">{award.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-zinc-500">{award.organization}</span>
                      <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                      <span className="text-xs font-mono text-zinc-400">{award.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

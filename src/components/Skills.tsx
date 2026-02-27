import { Cpu, Globe, Terminal, Layers } from 'lucide-react';
import { skills } from '../data';
import TanstackLogo from '../assets/tanstack';

// Map skill names to Devicon classes or custom identifiers
const getIconClass = (skill: string) => {
  const map: Record<string, string> = {
    Python: 'devicon-python-plain',
    Typescript: 'devicon-typescript-plain',
    Git: 'devicon-git-plain',
    GitHub: 'devicon-github-plain',
    Docker: 'devicon-docker-plain',
    MySQL: 'devicon-mysql-plain',
    Linux: 'devicon-linux-plain',
    PostgreSQL: 'devicon-postgresql-plain',
    Figma: 'devicon-figma-plain',
    'Scikit-learn': 'devicon-scikitlearn-plain',
    Pandas: 'devicon-pandas-plain',
    NumPy: 'devicon-numpy-plain',
    PyTorch: 'devicon-pytorch-plain',
    'Next.js': 'devicon-nextjs-plain',
    'Tailwind CSS': 'devicon-tailwindcss-plain',
    Supabase: 'devicon-supabase-plain',
    FastAPI: 'devicon-fastapi-plain',
    Laravel: 'devicon-laravel-plain',
    Bootstrap: 'devicon-bootstrap-plain',
    React: 'devicon-react-plain',
    TanStack: 'custom-tanstack', // Use custom Layers icon
    Astro: 'devicon-astro-plain',
    'Basic AI/ML concepts': 'devicon-jupyter-plain', // Fallback/Generic
  };
  return map[skill] || 'devicon-devicon-plain';
};

export default function Skills() {
  return (
    <section className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h3 data-aos="fade-right" className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-12">
            03. Technical Arsenal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Programming & Tools */}
            <div data-aos="fade-up" className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-zinc-400">
                <Terminal size={24} />
              </div>
              <h4 className="text-xl font-bold mb-6">Programming & Tools</h4>
              <div className="grid grid-cols-3 gap-4">
                {skills.programming.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group">
                    <i className={`${getIconClass(skill)} text-3xl text-zinc-400 group-hover:text-white transition-colors`}></i>
                    <span className="text-xs text-zinc-500 font-mono text-center group-hover:text-zinc-300 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Machine Learning */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-zinc-400">
                <Cpu size={24} />
              </div>
              <h4 className="text-xl font-bold mb-6">Machine Learning</h4>
              <div className="grid grid-cols-3 gap-4">
                {skills.machineLearning.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group">
                    <i className={`${getIconClass(skill)} text-3xl text-zinc-400 group-hover:text-white transition-colors`}></i>
                    <span className="text-xs text-zinc-500 font-mono text-center group-hover:text-zinc-300 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-zinc-400">
                <Globe size={24} />
              </div>
              <h4 className="text-xl font-bold mb-6">Web Development</h4>
              <div className="grid grid-cols-3 gap-4">
                {skills.webDev.map((skill, i) => {
                  const iconClass = getIconClass(skill);
                  return (
                    <div key={i} className="flex flex-col items-center gap-2 group">
                      {iconClass === 'custom-tanstack' ? (
                        <div className=" ">
                          <TanstackLogo className="fill-zinc-500 group-hover:fill-white transition-colors w-7.5 h-7.5 " />
                        </div>
                      ) : (
                        <i className={`${iconClass} text-3xl text-zinc-400 group-hover:text-white transition-colors`}></i>
                      )}
                      <span className="text-xs text-zinc-500 font-mono text-center group-hover:text-zinc-300 transition-colors">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

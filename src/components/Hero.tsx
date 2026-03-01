import { MapPin, Mail, Phone, Linkedin, ExternalLink, Github } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950 text-white py-20">
      {/* Background Grid Effect */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <div data-aos="fade-up" className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-linear-to-r from-white to-zinc-500">{personalInfo.name}</h1>
              <h2 className="text-2xl md:text-3xl text-zinc-400 font-light mb-8">{personalInfo.role}</h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-sm md:text-base text-zinc-400 mb-12">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin size={18} />
                <span>{personalInfo.location}</span>
              </div>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={18} />
                <span>{personalInfo.email}</span>
              </a>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center md:justify-start gap-4">
              <a href={personalInfo.linkedin} target="_blank" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" className="px-6 py-3 bg-zinc-800 text-white rounded-full font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 flex items-center gap-2">
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end relative" data-aos="fade-left" data-aos-delay="100">
            {/* Subtle glow behind the transparent image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-zinc-700/30 rounded-full blur-[80px] -z-10"></div>

            <img
              src="/profile.png"
              alt={personalInfo.name}
              className="rounded-full relative z-10 w-[280px] md:w-[350px] lg:w-[450px] h-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-2 hover:drop-shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

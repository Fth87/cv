import { MapPin, Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950 text-white py-20">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div 
            data-aos="fade-up"
            className="mb-6"
          > 
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-linear-to-r from-white to-zinc-400">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-zinc-400 font-light mb-8">
              {personalInfo.role}
            </h2>
          </div>

          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base text-zinc-400 mb-12"
          >
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin size={18} />
              <span>{personalInfo.location}</span>
            </div>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={18} />
              <span>{personalInfo.email}</span>
            </a>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={18} />
              <span>{personalInfo.phone}</span>
            </div>
          </div>

          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex gap-4"
          >
            <a href={personalInfo.linkedin} className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href={personalInfo.portfolio} className="px-6 py-3 bg-zinc-800 text-white rounded-full font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 flex items-center gap-2">
              <ExternalLink size={20} />
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Mail, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data';
import { Spotlight } from './ui/spotlight-new';
import { PointerHighlight } from './ui/pointer-highlight';
import { TextGenerateEffect } from './ui/text-generate-effect';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 z-0 opacity-60">
        <Spotlight />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="mb-6" data-aos="fade-down" data-aos-delay="200">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 text-white whitespace-nowrap flex">
              Muhammad{' '}
              <div className='mx-5'>
                <PointerHighlight rectangleClassName="border-zinc-600/80" pointerClassName="text-zinc-400">
                  <span>Fatih</span>
                </PointerHighlight>{' '}
              </div>
              Al Fawwaz
            </h1>
            <TextGenerateEffect words={personalInfo.role} className="text-2xl md:text-3xl text-zinc-400 font-light mb-8" />
          </div>
          <div data-aos="fade-up" data-aos-delay="2500" className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-zinc-400 mb-10">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin size={18} />
              <span>{personalInfo.location}</span>
            </div>
            <a href={`mailto:${personalInfo.email}`} aria-label="Send Email" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={18} />
              <span>{personalInfo.email}</span>
            </a>
          </div>

          <div data-aos="fade-up" data-aos-delay="3000" className="flex flex-wrap justify-center gap-4">
            <a href={personalInfo.linkedin} aria-label="Visit LinkedIn Profile" target="_blank" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              aria-label="Visit GitHub Profile"
              target="_blank"
              className="px-6 py-3 bg-zinc-800 text-white rounded-full font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-white font-bold text-lg">{personalInfo.name}</h2>
          <p className="text-sm mt-1">Built with Astro, React, and Tailwind</p>
        </div>
        
        <div className="flex gap-6">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
            <Mail size={20} />
          </a>
          <a href={personalInfo.linkedin} className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
        </div>
        
        <div className="text-sm font-mono">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

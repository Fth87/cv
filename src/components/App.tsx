import { useEffect } from 'react';
import AOS from 'aos';
import Hero from './Hero';
import Summary from './Summary';
import Experience from './Experience';
import Skills from './Skills';
import EducationAwards from './EducationAwards';
import Footer from './Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <main className="font-sans bg-zinc-50 text-zinc-900 selection:bg-emerald-500/30 overflow-x-hidden">
      <Hero />
      <Summary />
      <Experience />
      <Skills />
      <EducationAwards />
      <Footer />
    </main>
  );
}

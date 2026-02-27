import { personalInfo } from '../data';

export default function Summary() {
  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h3 
            data-aos="fade-right"
            className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-6"
          >
            01. Profile Summary
          </h3>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl md:text-2xl leading-relaxed text-zinc-800 font-light"
          >
            {personalInfo.summary}
          </p>
        </div>
      </div>
    </section>
  );
}

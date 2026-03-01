export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  role?: string;
  techStack: string[];
  links: string[];
  images: string[];
}
export const personalInfo = {
  name: 'Muhammad Fatih Al Fawwaz',
  role: 'AI Engineering Student & Web Developer',
  location: 'Surabaya, Indonesia',
  email: 'fatihfwz87@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fatihfawwaz/',
  github: 'https://github.com/fth87',
  summary:
    'First-year Artificial Intelligence Engineering student with a growing focus on machine learning, supported by hands-on experience in web development through organizational projects, events, and national-level competitions. Currently strengthening foundational knowledge in machine learning while continuing to build and maintain production-ready web applications. Seeking opportunities to learn and contribute as a Web Developer or AI/ML.',
};

export const education = [
  {
    school: 'Institut Teknologi Sepuluh Nopember (ITS)',
    degree: 'Bachelor of Artificial Intelligence Engineering',
    period: 'Jul 2024 – Present',
    details: ['Accepted through SNBP (National Achievement-Based Selection)', 'Currently studying programming, mathematics, and machine learning'],
  },
];

export const skills = {
  programming: ['Python', 'Typescript', 'Git', 'GitHub', 'Docker', 'MySQL', 'Linux', 'PostgreSQL', 'Figma'],
  machineLearning: ['Basic AI/ML concepts', 'Scikit-learn', 'Pandas', 'NumPy', 'PyTorch'],
  webDev: ['Next.js', 'Tailwind CSS', 'Supabase', 'FastAPI', 'Laravel', 'Bootstrap', 'React', 'TanStack', 'Astro'],
};

export const experience = [
  {
    company: 'Institut Teknologi Sepuluh Nopember (ITS)',
    role: 'Teaching Assistant - Graph Theory',
    location: 'Surabaya',
    period: 'Feb 2026 – Present',
    description: [
      'Assist the lecturer in teaching fundamental Graph Theory concepts to undergraduate students.',
      'Grade assignments, quizzes, and exams, providing constructive feedback to students.',
      'Conduct tutorial sessions to help students understand complex topics like connectivity, trees, and graph coloring.',
    ],
  },
  {
    company: 'Flexoo',
    role: 'Web Developer',
    location: 'Surabaya',
    period: 'Nov 2025 – Present',
    description: [
      'Develop and maintain responsive web interfaces across multiple devices.',
      'Collaborate with backend developers to ensure accurate data integration and feature implementation.',
      'Work with UI/UX designers to translate designs into functional and maintainable web components.',
      'Help ensure website performance, stability, and maintainability.',
    ],
  },
  {
    company: 'INI LHO ITS!',
    role: 'Head of Front end Web Development Division',
    location: 'Surabaya',
    period: 'Oct 2025 – Present',
    description: [
      'Lead the front end web development division for the official event platform, delivering a registration system serving 1,000+ registrants.',
      'Coordinate cross-functional collaboration with UI/UX and backend teams to ensure technical feasibility and smooth system integration.',
      'Establish development standards and basic code review workflows to maintain code quality and consistency.',
      'Mentor team members on general web development practices and collaborative workflows.',
    ],
  },
  {
    company: 'SCHEMATICS ITS',
    role: 'IT Development',
    location: 'Surabaya',
    period: 'Mar 2025 – Dec 2025',
    description: [
      'Developed responsive web interfaces adaptable to mobile, tablet, and desktop devices.',
      'Translated UI/UX designs into clean, interactive web implementations.',
      'Integrated backend APIs to support dynamic data rendering and application state management.',
    ],
  },
  {
    company: 'INI LHO ITS!',
    role: 'IT Development',
    location: 'Surabaya',
    period: 'Sep 2024 – Mar 2025',
    description: [
      'Collaborated with backend teams to ensure correct data presentation across the platform.',
      'Developed responsive and interactive web interfaces using Next.js, following UI/UX design specifications.',
      'Implemented mobile-first layouts and reusable components to ensure consistent visual identity.',
    ],
  },
  {
    company: 'PETROLIDA (SPE ITS Student Chapter)',
    role: 'IT Development',
    location: 'Surabaya',
    period: 'Sep 2024',
    description: ['Implemented visual and interactive components for the event website.', 'Worked with UI/UX designers to convert designs into functional web pages.', 'Supported backend integration and basic performance optimization.'],
  },
];

export const achievements = [
  {
    title: '3rd Place – Hackathon Exploraition',
    organization: 'Garuda Spark by Komdigi x Jagoan Hosting',
    year: '2026',
  },
  {
    title: 'First Place – National Robotics Competition',
    organization: 'IPB University',
    year: '2024',
  },
  {
    title: 'First Place – UNIKAMA National Web Development Competition',
    organization: 'UNIKAMA',
    year: '2024',
  },
  {
    title: 'Third Place – National Front-End Website Development Competition',
    organization: 'Universitas Atma Jaya Yogyakarta',
    year: '2024',
  },
  {
    title: 'Best Student (Advanced Bootcamp)',
    organization: 'Schematics BST',
    year: '2024',
  },
  {
    title: 'Best Presentation – Techcomfest National Web Design Competition',
    organization: 'Politeknik Negeri Semarang',
    year: '2024',
  },
  {
    title: 'Second Place – National Web Design Competition',
    organization: 'AMIKOM × GRAB Intermedia IT',
    year: '2023',
  },
  {
    title: 'Scholarship Awardee',
    organization: 'PT Bayan Fully Funded Scholarship',
    year: 'Awardee',
  },
];

export const projects: Project[] = [
  {
    id: 'selli',
    title: 'Selli',
    shortDescription: 'AI-driven CRM for banking sales optimization using predictive lead scoring.',
    longDescription:
      'An AI-powered CRM platform designed to replace cold-calling strategies with predictive conversion modeling. Built using Python and Scikit-learn served via FastAPI, with dual portals powered by React and NestJS. The system includes automated lead prioritization, real-time analytics, and scalable infrastructure supported by MySQL and Redis.',
    role: 'Machine Learning Engineer',
    techStack: ['Python', 'Scikit-learn', 'FastAPI', 'React', 'NestJS', 'MySQL', 'Redis'],
    links: ['https://sales-selli.fajrifarid.com/', 'https://admin-selli.fajrifarid.com/'],
    images: ['/project/seli.png'],
  },
  {
    id: 'cloudx-its',
    title: 'CloudX ITS (CloudX-Lab)',
    shortDescription: 'Cloud-native GPU resource management framework for AI clusters.',
    longDescription:
      'A distributed GPU orchestration framework that consolidates heterogeneous hardware into scalable AI clusters. The platform supports self-service provisioning, lease control, identity provider integration, Ray cluster management, and JupyterLab environments for research-scale AI workloads.',
    role: 'Web Developer',
    techStack: ['Nextjs', 'Typescript', 'TailwindCSS', 'GoLang', 'PostgreSQL', 'Ray', 'JupyterLab'],
    links: [],
    images: ['/project/cloudx.png'],
  },
  {
    id: 'ma-amanatul-ummah',
    title: 'MA Unggulan Amanatul Ummah',
    shortDescription: 'Official educational institution portal.',
    longDescription: 'Contributed to the development and maintenance of the official school website using Laravel and MySQL, ensuring structured backend architecture and secure information management.',
    techStack: ['Laravel', 'MySQL'],
    links: ['https://mai-au.sch.id'],
    images: ['/project/MA Amanatul Ummah.png'],
  },
  {
    id: 'ini-lho-its-2025',
    title: 'Ini Lho ITS 2025',
    shortDescription: 'Official campus event portal.',
    longDescription: 'Developed a modular and scalable frontend using Next.js and TypeScript, styled with TailwindCSS, and integrated with a Go-based backend. Focused on performance, maintainability, and clean component architecture.',
    role: 'Frontend Developer',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    links: [],
    images: ['/project/IniLhoITS2025.png'],
  },
  {
    id: 'ini-lho-its-2026',
    title: 'Ini Lho ITS 2026',
    shortDescription: 'Lead frontend engineering for a high-traffic campus platform.',
    longDescription:
      'Led frontend architecture and engineering standards for the 2026 iteration. Established scalable system design, optimized Core Web Vitals, and implemented accessible, modular UI components using Next.js and TypeScript.',
    role: 'Lead Frontend Engineer',
    techStack: ['Next.js', 'TypeScript'],
    links: [],
    images: ['/project/IniLhoITS2026.png.png'],
  },
  {
    id: 'petrolida-2025',
    title: 'Petrolida 2025',
    shortDescription: 'Official international conference website.',
    longDescription: 'Developed an SEO-optimized digital platform using Next.js and TypeScript with TailwindCSS. Focused on performance optimization, accessibility, and responsive design.',
    role: 'Web Developer',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    links: [],
    images: ['/project/petrolida2025.png'],
  },
  {
    id: 'galaxy',
    title: 'GALAXY Competition Platform',
    shortDescription: 'End-to-end competition management system.',
    longDescription: 'Built a Laravel-based platform to manage participant registration, competition workflows, and results processing. Designed a responsive interface using Bootstrap and integrated a structured MySQL backend.',
    role: 'Fullstack Developer',
    techStack: ['Laravel', 'Bootstrap', 'MySQL'],
    links: ['https://galaxy.mai-au.sch.id'],
    images: ['/project/galaxy events.png'],
  },
  {
    id: 'kasir-konter',
    title: 'Kasir Konter',
    shortDescription: 'Cloud-based retail digitalization system.',
    longDescription:
      'A digital transformation solution migrating manual bookkeeping into a cloud-based architecture using Next.js (App Router) and Supabase. Implemented Row Level Security and QR-based service tracking for operational transparency.',
    role: 'Fullstack Developer',
    techStack: ['Next.js', 'Supabase'],
    links: [],
    images: ['/project/kasir konter.png'],
  },
  {
    id: 'qdayak',
    title: 'QDayak',
    shortDescription: 'Cultural heritage educational website.',
    longDescription: 'An educational platform showcasing Dayak cultural heritage. Developed using HTML, Bootstrap, and AOS animations to create an engaging digital exhibition experience.',
    techStack: ['HTML', 'Bootstrap', 'AOS'],
    links: ['https://fth87.github.io/qdayak2.0/'],
    images: ['/project/qdayak.png'],
  },
  {
    id: 'mieme',
    title: 'MieMe',
    shortDescription: 'Digital promotion platform for a local MSME.',
    longDescription: 'A responsive promotional website built with HTML, Bootstrap, and AOS to support local culinary businesses in expanding their digital presence.',
    techStack: ['HTML', 'Bootstrap', 'AOS'],
    links: ['https://mieme.vercel.app'],
    images: ['/project/mieme.png'],
  },
  {
    id: 'sandangans',
    title: 'Sandangans',
    shortDescription: 'Sustainable fashion e-commerce platform.',
    longDescription: 'An e-commerce platform built with Next.js, TailwindCSS, Framer Motion, and AOS to deliver an immersive and interactive shopping experience focused on sustainable fashion.',
    techStack: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    links: ['https://sandangans.vercel.app/'],
    images: ['/project/sandhangans.png'],
  },
  {
    id: 'sinau',
    title: 'Sinau',
    shortDescription: 'Interactive online learning ecosystem.',
    longDescription: 'A learning management platform built with Laravel backend and React frontend, connected via Inertia.js to provide a seamless SPA experience with interactive quizzes and learning modules.',
    techStack: ['Laravel', 'React', 'Inertia.js', 'TailwindCSS'],
    links: [],
    images: ['/project/sinau.png'],
  },
  {
    id: 'health-tracker',
    title: 'Health Tracker',
    shortDescription: 'Web-based wellness monitoring dashboard.',
    longDescription: 'A responsive health tracking dashboard built with Next.js and TailwindCSS, featuring interactive data visualization for monitoring personal wellness metrics.',
    techStack: ['Next.js', 'TailwindCSS'],
    links: ['https://health-tracker-web-zeta.vercel.app/'],
    images: ['/project/health tracker.png'],
  },
  {
    id: 'animelist',
    title: 'AnimeList',
    shortDescription: 'Anime discovery and watchlist tracking platform.',
    longDescription: 'A React-based application for discovering and tracking anime series, featuring search capabilities, metadata exploration, and a personalized watchlist system.',
    techStack: ['React', 'TailwindCSS'],
    links: ['https://animelist-iota.vercel.app/'],
    images: ['/project/anime list.png'],
  },
  {
    id: 'savior',
    title: 'Savior',
    shortDescription: 'Real-time IoT wearable command center.',
    longDescription: 'A real-time dashboard built with Next.js and Socket.io to communicate with wearable safety devices. Integrated Leaflet for live geospatial tracking and emergency response monitoring.',
    techStack: ['Next.js', 'Socket.io', 'Leaflet'],
    links: ['https://saviorwearable.vercel.app/'],
    images: ['/project/savior.png'],
  },
  {
    id: 'coffee-beans',
    title: 'Coffee Beans Classification',
    shortDescription: 'Comparative study of traditional ML and SOTA deep learning for fine-grained classification.',
    longDescription:
      'A fine-grained classification study covering 54 coffee bean varieties. Compared traditional models (KNN, SVM, Ensemble Bagging SVM with LBP and HSV features) against modern architectures such as ConvNeXt-Tiny and Swin Transformer. Hyperparameter tuning was conducted using Optuna, achieving up to 87.25% accuracy.',
    role: 'Researcher / ML Engineer',
    techStack: ['KNN', 'SVM', 'ConvNeXt', 'Swin Transformer', 'Optuna'],
    links: ['https://coffe-beans-classification.vercel.app'],
    images: ['/project/coffe beans classification.png'],
  },
  {
    id: 'hybrid-pit-stop',
    title: 'Hybrid Pit Stop Strategy Advisor',
    shortDescription: 'Hybrid AI-based decision support system for Formula 1 pit stop strategy.',
    longDescription:
      'A capstone project combining Fuzzy Logic, Probabilistic Reasoning, and First-Order Logic to generate optimal and regulation-compliant pit stop recommendations. The system integrates uncertainty handling and rule-based reasoning into a unified strategic decision engine.',
    role: 'Research Project',
    techStack: ['Fuzzy Logic', 'Probabilistic Reasoning', 'First-Order Logic'],
    links: ['https://hybrid-pit-stop-strategy-advisor.vercel.app'],
    images: ['/project/hybrid pitstop advisor.png'],
  },
];

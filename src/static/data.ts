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
  role: 'AI Engineering Student & Tech Enthusiast',
  location: 'Surabaya, Indonesia',
  email: 'fatihfwz87@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fatihfawwaz/',
  github: 'https://github.com/fth87',
  website: 'https://cv.fatihfwz.my.id/',
  summary:
    'First-year Artificial Intelligence Engineering student with a growing focus on machine learning, supported by hands-on experience in web development through organizational projects, events, and national-level competitions. Currently strengthening foundational knowledge in machine learning while continuing to build and maintain production-ready web applications. Seeking opportunities to learn and contribute as a Web Developer or AI/ML.',
};

export const education = [
  {
    school: 'Institut Teknologi Sepuluh Nopember (ITS)',
    degree: 'Bachelor of Artificial Intelligence Engineering',
    period: 'Jul 2024 – Present',
    details: ['Accepted into the SNBP program', 'Currently studying programming, mathematics, and machine learning'],
  },
];

export const skills = {
  programming: ['Python', 'Typescript', 'Git', 'GitHub', 'Docker', 'MySQL', 'Linux', 'Arch Linux', 'PostgreSQL', 'Figma'],
  machineLearning: ['AI/ML concepts', 'Scikit-learn', 'Pandas', 'NumPy', 'PyTorch', 'TensorFlow', 'Keras'],
  webDev: ['Next.js', 'Tailwind CSS', 'Supabase', 'FastAPI', 'Laravel', 'Bootstrap', 'React', 'TanStack', 'Astro', 'Express'],
};

export const experience = [
  {
    company: 'Quzuu',
    role: 'Web Developer',
    location: 'Surabaya',
    period: 'Mar 2026 – Present',
    description: [
      'Build a high-performance digital examination environment powered by AI proctoring systems, including computer vision, audio processing, and text processing.',
      'Develop and maintain responsive interfaces for exam operations and administrative workflows.',
      'Collaborate with product and AI teams to ensure reliable, scalable delivery for high-stakes assessments.',
    ],
  },
  {
    company: 'Teaching Assistant',
    role: 'Teaching Assistant - Graph Theory',
    location: 'Surabaya',
    period: 'Feb 2026 – Present',
    description: [
      'Assist the lecturer in teaching fundamental Graph Theory concepts to undergraduate students.',
      'Grade assignments, quizzes, and exams, providing constructive feedback to students.',
      'Conduct tutorial sessions to help students understand complex topics like connectivity, trees, shortest path, and MST.',
    ],
  },
  {
    company: 'Flexoo',
    role: 'Web Developer',
    location: 'Surabaya',
    period: 'Nov 2025 – Present',
    description: [
      'Design and develop responsive user interfaces across devices.',
      'Work with backend teams to ensure data is displayed correctly.',
      'Collaborate with UI/UX designers to translate design outputs into maintainable components.',
      'Ensure website performance remains stable and reliable.',
    ],
  },
  {
    company: 'SCHEMATICS ITS',
    role: 'Vice Chairman',
    location: 'Surabaya',
    period: 'Mar 2026 – Present',
    description: [
      'Assist the chairman in leading a team of 24 web developers to build, deploy, and maintain the official event website.',
      'Manage project timelines and delegate tasks via GitHub repositories to meet event deadlines.',
      'Collaborate cross-functionally with UI/UX and Creative divisions to translate design mockups into responsive interfaces.',
      'Conduct code reviews and troubleshooting to ensure optimal performance during peak traffic periods.',
    ],
  },
  {
    company: 'INI LHO ITS!',
    role: 'Head of Front end Web Development Division',
    location: 'Surabaya',
    period: 'Oct 2025 – Dec 2025',
    description: [
      'Spearheaded the frontend division for the official event platform, delivering a registration system serving 1,000+ registrants.',
      'Coordinate cross-functional collaboration with UI/UX and backend teams to ensure technical feasibility and smooth system integration.',
      'Establish development standards and basic code review workflows to maintain code quality and consistency.',
      'Mentor team members on general web development practices and collaborative workflows.',
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
    company: 'SCHEMATICS ITS',
    role: 'IT Development',
    location: 'Surabaya',
    period: 'Mar 2025 – Present',
    description: [
      'Engineered fully responsive user interfaces for mobile, tablet, and desktop devices.',
      'Transformed high-fidelity UI/UX designs into pixel-perfect, interactive code.',
      'Integrated backend APIs to facilitate dynamic data exchange and rendering performance.',
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
    id: 'autonomous-vla-uav',
    title: 'Autonomous Control VLA Model for UAV in Flight Mission',
    shortDescription: 'AI robotics project for drone control via natural language and vision.',
    longDescription:
      'An end-to-end AI robotics project focused on controlling autonomous drones through natural language commands and computer vision. Fine-tuned multimodal models (Pi0 and SmolVLA) using LoRA to translate human instructions and camera feeds into flight actions. Built a custom real-time 3D web simulator with Three.js connected to a Gradio inference API for live model testing and visualization.',
    role: 'AI/Robotics Engineer',
    techStack: ['Python', 'LoRA', 'Three.js', 'Gradio', 'Computer Vision'],
    links: ['https://medium.com/@wijdanrazefi99/autonomous-control-with-vision-language-action-model-for-unmanned-aerial-vehicle-in-in-flight-3ba354ef9473'],
    images: ['/project/vla.png'],
  },
  {
    id: 'quzuu',
    title: 'Quzuu',
    shortDescription: 'Enterprise AI-enhanced digital exam platform with proctoring systems.',
    longDescription:
      'An enterprise-grade, AI-enhanced assessment platform owned by Antares AI. Built a high-performance digital examination environment powered by AI proctoring systems, including computer vision, audio processing, and text processing, with secure and reliable workflows for large-scale assessments.',
    role: 'Web Developer',
    techStack: ['Next.js', 'TypeScript', 'AI Proctoring'],
    links: ['https://quzuu.id'],
    images: ['/project/quzuu.png'],
  },
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
      'A cloud-native GPU resource management framework that unifies heterogeneous hardware into a scalable AI cluster. Supports self-service provisioning, fine-grained access control, lease management, IdP authentication, Ray cluster orchestration, and JupyterLab environments for AI workloads.',
    role: 'Web Developer',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'GoLang', 'PostgreSQL', 'Ray', 'JupyterLab'],
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
      'A comprehensive digital transformation solution modernizing legacy retail operations by migrating manual bookkeeping to a cloud-based architecture using Next.js (App Router) and Supabase. Centralized sales, inventory, and service tracking with Row Level Security and a QR-based module for real-time service status tracking.',
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
      'A comparative study of conventional ML versus state-of-the-art deep learning for fine-grained classification of 54 coffee varieties. Evaluated KNN, SVM, and Ensemble Bagging SVM (LBP and HSV features) against ConvNeXt-Tiny and Swin Transformer with Optuna hyperparameter tuning, achieving up to 87.25% accuracy.',
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
      'A capstone project developing a Formula 1 pit stop decision support system using a hybrid architecture. Addressed data ambiguity via Fuzzy Logic, quantified event uncertainty with Probabilistic Reasoning, and enforced FIA regulation compliance with First-Order Logic, synthesizing outputs into optimal, legal pit stop recommendations.',
    role: 'Research Project',
    techStack: ['Fuzzy Logic', 'Probabilistic Reasoning', 'First-Order Logic'],
    links: ['https://hybrid-pit-stop-strategy-advisor.vercel.app'],
    images: ['/project/hybrid pitstop advisor.png'],
  },
];

export const dreamCareer = {
  headline: 'Dream Career',
  visions: [
    {
      title: 'Creative Workshop',
      icon: 'workshop',
      description: 'A personal workshop where I can turn imagination into reality crafting furniture, building prototypes, and creating things with my own hands.',
    },
    {
      title: 'Farm & Plantation',
      icon: 'farm',
      description: 'A vast stretch of land for farming and livestock, orchards, vegetable gardens, and open pastures for a self-sustaining life close to nature.',
    },
  ],
};

export const finalProject = {
  headline: 'Final Project Plan',
  title: 'AI-Powered Financial Management',
  description: 'A web-based financial management system integrated with an AI Agent via WhatsApp and Telegram to track expenses, set budgets, and get financial insights through chat.',
};

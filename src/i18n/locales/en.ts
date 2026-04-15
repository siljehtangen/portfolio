export const en = {
  navbar: {
    sections: ['Home', 'Hobbies', 'Career', 'Projects'],
    language: 'Language',
    emailTitle: 'Send me an email',
    linkedinTitle: 'Get in touch on LinkedIn',
    githubTitle: 'View my GitHub',
  },
  navigation: {
    previous: 'Previous',
    next: 'Next',
    goToStep: 'Go to step {step}',
  },
  intro: {
    greeting: "Hi, I'm",
    descriptionPrefix: 'A',
    descriptionHighlight: 'developer',
    descriptionMiddle: "who's driven by",
    keywords: ['going the extra mile', 'teamwork', 'quality', 'reliability'],
    journey:
      "In a team, I perform my best when I'm with people who believe in me, aren't afraid to speak up, and are always eager to learn and grow together.",
    traitsTitle: 'Key Traits',
    traits: ['Takes Responsibility', 'Supportive & Helpful', 'Passionate Learner', 'Seeks Challenges'],
  },
  hobbies: {
    title: 'My Hobbies & Interests',
    description:
      'Beyond coding, these passions fuel my creativity and shape my approach to problem-solving and teamwork.',
    skillsGained: 'Skills gained:',
    devGrowth: 'How it helps me grow as a developer:',
    items: [
      {
        title: 'Creative Writing',
        description:
          'Writing has strengthened my ability to communicate clearly, think logically, and approach problems with creativity and precision.',
        skills: ['Structured Thinking', 'Creativity', 'Attention to Detail'],
        devConnection:
          'Creative writing supports writing clean, maintainable code, effective documentation, and designing intuitive user experiences shaped by user narratives.',
      },
      {
        title: 'Football',
        description:
          'Playing football has taught me the value of teamwork, quick decision-making, and staying calm under pressure in competitive environments.',
        skills: ['Teamwork', 'Strategic Thinking', 'Communication'],
        devConnection:
          'Working in teams, adapting to fast-changing situations, and making decisions quickly reflect many of the same dynamics found in the projects I work on.',
      },
      {
        title: 'Fitness & Training',
        description:
          'Regular training routines keep me focused and help build habits around discipline, consistency, and personal growth.',
        skills: ['Consistency', 'Goal Setting', 'Resilience'],
        devConnection:
          'Staying consistent with fitness has taught me the value of small, steady improvements, similar to the incremental progress needed to grow as a person, as part of a team, and in writing code.',
      },
    ],
  },
  career: {
    title: 'My Career Journey',
    description:
      'Each role has contributed to understanding my interests and identifying how I can best contribute.',
    keySkills: 'Key Skills & Technologies:',
    items: [
      {
        title: 'Software Engineer',
        company: 'Kasomo Energy AS',
        duration: 'June 2025 - Present',
        type: 'Full-time',
        description:
          "After a successful part-time collaboration, I transitioned into a full-time role to continue taking the main responsibility for the system's development.",
        skills: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Vercel', 'Clerk', 'Docker', 'PGAdmin', 'Cursor'],
      },
      {
        title: 'Full Stack Developer',
        company: 'Curio Learning AS',
        duration: 'November 2025 - January 2026',
        type: 'Part-time (side work)',
        description:
          'Curio Learning democratizes one-on-one teaching. We believe every student deserves personal attention and tailored guidance.',
        skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Nest', 'OpenAI API', 'PostgreSQL'],
      },
      {
        title: 'IT System Developer',
        company: 'Kasomo Energy AS',
        duration: 'January 2025 - June 2025',
        type: 'Part-time (besides studies)',
        description:
          'Developed a project management and workflow system called Kotip, contributing most of the code and playing a central role in communication with the product owner.',
        skills: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Vercel', 'Clerk', 'Docker', 'PGAdmin', 'Cursor'],
      },
      {
        title: 'Software Engineer Consultant',
        company: 'Capgemini AS',
        duration: 'November 2024 - March 2025',
        type: 'Part-time (besides studies)',
        description:
          'Worked on a proof of concept for Statens Vegvesen, focusing on improving BIM data flow through automation and quality assurance of road data from 3D models.',
        skills: ['Python', 'IFC', 'IDS', 'VSCode'],
      },
      {
        title: 'iOS App Developer',
        company: 'FotMob AS',
        duration: 'September 2024 - December 2024',
        type: 'Part-time (besides studies)',
        description:
          "Worked on implementing features and fixing bugs to improve the app's performance and user experience.",
        skills: ['Swift', 'Xcode'],
      },
      {
        title: 'Full Stack Developer',
        company: 'SD Worx',
        duration: 'June 2024 - August 2024',
        type: 'Full-time (summer internship)',
        description:
          "Implemented a draft framework for measuring efficiency from clients' perspective, with metrics visualized on a website.",
        skills: ['C#', '.NET', 'Angular', 'Azure', 'SQL Server', 'ASP.NET Core', 'Entity Framework', 'VSCode'],
      },
    ],
  },
  projects: {
    title: 'My Projects',
    description:
      'Most of my experience so far has come from part-time jobs during my studies, rather than personal projects.',
    keyFeatures: 'Key Features:',
    items: [
      {
        title: 'Stitchbud (feb 2026 - now)',
        technologies: [
          'Kotlin',
          'Spring Boot 3',
          'Spring Security',
          'JWT',
          'JPA/Hibernate',
          'PostgreSQL',
          'Supabase',
          'React 18',
          'TypeScript',
          'Vite',
          'Tailwind CSS',
          'React Router v6',
          'Gradle 8',
        ],
        description:
          'A mobile-first web app for tracking knitting, crochet, and sewing projects with secure auth, cloud file handling, and a shared material library.',
        highlights: [
          'Dashboard with category counts, recent projects, and progress overview',
          'Project management with materials, row counter, tags, and project notes',
          'Pattern grid editor for knitting and crochet with paint/erase interactions',
          'Supabase-backed file uploads, shared material library, i18n support, and PDF export',
        ],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/stitchbud' }],
      },
      {
        title: 'LeieXEie (jan 2026 - now)',
        technologies: [
          'React 18',
          'TypeScript',
          'Vite',
          'Recharts',
          '@react-pdf/renderer',
          'react-i18next',
          'CSS',
        ],
        description:
          'A rent-vs-buy calculator tailored for the Norwegian housing market, designed to compare long-term net worth instead of only monthly housing costs.',
        highlights: [
          'Quick and advanced modes with detailed Norwegian financial modeling and tax-aware assumptions',
          'Side-by-side buyer and renter simulation with inflation-adjusted net worth comparison',
          'Breakeven year detection, year-by-year breakdowns, interactive charts, and PDF export',
          'Bilingual interface (Norwegian/English) with a clean, user-friendly experience',
        ],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/leie-x-eie' }],
      },
      {
        title: 'Prediplay (dec 2025 - now)',
        technologies: [
          'Go',
          'chi router',
          'SQLite',
          'GORM',
          'Angular 17',
          'TypeScript',
          'SCSS',
          'Bzzoiro sports API',
        ],
        description:
          'A full-stack football analytics application that ingests player statistics from the top five leagues, runs scoring models, and presents insights through a REST API and Angular frontend.',
        highlights: [
          'Scoring system for top players, benchwarmers, hidden gems, and red flags',
          'REST API with league, team, player, prediction, and dashboard endpoints',
          'Automated player sync on backend startup with configurable API integration',
          'Split backend and frontend setup for local development with API proxying',
        ],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/prediplay' }],
      },
      {
        title: 'Ompa (jan 2025 - now)',
        technologies: ['React', 'TailwindCSS', 'ShadCN', 'Vue.js', 'TypeScript', 'Vite', 'C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'Azure', 'Cypress', 'Jest', 'Docker', 'PGAdmin', 'VSCode', 'GitHub', 'Google Auth'],
        description:
          'Collaborating with Bouvet ASA and product owner Jens Lien, we built a web-based sheet music management system for Heimdal Storband.',
        highlights: [
          'Role-based access and user profiles',
          'Automatically generated downloadable setlists tailored to each musician',
          'Substitute handling and performance management',
          'A centralized note archive managed by admins',
        ],
      },
      {
        title: 'Advent Calendar 2025 (dec 2025)',
        technologies: ['Svelte', 'TypeScript', 'Supabase', 'PostgreSQL'],
        description: 'A Christmas advent calendar web app for friends and family.',
        highlights: ['User profile with login and registration', 'Story modal that lets users choose paths', 'Responsive design for all devices'],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/advent-calendar' }],
      },
      {
        title: 'Barcode (Aug 2024 - Dec 2024)',
        technologies: ['TailwindCSS', 'Vitest', 'MongoDB', 'Jest', 'Express', 'Apollo Server', 'GraphQL', 'Apollo Client', 'Shadcn', 'Cypress', 'VSCode'],
        description:
          'A platform where users can share drink recipes, like and comment on posts, with focus on usability and accessibility.',
        highlights: [
          'Iterative development based on continuous user feedback',
          'Strong focus on universal design and accessibility',
          'Cross-device responsive support',
          'Sustainable principles in web development',
        ],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/IT2810-project' }],
      },
      {
        title: 'Xplora (jan 2024 - jun 2024)',
        technologies: ['TypeScript', 'React', 'Next.js', 'Jest', 'ShadCN', 'MongoDB', 'Firebase', 'GitLab', 'VSCode'],
        description:
          'A travel app where users can explore cities, pin favorite destinations, mark visited places, and write reviews.',
        highlights: ['Browse and discover cities', 'Pin and save favorite cities', 'Mark cities you have visited', 'Write and read city reviews'],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/TDT4140-project' }],
      },
      {
        title: 'Hackerspace NTNU (aug 2022 - sep 2023)',
        technologies: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'VSCode'],
        description:
          'Website for Hackerspace NTNU with event sign-ups, information pages, and a booking system.',
        highlights: [
          'Ongoing maintenance and feature updates',
          'Implemented English translations for wider accessibility',
          'Improved UI/UX through fixes and optimization',
        ],
        links: [{ type: 'GitHub', url: 'https://github.com/hackerspace-ntnu/website' }],
      },
      {
        title: 'FlappyBall (2023)',
        technologies: ['C#', 'Unity', 'VSCode'],
        description: 'Developed a game in Unity inspired by Flappy Bird.',
        highlights: ['Physics-based ball movement', 'Responsive obstacle spawning system', 'Scoring and UI feedback system'],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/flappy-ball-unity' }],
      },
      {
        title: 'Ourplace (aug 2023 - des 2023)',
        technologies: ['JavaScript', 'Java', 'CSS', 'HTML5', 'Spring Boot', 'JavaFX', 'JUnit', 'VSCode', 'PlantUML', 'Maven'],
        description:
          'Forum application where users register or log in and engage by reading, writing, and reacting to posts.',
        highlights: ['User registration and login system', 'Read, write, and react to text posts', 'Feed sortable by date or reaction count'],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/IT1901-project' }],
      },
      {
        title: 'Fryd & Flor (aug 2022 - des 2022)',
        technologies: ['JavaScript', 'HTML', 'CSS3', 'VSCode'],
        description:
          'Informational website for the local flower shop Fryd & Flor, focused on clear communication and broad relevance.',
        highlights: ['Clear presentation of company identity and values', 'User-friendly and clean design', 'Responsive layout for all devices'],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/IT2805-project' }],
      },
    ],
  },
} as const

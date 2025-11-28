import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    title: 'Curio Learning (nov 2025 - now)',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Nest', 'OpenAI API', 'PostgreSQL'],
    description:
      'Curio Learning democratizes one-on-one teaching. We believe that every student deserves personal attention and tailored guidance. Our vision is to make quality education accessible to everyone, regardless of geographical location or economic situation.',
    highlights: [
      'Design and build APIs for content, progression, and traceability',
      'Integrate and orchestrate LLM calls, context/memory, and evaluation loops',
      'Data modeling for student flow, logging, and analytics metrics',
      'Implement UI, UX, and gamification elements',
      'Optimize performance, accessibility, and responsiveness',
      'Create visualizations and interactivity based on JSON Spec',
    ],
  },
  {
    title: 'Ompa (jan 2025 - oct 2025)',
    technologies: ['Vue.js', 'TypeScript', 'CSS3', 'Vite'],
    description:
      'Collaborating with Bouvet ASA and product owner Jens Lien (student project & hobby activity), we built a web-based sheet music management system for Heimdal Storband. The goal was to make it easier for bands to organize and distribute sheet music.',
    highlights: [
      'Role-based access and user profiles',
      'Automatically generated, downloadable setlists tailored to each musician',
      'Substitute handling and performance management',
      'A centralized note archive managed by admins',
    ],
  },
  {
    title: 'Xplora (jan 2024 - jun 2024)',
    technologies: ['TypeScript', 'React', 'ShadCN', 'MongoDB', 'Firebase'],
    description:
      'Xplora is a travel app (student project) where users can explore cities, pin favorite destinations to their profile, mark places they have visited, and write reviews.',
    highlights: [
      'Browse and discover cities to travel to',
      'Pin and save favorite cities to your profile',
      'Mark cities you have visited',
      'Write and read reviews for cities',
    ],
    links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/TDT4140-project' }],
  },
  {
    title: 'Hackerspace NTNU (aug 2022 - sep 2023)',
    technologies: ['Python', 'Django'],
    description:
      'Website for the student organization Hackerspace NTNU, featuring event sign-ups, information pages, and a booking system.',
    highlights: [
      'Ongoing maintenance and feature updates for the website',
      'Implemented English translations for wider accessibility',
      'Improved UI/UX by fixing bugs and optimizing interface elements',
    ],
    links: [{ type: 'GitHub', url: 'https://github.com/hackerspace-ntnu/website' }],
  },
  {
    title: 'FlappyBall (2023)',
    technologies: ['C#'],
    description: 'Developed a game in Unity inspired by Flappy Bird',
    highlights: [
      'Implemented physics-based ball movement with realistic gravity',
      'Designed responsive obstacle spawning system',
      'Created intuitive scoring and UI feedback system',
    ],
    links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/flappy-ball-unity' }],
  },
  {
    title: 'Ourplace (aug 2023 - des 2023)',
    technologies: ['JavaScript', 'Java', 'CSS', 'HTML5'],
    description:
      'Ourplace is a forum application (student project) where users can register or log in, and engage by reading, writing, and reacting to posts. The feed allows sorting by newest posts or by popularity based on reactions.',
    highlights: [
      'User registration and login system',
      'Read, write, and react to text posts',
      'Feed sortable by date or reaction count',
    ],
    links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/IT1901-project' }],
  },
  {
    title: 'Fryd & Flor (aug 2022 - des 2022)',
    technologies: ['JavaScript', 'HTML', 'CSS3'],
    description:
      'An informational website (student project) for the local flower shop Fryd & Flor. The site aims to answer who they are, what they do, and why they do it, targeting primarily adult women over 30, while remaining relevant to all audiences.',
    highlights: [
      'Clear presentation of company identity and values',
      'User-friendly and clean design',
      'Responsive layout for all devices',
    ],
    links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/IT2805-project' }],
  },
]

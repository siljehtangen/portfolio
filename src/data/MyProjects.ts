interface ProjectLink {
  type: string
  url: string
}

interface Project {
  title: string
  technologies: string[]
  description: string
  highlights: string[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    title: 'Ompa (jan 2025 - now)',
    technologies: ['Vue.js', 'TypeScript', 'CSS3', 'Vite'],
    description:
      'In collaboration with Bouvet ASA and product owner Jens Lien (student project, now hobby activity), we built a web-based sheet music management system for Heimdal Storband. The goal was to make it easier for bands to organize and distribute sheet music.',
    highlights: [
      'Role-based access and user profiles',
      'Automatically generated, downloadable setlists tailored to each musician',
      'Substitute handling and performance management',
      'A centralized note archive managed by admins',
    ],
    links: [
      { type: 'Website', url: '#' },
      { type: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'Xplora ()',
    technologies: ['TypeScript', 'React', 'ShadCN'],
    description:
      'Xplora is a travel app where users can explore cities, pin favorite destinations to their profile, mark places they have visited, and write reviews.',
    highlights: [
      'Browse and discover cities to travel to',
      'Pin and save favorite cities to your profile',
      'Mark cities you have visited',
      'Write and read reviews for cities',
      'User-friendly interface with smooth navigation',
    ],
    links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/TDT4140-project' }],
  },
  {
    title: 'Hackerspace NTNU ()',
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
    title: 'FlappyBall ()',
    technologies: ['C#'],
    description: 'Making a game in Unity inspired by FlappyBird',
    highlights: [
      'Implemented physics-based ball movement with realistic gravity',
      'Designed responsive obstacle spawning system',
      'Created intuitive scoring and UI feedback system',
    ],
    links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/flappy-ball-unity' }],
  },
  {
    title: 'Ourplace ()',
    technologies: ['JavaScript', 'Java', 'CSS', 'HTML5'],
    description:
      'Ourplace (student project) is a forum application designed for users to register or log in, and engage by reading, writing, and reacting to posts. The feed allows sorting by newest posts or by popularity based on reactions.',
    highlights: [
      'User registration and login system',
      'Read, write, and react to text posts',
      'Feed sortable by date or reaction count',
    ],
    links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/IT1901-project' }],
  },
  {
    title: 'Fryd & Flor ()',
    technologies: ['JavaScript', 'HTML', 'CSS3'],
    description:
      'An informational website for the local flower shop Fryd & Flor. The site aims to answer who they are, what they do, and why they do it, targeting primarily adult women over 30, while remaining relevant to all audiences.',
    highlights: [
      'Clear presentation of company identity and values',
      'User-friendly and clean design',
      'Responsive layout for all devices',
    ],
    links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/IT2805-project' }],
  },
]

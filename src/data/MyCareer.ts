interface Career {
  title: string
  company: string
  duration: string
  type: string
  description: string
  skills: string[]
}

export const careers: Career[] = [
  {
    title: 'Software Engineer',
    company: 'Kasomo Energy AS',
    duration: 'June 2025 - Present',
    type: 'Full-time',
    description:
      'After the successful part-time collaboration, I transitioned into a full-time role to continue development of the system',
    skills: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Vercel', 'Clerk'],
  },
  {
    title: 'IT System Developer',
    company: 'Kasomo Energy AS',
    duration: 'Januar 2025 - June 2025',
    type: 'Part-time (besides studies)',
    description:
      'Developing a project management and workflow system, contributing much of the code and central in talking with PO. My role combined hands-on coding with responsibility for aligning technical decisions with user needs.',
    skills: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Vercel', 'Clerk'],
  },
  {
    title: 'Software Engineer Consultant',
    company: 'Capgemini AS',
    duration: 'November 2024 - March 2025',
    type: 'Part-time (besides studies)',
    description:
      'Worked on a PoC for Statens Vegvesen, focusing on improving BIM data flow through automation and quality assurance of road data from 3D models and exploring directly sending data from IFC files to SVV. I had primary responsibility for the technical delivery.',
    skills: ['Python', 'IFC', 'IDS'],
  },
  {
    title: 'iOS App Developer',
    company: 'FotMob AS',
    duration: 'September 2024 - December 2024',
    type: 'Part-time (besides studies)',

    description:
      'Worked on implementing small features and fixing bugs to improve the app’s performance and user experience.',
    skills: ['Swift', 'Xcode'],
  },
  {
    title: 'Full Stack Developer',
    company: 'SD Worx',
    duration: 'June 2024 - August 2024',
    type: 'Full-time (summer internship)',
    description:
      'Implemented a draft Framework for Measuring Efficiency. The goal of the project was to explore how a company could measure the effectiveness of their systems from the clients’ perspective once implemented, focusing on factors such as task completion time, number of tasks performed, and level of automation. These metrics were visualized on a website.',
    skills: ['C#', '.NET', 'Angular', 'Azure'],
  },
]

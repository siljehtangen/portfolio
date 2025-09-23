import type { Hobby } from "@/types/hobby";

export const hobbies: Hobby[] = [
  {
    title: 'Creative Writing',
    description:
      'Writing has strengthened my ability to communicate clearly, think logically, and approach problems with creativity and precision.',
    skills: [
      'Structured Thinking',
      'Creativity',
      'Attention to Detail',
    ],
    devConnection:
      'Creative writing supports writing clean, maintainable code, effective documentation, and designing intuitive user experiences shaped by user narratives.',
  },
  {
    title: 'Football',
    description: 'Playing football has taught me the value of teamwork, quick decision-making, and staying calm under pressure in competitive environments.',
    skills: ['Teamwork', 'Strategic Thinking', 'Communication'],
    devConnection: 'Working in teams, adapting to fast-changing situations, and making decisions quickly reflect many of the same dynamics found in work projects.',
  },
  {
    title: 'Fitness & Training',

    description: 'Regular training routines keep me focused and help build habits around discipline, consistency, and personal growth.',
    skills: ['Consistency', 'Goal Setting', 'Resilience'],
    devConnection: 'Staying consistent with fitness has taught me the value of small, steady improvements—just like the incremental progress needed to grow as a person, as part of a team, and in writing code.',
  },
]

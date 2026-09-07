export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  initials: string
}

export const team: TeamMember[] = [
  {
    id: 'alankar',
    name: 'Alankar Achadian',
    role: 'CEO',
    bio: 'Founder and leader behind Eunoia’s mission to develop practical autonomous marine systems.',
    initials: 'AA',
  },
  {
    id: 'anjali',
    name: 'Anjali Verma',
    role: 'CTO',
    bio: 'Engineering leadership behind the development of Eunoia’s marine robotics and Aqua Skimmer technology.',
    initials: 'AV',
  },
  {
    id: 'aashish',
    name: 'Aashish Sharma',
    role: 'COO',
    bio: 'Operations and execution across product development and deployment.',
    initials: 'AS',
  },
  {
    id: 'deepak',
    name: 'E. Deepak Cheran',
    role: 'Chief Naval Architect',
    bio: 'Naval architecture and marine-system design.',
    initials: 'DC',
  },
]

export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  initials: string
  linkedin?: string
}

export type AdvisorySlot = {
  id: string
  name?: string
  role?: string
  bio?: string
  image?: string
  initials?: string
}

export const advisoryBoard: AdvisorySlot[] = [
  { id: 'shantanu', name: 'Shantanu Pratap Singh', initials: 'SPS' },
  { id: 'anindya', name: 'Anindya Sengupta', initials: 'AS' },
  { id: 'rabindra', name: 'Rabindra Sah', initials: 'RS' },
  { id: 'chaithanya', name: 'Sri Chaithanya Edupally', initials: 'SCE' },
  { id: 'ayan', name: 'Ayan Gupta', initials: 'AG' },
  { id: 'shilpa', name: 'Shilpa Deshpande', initials: 'SD' },
]

export const team: TeamMember[] = [
  {
    id: 'alankar',
    name: 'Alankar Achadian',
    role: 'Co-founder & CEO',
    bio: 'Leads Eunoia’s vision, partnerships, business development and commercial strategy, with a focus on turning indigenous water technology into scalable field operations.',
    initials: 'AA',
    linkedin: 'https://www.linkedin.com/in/alankars-ak',
  },
  {
    id: 'deepak',
    name: 'E. Deepak Cheran',
    role: 'Co-founder & Naval Architect',
    bio: 'Leads vessel design, hydrodynamics and marine engineering to ensure Eunoia’s platforms are stable, functional and deployment-ready.',
    initials: 'DC',
    linkedin: 'https://www.linkedin.com/in/deepakcheran-navalarchitect',
  },
  {
    id: 'aashish',
    name: 'Aashish Sharma',
    role: 'Co-founder & COO',
    bio: 'Leads manufacturing coordination, project mobilisation, deployments and operational execution across field sites.',
    initials: 'AS',
    linkedin: 'https://www.linkedin.com/in/aashishsharma-designengineer',
  },
  {
    id: 'anjali',
    name: 'Anjali Verma',
    role: 'Co-founder & CTO',
    bio: 'Leads electronics, controls, system integration and technology development across Eunoia’s unmanned vessel platforms.',
    initials: 'AV',
    linkedin: '',
  },
]

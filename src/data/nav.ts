export type NavItem = {
  label: string
  href: string
  match?: string[]
  sections?: string[]
}

export const navItems: NavItem[] = [
  { label: 'Why', href: '/why', match: ['/why'] },
  {
    label: 'Technology',
    href: '/technology',
    match: ['/technology'],
  },
  {
    label: 'Platforms',
    href: '/platforms',
    match: ['/platforms', '/aqua-skimmer', '/survey'],
  },
  {
    label: 'Deployments',
    href: '/deployments',
    match: ['/deployments'],
  },
  {
    label: 'About',
    href: '/about',
    match: ['/about'],
  },
  {
    label: 'Blog',
    href: '/blog',
    match: ['/blog', '/notes', '/insights'],
  },
]

export const footerLinks: NavItem[] = [
  { label: 'Why', href: '/why' },
  { label: 'Technology', href: '/technology' },
  { label: 'Platforms', href: '/platforms' },
  { label: 'Aqua Skimmer', href: '/aqua-skimmer' },
  { label: 'Survey', href: '/survey' },
  { label: 'Deployments', href: '/deployments' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/company/eunoia-innovations',
  youtube: null as string | null,
}

export const contactDetails = {
  email: 'info@eunoiainnovations.com',
  phone: '+91 95737 30767',
  phoneHref: 'tel:+919573730767',
  city: 'Hyderabad, Telangana',
  address: 'Neredmet, Secunderabad, Hyderabad, Telangana 500056',
}

export const interestOptions = [
  'Water Cleanup',
  'Hydrographic Survey',
  'Monitoring',
  'Marine Robotics',
  'Partnership',
  'Other',
] as const

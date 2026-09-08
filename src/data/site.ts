export type NavItem = {
  label: string
  href: string
  match?: string[]
  sections?: string[]
  children?: { label: string; href: string }[]
}

export const navItems: NavItem[] = [
  { label: 'About', href: '/about', match: ['/about'] },
  {
    label: 'Solutions',
    href: '/solutions',
    match: ['/solutions', '/aqua-skimmer'],
    children: [
      { label: 'Aqua Skimmer', href: '/solutions/aqua-skimmer' },
      { label: 'Water Quality Monitoring', href: '/solutions/water-quality-monitoring' },
      { label: 'USV Bathymetric Survey', href: '/solutions/usv-bathymetric-survey' },
      { label: 'Integrated Solutions', href: '/solutions/integrated-waterbody-solutions' },
    ],
  },
  { label: 'Services', href: '/services', match: ['/services'] },
  { label: 'Projects', href: '/projects', match: ['/projects', '/deployments'] },
  { label: 'Engagement', href: '/engagement-models', match: ['/engagement-models'] },
  { label: 'Insights', href: '/insights', match: ['/insights', '/blog', '/notes'] },
]

export const footerLinks: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Engagement Models', href: '/engagement-models' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export const footerSolutions = [
  { label: 'Aqua Skimmer', href: '/solutions/aqua-skimmer' },
  { label: 'Water Quality Monitoring', href: '/solutions/water-quality-monitoring' },
  { label: 'USV Bathymetric Survey', href: '/solutions/usv-bathymetric-survey' },
  { label: 'Integrated Solutions', href: '/solutions/integrated-waterbody-solutions' },
]

export const footerServices = [
  { label: 'Maintenance', href: '/services' },
  { label: 'Floating Waste Removal', href: '/services' },
  { label: 'Survey & Monitoring', href: '/services' },
  { label: 'Vegetation Management', href: '/services' },
  { label: 'Impact Reporting', href: '/services' },
  { label: 'Handover', href: '/services' },
]

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/company/eunoia-innovations',
  instagram: null as string | null,
  youtube: null as string | null,
}

export const contactDetails = {
  email: 'info@eunoiainnovations.com',
  emailHref: 'mailto:info@eunoiainnovations.com?subject=Request%20a%20site%20demo',
  phone: '+91 95737 30767',
  phoneHref: 'tel:+919573730767',
  city: 'Hyderabad',
  address: 'Neredmet, Secunderabad, Hyderabad, Telangana 500056',
  brochureUrl: (import.meta.env.VITE_BROCHURE_URL as string | undefined) || '',
}

export const tagline = 'Cleaner Water. Smarter Operations.'

export const positioning =
  'Eunoia Innovations builds and deploys unmanned vessels and integrated services for cleaning, surveying, monitoring and maintaining water bodies.'

export const pageSeo: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Eunoia Innovations | Waterbody Cleaning & Maintenance Robotics',
    description:
      'Electric unmanned vessels and integrated services for floating waste removal, lake maintenance, water quality monitoring and bathymetric surveys.',
  },
  about: {
    title: 'About Eunoia Innovations | Water Technology & Maritime Robotics',
    description:
      'Meet the team building indigenous unmanned vessels and end-to-end services for cleaner, better-managed water bodies.',
  },
  solutions: {
    title: 'Waterbody Solutions | Eunoia Innovations',
    description:
      'Aqua Skimmer, water quality monitoring, USV bathymetric survey and integrated waterbody interventions.',
  },
  aqua: {
    title: 'Aqua Skimmer | Electric Water Surface Cleaning Vessel',
    description:
      'Explore Aqua Skimmer, an electric unmanned surface vessel for floating waste removal from lakes, rivers, ponds, canals and waterfronts.',
  },
  waterQuality: {
    title: 'Water Quality Monitoring for Lakes & Ponds | Eunoia',
    description:
      'Field monitoring of pH, EC, ORP, TDS, turbidity, dissolved oxygen and temperature for waterbody projects.',
  },
  survey: {
    title: 'USV Bathymetric Survey Services | Eunoia Innovations',
    description:
      'Unmanned bathymetric survey services for lakes, reservoirs, ponds, canals and shallow water bodies.',
  },
  integrated: {
    title: 'Integrated Waterbody Solutions | Eunoia Innovations',
    description:
      'Cleaning, monitoring, surveying, vegetation management and preventive interventions under one execution plan.',
  },
  services: {
    title: 'Lake & Waterbody Maintenance Services | Eunoia Innovations',
    description:
      'Managed surface cleaning, annual maintenance, monitoring, surveying, vegetation management, reporting and sustainable handover.',
  },
  projects: {
    title: 'Waterbody Cleaning Projects & Aqua Skimmer Deployments',
    description:
      'Field deployments of Aqua Skimmer and related waterbody services across lakes, rivers and waterfronts in India.',
  },
  engagement: {
    title: 'Engagement Models | Work with Eunoia Innovations',
    description:
      'Managed service, annual maintenance, purchase, CSR programmes, build-operate-handover and survey assignments.',
  },
  insights: {
    title: 'Field Notes | Eunoia Innovations',
    description:
      'Notes on marine robotics, water management, autonomy, deployments and survey technology.',
  },
  contact: {
    title: 'Contact Eunoia Innovations | Request a Site Assessment',
    description:
      'Share your waterbody location and challenge to request a site assessment, demonstration or project discussion.',
  },
}

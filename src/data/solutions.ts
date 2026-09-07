export const solutions = [
  {
    id: 'aqua-skimmer',
    href: '/solutions/aqua-skimmer',
    name: 'Aqua Skimmer',
    label: 'Surface waste removal',
    summary:
      'An electric unmanned surface vessel designed for routine collection of floating waste from lakes, rivers, ponds, canals and waterfronts.',
  },
  {
    id: 'water-quality',
    href: '/solutions/water-quality-monitoring',
    name: 'Water Quality Monitoring',
    label: 'Field measurements and trend tracking',
    summary:
      'Capture selected water parameters at the site to support routine observation, trend analysis, field decisions and project reporting.',
  },
  {
    id: 'survey',
    href: '/solutions/usv-bathymetric-survey',
    name: 'USV Bathymetric Survey',
    label: 'Underwater depth and terrain mapping',
    summary:
      'Map underwater depth and terrain using an unmanned survey vessel designed for shallow, restricted and operationally challenging water bodies.',
  },
  {
    id: 'integrated',
    href: '/solutions/integrated-waterbody-solutions',
    name: 'Integrated Waterbody Solutions',
    label: 'Multiple interventions under one plan',
    summary:
      'Eunoia assesses site conditions and brings together suitable cleaning, monitoring, surveying, vegetation-management and preventive solutions under one execution plan.',
  },
] as const

export const capabilities = [
  {
    id: '01',
    title: 'Surface waste removal',
    copy: 'Electric unmanned vessels collect floating plastic, organic debris and other surface waste from lakes, rivers, ponds, canals and waterfronts.',
  },
  {
    id: '02',
    title: 'Waterbody maintenance',
    copy: 'Planned daily, weekly or monthly operations supported by trained personnel, preventive maintenance, waste logs and periodic reporting.',
  },
  {
    id: '03',
    title: 'Water quality monitoring',
    copy: 'Measure selected parameters such as pH, temperature, EC, ORP, TDS, turbidity and dissolved oxygen through integrated or standalone monitoring systems.',
  },
  {
    id: '04',
    title: 'Bathymetric survey',
    copy: 'Map underwater depth and terrain using an unmanned survey vessel to support restoration planning, storage assessment and engineering decisions.',
  },
  {
    id: '05',
    title: 'Weed & hyacinth management',
    copy: 'Assess and deploy suitable mechanical, ultrasonic or biological interventions based on species, density and site conditions.',
  },
  {
    id: '06',
    title: 'Impact reporting & handover',
    copy: 'Document progress with before-and-after records, operational data, maintenance SOPs and a structured handover plan for long-term local ownership.',
  },
] as const

export const aquaSpecs = [
  { label: 'Operating time', value: '6–8 hours', note: 'per charge' },
  { label: 'Control range', value: 'Up to 5 km', note: 'line of sight' },
  { label: 'Speed', value: '3–5 knots', note: 'approximately' },
  { label: 'Payload', value: 'Up to 150 kg', note: '' },
  { label: 'Collection', value: '300 L', note: 'standard bin' },
  { label: 'Expandable collection', value: 'Up to approx. 1,450 L', note: 'depending on configuration' },
] as const

export const aquaDetails = [
  { label: 'Vessel', value: 'Electric unmanned surface vessel' },
  { label: 'Hull', value: 'Catamaran' },
  { label: 'Propulsion', value: 'Twin electric thrusters' },
  { label: 'Power', value: 'Rechargeable electric battery system' },
  { label: 'Visual monitoring', value: 'Live camera feed based on configuration' },
] as const

export const aquaSensors = ['pH', 'Temperature', 'EC', 'ORP', 'TDS', 'Turbidity', 'Dissolved oxygen'] as const

export const aquaBenefits = [
  { title: 'Electric operation', copy: 'No fuel handling at the waterbody and lower operating noise.' },
  { title: 'Reduced worker exposure', copy: 'Collects waste from areas that may be difficult or unsafe to access manually.' },
  { title: 'Routine maintenance', copy: 'Supports planned daily, weekly or monthly surface-cleaning operations.' },
  { title: 'High manoeuvrability', copy: 'Twin-thruster control supports turning and movement in confined water zones.' },
  { title: 'Modular collection', copy: 'Standard onboard collection with expandable net configurations based on operating requirements.' },
  { title: 'Documented operations', copy: 'Live video, operating records and project reporting can support transparent monitoring.' },
  { title: 'Built for Indian conditions', copy: 'Developed and field-tested for diverse urban waterbody environments.' },
] as const

export const processSteps = [
  { id: '01', title: 'Assess', copy: 'Conduct a site visit, visual survey and preliminary evaluation of waste, weeds, access, inflows, operating zones and safety constraints.' },
  { id: '02', title: 'Plan', copy: 'Define the technology mix, deployment schedule, manpower, monitoring parameters, waste handling process and measurable outcomes.' },
  { id: '03', title: 'Deploy', copy: 'Mobilise equipment, train operators, establish operating and safety protocols, and begin field operations.' },
  { id: '04', title: 'Maintain', copy: 'Run scheduled cleaning and monitoring while maintaining the equipment and documenting daily activity.' },
  { id: '05', title: 'Measure', copy: 'Track waste collected, operating hours, area covered, water quality readings, recurring inflows and before-and-after conditions.' },
  { id: '06', title: 'Handover', copy: 'Transfer SOPs, training, reporting formats and maintenance responsibility to the municipality, client or designated operator where required.' },
] as const

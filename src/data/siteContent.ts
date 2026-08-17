export const BRAND = {
  name: 'Prakruti Yogashala',
  tagline: 'Where Yoga is Rooted in Tradition and Practiced with Purpose',
  location: 'Rishikesh • Yoga Alliance Certified',
  subtitle:
    'Traditional yoga from the lineages of Hatha, Iyengar and Tantra, taught with the anatomical precision your body needs.',
  website: 'https://www.prakrutiyogashala.com',
  address: 'Laxman Jhula Rd, Tapovan, Rishikesh, Uttarakhand 249137',
  phoneDisplay: '+91 83808 84995',
  phoneTel: '+918380884995',
  whatsapp: 'https://api.whatsapp.com/send?phone=918380884995',
  email: 'prakrutiyogashala@gmail.com',
} as const

export const STATS = [
  { value: '15+', label: 'Years of teaching' },
  { value: '3000+', label: 'Students trained' },
  { value: '10+', label: 'Specialist teachers' },
  { value: '4.9', label: '350+ reviews' },
] as const

export const PILLARS = [
  {
    id: 'body',
    title: 'Body',
    description:
      'Purified through Ayurveda, traditional food and Iyengar yoga practice.',
    icon: '/assets/yoga-body.svg',
  },
  {
    id: 'mind',
    title: 'Mind',
    description:
      "Purified through Patanjali's Yoga Sutras and the inner path to clarity.",
    icon: '/assets/yoga-mind.svg',
  },
  {
    id: 'speech',
    title: 'Speech',
    description:
      'Purified through Sanskrit, refining expression, tone and connection to self.',
    icon: '/assets/yoga-speech.svg',
  },
] as const

export const UNIQUES = [
  {
    title: 'Holistic curriculum',
    body: 'Ayurveda and Nada Yoga (sound) from day one — with asana, pranayama, philosophy, anatomy, Sanskrit, and Indian classical arts.',
  },
  {
    title: 'Small Gurukul batches',
    body: 'Classes stay small so teachers can correct you, not lose you in a crowd. Every student receives Ayurveda, astrology, and postural consultations.',
  },
  {
    title: 'Tapovan, by the Ganga',
    body: 'The school is in Tapovan, Rishikesh, in the Himalayan foothills, steps from the Ganga — not a hotel yoga hall in town.',
  },
  {
    title: 'Lineage with anatomy',
    body: 'Hatha and Iyengar alignment, Ashtanga, Tantra, and modern anatomy. Founded by Darshan Ji. Taught by specialists, not one script shared by two teachers.',
  },
] as const

export const COURSES = [
  {
    id: '100',
    hours: '100 Hour',
    name: 'Yoga Teacher Training',
    duration: '12 days residential',
    cert: 'Yoga Alliance CE eligible — not a standalone teaching certification.',
    shared: '$699',
    sharedWas: '$849',
    private: '$799',
    privateWas: '$999',
    href: 'https://www.prakrutiyogashala.com/100-hours-yoga-teacher-training',
    forWhom: 'Sincere beginners and practitioners who want a first step with depth.',
  },
  {
    id: '200',
    hours: '200 Hour',
    name: 'Yoga Teacher Training',
    duration: 'About 26 days residential',
    cert: 'Yoga Alliance — path to RYT-200.',
    shared: '$1,319',
    sharedWas: '$1,649',
    private: '$1,449',
    privateWas: '$1,799',
    href: 'https://www.prakrutiyogashala.com/200-hours-yoga-teacher-training',
    forWhom: 'The main course if you intend to register and teach.',
  },
  {
    id: '300',
    hours: '300 Hour',
    name: 'Yoga Teacher Training',
    duration: 'Advanced residential training',
    cert: 'Yoga Alliance — path to RYT-300. Requires a 200-hour certificate.',
    shared: '$1,499',
    sharedWas: '$1,949',
    private: '$1,649',
    privateWas: '$2,099',
    href: 'https://www.prakrutiyogashala.com/300-hour-yoga-teacher-training',
    forWhom: 'Teachers ready to refine practice, teaching, and philosophy.',
  },
] as const

export const INCLUSIONS = [
  'Shared or private room',
  'Three vegetarian / sattvic meals a day',
  'Course materials and yoga kit',
  'Dehradun airport pickup',
  'Guided Rishikesh excursion',
  'Alumni support',
] as const

export const LIVING = [
  {
    title: 'RO-filtered drinking water',
    body: 'Triple-filtered, lab-tested.',
  },
  {
    title: 'Organic Ayurvedic meals',
    body: 'Cooked fresh, three times a day. Vegan and gluten-free options.',
  },
  {
    title: 'Solo-female friendly',
    body: 'Female staff on campus, evening curfew, women-only floors.',
  },
  {
    title: 'Western-style bathrooms',
    body: 'Hot showers, daily housekeeping.',
  },
  {
    title: 'Door-to-door airport transfer',
    body: 'A trusted driver meets you at Dehradun with a Prakruti sign.',
  },
  {
    title: 'Small international group',
    body: 'You live and study with teachers — Gurukul, not a drop-in studio.',
  },
] as const

export const TEACHERS = [
  { name: 'Darshan Ji', role: 'Founder — philosophy, Iyengar alignment, Sanskrit' },
  { name: 'Ajay Ji', role: 'Hatha, Iyengar, Ashtanga alignment' },
  { name: 'Yogi Harmindra Ji', role: 'Anatomy, physiology, yoga therapy' },
  { name: 'Sadhu Shree Ji', role: 'Yoga philosophy and Indian scriptures' },
  { name: 'Jitendra ‘Jeet’ Ji', role: 'Meditation and inner healing' },
  { name: 'Bhagyashree Ji', role: 'Mantra, meditation, music' },
  { name: 'Abhishek Ji', role: 'Hatha yoga and Iyengar alignment' },
  { name: 'Dr. Akshay Vashisht', role: 'Mantra, kirtan, yoga philosophy' },
  { name: 'Nikhil Ji', role: 'Yoga philosophy and Tantra' },
  { name: 'Mahesh Ji', role: 'Meditation and pranayama' },
  { name: 'Deepti Ji', role: 'Asana, anatomy, therapeutic yoga' },
  { name: 'Pragya Ji', role: 'Vocal activation and classical Indian music' },
  { name: 'Dr. Shadwalee', role: 'Ayurveda' },
] as const

export const FAQS = [
  {
    q: 'Do you provide Yoga Alliance certification?',
    a: 'The 200-hour and 300-hour courses are Yoga Alliance certified. The 100-hour course is foundational and CE eligible; it is not a standalone teaching certification.',
  },
  {
    q: 'Which course is right for me?',
    a: '100-hour if you have about two weeks and want a serious first step. 200-hour if you want to register as a teacher. 300-hour if you already hold a 200-hour certificate.',
  },
  {
    q: 'Where is the school?',
    a: 'Tapovan, Rishikesh, at the foothills of the Himalayas. Housing is in Upper or Lower Tapovan.',
  },
  {
    q: 'What is included?',
    a: 'Training, accommodation, three meals a day, materials, a guided excursion, airport pickup, and alumni support.',
  },
] as const

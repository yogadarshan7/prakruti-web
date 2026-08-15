export type Dosha = 'Vata' | 'Pitta' | 'Kapha'

export const BRAND = {
  name: 'Prakruti Yogashala',
  tagline: 'Where Yoga is Rooted in Tradition and Practiced with Purpose',
  location: 'Rishikesh • Yoga Alliance Certified',
  subtitle:
    'Traditional yoga from the lineages of Hatha, Iyengar and Tantra, taught with the anatomical precision your body needs.',
  website: 'https://prakrutiyogashala.com',
  address: 'Tapovan, Rishikesh — at the foothills of the Himalayas by the sacred Ganga River',
} as const

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
      'Purified through Sanskrit refining expression, tone and connection to self.',
    icon: '/assets/yoga-speech.svg',
  },
] as const

export const DOSHA_PROFILES: Record<
  Dosha,
  { summary: string; lifestyle: string; yoga: string }
> = {
  Vata: {
    summary:
      'Vata constitution reflects air and space — creative, quick-minded, and sensitive. Balance comes through warmth, routine, and grounding practices.',
    lifestyle:
      'Prefer warm, nourishing meals, regular daily rhythm, and adequate rest. Ayurvedic consultations at Prakruti help tailor nutrition and lifestyle to your unique profile.',
    yoga:
      'Gentle Hatha with alignment focus, restorative postures, and steady pranayama support Vata balance.',
  },
  Pitta: {
    summary:
      'Pitta constitution reflects fire and water — focused, driven, and intense. Balance comes through cooling practices, moderation, and mindful pacing.',
    lifestyle:
      'Cooling foods, mindful eating, and time for reflection help harmonize Pitta. Our Ayurveda & Yogic Lifestyle curriculum integrates dosha-aware nutrition into daily ashram life.',
    yoga:
      'Balanced asana with attention to breath, meditation, and philosophy study prevent overheating while sustaining strength.',
  },
  Kapha: {
    summary:
      'Kapha constitution reflects earth and water — steady, nurturing, and enduring. Balance comes through movement, stimulation, and lightness.',
    lifestyle:
      'Light, warm foods, regular activity, and variety in routine enliven Kapha. Prakruti’s Ayurvedic meals and daily schedule are designed to support holistic balance.',
    yoga:
      'Dynamic Hatha and Ashtanga sequences, energizing pranayama, and early-morning practice help maintain vitality.',
  },
}

export const ASSESSMENT_QUESTIONS = [
  {
    id: 'energy',
    prompt: 'How would you describe your typical energy level?',
    options: [
      {
        label: 'Variable — bursts of energy followed by fatigue',
        dosha: 'Vata' as Dosha,
      },
      { label: 'Intense and focused', dosha: 'Pitta' as Dosha },
      { label: 'Steady and enduring', dosha: 'Kapha' as Dosha },
    ],
  },
  {
    id: 'digestion',
    prompt: 'How does your digestion usually feel?',
    options: [
      {
        label: 'Irregular with occasional bloating or dryness',
        dosha: 'Vata' as Dosha,
      },
      {
        label: 'Strong appetite with quick digestion',
        dosha: 'Pitta' as Dosha,
      },
      { label: 'Slow but steady digestion', dosha: 'Kapha' as Dosha },
    ],
  },
  {
    id: 'sleep',
    prompt: 'What best describes your sleep pattern?',
    options: [
      { label: 'Light sleeper, easily disturbed', dosha: 'Vata' as Dosha },
      { label: 'Moderate sleep, wake refreshed', dosha: 'Pitta' as Dosha },
      { label: 'Deep, long sleep', dosha: 'Kapha' as Dosha },
    ],
  },
  {
    id: 'temperament',
    prompt: 'When under stress, how do you tend to respond?',
    options: [
      { label: 'Anxious, restless, or scattered', dosha: 'Vata' as Dosha },
      { label: 'Irritable, critical, or overheated', dosha: 'Pitta' as Dosha },
      { label: 'Withdrawn, sluggish, or resistant to change', dosha: 'Kapha' as Dosha },
    ],
  },
  {
    id: 'body',
    prompt: 'Which best describes your natural body tendency?',
    options: [
      { label: 'Slender build, dry skin, variable weight', dosha: 'Vata' as Dosha },
      { label: 'Medium build, warm skin, strong musculature', dosha: 'Pitta' as Dosha },
      { label: 'Solid build, soft skin, gains weight easily', dosha: 'Kapha' as Dosha },
    ],
  },
] as const

export function tallyDoshas(
  answers: Record<string, Dosha>,
): Record<Dosha, number> {
  const scores: Record<Dosha, number> = { Vata: 0, Pitta: 0, Kapha: 0 }
  for (const dosha of Object.values(answers)) {
    scores[dosha] += 1
  }
  return scores
}

export function dominantDosha(scores: Record<Dosha, number>): Dosha {
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0] as Dosha
}

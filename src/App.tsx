import { useState } from 'react'
import './App.css'

type Dosha = 'Vata' | 'Pitta' | 'Kapha'

const QUESTIONS = [
  {
    id: 'energy',
    prompt: 'How would you describe your typical energy level?',
    options: [
      { label: 'Variable — bursts of energy followed by fatigue', dosha: 'Vata' as Dosha },
      { label: 'Intense and focused', dosha: 'Pitta' as Dosha },
      { label: 'Steady and enduring', dosha: 'Kapha' as Dosha },
    ],
  },
  {
    id: 'digestion',
    prompt: 'How does your digestion usually feel?',
    options: [
      { label: 'Irregular with occasional bloating', dosha: 'Vata' as Dosha },
      { label: 'Strong appetite with quick digestion', dosha: 'Pitta' as Dosha },
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
]

function tallyDoshas(answers: Record<string, Dosha>): Record<Dosha, number> {
  const scores: Record<Dosha, number> = { Vata: 0, Pitta: 0, Kapha: 0 }
  for (const dosha of Object.values(answers)) {
    scores[dosha] += 1
  }
  return scores
}

function dominantDosha(scores: Record<Dosha, number>): Dosha {
  return (Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0] as Dosha)
}

export default function App() {
  const [answers, setAnswers] = useState<Record<string, Dosha>>({})
  const [submitted, setSubmitted] = useState(false)

  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === QUESTIONS.length

  const handleSelect = (questionId: string, dosha: Dosha) => {
    setAnswers((prev) => ({ ...prev, [questionId]: dosha }))
    setSubmitted(false)
  }

  const handleSubmit = () => {
    if (!allAnswered) return
    setSubmitted(true)
  }

  const scores = submitted ? tallyDoshas(answers) : null
  const result = scores ? dominantDosha(scores) : null

  return (
    <div className="app">
      <header className="hero">
        <h1>Prakruti Web</h1>
        <p>
          Discover your Ayurvedic constitution through a short Prakruti assessment.
          Answer three questions to see your dominant dosha profile.
        </p>
      </header>

      <main className="assessment">
        {QUESTIONS.map((question, index) => (
          <section key={question.id} className="question-card">
            <h2>Question {index + 1}</h2>
            <p>{question.prompt}</p>
            <div className="options">
              {question.options.map((option) => {
                const selected = answers[question.id] === option.dosha
                return (
                  <button
                    key={option.label}
                    type="button"
                    className={selected ? 'option selected' : 'option'}
                    onClick={() => handleSelect(question.id, option.dosha)}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
          </section>
        ))}

        <div className="actions">
          <button
            type="button"
            className="submit"
            disabled={!allAnswered}
            onClick={handleSubmit}
          >
            Determine Prakruti
          </button>
          <span className="progress">{answeredCount}/{QUESTIONS.length} answered</span>
        </div>

        {submitted && result && scores && (
          <section className="result-card" aria-live="polite">
            <h2>Your Prakruti Result</h2>
            <p className="dominant">
              Dominant dosha: <strong>{result}</strong>
            </p>
            <ul className="score-list">
              {Object.entries(scores).map(([dosha, count]) => (
                <li key={dosha}>
                  {dosha}: {count} / {QUESTIONS.length}
                </li>
              ))}
            </ul>
            <p className="note">
              This demo assessment is for development validation. A full Prakruti
              determination uses a comprehensive questionnaire and expert review.
            </p>
          </section>
        )}
      </main>
    </div>
  )
}

import { useState } from 'react'
import {
  ASSESSMENT_QUESTIONS,
  BRAND,
  DOSHA_PROFILES,
  dominantDosha,
  tallyDoshas,
  type Dosha,
} from '../data/siteContent'

export function PrakrutiAssessment() {
  const [answers, setAnswers] = useState<Record<string, Dosha>>({})
  const [submitted, setSubmitted] = useState(false)

  const totalQuestions = ASSESSMENT_QUESTIONS.length
  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === totalQuestions

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
  const profile = result ? DOSHA_PROFILES[result] : null

  return (
    <section className="assessment-section" id="prakruti">
      <div className="section-heading">
        <span className="eyebrow">Ayurveda & Yogic Lifestyle</span>
        <h2>Determine Your Prakruti</h2>
        <p>
          Ayurveda&apos;s individualized healthcare system categorizes people by
          their unique Prakruti — the balance of Vata, Pitta, and Kapha. At
          Prakruti Yogashala, students receive Ayurvedic consultations to
          understand their constitution and receive tailored nutrition and
          lifestyle guidance.
        </p>
      </div>

      <div className="assessment-layout">
        {ASSESSMENT_QUESTIONS.map((question, index) => (
          <article key={question.id} className="question-card">
            <h3>
              <span className="question-number">{index + 1}</span>
              {question.prompt}
            </h3>
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
          </article>
        ))}

        <div className="assessment-actions">
          <button
            type="button"
            className="btn btn-primary"
            disabled={!allAnswered}
            onClick={handleSubmit}
          >
            Determine My Prakruti
          </button>
          <span className="progress">
            {answeredCount}/{totalQuestions} answered
          </span>
        </div>

        {submitted && result && scores && profile && (
          <article className="result-card" aria-live="polite">
            <h3>Your Prakruti Result</h3>
            <p className="dominant-dosha">
              Dominant dosha: <strong>{result}</strong>
            </p>
            <ul className="score-list">
              {Object.entries(scores).map(([dosha, count]) => (
                <li key={dosha}>
                  <span>{dosha}</span>
                  <span>{count} / {totalQuestions}</span>
                </li>
              ))}
            </ul>
            <div className="result-details">
              <p>{profile.summary}</p>
              <p><strong>Lifestyle:</strong> {profile.lifestyle}</p>
              <p><strong>Yoga practice:</strong> {profile.yoga}</p>
            </div>
            <p className="result-note">
              This introductory assessment offers a starting point. For a full
              Prakruti determination — including Ayurvedic consultation with
              Dr. Shadwalee and personalized guidance at our ashram in{' '}
              {BRAND.address} — visit{' '}
              <a href={BRAND.website} target="_blank" rel="noopener noreferrer">
                prakrutiyogashala.com
              </a>.
            </p>
          </article>
        )}
      </div>
    </section>
  )
}

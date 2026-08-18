import { useEffect } from 'react'
import { BRAND, COURSES } from '../data/siteContent'

type CourseId = (typeof COURSES)[number]['id']

export function CoursePage({ id }: { id: CourseId }) {
  const course = COURSES.find((item) => item.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!course) return null

  return (
    <article className="course-page">
      <p className="eyebrow">
        <a href="/">Home</a> · Yoga teacher training
      </p>
      <h1>
        {course.hours} {course.name}
      </h1>
      <p className="hero-subtitle">{course.forWhom}</p>
      <figure className="course-hero-photo">
        <img src={course.image} alt={`${course.hours} training at Prakruti Yogashala`} />
      </figure>
      <p className="course-cert">{course.cert}</p>
      <p className="course-meta">{course.duration} · Tapovan, Rishikesh</p>
      <dl className="price-list course-page-prices">
        <div>
          <dt>Shared room</dt>
          <dd>
            <s>{course.sharedWas}</s> {course.shared}
          </dd>
        </div>
        <div>
          <dt>Private room</dt>
          <dd>
            <s>{course.privateWas}</s> {course.private}
          </dd>
        </div>
      </dl>
      <h2>This is for you if</h2>
      <p>{course.forWhom}</p>
      <h2>This is not for you if</h2>
      <p>{course.notFor}</p>
      <h2>What the training covers</h2>
      <ul className="course-extra">
        {course.extra.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <div className="hero-actions">
        <a
          className="btn btn-primary"
          href={BRAND.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp about this course
        </a>
        <a className="btn btn-secondary" href="/#courses">
          All courses
        </a>
      </div>
    </article>
  )
}

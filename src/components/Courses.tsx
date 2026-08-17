import { COURSES } from '../data/siteContent'

export function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="section-heading">
        <span className="eyebrow">Enrollment</span>
        <h2>100, 200 and 300 hour yoga teacher training</h2>
        <p>
          Prices as listed on prakrutiyogashala.com (shared / private room, USD
          per person). Confirm current fees on WhatsApp before you book.
        </p>
      </div>
      <div className="course-grid">
        {COURSES.map((course) => (
          <article key={course.id} className="course-card">
            <p className="course-hours">{course.hours}</p>
            <h3>{course.name}</h3>
            <p className="course-meta">{course.duration}</p>
            <p className="course-for">{course.forWhom}</p>
            <p className="course-cert">{course.cert}</p>
            <dl className="price-list">
              <div>
                <dt>Shared</dt>
                <dd>
                  <s>{course.sharedWas}</s> {course.shared}
                </dd>
              </div>
              <div>
                <dt>Private</dt>
                <dd>
                  <s>{course.privateWas}</s> {course.private}
                </dd>
              </div>
            </dl>
            <a className="btn btn-primary" href={course.href}>
              Course details
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

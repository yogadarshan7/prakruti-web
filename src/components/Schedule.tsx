import { SCHEDULE } from '../data/siteContent'

export function Schedule() {
  return (
    <section className="schedule" id="schedule">
      <div className="section-heading">
        <span className="eyebrow">A day at the ashram</span>
        <h2>The daily rhythm</h2>
        <p>
          As listed on the school homepage. One rest day a week, usually with a
          half-day excursion in Rishikesh.
        </p>
      </div>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {SCHEDULE.map((row) => (
            <tr key={row.time}>
              <th scope="row">{row.time}</th>
              <td>{row.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

import { GALLERY } from '../data/siteContent'

export function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="section-heading">
        <span className="eyebrow">Campus</span>
        <h2>Life at the school in Tapovan</h2>
        <p>Practice, the Ganga, meals, and the shala — from the school’s own photographs.</p>
      </div>
      <div className="gallery-grid">
        {GALLERY.map((photo) => (
          <figure key={photo.src}>
            <img src={photo.src} alt={photo.alt} />
          </figure>
        ))}
      </div>
    </section>
  )
}

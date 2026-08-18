import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhyUs } from './components/WhyUs'
import { Pillars } from './components/Pillars'
import { Gallery } from './components/Gallery'
import { Curriculum } from './components/Curriculum'
import { WhoCanJoin } from './components/WhoCanJoin'
import { Courses } from './components/Courses'
import { Apply } from './components/Apply'
import { Living } from './components/Living'
import { Schedule } from './components/Schedule'
import { Teachers } from './components/Teachers'
import { Faq } from './components/Faq'
import { Enroll } from './components/Enroll'
import { Footer } from './components/Footer'
import { CoursePage } from './components/CoursePage'
import './App.css'

function usePathname() {
  const [path, setPath] = useState(() => window.location.pathname)
  useEffect(() => {
    const onChange = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onChange)
    return () => window.removeEventListener('popstate', onChange)
  }, [])
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a')
      if (!anchor || anchor.target === '_blank' || anchor.download) return
      const url = new URL(anchor.href, window.location.origin)
      if (url.origin !== window.location.origin) return
      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.hash}`)
      window.dispatchEvent(new PopStateEvent('popstate'))
      if (url.hash) {
        document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo(0, 0)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return path
}

function HomePage() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Pillars />
      <Gallery />
      <Curriculum />
      <WhoCanJoin />
      <Courses />
      <Apply />
      <Living />
      <Schedule />
      <Teachers />
      <Faq />
      <Enroll />
    </main>
  )
}

export default function App() {
  const path = usePathname()
  const courseId = path.includes('100-hour')
    ? '100'
    : path.includes('200-hour')
      ? '200'
      : path.includes('300-hour')
        ? '300'
        : null

  return (
    <div className="app">
      <Header />
      {courseId ? (
        <main>
          <CoursePage id={courseId} />
        </main>
      ) : (
        <HomePage />
      )}
      <Footer />
    </div>
  )
}

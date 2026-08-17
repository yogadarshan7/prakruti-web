import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhyUs } from './components/WhyUs'
import { Pillars } from './components/Pillars'
import { Courses } from './components/Courses'
import { Living } from './components/Living'
import { Teachers } from './components/Teachers'
import { Faq } from './components/Faq'
import { Enroll } from './components/Enroll'
import { Footer } from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Pillars />
        <Courses />
        <Living />
        <Teachers />
        <Faq />
        <Enroll />
      </main>
      <Footer />
    </div>
  )
}

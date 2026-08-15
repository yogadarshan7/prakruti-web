import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pillars } from './components/Pillars'
import { PrakrutiAssessment } from './components/PrakrutiAssessment'
import { Footer } from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <PrakrutiAssessment />
      </main>
      <Footer />
    </div>
  )
}

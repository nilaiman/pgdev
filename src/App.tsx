import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import HowItWorks from './components/HowItWorks/HowItWorks'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
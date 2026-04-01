import HeroContent from './HeroContent'
import HeroCarousel from './HeroCarousel'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__left">
            <HeroContent />
          </div>

          <div className="hero__right">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
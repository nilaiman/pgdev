import { useState, useEffect } from 'react'
import './ProcessBanner.css'

function ProcessBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const ads = [
  {
    id: 1,
    desktop: 'public/banner-1.png',
    mobile: 'public/planejamento-mobile.jpg',
    alt: 'Planejamento'
  },
  {
    id: 2,
    desktop: 'public/banner-2.png',
    mobile: 'public/desenvolvimento-mobile.jpg',
    alt: 'Desenvolvimento'
  },
  {
    id: 3,
    desktop: 'public/banner-3.png',
    mobile: 'public/integracoes-mobile.jpg',
    alt: 'Integrações'
  },
  {
    id: 4,
    desktop: 'public/banner-4.png',
    mobile: 'public/experiencia-app-mobile-4.png',
    alt: 'Experiência tipo app'
  }
]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [ads.length])

  const nextAd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length)
  }

  const prevAd = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length)
  }

  return (
    <section className="process-banner">
      <div className="container">
        <div className="carousel-container">
          <button className="carousel-btn carousel-btn--prev" onClick={prevAd}>
            ←
          </button>

          <div className="carousel-slide">
            <img 
              src={ads[currentIndex].desktop} 
              alt={ads[currentIndex].alt}
              className="process-desktop"
            />
            <img 
              src={ads[currentIndex].mobile} 
              alt={ads[currentIndex].alt}
              className="process-mobile"
            />
          </div>

          <button className="carousel-btn carousel-btn--next" onClick={nextAd}>
            →
          </button>
        </div>

        <div className="carousel-dots">
          {ads.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'dot--active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessBanner
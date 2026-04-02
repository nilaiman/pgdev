import { useEffect, useState } from 'react'
import { heroProjects } from '../data/heroProjects'
import { useSiteExperience } from '../context/SiteExperienceContext'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function HeroCarousel() {
  const [currentImage, setCurrentImage] = useState(0)
  
  const { language, selectedService } = useSiteExperience()

  const filteredProjects =
    selectedService === ''
      ? heroProjects
      : heroProjects.filter((project) => project.category === selectedService)

  const projectsToShow = filteredProjects.length > 0 ? filteredProjects : heroProjects

  useEffect(() => {
    setCurrentImage(0)
  }, [selectedService])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projectsToShow.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [projectsToShow.length])

  return (
    <div className="hero__carousel">
      <div className="hero__carousel-stack">
        {projectsToShow.map((project, index) => {
          const offset = (index - currentImage + projectsToShow.length) % projectsToShow.length
          const isActive = index === currentImage
          const isPrev = offset === projectsToShow.length - 1
          const isNext = offset === 1
          
          return (
            <div
              key={project.id}
              className={`hero__card ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
              style={{ 
                zIndex: projectsToShow.length - offset,
                transform: `translateX(${offset * 30}px) scale(${1 - offset * 0.05})`,
                opacity: offset === 0 ? 1 : 0.3,
              }}
            >
              <div className="hero__card-inner">
                <img src={project.image} alt={project.name} />
                <div className="hero__card-info">
                  <span className="hero__card-category">
                    {language === 'pt' ? project.typePt : project.typeEs}
                  </span>
                  <h4>{project.name}</h4>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="hero__carousel-nav">
        <button className="hero__nav-btn" onClick={() => setCurrentImage(prev => (prev - 1 + projectsToShow.length) % projectsToShow.length)}>
          <ChevronLeft size={18} />
        </button>
        <div className="hero__nav-dots">
          {projectsToShow.map((_, index) => (
            <button
              key={index}
              className={`hero__nav-dot ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
        <button className="hero__nav-btn" onClick={() => setCurrentImage(prev => (prev + 1) % projectsToShow.length)}>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default HeroCarousel
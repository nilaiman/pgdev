import { useEffect, useState } from 'react'
import { heroProjects } from '../data/heroProjects'
import { useSiteExperience } from '../context/SiteExperienceContext'

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
      {projectsToShow.map((project, index) => (
        <div
          key={project.id}
          className={`hero__slide ${index === currentImage ? 'active' : ''}`}
        >
          <div className="hero__slide-inner">
            <img src={project.image} alt={project.name} />
            <div className="hero__slide-label">
              <span className="hero__slide-type">
                {language === 'pt' ? project.typePt : project.typeEs}
              </span>
              <span className="hero__slide-name">{project.name}</span>
            </div>
            <div className="hero__slide-number">
              {String(index + 1).padStart(2, '0')} / {String(projectsToShow.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      ))}

      <button
        className="hero__arrow hero__arrow--prev"
        onClick={() =>
          setCurrentImage((prev) => (prev - 1 + projectsToShow.length) % projectsToShow.length)
        }
      >
        ←
      </button>

      <button
        className="hero__arrow hero__arrow--next"
        onClick={() => setCurrentImage((prev) => (prev + 1) % projectsToShow.length)}
      >
        →
      </button>
    </div>
  )
}

export default HeroCarousel
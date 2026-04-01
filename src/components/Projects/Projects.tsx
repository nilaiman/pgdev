import { projectsData } from '../data/projectsData'
import { useSiteExperience } from '../context/SiteExperienceContext'

function Projects() {
  const { language, selectedService } = useSiteExperience()

  const filteredProjects =
    selectedService === ''
      ? projectsData
      : projectsData.filter((project) => project.category === selectedService)

  const projectsToShow = filteredProjects.length > 0 ? filteredProjects : projectsData

  return (
    <section id="projetos" className="projects">
      <div className="container">
        <div className="projects__header">
          <div className="projects__badge">
            {language === 'pt' ? 'Trabalhos realizados' : 'Trabajos realizados'}
          </div>

          <h2 className="projects__title">
            {language === 'pt'
              ? 'Quem confia no '
              : 'Quienes confían en mi '}
            <span>{language === 'pt' ? 'meu trabalho' : 'trabajo'}</span>
          </h2>

          <p className="projects__description">
            {language === 'pt'
              ? 'Projetos entregues com foco em crescimento real para o seu negócio.'
              : 'Proyectos entregados con enfoque en crecimiento real para tu negocio.'}
          </p>
        </div>

        <div className="projects__showcase">
          {projectsToShow.map((project, index) => (
            <article
              key={project.id}
              className={`showcase-item ${index % 2 !== 0 ? 'showcase-item--reverse' : ''}`}
            >
              <div className="showcase-item__image">
                <img src={project.image} alt={project.title} />
                <div className="showcase-item__glow"></div>

                {project.tag && (
                  <div className="showcase-item__tag">
                    {language === 'pt' ? project.tag.pt : project.tag.es}
                  </div>
                )}
              </div>

              <div className="showcase-item__content">
                <span className="showcase-item__category">
                  {language === 'pt' ? project.typePt : project.typeEs}
                </span>

                <h3 className="showcase-item__title">{project.title}</h3>

                <p className="showcase-item__description">
                  {language === 'pt' ? project.descriptionPt : project.descriptionEs}
                </p>

                <ul className="showcase-item__results">
                  {(language === 'pt' ? project.featuresPt : project.featuresEs).map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="showcase-item__link"
                  >
                    {language === 'pt' ? project.linkLabelPt : project.linkLabelEs} →
                  </a>
                ) : (
                  <span className="showcase-item__link showcase-item__link--disabled">
                    {language === 'pt' ? project.linkLabelPt : project.linkLabelEs}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
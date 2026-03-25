import { ArrowRight } from 'lucide-react'
import drBrunoImage from '../../assets/projects/figma-drbruno.png'
import maxxSorvetesImage from '../../assets/projects/figma-maxsorvetes.png'
import sistemaImobiliarioImage from '../../assets/projects/figma-bnbplaza.png'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Dr. Bruno Ribeiro',
      category: 'Site Institucional',
      description: 'Presença digital profissional para consultório médico.',
      image: drBrunoImage,
      link: '#'
    },
    {
      id: 2,
      title: 'Maxx Sorvetes',
      category: 'Site + Cardápio Digital',
      description: 'Experiência digital completa para uma marca de sorvetes artesanais.',
      image: maxxSorvetesImage,
      link: '#'
    },
    {
      id: 3,
      title: 'BNB Plaza',
      category: 'Sistema de Gestão',
      description: 'Plataforma completa para gestão imobiliária com relatórios automatizados.',
      image: sistemaImobiliarioImage,
      link: '#'
    }
  ]

  return (
    <section id="projetos" className="projects">
      <div className="container">
        <div className="projects__header">
          <span className="projects__badge">Trabalhos recentes</span>
          <h2 className="projects__title">
            Cada projeto é <span>único</span>
          </h2>
          <p className="projects__description">
            Soluções feitas sob medida para cada cliente
          </p>
        </div>

        <div className="projects__showcase">
          {projects.map((project, index) => (
            <div key={project.id} className={`showcase-item ${index % 2 === 1 ? 'showcase-item--reverse' : ''}`}>
              <div className="showcase-item__image">
                <img src={project.image} alt={project.title} />
                <div className="showcase-item__glow"></div>
              </div>
              <div className="showcase-item__content">
                <span className="showcase-item__category">{project.category}</span>
                <h3 className="showcase-item__title">{project.title}</h3>
                <p className="showcase-item__description">{project.description}</p>
                <a href={project.link} className="showcase-item__link" target="_blank" rel="noreferrer">
                  Ver projeto
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__footer">
          <a href="#contato" className="btn btn--primary">
            Vamos criar o seu
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
import { ArrowRight, Lock } from 'lucide-react'
import kushiimg from '../../assets/projects/figma-kushi.png'
import drBrunoImage from '../../assets/projects/figma-drbruno.png'
import maxxSorvetesImage from '../../assets/projects/figma-maxsorvetes.png'
import sistemaImobiliarioImage from '../../assets/projects/figma-bnbplaza.png'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Kushi',
      category: 'E-commerce',
      description: 'Tienda virtual completa para moda masculina y femenina con catálogo organizado, filtros por categoría, promociones estacionales y blog de tendencias.',
      image: kushiimg,
      link: 'https://pablog-7.github.io/ecommerce-kushi/',
      tag: 'Destacado',
      results: ['Catálogo con filtros inteligentes', 'Promociones y cupones automáticos', 'Blog integrado para engagement', '100% responsive en todos dispositivos']
    },
    {
      id: 2,
      title: 'Maxx Sorvetes',
      category: 'Sitio Institucional',
      description: 'Sitio que conecta clientes locales a la heladería, con menú digital y botones directos para WhatsApp y ubicación.',
      image: maxxSorvetesImage,
      link: 'https://maxsorvetesibertioga.com.br/',
      results: ['Menú digital de fácil navegación', 'Contacto directo vía WhatsApp', 'Ubicación integrada con Google Maps', 'SEO para encontrar negocio local']
    },
    {
      id: 3,
      title: 'Dr. Bruno Ribeiro',
      category: 'Sitio Institucional',
      description: 'Sitio profesional para fisioterapeuta que facilita el contacto con pacientes y genera más citas online.',
      image: drBrunoImage,
      link: 'https://pablog-7.github.io/projeto-drbruno/',
      results: ['Agendamiento facilitado', 'Contacto directo vía WhatsApp', 'Presencia digital profesional', 'Generación de leads calificados']
    },
    {
      id: 4,
      title: 'BNB Plaza',
      category: 'Sistema de Gestión',
      description: 'Plataforma completa de gestión inmobiliaria que centraliza operaciones financieras, ocupaciones y reportes en tiempo real.',
      image: sistemaImobiliarioImage,
      link: null,
      tag: 'Sistema Interno',
      results: ['Dashboard financiero en tiempo real', 'Gestión de propiedades y ocupaciones', 'Reportes automáticos en PDF', 'Sistema offline-first con sincronización']
    }
  ]

  return (
    <section id="projetos" className="projects">
      <div className="container">
        <div className="projects__header">
          <span className="projects__badge">Trabajos realizados</span>
          <h2 className="projects__title">
           Quienes confían <span>en mi trabajo</span>
          </h2>
          <p className="projects__description">
            Proyectos entregados con enfoque en crecimiento real para tu negocio
          </p>
        </div>

        <div className="projects__showcase">
          {projects.map((project, index) => (
            <div key={project.id} className={`showcase-item ${index % 2 === 1 ? 'showcase-item--reverse' : ''}`}>
              <div className="showcase-item__image">
                <img src={project.image} alt={project.title} />
                <div className="showcase-item__glow"></div>
                {project.tag && (
                  <span className="showcase-item__tag">{project.tag}</span>
                )}
              </div>
              <div className="showcase-item__content">
                <span className="showcase-item__category">{project.category}</span>
                <h3 className="showcase-item__title">{project.title}</h3>
                <p className="showcase-item__description">{project.description}</p>
                
                {/* Lista de resultados/benefícios */}
                <ul className="showcase-item__results">
                  {project.results.map((result, i) => (
                    <li key={i}>
                      <span>✓</span>
                      {result}
                    </li>
                  ))}
                </ul>

                {project.link ? (
                  <a href={project.link} className="showcase-item__link" target="_blank" rel="noreferrer">
                    Ver proyecto
                    <ArrowRight size={16} />
                  </a>
                ) : (
                  <div className="showcase-item__link showcase-item__link--disabled">
                    <Lock size={14} />
                    Sistema interno
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="projects__footer">
          <a href="#contato" className="btn btn--primary">
            Quiero un proyecto así
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
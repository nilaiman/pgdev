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
      description: 'Loja virtual completa para moda masculina e feminina com catálogo organizado, filtros por categoria, promoções sazonais e blog de tendências.',
      image: kushiimg,
      link: 'https://pablog-7.github.io/ecommerce-kushi/',
      tag: 'Destaque',
      results: ['Catálogo com filtros inteligentes', 'Promoções e cupons automáticos', 'Blog integrado para engajamento', '100% responsivo em todos dispositivos']
    },
    {
      id: 2,
      title: 'Maxx Sorvetes',
      category: 'Site Institucional',
      description: 'Site que conecta clientes locais à sorveteria, com cardápio digital e botões diretos para WhatsApp e localização.',
      image: maxxSorvetesImage,
      link: 'https://maxsorvetesibertioga.com.br/',
      results: ['Cardápio digital de fácil navegação', 'Contato direto via WhatsApp', 'Localização integrada com Google Maps', 'SEO para encontrar negócio local']
    },
    {
      id: 3,
      title: 'Dr. Bruno Ribeiro',
      category: 'Site Institucional',
      description: 'Site profissional para fisioterapeuta que facilita o contato com pacientes e gera mais agendamentos online.',
      image: drBrunoImage,
      link: 'https://pablog-7.github.io/projeto-drbruno/',
      results: ['Agendamento facilitado', 'Contato direto via WhatsApp', 'Presença digital profissional', 'Geração de leads qualificados']
    },
    {
      id: 4,
      title: 'BNB Plaza',
      category: 'Sistema de Gestão',
      description: 'Plataforma completa de gestão imobiliária que centraliza operações financeiras, ocupações e relatórios em tempo real.',
      image: sistemaImobiliarioImage,
      link: null,
      tag: 'Sistema Interno',
      results: ['Dashboard financeiro em tempo real', 'Gestão de propriedades e ocupações', 'Relatórios automáticos em PDF', 'Sistema offline-first com sincronização']
    }
  ]

  return (
    <section id="projetos" className="projects">
      <div className="container">
        <div className="projects__header">
          <span className="projects__badge">Trabalhos realizados</span>
          <h2 className="projects__title">
           Quem confia <span>no meu trabalho</span>
          </h2>
          <p className="projects__description">
            Projetos entregues com foco em crescimento real para o seu negócio
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
                    Ver projeto
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
            Quero um projeto assim
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
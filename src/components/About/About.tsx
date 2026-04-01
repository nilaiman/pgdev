import { Code, Users, Heart } from 'lucide-react'
import logoImage from '../../assets/projects/logopgdev.jpeg'
import { useSiteExperience } from '../context/SiteExperienceContext'

function About() {
  const { language } = useSiteExperience()

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="section-tag">
              {language === 'pt' ? 'Sobre PabloG.Dev' : 'Sobre PabloG.Dev'}
            </span>

            <h2 className="section-title">
              {language === 'pt' ? (
                <>
                  Criando soluções digitais <br />
                  <span>com código e propósito</span>
                </>
              ) : (
                <>
                  Creando soluciones digitales <br />
                  <span>con código y propósito</span>
                </>
              )}
            </h2>

            <p className="about__description">
              {language === 'pt'
                ? 'Sou desenvolvedor e fundador da PabloG.Dev. Minha missão é ajudar negócios a terem presença digital de qualidade através de sites, sistemas e automações feitos sob medida.'
                : 'Soy desarrollador y fundador de PabloG.Dev. Mi misión es ayudar a negocios a tener presencia digital de calidad a través de sitios web, sistemas y automatizaciones hechas a medida.'}
            </p>

            <p className="about__description">
              {language === 'pt'
                ? 'Cada projeto é desenvolvido com atenção aos detalhes, foco em resultados e compromisso com a satisfação de quem confia no meu trabalho.'
                : 'Cada proyecto se desarrolla con atención a los detalles, enfoque en resultados y compromiso con la satisfacción de quienes confían en mi trabajo.'}
            </p>
          </div>

          <div className="about__right">
            <div className="about__logo">
              <img src={logoImage} alt="PabloG.Dev Logo" />
            </div>

            <div className="about__stats">
              <div className="about__stat">
                <Code size={20} />
                <span>{language === 'pt' ? 'Projetos' : 'Proyectos'}</span>
              </div>

              <div className="about__stat">
                <Users size={20} />
                <span>{language === 'pt' ? 'Atendimento' : 'Atención'}</span>
              </div>

              <div className="about__stat">
                <Heart size={20} />
                <span>{language === 'pt' ? 'Dedicação' : 'Dedicación'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
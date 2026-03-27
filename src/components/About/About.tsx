import { Code, Users, Heart } from 'lucide-react'
import logoImage from '../../assets/projects/logopgdev.jpeg'

function About() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="section-tag">Sobre PabloG.Dev</span>
            <h2 className="section-title">
              Creando soluciones digitales <br />
              <span>con código y propósito</span>
            </h2>
            <p className="about__description">
              Soy desarrollador y fundador de PabloG.Dev - Mi misión es ayudar 
              a negocios a tener presencia digital de calidad a través de sitios web, 
              sistemas y automatizaciones hechos a medida.
            </p>
            <p className="about__description">
              Cada proyecto se desarrolla con atención a los detalles, enfoque en 
              resultados y compromiso con la satisfacción de quienes confían en mi trabajo.
            </p>
          </div>

          <div className="about__right">
            <div className="about__logo">
              <img src={logoImage} alt="PG.Dev Logo" />
            </div>
            <div className="about__stats">
              <div className="about__stat">
                <Code size={20} />
                <span>Proyectos</span>
              </div>
              <div className="about__stat">
                <Users size={20} />
                <span>Atención</span>
              </div>
              <div className="about__stat">
                <Heart size={20} />
                <span>Dedicado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
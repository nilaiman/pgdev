import { Code, Users, Heart } from 'lucide-react'
import logoImage from '../../assets/projects/logopgdev.jpeg'

function About() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="section-tag">Sobre a PG.Dev</span>
            <h2 className="section-title">
              Criando soluções digitais <br />
              <span>com código e propósito</span>
            </h2>
            <p className="about__description">
              Sou desenvolvedor e fundador da PG.Dev. Minha missão é ajudar 
              negócios a terem presença digital de qualidade através de sites, 
              sistemas e automações feitos sob medida.
            </p>
            <p className="about__description">
              Cada projeto é desenvolvido com atenção aos detalhes, foco em 
              resultados e compromisso com a satisfação de quem confia no meu trabalho.
            </p>
          </div>

          <div className="about__right">
            <div className="about__logo">
              <img src={logoImage} alt="PG.Dev Logo" />
            </div>
            <div className="about__stats">
              <div className="about__stat">
                <Code size={20} />
                <span>Projetos</span>
              </div>
              <div className="about__stat">
                <Users size={20} />
                <span>Atendimento</span>
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
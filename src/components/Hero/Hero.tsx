import { useState, useEffect } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import sistemaImage from '../../assets/projects/figma-bnbplaza.png'
import drBrunoImage from '../../assets/projects/figma-drbruno.png'
import maxxSorvetesImage from '../../assets/projects/figma-maxsorvetes.png'
import kushiimg from '../../assets/projects/figma-kushi.png'
import luckpetimg from '../../assets/projects/figmaluckpet.png'

function Hero() {
  const projects = [
    {
      id: 1,
      image: drBrunoImage,
      type: 'Site Institucional',
      name: 'Dr. Bruno Ribeiro'
    },
    {
      id: 2,
       image: sistemaImage,
      type: 'Sistema',
      name: 'BNB Plaza'
    },
    {
      id: 3,
      image: maxxSorvetesImage,
      type: 'Site Institucional',
      name: 'Max Sorvetes'
    },
     {
      id: 4,
     image: kushiimg,
type: 'E-commerce',
name: 'Kushi'
    },
    {
    id: 5,
image: luckpetimg,
type: 'E-commerce',
name: 'LuckPet'
    }
  ]
  
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [projects.length])

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__left">
            <h1 className="hero__title">
              Automatize seu negócio e <br />
              <span>aumente seus resultados</span>
            </h1>
            <p className="hero__text">
              Soluções digitais para empresas que querem mais clientes, 
              mais organização e menos trabalho manual.
            </p>
            <div className="hero__buttons">
              <a href="#contato" className="hero__btn hero__btn--primary">
                Solicitar orçamento
                <ArrowRight size={16} />
              </a>
              <a href="#projetos" className="hero__btn hero__btn--secondary">
                <Play size={16} />
                Ver projetos
              </a>
            </div>
          </div>

          <div className="hero__right">
            <div className="hero__carousel">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`hero__slide ${index === currentImage ? 'active' : ''}`}
                >
                  <div className="hero__slide-inner">
                    <img src={project.image} alt={project.name} />
                    <div className="hero__slide-label">
                      <span className="hero__slide-type">{project.type}</span>
                      <span className="hero__slide-name">{project.name}</span>
                    </div>
                    <div className="hero__slide-number">
                      {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              ))}
              
              <button 
                className="hero__arrow hero__arrow--prev"
                onClick={() => setCurrentImage((prev) => (prev - 1 + projects.length) % projects.length)}
              >
                ←
              </button>
              <button 
                className="hero__arrow hero__arrow--next"
                onClick={() => setCurrentImage((prev) => (prev + 1) % projects.length)}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
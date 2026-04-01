import { Search, PenTool, Code, Rocket } from 'lucide-react'
import { useSiteExperience } from '../context/SiteExperienceContext'

function HowItWorks() {
  const { language } = useSiteExperience()

  const steps =
    language === 'pt'
      ? [
          {
            number: 1,
            title: 'Entendimento',
            description: 'Analisamos seu negócio e seus objetivos.',
            icon: Search,
          },
          {
            number: 2,
            title: 'Planejamento',
            description: 'Estruturamos a melhor solução para o seu caso.',
            icon: PenTool,
          },
          {
            number: 3,
            title: 'Desenvolvimento',
            description: 'Construímos a solução com foco em resultado e qualidade.',
            icon: Code,
          },
          {
            number: 4,
            title: 'Entrega',
            description: 'Implementamos e garantimos o funcionamento da solução.',
            icon: Rocket,
          },
        ]
      : [
          {
            number: 1,
            title: 'Entendimiento',
            description: 'Analizamos tu negocio y tus objetivos.',
            icon: Search,
          },
          {
            number: 2,
            title: 'Planificación',
            description: 'Estructuramos la mejor solución para tu caso.',
            icon: PenTool,
          },
          {
            number: 3,
            title: 'Desarrollo',
            description: 'Construimos tu solución con enfoque en resultados y calidad.',
            icon: Code,
          },
          {
            number: 4,
            title: 'Entrega',
            description: 'Implementamos y garantizamos el funcionamiento de la solución.',
            icon: Rocket,
          },
        ]

  return (
    <section id="processo" className="how">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            {language === 'pt' ? 'Processo' : 'Proceso'}
          </span>

          <h2 className="section-title">
            {language === 'pt'
              ? 'Como funciona o desenvolvimento'
              : 'Cómo funciona el desarrollo'}
          </h2>

          <p className="section-description">
            {language === 'pt'
              ? 'Metodologia simples e eficiente para entregar resultados'
              : 'Metodología simple y eficiente para entregar resultados'}
          </p>
        </div>

        <div className="how__grid">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div key={index} className="how__card">
                <div className="how__number">{step.number}</div>

                <div className="how__icon">
                  <Icon size={32} />
                </div>

                <h3 className="how__title">{step.title}</h3>
                <p className="how__description">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
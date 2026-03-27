import { Search, PenTool, Code, Rocket } from 'lucide-react'

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Entendimiento',
      description: 'Analizamos tu negocio y tus objetivos.',
      icon: Search
    },
    {
      number: 2,
      title: 'Planificación',
      description: 'Estructuramos la mejor solución.',
      icon: PenTool
    },
    {
      number: 3,
      title: 'Desarrollo',
      description: 'Construimos tu solución.',
      icon: Code
    },
    {
      number: 4,
      title: 'Entrega',
      description: 'Implementamos y garantizamos el funcionamiento.',
      icon: Rocket
    }
  ]

  return (
    <section id="processo" className="how">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Proceso</span>
          <h2 className="section-title">
            Cómo funciona el desarrollo
          </h2>
          <p className="section-description">
            Metodología simple y eficiente para entregar resultados
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
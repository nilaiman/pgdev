import { Search, PenTool, Code, Rocket } from 'lucide-react'

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Entendimento',
      description: 'Analisamos seu negócio e seus objetivos.',
      icon: Search
    },
    {
      number: 2,
      title: 'Planejamento',
      description: 'Estruturamos a melhor solução.',
      icon: PenTool
    },
    {
      number: 3,
      title: 'Desenvolvimento',
      description: 'Construímos sua solução.',
      icon: Code
    },
    {
      number: 4,
      title: 'Entrega',
      description: 'Implementamos e garantimos o funcionamento.',
      icon: Rocket
    }
  ]

  return (
    <section id="processo" className="how">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Processo</span>
          <h2 className="section-title">
            Como funciona o desenvolvimento
          </h2>
          <p className="section-description">
            Metodologia simples e eficiente para entregar resultados
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
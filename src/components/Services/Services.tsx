import { CheckCircle2 } from 'lucide-react'
import { servicesData } from '../data/servicesData'
import { useSiteExperience } from '../context/SiteExperienceContext'

function Services() {
  const { language, selectedService } = useSiteExperience()

  const filteredServices =
    selectedService === ''
      ? servicesData
      : servicesData.filter((service) => service.key === selectedService)

  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="services__hero">
          <h2 className="services__hero-title">
            {language === 'pt'
              ? 'Soluções pensadas para o seu '
              : 'Soluciones pensadas para tu '}
            <span>{language === 'pt' ? 'negócio' : 'negocio'}</span>
          </h2>

          <p className="services__hero-text">
            {language === 'pt'
              ? 'Veja com mais clareza o que está incluído na solução ideal para você.'
              : 'Mira con más claridad qué está incluido en la solución ideal para ti.'}
          </p>
        </div>

        <div className="services__cards">
          {filteredServices.map((service) => (
            <article key={service.id} className="service-feature">
              <div className="service-feature__info">
                <span className="service-feature__eyebrow">
                  {language === 'pt' ? 'Solução selecionada' : 'Solución seleccionada'}
                </span>

                <h3>{language === 'pt' ? service.titlePt : service.titleEs}</h3>

                <strong className="service-feature__subtitle">
                  {language === 'pt' ? service.subtitlePt : service.subtitleEs}
                </strong>

                <p>{language === 'pt' ? service.descriptionPt : service.descriptionEs}</p>

                <ul className="service-feature__features">
                  {(language === 'pt' ? service.featuresPt : service.featuresEs).map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-feature__highlight">
                  {language === 'pt' ? service.highlightPt : service.highlightEs}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
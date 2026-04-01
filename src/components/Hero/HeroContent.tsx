import { ArrowRight, Play } from 'lucide-react'
import { useSiteExperience } from '../context/SiteExperienceContext'
import { es } from '../i18n/es'
import { pt } from '../i18n/pt'
import { buildWhatsappMessage } from '../utils/buildWhatsappMessage'

function HeroContent() {
  const { language, selectedService } = useSiteExperience()
  const content = language === 'pt' ? pt : es

  const heroContent =
    selectedService === 'website'
      ? content.hero.website
      : selectedService === 'system'
      ? content.hero.system
      : content.hero.default

  const whatsappNumber = '5511961111894'
  const message = buildWhatsappMessage(language, selectedService)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <>
      <h1 className="hero__title">
        {heroContent.title} <br />
        <span>{heroContent.highlight}</span>
      </h1>

      <p className="hero__text">{heroContent.description}</p>

      <div className="hero__buttons">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="hero__btn hero__btn--primary"
        >
          {heroContent.primaryButton}
          <ArrowRight size={16} />
        </a>

        <a href="#projetos" className="hero__btn hero__btn--secondary">
          <Play size={16} />
          {heroContent.secondaryButton}
        </a>
      </div>
    </>
  )
}

export default HeroContent
import { useSiteExperience } from '../context/SiteExperienceContext'
import { buildWhatsappMessage } from '../utils/buildWhatsappMessage'

function Contact() {
  const { language, selectedService } = useSiteExperience()

  const whatsappNumber = '5511961111894'
  const message = buildWhatsappMessage(language, selectedService)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <span className="contact__badge">
              {language === 'pt' ? 'Contato' : 'Contacto'}
            </span>

            <h2 className="contact__title">
              {language === 'pt' ? (
                <>
                  Vamos conversar sobre a <br />
                  <span>melhor solução</span>
                </>
              ) : (
                <>
                  Hablemos sobre la <br />
                  <span>mejor solución</span>
                </>
              )}
            </h2>

            <p className="contact__description">
              {language === 'pt'
                ? 'Me conte o que você precisa e eu vou te mostrar a melhor solução digital para o seu negócio.'
                : 'Cuéntame qué necesitas y te mostraré la mejor solución digital para tu negocio.'}
            </p>

            <div className="contact__methods">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="contact__method contact__method--whatsapp"
              >
                <div className="contact__method-icon">💬</div>
                <div>
                  <strong>WhatsApp</strong>
                  <span>
                    {language === 'pt'
                      ? 'Falar diretamente comigo'
                      : 'Hablar directamente conmigo'}
                  </span>
                </div>
                <div className="contact__method-arrow">→</div>
              </a>

              <a
                href="mailto:pgdevsoftware@gmail.com"
                className="contact__method contact__method--email"
              >
                <div className="contact__method-icon">✉</div>
                <div>
                  <strong>Email</strong>
                  <span>pgdevsoftware@gmail.com</span>
                </div>
                <div className="contact__method-arrow">→</div>
              </a>
            </div>
          </div>

          <div className="contact__card">
            <div className="contact__card-icon">⚡</div>
            <h3>
              {language === 'pt'
                ? 'Soluções sob medida para o seu negócio'
                : 'Soluciones a medida para tu negocio'}
            </h3>
            <p>
              {language === 'pt'
                ? 'Sites, sistemas e automações pensados para gerar resultado real.'
                : 'Sitios, sistemas y automatizaciones pensados para generar resultados reales.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
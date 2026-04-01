import { MessageCircle } from 'lucide-react'
import { useSiteExperience } from '../context/SiteExperienceContext'
import { buildWhatsappMessage } from '../utils/buildWhatsappMessage'

function WhatsAppButton() {
  const { language, selectedService } = useSiteExperience()

  const whatsappNumber = '5511961111894'
  const message = buildWhatsappMessage(language, selectedService)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="whatsapp-button"
    >
      <MessageCircle size={24} />
    </a>
  )
}

export default WhatsAppButton
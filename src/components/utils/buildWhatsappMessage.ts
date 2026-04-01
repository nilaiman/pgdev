type Language = 'pt' | 'es'
type ServiceType = 'website' | 'system' | ''

export function buildWhatsappMessage(
  language: Language,
  selectedService: ServiceType
) {
  const serviceLabel =
    selectedService === 'website'
      ? language === 'pt'
        ? 'um site profissional'
        : 'un sitio web profesional'
      : language === 'pt'
      ? 'um sistema com automação'
      : 'un sistema con automatización'

  if (language === 'pt') {
    return `Olá! Vi seu site e tenho interesse em ${serviceLabel}.`
  }

  return `¡Hola! Vi tu sitio y me interesa ${serviceLabel}.`
}
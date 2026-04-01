import { useMemo, useState } from 'react'
import { MessageCircle, X, ChevronRight } from 'lucide-react'
import { useSiteExperience } from '../context/SiteExperienceContext'

function WhatsAppAssistant() {
  const { language, selectedService } = useSiteExperience()
  const [open, setOpen] = useState(false)

  const whatsappNumber = '5511961111894'
  const isPt = language === 'pt'

  const options = useMemo(() => {
    if (selectedService === 'website') {
      return isPt
        ? [
            {
              title: 'Quero um site profissional',
              subtitle: 'Para apresentar meu negócio e atrair clientes',
              message:
                'Olá! Vi seu site e quero um site profissional para apresentar meu negócio e atrair clientes.',
            },
            {
              title: 'Quero melhorar minha presença online',
              subtitle: 'Com WhatsApp, design profissional e mais contatos',
              message:
                'Olá! Tenho interesse em um site profissional com foco em presença online, WhatsApp e geração de contatos.',
            },
            {
              title: 'Quero falar sobre meu projeto',
              subtitle: 'Explicar minha ideia e entender a melhor solução',
              message:
                'Olá! Vi seu site e quero conversar sobre um projeto de site profissional para o meu negócio.',
            },
          ]
        : [
            {
              title: 'Quiero un sitio profesional',
              subtitle: 'Para presentar mi negocio y atraer clientes',
              message:
                '¡Hola! Vi tu sitio y quiero un sitio profesional para presentar mi negocio y atraer clientes.',
            },
            {
              title: 'Quiero mejorar mi presencia online',
              subtitle: 'Con WhatsApp, diseño profesional y más contactos',
              message:
                '¡Hola! Me interesa un sitio profesional con enfoque en presencia online, WhatsApp y generación de contactos.',
            },
            {
              title: 'Quiero hablar sobre mi proyecto',
              subtitle: 'Explicar mi idea y entender la mejor solución',
              message:
                '¡Hola! Vi tu sitio y quiero hablar sobre un proyecto de sitio profesional para mi negocio.',
            },
          ]
    }

    if (selectedService === 'system') {
      return isPt
        ? [
            {
              title: 'Quero um sistema + automação',
              subtitle: 'Para organizar e automatizar processos',
              message:
                'Olá! Vi seu site e tenho interesse em um sistema com automação para organizar e automatizar processos do meu negócio.',
            },
            {
              title: 'Quero melhorar minha gestão',
              subtitle: 'Com mais controle e menos trabalho manual',
              message:
                'Olá! Quero entender uma solução de sistema + automação para melhorar a gestão do meu negócio.',
            },
            {
              title: 'Quero falar sobre meu projeto',
              subtitle: 'Explicar meu processo e receber uma direção',
              message:
                'Olá! Vi seu site e quero conversar sobre um projeto de sistema com automação para o meu negócio.',
            },
          ]
        : [
            {
              title: 'Quiero un sistema + automatización',
              subtitle: 'Para organizar y automatizar procesos',
              message:
                '¡Hola! Vi tu sitio y me interesa un sistema con automatización para organizar y automatizar procesos de mi negocio.',
            },
            {
              title: 'Quiero mejorar mi gestión',
              subtitle: 'Con más control y menos trabajo manual',
              message:
                '¡Hola! Quiero entender una solución de sistema + automatización para mejorar la gestión de mi negocio.',
            },
            {
              title: 'Quiero hablar sobre mi proyecto',
              subtitle: 'Explicar mi proceso y recibir una orientación',
              message:
                '¡Hola! Vi tu sitio y quiero hablar sobre un proyecto de sistema con automatización para mi negocio.',
            },
          ]
    }

    return isPt
      ? [
          {
            title: 'Quero um site profissional',
            subtitle: 'Para apresentar meu negócio',
            message:
              'Olá! Vi seu site e tenho interesse em um site profissional para o meu negócio.',
          },
          {
            title: 'Quero um sistema + automação',
            subtitle: 'Para organizar processos',
            message:
              'Olá! Vi seu site e tenho interesse em um sistema com automação para o meu negócio.',
          },
          {
            title: 'Quero entender a melhor solução',
            subtitle: 'Ainda não sei qual opção escolher',
            message:
              'Olá! Vi seu site e quero entender qual é a melhor solução para o meu negócio.',
          },
        ]
      : [
          {
            title: 'Quiero un sitio profesional',
            subtitle: 'Para presentar mi negocio',
            message:
              '¡Hola! Vi tu sitio y me interesa un sitio profesional para mi negocio.',
          },
          {
            title: 'Quiero un sistema + automatización',
            subtitle: 'Para organizar procesos',
            message:
              '¡Hola! Vi tu sitio y me interesa un sistema con automatización para mi negocio.',
          },
          {
            title: 'Quiero entender la mejor solución',
            subtitle: 'Todavía no sé cuál opción elegir',
            message:
              '¡Hola! Vi tu sitio y quiero entender cuál es la mejor solución para mi negocio.',
          },
        ]
  }, [isPt, selectedService])

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <button
        type="button"
        className="wa-assistant-button"
        aria-label="WhatsApp assistant"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <div className={`wa-assistant ${open ? 'wa-assistant--open' : ''}`}>
        <div className="wa-assistant__header">
          <div className="wa-assistant__brand">
            <div className="wa-assistant__icon">
              <div className="nova-icon">
                <div className="nova-core"></div>
                <div className="nova-ring"></div>
                <div className="nova-particle"></div>
                <div className="nova-particle"></div>
                <div className="nova-particle"></div>
              </div>
            </div>

            <div>
              <strong>Nova</strong>
              <span>{isPt ? 'Assistente de contato' : 'Asistente de contacto'}</span>
            </div>
          </div>

          <button
            type="button"
            className="wa-assistant__close"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="wa-assistant__body">
          <div className="wa-assistant__message">
            <p>
              {isPt
                ? 'Escolha uma mensagem pronta para continuar no WhatsApp.'
                : 'Elige un mensaje listo para continuar en WhatsApp.'}
            </p>
          </div>

          <div className="wa-assistant__options">
            {options.map((option) => (
              <button
                key={option.title}
                type="button"
                className="wa-assistant__option"
                onClick={() => openWhatsApp(option.message)}
              >
                <div className="wa-assistant__option-text">
                  <strong>{option.title}</strong>
                  <span>{option.subtitle}</span>
                </div>

                <ChevronRight size={18} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatsAppAssistant
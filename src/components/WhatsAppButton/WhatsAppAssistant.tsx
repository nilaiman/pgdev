import { useEffect, useMemo, useState } from 'react'
import {
  MessageCircle,
  X,
  ChevronRight,
  ArrowLeft,
  MonitorSmartphone,
  Settings,
  HelpCircle,
} from 'lucide-react'
import { useSiteExperience } from '../context/SiteExperienceContext'

type AssistantStep = 'intro' | 'start' | 'website' | 'system' | 'unsure'

function WhatsAppAssistant() {
  const { language, selectedService } = useSiteExperience()

  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<AssistantStep>('intro')
  const [typing, setTyping] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  const whatsappNumber = '5511961111894'
  const isPt = language === 'pt'

  const initialStep = useMemo<AssistantStep>(() => {
    if (selectedService === 'website') return 'website'
    if (selectedService === 'system') return 'system'
    return 'start'
  }, [selectedService])

  useEffect(() => {
    if (!open) return

    setTyping(true)
    setShowMessage(false)
    setShowOptions(false)

    const typingTimer = setTimeout(() => {
      setTyping(false)
      setShowMessage(true)
    }, 650)

    const optionsTimer = setTimeout(() => {
      setShowOptions(true)
    }, 1000)

    return () => {
      clearTimeout(typingTimer)
      clearTimeout(optionsTimer)
    }
  }, [open, step])

  const handleOpen = () => {
    setStep(initialStep === 'website' || initialStep === 'system' ? initialStep : 'intro')
    setOpen(true)
  }

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const websiteOptions = isPt
    ? [
        {
          title: 'Quero um site profissional',
          subtitle: 'Para apresentar meu negócio com mais credibilidade',
          message:
            'Olá! Vi seu site e quero um site profissional para apresentar meu negócio com mais credibilidade.',
        },
        {
          title: 'Quero atrair mais clientes',
          subtitle: 'Com WhatsApp, presença online e design profissional',
          message:
            'Olá! Quero um site profissional com foco em atrair mais clientes, presença online e contato por WhatsApp.',
        },
        {
          title: 'Quero falar sobre meu projeto',
          subtitle: 'Explicar minha ideia e receber uma direção',
          message:
            'Olá! Vi seu site e quero conversar sobre um projeto de site profissional para o meu negócio.',
        },
      ]
    : [
        {
          title: 'Quiero un sitio profesional',
          subtitle: 'Para presentar mi negocio con más credibilidad',
          message:
            '¡Hola! Vi tu sitio y quiero un sitio profesional para presentar mi negocio con más credibilidad.',
        },
        {
          title: 'Quiero atraer más clientes',
          subtitle: 'Con WhatsApp, presencia online y diseño profesional',
          message:
            '¡Hola! Quiero un sitio profesional con enfoque en atraer más clientes, presencia online y contacto por WhatsApp.',
        },
        {
          title: 'Quiero hablar sobre mi proyecto',
          subtitle: 'Explicar mi idea y recibir una orientación',
          message:
            '¡Hola! Vi tu sitio y quiero hablar sobre un proyecto de sitio profesional para mi negocio.',
        },
      ]

  const systemOptions = isPt
    ? [
        {
          title: 'Quero um sistema + automação',
          subtitle: 'Para organizar e automatizar processos',
          message:
            'Olá! Vi seu site e quero um sistema com automação para organizar e automatizar processos do meu negócio.',
        },
        {
          title: 'Quero melhorar minha gestão',
          subtitle: 'Com mais controle e menos trabalho manual',
          message:
            'Olá! Quero entender uma solução de sistema + automação para melhorar a gestão do meu negócio.',
        },
        {
          title: 'Quero falar sobre meu projeto',
          subtitle: 'Explicar minha operação e receber uma direção',
          message:
            'Olá! Vi seu site e quero conversar sobre um projeto de sistema com automação para o meu negócio.',
        },
      ]
    : [
        {
          title: 'Quiero un sistema + automatización',
          subtitle: 'Para organizar y automatizar procesos',
          message:
            '¡Hola! Vi tu sitio y quiero un sistema con automatización para organizar y automatizar procesos de mi negocio.',
        },
        {
          title: 'Quiero mejorar mi gestión',
          subtitle: 'Con más control y menos trabajo manual',
          message:
            '¡Hola! Quiero entender una solución de sistema + automatización para mejorar la gestión de mi negocio.',
        },
        {
          title: 'Quiero hablar sobre mi proyecto',
          subtitle: 'Explicar mi operación y recibir una orientación',
          message:
            '¡Hola! Vi tu sitio y quiero hablar sobre un proyecto de sistema con automatización para mi negocio.',
        },
      ]

  const unsureOptions = isPt
    ? [
        {
          title: 'Quero entender a melhor solução',
          subtitle: 'Ainda não sei se preciso de site ou sistema',
          message:
            'Olá! Vi seu site e quero entender qual é a melhor solução para o meu negócio. Ainda não sei se preciso de site ou sistema.',
        },
        {
          title: 'Quero explicar meu negócio',
          subtitle: 'Para receber uma recomendação',
          message:
            'Olá! Quero explicar meu negócio para receber uma recomendação sobre a melhor solução digital.',
        },
        {
          title: 'Quero falar direto com você',
          subtitle: 'Sem escolher uma opção agora',
          message:
            'Olá! Vi seu site e quero falar diretamente com você sobre o que meu negócio precisa.',
        },
      ]
    : [
        {
          title: 'Quiero entender la mejor solución',
          subtitle: 'Todavía no sé si necesito sitio o sistema',
          message:
            '¡Hola! Vi tu sitio y quiero entender cuál es la mejor solución para mi negocio. Todavía no sé si necesito sitio o sistema.',
        },
        {
          title: 'Quiero explicar mi negocio',
          subtitle: 'Para recibir una recomendación',
          message:
            '¡Hola! Quiero explicar mi negocio para recibir una recomendación sobre la mejor solución digital.',
        },
        {
          title: 'Quiero hablar directamente contigo',
          subtitle: 'Sin elegir una opción ahora',
          message:
            '¡Hola! Vi tu sitio y quiero hablar directamente contigo sobre lo que mi negocio necesita.',
        },
      ]

  const currentOptions =
    step === 'website'
      ? websiteOptions
      : step === 'system'
      ? systemOptions
      : step === 'unsure'
      ? unsureOptions
      : []

  const introMessage = isPt
    ? 'Olá! Posso te ajudar a chegar no WhatsApp com a mensagem certa.'
    : '¡Hola! Puedo ayudarte a llegar a WhatsApp con el mensaje correcto.'

  const startMessage = isPt
    ? 'Qual dessas opções faz mais sentido para você?'
    : '¿Cuál de estas opciones tiene más sentido para ti?'

  const stepMessage =
    step === 'website'
      ? isPt
        ? 'Perfeito. Escolha uma mensagem pronta para falar sobre site.'
        : 'Perfecto. Elige un mensaje listo para hablar sobre sitio web.'
      : step === 'system'
      ? isPt
        ? 'Perfeito. Escolha uma mensagem pronta para falar sobre sistema + automação.'
        : 'Perfecto. Elige un mensaje listo para hablar sobre sistema + automatización.'
      : isPt
      ? 'Sem problema. Escolha uma mensagem pronta e eu te ajudo a encontrar a melhor solução.'
      : 'No hay problema. Elige un mensaje listo y te ayudo a encontrar la mejor solución.'

  return (
    <>
      <button
        type="button"
        className="wa-assistant-button"
        aria-label="WhatsApp assistant"
        onClick={() => {
          if (open) {
            setOpen(false)
          } else {
            handleOpen()
          }
        }}
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
          {step !== 'intro' && step !== 'start' && (
            <button
              type="button"
              className="wa-assistant__back"
              onClick={() => setStep('start')}
            >
              <ArrowLeft size={16} />
              {isPt ? 'Voltar' : 'Volver'}
            </button>
          )}

          {typing && (
            <div className="wa-assistant__typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          {showMessage && step === 'intro' && (
            <div className="wa-assistant__message wa-assistant__message--fade">
              <p>{introMessage}</p>
            </div>
          )}

          {showMessage && step === 'start' && (
            <div className="wa-assistant__message wa-assistant__message--fade">
              <p>{startMessage}</p>
            </div>
          )}

          {showMessage && (step === 'website' || step === 'system' || step === 'unsure') && (
            <div className="wa-assistant__message wa-assistant__message--fade">
              <p>{stepMessage}</p>
            </div>
          )}

          {showOptions && step === 'intro' && (
            <div className="wa-assistant__options wa-assistant__options--fade">
              <button
                type="button"
                className="wa-assistant__option"
                onClick={() => setStep(initialStep === 'website' || initialStep === 'system' ? initialStep : 'start')}
              >
                <div className="wa-assistant__option-text">
                  <strong>{isPt ? 'Continuar' : 'Continuar'}</strong>
                  <span>
                    {isPt
                      ? 'Escolher a melhor forma de falar comigo'
                      : 'Elegir la mejor forma de hablar conmigo'}
                  </span>
                </div>
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {showOptions && step === 'start' && (
            <div className="wa-assistant__options wa-assistant__options--fade">
              <button
                type="button"
                className="wa-assistant__option"
                onClick={() => setStep('website')}
              >
                <div className="wa-assistant__option-icon">
                  <MonitorSmartphone size={18} />
                </div>
                <div className="wa-assistant__option-text">
                  <strong>{isPt ? 'Site profissional' : 'Sitio web profesional'}</strong>
                  <span>
                    {isPt
                      ? 'Para presença online e geração de contatos'
                      : 'Para presencia online y generación de contactos'}
                  </span>
                </div>
                <ChevronRight size={18} />
              </button>

              <button
                type="button"
                className="wa-assistant__option"
                onClick={() => setStep('system')}
              >
                <div className="wa-assistant__option-icon">
                  <Settings size={18} />
                </div>
                <div className="wa-assistant__option-text">
                  <strong>
                    {isPt ? 'Sistema + automação' : 'Sistema + automatización'}
                  </strong>
                  <span>
                    {isPt
                      ? 'Para organizar e automatizar processos'
                      : 'Para organizar y automatizar procesos'}
                  </span>
                </div>
                <ChevronRight size={18} />
              </button>

              <button
                type="button"
                className="wa-assistant__option"
                onClick={() => setStep('unsure')}
              >
                <div className="wa-assistant__option-icon">
                  <HelpCircle size={18} />
                </div>
                <div className="wa-assistant__option-text">
                  <strong>
                    {isPt ? 'Ainda não tenho certeza' : 'Todavía no estoy seguro'}
                  </strong>
                  <span>
                    {isPt
                      ? 'Quero entender a melhor solução'
                      : 'Quiero entender la mejor solución'}
                  </span>
                </div>
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {showOptions && (step === 'website' || step === 'system' || step === 'unsure') && (
            <div className="wa-assistant__options wa-assistant__options--fade">
              {currentOptions.map((option) => (
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
          )}
        </div>
      </div>
    </>
  )
}

export default WhatsAppAssistant
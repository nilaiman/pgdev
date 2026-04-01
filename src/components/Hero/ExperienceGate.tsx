import { useState, useEffect } from 'react'
import { ArrowLeft, MonitorSmartphone, Settings, Languages, MessageSquareText, ChevronRight } from 'lucide-react'
import { useSiteExperience } from '../context/SiteExperienceContext'

function ExperienceGate() {
  const { language, setLanguage, selectedService, setSelectedService } = useSiteExperience()
  const [step, setStep] = useState<1 | 2>(1)

  useEffect(() => {
    if (!selectedService) {
      document.body.style.overflow = 'hidden'
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedService])

  if (selectedService) return null
  const isPt = language === 'pt'

  return (
    <div className="experience-gate">
      <div className="experience-gate__overlay" />
      
      <div className="experience-gate__modal">
        <div className="experience-gate__header">
          <div className="experience-gate__brand">
            <div className="experience-gate__mascot experience-gate__mascot--cat">
              <div className="experience-gate__cat">
                <div className="experience-gate__cat-ear experience-gate__cat-ear--left"></div>
                <div className="experience-gate__cat-ear experience-gate__cat-ear--right"></div>
                <div className="experience-gate__cat-face">
                  <div className="experience-gate__cat-eye"></div>
                  <div className="experience-gate__cat-eye"></div>
                  <div className="experience-gate__cat-whisker"></div>
                  <div className="experience-gate__cat-whisker"></div>
                  <div className="experience-gate__cat-nose"></div>
                </div>
                <div className="experience-gate__cat-collar"></div>
              </div>
            </div>
            <span>PabloG.Dev</span>
          </div>
          <div className="experience-gate__steps">
            <div className={`experience-gate__step ${step === 1 ? 'active' : ''}`} />
            <div className={`experience-gate__step ${step === 2 ? 'active' : ''}`} />
          </div>
        </div>

        <div className="experience-gate__content">
          {step === 1 ? (
            <>
              <h2 className="experience-gate__title">
                {isPt ? 'Olá, escolha seu idioma' : 'Hola, elige tu idioma'}
              </h2>
              <p className="experience-gate__subtitle">
                {isPt ? 'Selecione para continuar' : 'Selecciona para continuar'}
              </p>
              
              <div className="experience-gate__options">
                <button className="experience-gate__option" onClick={() => { setLanguage('pt'); setStep(2) }}>
                  <Languages size={20} />
                  <span>Português</span>
                  <ChevronRight size={18} />
                </button>
                
                <button className="experience-gate__option" onClick={() => { setLanguage('es'); setStep(2) }}>
                  <MessageSquareText size={20} />
                  <span>Español</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </>
          ) : (
            <>
              <button className="experience-gate__back" onClick={() => setStep(1)}>
                <ArrowLeft size={16} />
                {isPt ? 'Voltar' : 'Volver'}
              </button>
              
              <h2 className="experience-gate__title">
                {isPt ? 'Como posso ajudar?' : '¿Cómo puedo ayudar?'}
              </h2>
              <p className="experience-gate__subtitle">
                {isPt ? 'Escolha uma das soluções abaixo' : 'Elige una de las soluciones abajo'}
              </p>
              
              <div className="experience-gate__options">
                <button className="experience-gate__option" onClick={() => setSelectedService('website')}>
                  <MonitorSmartphone size={20} />
                  <div className="experience-gate__option-content">
                    <span>{isPt ? 'Site profissional' : 'Sitio web profesional'}</span>
                    <small>{isPt ? 'Presença digital completa' : 'Presencia digital completa'}</small>
                  </div>
                  <ChevronRight size={18} />
                </button>
                
                <button className="experience-gate__option" onClick={() => setSelectedService('system')}>
                  <Settings size={20} />
                  <div className="experience-gate__option-content">
                    <span>{isPt ? 'Sistema + automação' : 'Sistema + automatización'}</span>
                    <small>{isPt ? 'Gestão inteligente' : 'Gestión inteligente'}</small>
                  </div>
                  <ChevronRight size={18} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExperienceGate
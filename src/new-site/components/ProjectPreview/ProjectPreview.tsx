import './ProjectPreview.css'
import { useMemo, useState, useEffect, useCallback } from 'react'
import {
  ArrowRight,
  X,
  Eye,
  Wrench,
  Users,
  Phone,
  Zap,
  Shield,
  Heart,
  CheckCircle,
  Star,
  TrendingUp,
  Palette,
} from 'lucide-react'
import logoPng from '../../assets/apenas-logo.png'
import type { Language } from '../../types'

type Props = {
  language: Language
}

type ProjectType = 'website' | 'landing' | 'system'

const STORAGE_KEY = 'project_preview_state'

function getInitials(name: string) {
  const clean = name.trim()
  if (!clean) return 'PG'
  return clean
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join('')
}

interface SavedState {
  businessName: string
  projectType: ProjectType
  primaryColor: string
  secondaryColor: string
  accentColor: string
}

function loadState(): SavedState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  return {
    businessName: '',
    projectType: 'website',
    primaryColor: '#fec90f',
    secondaryColor: '#000c24',
    accentColor: '#3b82f6',
  }
}

function saveState(state: SavedState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {}
}

function ProjectPreview({ language }: Props) {
  const saved = useMemo(() => loadState(), [])
  
  const [open, setOpen] = useState(false)
  const [businessName, setBusinessName] = useState(saved.businessName)
  const [projectType, setProjectType] = useState<ProjectType>(saved.projectType)
  const [primaryColor, setPrimaryColor] = useState(saved.primaryColor)
  const [secondaryColor, setSecondaryColor] = useState(saved.secondaryColor)
  const [accentColor, setAccentColor] = useState(saved.accentColor)

  const isPt = language === 'pt'

  useEffect(() => {
    saveState({ businessName, projectType, primaryColor, secondaryColor, accentColor })
  }, [businessName, projectType, primaryColor, secondaryColor, accentColor])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && open) setOpen(false)
  }, [open])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    const nav = document.querySelector('nav')
    const header = document.querySelector('header')
    
    if (open) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      if (nav) (nav as HTMLElement).style.display = 'none'
      if (header) (header as HTMLElement).style.zIndex = '0'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      
      if (nav) (nav as HTMLElement).style.display = ''
      if (header) (header as HTMLElement).style.zIndex = ''
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
      }
    }
  }, [open])

  const name = businessName.trim() || (isPt ? 'Seu Negócio' : 'Tu Negocio')
  const initials = useMemo(() => getInitials(businessName), [businessName])

  const typeLabel = {
    website: isPt ? 'Site completo' : 'Sitio completo',
    landing: isPt ? 'Landing page' : 'Landing page',
    system: isPt ? 'Sistema interno' : 'Sistema interno',
  }[projectType]

  const whatsappMessage = isPt
    ? `Olá! Vi a simulação no site e quero um projeto para "${name}". Tipo: ${typeLabel}. Cores: ${primaryColor} / ${secondaryColor} / ${accentColor}`
    : `¡Hola! Vi la simulación en el sitio y quiero un proyecto para "${name}". Tipo: ${typeLabel}. Colores: ${primaryColor} / ${secondaryColor} / ${accentColor}`

  const isDashboard = projectType === 'system'

  const deviceStyle = {
    '--primary': primaryColor,
    '--secondary': secondaryColor,
    '--accent': accentColor,
  } as React.CSSProperties

  return (
    <>
      <button type="button" className="preview-button" onClick={() => setOpen(true)}>
        <Eye size={18} />
        {isPt ? 'Ver como pode ficar' : 'Ver cómo puede quedar'}
      </button>

      {open && (
        <div className="preview">
          <button
            type="button"
            className="preview__overlay"
            onClick={() => setOpen(false)}
            aria-label={isPt ? 'Fechar' : 'Cerrar'}
          />

          <div className="preview__modal">
            <div className="preview__logo-top">
              <img src={logoPng} alt="Logo" />
              <span>{isPt ? 'Simulador de Projetos' : 'Simulador de Proyectos'}</span>
            </div>

            <button type="button" className="preview__close" onClick={() => setOpen(false)}>
              <X size={16} />
            </button>

            <div className="preview__content">
              <div className="preview__header">
                <span className="preview__badge">
                  {isPt ? 'Simulação personalizada' : 'Simulación personalizada'}
                </span>
                <h2 className="preview__title">
                  {isPt
                    ? 'Visualize uma ideia inicial para o seu projeto'
                    : 'Visualiza una idea inicial para tu proyecto'}
                </h2>
                <p className="preview__text">
                  {isPt
                    ? 'Digite o nome do negócio, escolha o tipo de projeto e veja uma prévia visual.'
                    : 'Escribe el nombre del negocio, elige el tipo de proyecto y mira una previa visual.'}
                </p>
              </div>

              <div className="preview__grid">
                <div className="preview__panel">
                  <div className="preview__field">
                    <label>{isPt ? 'Nome do negócio' : 'Nombre del negocio'}</label>
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder={isPt ? 'Ex: Clínica Vida' : 'Ej: Clínica Vida'}
                    />
                  </div>

                  <div className="preview__group">
                    <span>{isPt ? 'Tipo de projeto' : 'Tipo de proyecto'}</span>
                    <div className="preview__chips">
                      <button
                        className={projectType === 'website' ? 'is-active' : ''}
                        onClick={() => setProjectType('website')}
                      >
                        {isPt ? 'Site' : 'Sitio'}
                      </button>
                      <button
                        className={projectType === 'landing' ? 'is-active' : ''}
                        onClick={() => setProjectType('landing')}
                      >
                        Landing
                      </button>
                      <button
                        className={projectType === 'system' ? 'is-active' : ''}
                        onClick={() => setProjectType('system')}
                      >
                        {isPt ? 'Sistema' : 'Sistema'}
                      </button>
                    </div>
                  </div>

                  <div className="preview__group">
                    <span>
                      <Palette size={12} />
                      {isPt ? 'Cores do projeto' : 'Colores del proyecto'}
                    </span>
                    <div className="preview__colors">
                      <div className="preview__color-field">
                        <label>{isPt ? 'Principal' : 'Principal'}</label>
                        <div className="preview__color-row">
                          <input
                            type="color"
                            value={primaryColor}
                            onChange={(e) => setPrimaryColor(e.target.value)}
                          />
                          <input
                            type="text"
                            value={primaryColor}
                            onChange={(e) => setPrimaryColor(e.target.value)}
                            maxLength={7}
                          />
                        </div>
                      </div>
                      <div className="preview__color-field">
                        <label>{isPt ? 'Secundária' : 'Secundaria'}</label>
                        <div className="preview__color-row">
                          <input
                            type="color"
                            value={secondaryColor}
                            onChange={(e) => setSecondaryColor(e.target.value)}
                          />
                          <input
                            type="text"
                            value={secondaryColor}
                            onChange={(e) => setSecondaryColor(e.target.value)}
                            maxLength={7}
                          />
                        </div>
                      </div>
                      <div className="preview__color-field">
                        <label>{isPt ? 'Destaque' : 'Acento'}</label>
                        <div className="preview__color-row">
                          <input
                            type="color"
                            value={accentColor}
                            onChange={(e) => setAccentColor(e.target.value)}
                          />
                          <input
                            type="text"
                            value={accentColor}
                            onChange={(e) => setAccentColor(e.target.value)}
                            maxLength={7}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="preview__device preview__device--personalizado" style={deviceStyle}>
                  <div className="preview__topbar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  {isDashboard && (
                    <div className="preview-dashboard">
                      <div className="preview-dashboard__sidebar">
                        <div className="preview-dashboard__logo">{initials}</div>
                        <div className="preview-dashboard__nav-item active"></div>
                        <div className="preview-dashboard__nav-item"></div>
                        <div className="preview-dashboard__nav-item"></div>
                        <div className="preview-dashboard__nav-item"></div>
                      </div>
                      <div className="preview-dashboard__main">
                        <div className="preview-dashboard__heading">
                          <div>
                            <strong>{name}</strong>
                            <small>{typeLabel}</small>
                          </div>
                          <div className="preview-dashboard__status">
                            {isPt ? 'Online' : 'Online'}
                          </div>
                        </div>
                        <div className="preview-dashboard__metrics">
                          <div className="preview-dashboard__metric">
                            <strong>128</strong>
                            <span>{isPt ? 'Clientes' : 'Clientes'}</span>
                          </div>
                          <div className="preview-dashboard__metric">
                            <strong>42</strong>
                            <span>{isPt ? 'Pedidos' : 'Pedidos'}</span>
                          </div>
                          <div className="preview-dashboard__metric">
                            <strong>R$24K</strong>
                            <span>{isPt ? 'Receita' : 'Ingresos'}</span>
                          </div>
                        </div>
                        <div className="preview-dashboard__chart">
                          <div className="preview-dashboard__chart-header">
                            <span>{isPt ? 'Vendas (últimos 30 dias)' : 'Ventas (últimos 30 días)'}</span>
                            <span>↑ 23%</span>
                          </div>
                          <div className="preview-dashboard__chart-bars">
                            <div className="preview-dashboard__chart-bar">
                              <div className="preview-dashboard__chart-bar-fill"></div>
                            </div>
                            <div className="preview-dashboard__chart-bar">
                              <div className="preview-dashboard__chart-bar-fill"></div>
                            </div>
                            <div className="preview-dashboard__chart-bar">
                              <div className="preview-dashboard__chart-bar-fill"></div>
                            </div>
                            <div className="preview-dashboard__chart-bar">
                              <div className="preview-dashboard__chart-bar-fill"></div>
                            </div>
                            <div className="preview-dashboard__chart-bar">
                              <div className="preview-dashboard__chart-bar-fill"></div>
                            </div>
                            <div className="preview-dashboard__chart-bar">
                              <div className="preview-dashboard__chart-bar-fill"></div>
                            </div>
                            <div className="preview-dashboard__chart-bar">
                              <div className="preview-dashboard__chart-bar-fill"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {projectType === 'website' && !isDashboard && (
                    <div className="preview-site">
                      <div className="preview-site__header">
                        <div className="preview-site__brand">
                          <div className="preview-site__logo">{initials}</div>
                          <span className="preview-site__name">{name}</span>
                        </div>
                        <div className="preview-site__menu">
                          <span className="active">{isPt ? 'Home' : 'Inicio'}</span>
                          <span>{isPt ? 'Serviços' : 'Servicios'}</span>
                          <span>{isPt ? 'Sobre' : 'Sobre'}</span>
                          <span>{isPt ? 'Contato' : 'Contacto'}</span>
                        </div>
                      </div>

                      <div className="preview-site__hero">
                        <span className="preview-site__hero-badge">{typeLabel}</span>
                        <h3>
                          {isPt
                            ? 'Presença digital profissional para sua marca'
                            : 'Presencia digital profesional para tu marca'}
                        </h3>
                        <p>
                          {isPt
                            ? 'Site completo com design estratégico e integração com WhatsApp.'
                            : 'Sitio completo con diseño estratégico e integración con WhatsApp.'}
                        </p>
                        <button type="button" className="preview-site__hero-cta">
                          {isPt ? 'Falar agora' : 'Hablar ahora'}
                          <ArrowRight size={12} />
                        </button>
                      </div>

                      <div className="preview-site__sections">
                        <div className="preview-site__section">
                          <div className="preview-site__section-icon"><Wrench size={16} /></div>
                          <span>{isPt ? 'Serviços' : 'Servicios'}</span>
                          <small>{isPt ? 'O que fazemos' : 'Lo que hacemos'}</small>
                        </div>
                        <div className="preview-site__section">
                          <div className="preview-site__section-icon"><Users size={16} /></div>
                          <span>{isPt ? 'Sobre' : 'Sobre'}</span>
                          <small>{isPt ? 'Nossa história' : 'Nuestra historia'}</small>
                        </div>
                        <div className="preview-site__section">
                          <div className="preview-site__section-icon"><Phone size={16} /></div>
                          <span>{isPt ? 'Contato' : 'Contacto'}</span>
                          <small>{isPt ? 'Fale conosco' : 'Habla con nosotros'}</small>
                        </div>
                      </div>

                      <div className="preview-site__footer">
                        © {new Date().getFullYear()} {name}
                      </div>
                    </div>
                  )}

                  {projectType === 'landing' && !isDashboard && (
                    <div className="preview-landing">
                      <div className="preview-landing__top">
                        <div className="preview-landing__brand">
                          <div className="preview-landing__logo">{initials}</div>
                          <span>{name}</span>
                        </div>
                        <span className="preview-landing__cta-top">
                          {isPt ? 'Falar agora' : 'Hablar ahora'}
                        </span>
                      </div>

                      <div className="preview-landing__hero">
                        <div className="preview-landing__icon-circle">
                          <Zap size={18} />
                        </div>
                        <h3>
                          {isPt
                            ? 'Transforme visitantes em clientes'
                            : 'Transforma visitantes en clientes'}
                        </h3>
                        <p>
                          {isPt
                            ? 'Página otimizada com CTAs estratégicos e gatilhos mentais.'
                            : 'Página optimizada con CTAs estratégicos y gatillos mentales.'}
                        </p>
                        <button type="button" className="preview-landing__big-cta">
                          {isPt ? 'Quero converter mais' : 'Quiero convertir más'}
                          <ArrowRight size={14} />
                        </button>

                        <div className="preview-landing__trust">
                          <div className="preview-landing__trust-item">
                            <Shield size={12} />
                            {isPt ? 'Suporte dedicado' : 'Soporte dedicado'}
                          </div>
                          <div className="preview-landing__trust-item">
                            <Heart size={12} />
                            {isPt ? 'Sem taxas escondidas' : 'Sin tasas ocultas'}
                          </div>
                          <div className="preview-landing__trust-item">
                            <CheckCircle size={12} />
                            {isPt ? 'Cancelamento fácil' : 'Cancelación fácil'}
                          </div>
                        </div>

                        <div className="preview-landing__features">
                          <div className="preview-landing__feature">
                            <TrendingUp size={14} />
                            <span>{isPt ? 'Alta conversão' : 'Alta conversión'}</span>
                          </div>
                          <div className="preview-landing__feature">
                            <Star size={14} />
                            <span>{isPt ? 'Design premium' : 'Diseño premium'}</span>
                          </div>
                          <div className="preview-landing__feature">
                            <Zap size={14} />
                            <span>{isPt ? 'Rápido' : 'Rápido'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="preview__footer">
              <p>
                {isPt
                  ? 'Simulação visual. O projeto real é personalizado para cada negócio.'
                  : 'Simulación visual. El proyecto real se personaliza para cada negocio.'}
              </p>
              <a
                href={`https://wa.me/5511961111894?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="preview__cta"
              >
                {isPt ? 'Quero algo assim' : 'Quiero algo así'}
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectPreview
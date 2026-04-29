import './Hero.css'
import logo from '../../assets/logo.png'
import { ArrowRight, CheckCircle, Lightbulb, Code, TrendingUp } from 'lucide-react'
import { pt } from '../../i18n/pt'
import { es } from '../../i18n/es'
import type { Language } from '../../types'
import ProjectPreview from '../ProjectPreview/ProjectPreview'

type HeroProps = {
  language: Language
}

export default function Hero({ language }: HeroProps) {
  const content = language === 'pt' ? pt : es

  return (
    <section className="hero" id="inicio">
      <img src={logo} alt="" className="hero-bg-logo" aria-hidden="true" />
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {language === 'pt' ? 'Sites e sistemas' : 'Sitios y sistemas'}{' '}
            <span className="hero-highlight">{language === 'pt' ? 'profissionais' : 'profesionales'}</span>
            <br /> {language === 'pt' ? 'para seu negócio' : 'para tu negocio'}
          </h1>

          <p className="hero-text">
            {language === 'pt' 
              ? 'Desenvolvimento de sites institucionais, landing pages, sistemas web e agendamentos. Tudo sob medida para sua empresa.'
              : 'Desarrollo de sitios institucionales, landing pages, sistemas web y programación. Todo a medida para tu empresa.'}
          </p>

          <div className="hero-features">
            <div className="feature">
              <CheckCircle size={18} />
              <span>{language === 'pt' ? 'Sites responsivos e otimizados' : 'Sitios responsivos y optimizados'}</span>
            </div>
            <div className="feature">
              <CheckCircle size={18} />
              <span>{language === 'pt' ? 'Sistemas personalizados' : 'Sistemas personalizados'}</span>
            </div>
            <div className="feature">
              <CheckCircle size={18} />
              <span>{language === 'pt' ? 'Automação de processos' : 'Automatización de procesos'}</span>
            </div>
            <div className="feature">
              <CheckCircle size={18} />
              <span>{language === 'pt' ? 'Suporte e manutenção' : 'Soporte y mantenimiento'}</span>
            </div>
          </div>

          <div className="hero-actions">
            <a 
              href="https://wa.me/5511961111894" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-btn primary"
            >
              {content.hero.primaryButton}
              <ArrowRight size={16} />
            </a>
            <ProjectPreview language={language} />
          </div>

          <div className="hero-stats">
            <div className="stat">
              <Lightbulb size={18} color="#fec90f" />
              {language === 'pt' ? 'Ideia' : 'Idea'} <span>{language === 'pt' ? '→ Projeto' : '→ Proyecto'}</span>
            </div>
            <div className="stat">
              <Code size={18} color="#fec90f" />
              {language === 'pt' ? 'Projeto' : 'Proyecto'} <span>{language === 'pt' ? '→ Site no ar' : '→ Sitio online'}</span>
            </div>
            <div className="stat">
              <TrendingUp size={18} color="#fec90f" />
              {language === 'pt' ? 'Site' : 'Sitio'} <span>{language === 'pt' ? '→ Resultado' : '→ Resultado'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
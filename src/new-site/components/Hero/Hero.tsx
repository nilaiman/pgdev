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
            Sites e sistemas{' '}
            <span className="hero-highlight">profissionais</span>
            <br /> para seu negócio
          </h1>

          <p className="hero-text">
            Desenvolvimento de sites institucionais, landing pages, 
            sistemas web e automações. Tudo sob medida para sua empresa.
          </p>

          <div className="hero-features">
            <div className="feature">
              <CheckCircle size={18} />
              <span>Sites responsivos e otimizados</span>
            </div>
            <div className="feature">
              <CheckCircle size={18} />
              <span>Sistemas personalizados</span>
            </div>
            <div className="feature">
              <CheckCircle size={18} />
              <span>Automação de processos</span>
            </div>
            <div className="feature">
              <CheckCircle size={18} />
              <span>Suporte e manutenção</span>
            </div>
          </div>

          <div className="hero-actions">
            <a 
              href="https://wa.me/5511961111894" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-btn primary"
            >
              Solicitar orçamento
              <ArrowRight size={16} />
            </a>
            <ProjectPreview language={language} />
          </div>

          <div className="hero-stats">
            <div className="stat">
              <Lightbulb size={18} color="#fec90f" />
              Ideia <span>→ Projeto</span>
            </div>
            <div className="stat">
              <Code size={18} color="#fec90f" />
              Projeto <span>→ Site no ar</span>
            </div>
            <div className="stat">
              <TrendingUp size={18} color="#fec90f" />
              Site <span>→ Resultado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
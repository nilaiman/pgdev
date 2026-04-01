import { useState, useEffect } from 'react'
import { Menu, X, Send } from 'lucide-react'
import { useSiteExperience } from '../context/SiteExperienceContext'
import { buildWhatsappMessage } from '../utils/buildWhatsappMessage'

function Header() {
  const { language, selectedService } = useSiteExperience()

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappNumber = '5511961111894'
  const message = buildWhatsappMessage(language, selectedService)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header__content">
        <a href="#inicio" className="header__logo" onClick={closeMenu}>
          PabloG<span>.Dev</span>
        </a>

        <nav className="header__nav">
          <a href="#inicio">{language === 'pt' ? 'Início' : 'Inicio'}</a>
          <a href="#servicos">{language === 'pt' ? 'Serviços' : 'Servicios'}</a>
          <a href="#projetos">{language === 'pt' ? 'Projetos' : 'Proyectos'}</a>
          <a href="#sobre">{language === 'pt' ? 'Sobre' : 'Sobre'}</a>
          <a href="#contato">{language === 'pt' ? 'Contato' : 'Contacto'}</a>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="header__cta"
        >
          <Send size={18} />
          <span>
            {language === 'pt'
              ? 'Solicitar orçamento'
              : 'Solicitar presupuesto'}
          </span>
        </a>

        <button
          className={`header__menu-button ${menuOpen ? 'is-active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav">
          <a href="#inicio" onClick={closeMenu}>
            {language === 'pt' ? 'Início' : 'Inicio'}
          </a>

          <a href="#servicos" onClick={closeMenu}>
            {language === 'pt' ? 'Serviços' : 'Servicios'}
          </a>

          <a href="#projetos" onClick={closeMenu}>
            {language === 'pt' ? 'Projetos' : 'Proyectos'}
          </a>

          <a href="#sobre" onClick={closeMenu}>
            {language === 'pt' ? 'Sobre' : 'Sobre'}
          </a>

          <a href="#contato" onClick={closeMenu}>
            {language === 'pt' ? 'Contato' : 'Contacto'}
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mobile-menu__cta"
            onClick={closeMenu}
          >
            <Send size={16} />
            {language === 'pt'
              ? 'Solicitar orçamento'
              : 'Solicitar presupuesto'}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
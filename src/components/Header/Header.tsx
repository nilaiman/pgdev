import { useState, useEffect } from 'react'
import { Menu, X, Send } from 'lucide-react'

function Header() {
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

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header__content">
        <a href="#inicio" className="header__logo" onClick={closeMenu}>
          PabloG<span>.Dev</span>
        </a>

        <nav className="header__nav">
          <a href="#inicio">Inicio</a>
          <a href="#servicos">Servicios</a>
          <a href="#projetos">Proyectos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contacto</a>
        </nav>

        <a href="#contato" className="header__cta">
          <Send size={18} />
          <span>Solicitar presupuesto</span>
        </a>

        <button
          className={`header__menu-button ${menuOpen ? 'is-active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav">
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#servicos" onClick={closeMenu}>Servicios</a>
          <a href="#projetos" onClick={closeMenu}>Proyectos</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#contato" onClick={closeMenu}>Contacto</a>
          <a href="#contato" className="mobile-menu__cta" onClick={closeMenu}>
            <Send size={16} />
            Solicitar presupuesto
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
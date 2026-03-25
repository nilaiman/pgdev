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
          PG<span>.Dev</span>
        </a>

        <nav className="header__nav">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#contato" className="header__cta">
          <Send size={18} />
          <span>Solicitar orçamento</span>
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
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a href="#contato" className="mobile-menu__cta" onClick={closeMenu}>
            <Send size={16} />
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
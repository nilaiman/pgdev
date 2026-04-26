import './Footer.css'
import logo from '../../assets/logo.png'
import { MessageCircle, Mail } from 'lucide-react'
import { pt } from '../../i18n/pt'
import { es } from '../../i18n/es'
import type { Language } from '../../types'

type FooterProps = {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  const content = language === 'pt' ? pt : es
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={logo} alt="PabloG.Dev" className="footer-logo" />
            <div>
              <h3>Pablo<span>G</span>.Dev</h3>
              <p>{content.footer.text}</p>
            </div>
          </div>

          <div className="footer-contact">
            <a href="https://wa.me/5511961111894" target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              +55 11 96111-1894
            </a>
            <a href="mailto:pgdevsoftware@gmail.com">
              <Mail size={18} />
              pgdevsoftware@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} PabloG.Dev</span>
        </div>
      </div>
    </footer>
  )
}
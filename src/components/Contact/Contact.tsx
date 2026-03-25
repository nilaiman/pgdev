import { Mail, ArrowRight, Send } from 'lucide-react'

function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <h2 className="contact__title">
              Pronto para dar o <span>próximo passo?</span>
            </h2>
            <p className="contact__description">
              Escolha a forma mais fácil de me chamar e vamos conversar sobre 
              como posso ajudar seu negócio.
            </p>

            <div className="contact__methods">
              <a 
                href="https://wa.me/5511957989816" 
                target="_blank" 
                rel="noreferrer"
                className="contact__method contact__method--whatsapp"
              >
                <div className="contact__method-icon">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    fill="currentColor"
                  >
                    <path d="M12.031 2.001c-5.514 0-9.986 4.472-9.986 9.986 0 1.762.461 3.495 1.337 5.019l-1.34 4.764 4.886-1.288a9.957 9.957 0 0 0 4.771 1.213c5.514 0 9.986-4.472 9.986-9.986 0-5.514-4.472-9.986-9.986-9.986zm0 18.322a8.287 8.287 0 0 1-4.232-1.163l-.304-.18-2.899.764.774-2.828-.198-.315a8.305 8.305 0 0 1-1.267-4.462c0-4.585 3.73-8.316 8.316-8.316 4.585 0 8.316 3.731 8.316 8.316 0 4.585-3.731 8.316-8.316 8.316zm4.55-6.232c-.249-.125-1.476-.729-1.704-.812-.228-.083-.394-.125-.56.125-.166.25-.644.812-.79.978-.146.166-.292.187-.541.062-.249-.125-1.053-.389-2.005-1.239-.741-.662-1.242-1.479-1.387-1.729-.146-.25-.016-.385.109-.51.112-.112.249-.291.374-.437.125-.146.166-.249.249-.416.083-.166.042-.312-.021-.437-.062-.125-.56-1.348-.767-1.845-.203-.487-.409-.422-.56-.43-.146-.008-.312-.008-.478-.008-.166 0-.436.062-.664.312-.228.25-.873.852-.873 2.079 0 1.227.892 2.412 1.017 2.579.125.166 1.755 2.68 4.252 3.758 2.497 1.078 2.497.719 2.948.674.451-.045 1.453-.595 1.658-1.169.205-.574.205-1.067.145-1.169-.062-.102-.228-.166-.478-.291z"/>
                  </svg>
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <span>Resposta rápida</span>
                </div>
                <ArrowRight size={18} className="contact__method-arrow" />
              </a>

              <a 
                href="mailto:pgdevsoftware@gmail.com"
                className="contact__method contact__method--email"
              >
                <div className="contact__method-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <strong>E-mail</strong>
                  <span>pgdevsoftware@gmail.com</span>
                </div>
                <ArrowRight size={18} className="contact__method-arrow" />
              </a>
            </div>
          </div>

          <div className="contact__card">
            <div className="contact__card-icon">
              <Send size={32} />
            </div>
            <h3>Atendimento personalizado</h3>
            <p>
              Cada projeto é único e merece atenção especial. 
              Vamos conversar sem compromisso.
            </p>
            <a href="https://wa.me/5511957989816" target="_blank" rel="noreferrer" className="contact__card-btn">
              Falar agora
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
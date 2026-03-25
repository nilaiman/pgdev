import { Globe, Settings, Bot, ArrowRight, CheckCircle, Shield, Clock, TrendingUp } from 'lucide-react'

function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Sites institucionais',
      description: 'Páginas modernas que convertem visitantes em clientes.',
      features: ['Design exclusivo', 'SEO otimizado', 'Responsivo', 'Carregamento rápido']
    },
    {
      icon: Settings,
      title: 'Sistemas personalizados',
      description: 'Soluções sob medida que organizam e automatizam seu negócio.',
      features: ['Gestão completa', 'Relatórios automáticos', 'Painel intuitivo', 'Segurança']
    },
    {
      icon: Bot,
      title: 'Automação',
      description: 'Elimine tarefas manuais e ganhe tempo para crescer.',
      features: ['Economia de tempo', 'Menos erros', 'Integrações', 'Escalável']
    }
  ]

  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="services__hero">
          <h2 className="services__hero-title">
            Seu negócio merece <span>tecnologia que funciona</span>
          </h2>
          <p className="services__hero-text">
            Desenvolvimento com foco em resultados, não só em código bonito
          </p>
        </div>

        <div className="services__cards">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="service-feature">
                <div className="service-feature__icon">
                  <Icon size={32} />
                </div>
                <div className="service-feature__info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-feature__features">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircle size={12} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contato" className="service-feature__arrow">
                  <ArrowRight size={20} />
                </a>
              </div>
            )
          })}
        </div>

        <div className="services__trust">
          <div className="services__trust-item">
            <Shield size={24} />
            <div>
              <strong>Código limpo</strong>
              <span>Manutenção fácil</span>
            </div>
          </div>
          <div className="services__trust-item">
            <Clock size={24} />
            <div>
              <strong>Entrega ágil</strong>
              <span>Cumpro prazos</span>
            </div>
          </div>
          <div className="services__trust-item">
            <TrendingUp size={24} />
            <div>
              <strong>Suporte contínuo</strong>
              <span>Após a entrega</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
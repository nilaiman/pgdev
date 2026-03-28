import { Globe, Settings, Bot, ArrowRight, CheckCircle, Shield, Clock, TrendingUp } from 'lucide-react'

function Servicios() {
  const servicios = [
    {
      icon: Globe,
      title: 'Sitios institucionales',
      description: 'Páginas modernas que convierten visitantes en clientes.',
      features: ['Diseño exclusivo', 'SEO optimizado', 'Responsivo', 'Carga rápida']
    },
    {
      icon: Settings,
      title: 'Sistemas personalizados',
      description: 'Soluciones a medida que organizan y automatizan tu negocio.',
      features: ['Gestión completa', 'Reportes automáticos', 'Panel intuitivo', 'Seguridad']
    },
    {
      icon: Bot,
      title: 'Automatización',
      description: 'Elimina tareas manuales y gana tiempo para crecer.',
      features: ['Ahorro de tiempo', 'Menos errores', 'Integraciones', 'Escalable']
    }
  ]

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="services__hero">
          <h2 className="services__hero-title">
            Tu negocio merece <span>tecnología que funciona</span>
          </h2>
          <p className="services__hero-text">
            Desarrollo enfocado en resultados, no solo en código bonito
          </p>
        </div>

        <div className="services__cards">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon
            return (
              <div key={index} className="service-feature">
                <div className="service-feature__icon">
                  <Icon size={32} />
                </div>
                <div className="service-feature__info">
                  <h3>{servicio.title}</h3>
                  <p>{servicio.description}</p>
                  <ul className="service-feature__features">
                    {servicio.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircle size={12} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contacto" className="service-feature__arrow">
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
              <strong>Código limpio</strong>
              <span>Mantenimiento fácil</span>
            </div>
          </div>
          <div className="services__trust-item">
            <Clock size={24} />
            <div>
              <strong>Entrega ágil</strong>
              <span>Cumplo plazos</span>
            </div>
          </div>
          <div className="services__trust-item">
            <TrendingUp size={24} />
            <div>
              <strong>Soporte continuo</strong>
              <span>Después de la entrega</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicios
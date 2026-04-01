export type ServiceItem = {
  id: number
  key: 'website' | 'system'
  titlePt: string
  titleEs: string
  subtitlePt: string
  subtitleEs: string
  descriptionPt: string
  descriptionEs: string
  featuresPt: string[]
  featuresEs: string[]
  highlightPt: string
  highlightEs: string
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    key: 'website',
    titlePt: 'Site profissional para o seu negócio',
    titleEs: 'Sitio profesional para tu negocio',
    subtitlePt: 'Presença digital, confiança e mais contatos',
    subtitleEs: 'Presencia digital, confianza y más contactos',
    descriptionPt:
      'Ideal para empresas, profissionais e negócios que querem transmitir credibilidade, apresentar seus serviços com qualidade e facilitar o contato com novos clientes.',
    descriptionEs:
      'Ideal para empresas, profesionales y negocios que quieren transmitir credibilidad, presentar sus servicios con calidad y facilitar el contacto con nuevos clientes.',
    featuresPt: [
      'Design profissional e responsivo',
      'Integração com WhatsApp',
      'Seções estratégicas para apresentar o negócio',
      'Velocidade e boa experiência no celular',
      'SEO para ser encontrado online',
      'Estrutura pensada para gerar contatos',
    ],
    featuresEs: [
      'Diseño profesional y responsivo',
      'Integración con WhatsApp',
      'Secciones estratégicas para presentar el negocio',
      'Velocidad y buena experiencia en el móvil',
      'SEO para ser encontrado online',
      'Estructura pensada para generar contactos',
    ],
    highlightPt: 'Perfeito para fortalecer sua presença online e vender melhor sua imagem.',
    highlightEs: 'Perfecto para fortalecer tu presencia online y vender mejor tu imagen.',
  },
  {
    id: 2,
    key: 'system',
    titlePt: 'Sistema + automação sob medida',
    titleEs: 'Sistema + automatización a medida',
    subtitlePt: 'Mais controle, menos trabalho manual',
    subtitleEs: 'Más control, menos trabajo manual',
    descriptionPt:
      'Ideal para negócios que precisam organizar processos, centralizar informações, automatizar tarefas repetitivas e ter mais controle da operação no dia a dia.',
    descriptionEs:
      'Ideal para negocios que necesitan organizar procesos, centralizar información, automatizar tareas repetitivas y tener más control de la operación en el día a día.',
    featuresPt: [
      'Painel administrativo personalizado',
      'Gestão de clientes, serviços ou reservas',
      'Automação de processos internos',
      'Relatórios e controle operacional',
      'Fluxos adaptados ao seu negócio',
      'Redução de erros e retrabalho manual',
    ],
    featuresEs: [
      'Panel administrativo personalizado',
      'Gestión de clientes, servicios o reservas',
      'Automatización de procesos internos',
      'Reportes y control operativo',
      'Flujos adaptados a tu negocio',
      'Reducción de errores y retrabajo manual',
    ],
    highlightPt: 'Perfeito para transformar planilhas, mensagens e processos soltos em um sistema organizado.',
    highlightEs: 'Perfecto para transformar hojas de cálculo, mensajes y procesos sueltos en un sistema organizado.',
  },
]
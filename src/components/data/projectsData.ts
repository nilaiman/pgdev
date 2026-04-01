import sistemaImage from '../../assets/projects/figma-bnbplaza.png'
import drBrunoImage from '../../assets/projects/figma-drbruno.png'
import maxxSorvetesImage from '../../assets/projects/figma-maxsorvetes.png'
import luckpetImage from '../../assets/projects/figmaluckpet.png'

export type ProjectItem = {
  id: number
  category: 'website' | 'system'
  title: string
  typePt: string
  typeEs: string
  descriptionPt: string
  descriptionEs: string
  image: string
  featuresPt: string[]
  featuresEs: string[]
  link?: string
  linkLabelPt: string
  linkLabelEs: string
  tag?: {
    pt: string
    es: string
  }
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    category: 'website',
    title: 'Maxx Sorvetes',
    typePt: 'Site Institucional',
    typeEs: 'Sitio Institucional',
    descriptionPt:
      'Site que conecta clientes locais à sorveteria, com cardápio digital e botões diretos para WhatsApp e localização.',
    descriptionEs:
      'Sitio que conecta clientes locales a la heladería, con menú digital y botones directos para WhatsApp y ubicación.',
    image: maxxSorvetesImage,
    featuresPt: [
      'Cardápio digital de fácil navegação',
      'Contato direto via WhatsApp',
      'Localização integrada com Google Maps',
      'SEO para encontrar negócio local',
    ],
    featuresEs: [
      'Menú digital de fácil navegación',
      'Contacto directo vía WhatsApp',
      'Ubicación integrada con Google Maps',
      'SEO para encontrar negocio local',
    ],
    link: 'https://maxsorvetesibertioga.com.br/',
    linkLabelPt: 'Ver projeto',
    linkLabelEs: 'Ver proyecto',
  },
  {
    id: 2,
    category: 'website',
    title: 'Dr. Bruno Ribeiro',
    typePt: 'Site Institucional',
    typeEs: 'Sitio Institucional',
    descriptionPt:
      'Site profissional para fisioterapeuta que facilita o contato com pacientes e gera mais agendamentos online.',
    descriptionEs:
      'Sitio profesional para fisioterapeuta que facilita el contacto con pacientes y genera más citas online.',
    image: drBrunoImage,
    featuresPt: [
      'Agendamento facilitado',
      'Contato direto via WhatsApp',
      'Presença digital profissional',
      'Geração de leads qualificados',
    ],
    featuresEs: [
      'Agendamiento facilitado',
      'Contacto directo vía WhatsApp',
      'Presencia digital profesional',
      'Generación de leads calificados',
    ],
    link: 'https://pablog-7.github.io/projeto-drbruno/',
    linkLabelPt: 'Ver projeto',
    linkLabelEs: 'Ver proyecto',
  },
  {
    id: 3,
    category: 'system',
    title: 'BNB Plaza',
    typePt: 'Sistema de Gestão',
    typeEs: 'Sistema de Gestión',
    descriptionPt:
      'Plataforma completa de gestão imobiliária que centraliza operações financeiras, ocupações e relatórios em tempo real.',
    descriptionEs:
      'Plataforma completa de gestión inmobiliaria que centraliza operaciones financieras, ocupaciones y reportes en tiempo real.',
    image: sistemaImage,
    featuresPt: [
      'Dashboard financeiro em tempo real',
      'Gestão de propriedades e ocupações',
      'Relatórios automáticos em PDF',
      'Sistema offline-first com sincronização',
    ],
    featuresEs: [
      'Dashboard financiero en tiempo real',
      'Gestión de propiedades y ocupaciones',
      'Reportes automáticos en PDF',
      'Sistema offline-first con sincronización',
    ],
    linkLabelPt: 'Sistema interno',
    linkLabelEs: 'Sistema interno',
    tag: {
      pt: 'Destaque',
      es: 'Destacado',
    },
  },
  {
  id: 4,
  category: 'system',
  title: 'LuckPet',
  typePt: 'Sistema + Automação',
  typeEs: 'Sistema + Automatización',
  descriptionPt:
    'Sistema completo para petshop com agendamentos online, gestão de serviços e controle de clientes e pets.',
  descriptionEs:
    'Sistema completo para petshop con reservas online, gestión de servicios y control de clientes y mascotas.',
  image: luckpetImage,
  featuresPt: [
    'Agendamentos online com controle de horários',
    'Gestão de clientes e pets',
    'Painel administrativo completo',
    'Prevenção de conflitos de horários',
  ],
  featuresEs: [
    'Reservas online con control de horarios',
    'Gestión de clientes y mascotas',
    'Panel administrativo completo',
    'Prevención de conflictos de horarios',
  ],
  linkLabelPt: 'Sistema interno',
  linkLabelEs: 'Sistema interno',
  tag: {
    pt: 'Sistema',
    es: 'Sistema',
  },
}
]
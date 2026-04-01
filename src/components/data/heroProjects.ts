import sistemaImage from '../../assets/projects/figma-bnbplaza.png'
import drBrunoImage from '../../assets/projects/figma-drbruno.png'
import maxxSorvetesImage from '../../assets/projects/figma-maxsorvetes.png'
import kushiimg from '../../assets/projects/figma-kushi.png'
import luckpetimg from '../../assets/projects/figmaluckpet.png'

type HeroProject = {
  id: number
  image: string
  category: 'website' | 'system'
  typeEs: string
  typePt: string
  name: string
}

export const heroProjects: HeroProject[] = [
  {
    id: 1,
    image: drBrunoImage,
    category: 'website',
    typeEs: 'Sitio Institucional',
    typePt: 'Site Institucional',
    name: 'Dr. Bruno Ribeiro',
  },
  {
    id: 2,
    image: sistemaImage,
    category: 'system',
    typeEs: 'Sistema + Automatización',
    typePt: 'Sistema + Automação',
    name: 'BNB Plaza',
  },
  {
    id: 3,
    image: maxxSorvetesImage,
    category: 'website',
    typeEs: 'Sitio Institucional',
    typePt: 'Site Institucional',
    name: 'Max Sorvetes',
  },
  {
    id: 4,
    image: kushiimg,
    category: 'website',
    typeEs: 'E-commerce',
    typePt: 'E-commerce',
    name: 'Kushi',
  },
  {
    id: 5,
    image: luckpetimg,
    category: 'system',
    typeEs: 'Sistema + Automatización',
    typePt: 'Sistema + Automação',
    name: 'LuckPet',
  },
]
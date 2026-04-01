import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { detectLanguage } from '../utils/detectLanguage'

type Language = 'pt' | 'es'
type ServiceType = 'website' | 'system' | ''

type SiteExperienceContextType = {
  language: Language
  selectedService: ServiceType
  setLanguage: (language: Language) => void
  setSelectedService: (service: ServiceType) => void
}

const SiteExperienceContext = createContext<SiteExperienceContextType | undefined>(undefined)

export function SiteExperienceProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(detectLanguage())
  const [selectedService, setSelectedService] = useState<ServiceType>('')

  useEffect(() => {
    localStorage.setItem('pgdev-language', language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      selectedService,
      setLanguage,
      setSelectedService,
    }),
    [language, selectedService]
  )

  return (
    <SiteExperienceContext.Provider value={value}>
      {children}
    </SiteExperienceContext.Provider>
  )
}

export function useSiteExperience() {
  const context = useContext(SiteExperienceContext)

  if (!context) {
    throw new Error('useSiteExperience must be used within SiteExperienceProvider')
  }

  return context
}
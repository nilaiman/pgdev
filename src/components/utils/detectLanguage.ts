export function detectLanguage(): 'pt' | 'es' {
  const savedLanguage = localStorage.getItem('pgdev-language')

  if (savedLanguage === 'pt' || savedLanguage === 'es') {
    return savedLanguage
  }

  const browserLanguage = navigator.language.toLowerCase()

  if (browserLanguage.includes('pt')) {
    return 'pt'
  }

  return 'es'
}
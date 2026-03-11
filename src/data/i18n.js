import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { resources } from './translations'

export const languageOptions = [
  { code: 'uz', label: 'UZ' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
]

const storedLanguage =
  typeof window !== 'undefined' ? window.localStorage.getItem('i18nextLng') : null

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLanguage || 'uz',
    fallbackLng: 'uz',
    supportedLngs: ['uz', 'en', 'ru'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
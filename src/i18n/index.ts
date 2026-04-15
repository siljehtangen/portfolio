import { createI18n } from 'vue-i18n'
import { en } from '@/i18n/locales/en'
import { no } from '@/i18n/locales/no'

const STORAGE_KEY = 'portfolio-locale'

const DEFAULT_LOCALE = 'en' as const

function readStoredLocale(): 'en' | 'no' {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === 'no' || raw === 'en') return raw
  } catch {
    /* private / blocked storage */
  }
  return DEFAULT_LOCALE
}

function syncDocumentLang(locale: 'en' | 'no') {
  if (typeof document === 'undefined') return
  document.documentElement.lang = locale === 'no' ? 'no' : 'en'
}

const locale = readStoredLocale()
const messages = { en, no }

syncDocumentLang(locale)

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: DEFAULT_LOCALE,
  messages,
})

export function setLocale(nextLocale: 'en' | 'no') {
  i18n.global.locale.value = nextLocale
  try {
    localStorage.setItem(STORAGE_KEY, nextLocale)
  } catch {
    /* ignore */
  }
  syncDocumentLang(nextLocale)
}

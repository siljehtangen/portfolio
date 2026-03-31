import { createI18n } from 'vue-i18n'
import { en } from '@/i18n/locales/en'
import { no } from '@/i18n/locales/no'

const STORAGE_KEY = 'portfolio-locale'
const defaultLocale = 'en'
const savedLocale = localStorage.getItem(STORAGE_KEY)
const locale = savedLocale === 'no' || savedLocale === 'en' ? savedLocale : defaultLocale
const messages = { en, no }

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages,
})

export function setLocale(nextLocale: 'en' | 'no') {
  i18n.global.locale.value = nextLocale
  localStorage.setItem(STORAGE_KEY, nextLocale)
}

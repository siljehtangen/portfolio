<template>
  <nav
    ref="navEl"
    :class="[
      'fixed inset-x-0 top-0 z-[2000] border-b border-[var(--border-light)] py-4 backdrop-blur-[10px] transition-all duration-200 ease-out',
      isScrolled
        ? 'bg-[color-mix(in_srgb,var(--bg-primary)_90%,transparent)] shadow-[var(--shadow-md)]'
        : 'bg-[color-mix(in_srgb,var(--bg-primary)_82%,transparent)] shadow-[var(--shadow-sm)]',
    ]"
  >
    <div
      class="relative mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-3 pb-2 max-lg:px-3 max-lg:pb-[0.45rem] sm:px-8"
    >
      <button
        type="button"
        class="hidden size-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)] text-lg text-[var(--text-primary)] transition-all duration-200 ease-out max-lg:inline-flex max-sm:size-9 max-sm:text-base hover:border-[var(--purple)] hover:text-[var(--purple)]"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span>{{ isMenuOpen ? '✕' : '☰' }}</span>
      </button>

      <div
        class="flex min-w-0 flex-1 items-center justify-center gap-2 max-lg:basis-full max-lg:flex-col max-lg:items-stretch max-lg:gap-1.5 max-lg:rounded-xl max-lg:border max-lg:border-[var(--border-light)] max-lg:bg-[var(--bg-primary)] max-lg:p-[0.65rem] max-lg:shadow-[var(--shadow-md)] max-sm:mt-2 max-sm:p-[0.55rem]"
        :class="isMenuOpen ? 'max-lg:flex max-lg:mt-2.5 max-lg:gap-3' : 'max-lg:hidden'"
      >
        <div
          class="flex flex-1 items-center justify-center gap-2 max-lg:flex-col max-lg:items-stretch max-lg:justify-start max-lg:gap-1.5"
        >
          <button
            v-for="(section, index) in sections"
            :key="index"
            type="button"
            class="group relative flex cursor-pointer items-center justify-center gap-2 overflow-visible rounded-[10px] border border-transparent bg-transparent px-6 py-3 text-[var(--text-secondary)] transition-all duration-200 ease-out max-lg:w-full max-lg:justify-start max-lg:px-[0.65rem] max-lg:py-2 max-sm:px-2.5 max-sm:py-2 hover:border-[var(--border-light)] hover:bg-[color-mix(in_srgb,var(--bg-secondary)_72%,transparent)]"
            :class="{
              'border-[var(--border-medium)] bg-[color-mix(in_srgb,var(--bg-secondary)_80%,var(--bg-primary))]':
                currentStep === index,
            }"
            @click="goToSection(index)"
            :aria-label="section"
          >
            <component
              :is="sectionIcons[index]"
              class="relative z-[2] size-5 shrink-0 text-[var(--text-secondary)] transition-colors duration-200 ease-out group-hover:text-[var(--purple)] max-lg:size-[18px] max-sm:size-4"
              :class="currentStep === index ? 'text-[var(--purple)]' : ''"
              :size="20"
            />
            <span
              class="nav-label relative z-[2] text-base font-medium transition-all duration-200 ease-out group-hover:font-semibold group-hover:text-[var(--purple)] max-lg:text-[0.9rem] max-sm:text-[0.85rem]"
              :class="currentStep === index ? 'font-semibold text-[var(--purple)]' : ''"
            >
              {{ section }}
            </span>
          </button>
        </div>
      </div>

      <div
        class="mb-2 flex shrink-0 items-center gap-3 max-lg:mb-0.5 max-lg:ml-auto max-lg:flex-wrap max-lg:gap-2 max-sm:gap-1.5"
      >
        <AppTooltip :label="theme === 'dark' ? t('navbar.themeLight') : t('navbar.themeDark')" placement="bottom">
          <button
            type="button"
            class="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-[10px] border border-[var(--border-light)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-all duration-200 ease-out hover:border-[var(--purple)] hover:bg-[color-mix(in_srgb,var(--bg-tertiary)_70%,var(--bg-secondary))] hover:text-[var(--purple)] max-lg:size-[34px] max-sm:size-[30px]"
            :aria-label="theme === 'dark' ? t('navbar.themeLight') : t('navbar.themeDark')"
            @click="toggleThemeMode"
          >
            <Moon v-if="theme === 'light'" :size="18" class="size-[18px] shrink-0 max-lg:size-4 max-sm:size-3.5" />
            <Sun v-else :size="18" class="size-[18px] shrink-0 max-lg:size-4 max-sm:size-3.5" />
          </button>
        </AppTooltip>
        <div
          class="inline-flex overflow-hidden rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)]"
          :aria-label="t('navbar.language')"
        >
          <button
            v-for="lang in languages"
            :key="lang.code"
            type="button"
            class="cursor-pointer border-none bg-transparent px-[0.55rem] py-[0.45rem] text-[0.7rem] font-bold text-[var(--text-secondary)] transition-all duration-200 ease-out hover:bg-[var(--bg-tertiary)] max-lg:px-[0.45rem] max-lg:py-[0.35rem] max-lg:text-[0.62rem] max-sm:px-[0.38rem] max-sm:py-[0.3rem] max-sm:text-[0.58rem]"
            :class="{ '[background:var(--gradient-primary)] text-[var(--text-on-primary)]': locale === lang.code }"
            @click="switchLanguage(lang.code)"
          >
            {{ lang.label }}
          </button>
        </div>
        <AppTooltip
          v-for="link in socialLinks"
          :key="link.label"
          :label="t(link.titleKey)"
          placement="bottom"
        >
          <a
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            class="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[var(--border-light)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] no-underline transition-all duration-200 ease-out hover:border-[var(--purple)] hover:[background:var(--gradient-primary)] hover:text-[var(--text-on-primary)] hover:shadow-[var(--shadow-md)] max-lg:size-[34px] max-sm:size-[30px]"
            :aria-label="link.label"
          >
            <component
              :is="link.icon"
              :size="20"
              class="relative z-[1] size-5 transition-colors duration-200 ease-out max-lg:size-4 max-sm:size-3.5"
            />
          </a>
        </AppTooltip>
      </div>

      <div class="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden bg-[var(--bg-secondary)]">
        <div
          class="h-full transition-[width] duration-200 ease-out"
          :style="{
            width: `${((currentStep + 1) / sections.length) * 100}%`,
            background: 'var(--gradient-primary)',
          }"
        ></div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue'
import { Home, Heart, Briefcase, FolderKanban, Sun, Moon, Mail, Linkedin, Github } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/i18n'
import { setTheme, type Theme } from '@/theme'
import AppTooltip from './AppTooltip.vue'

defineProps<{
  currentStep: number
}>()

const emit = defineEmits<{
  (e: 'goto', index: number): void
  (e: 'menuOpenChange', value: boolean): void
}>()

const navEl = ref<HTMLElement>()
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const MOBILE_BREAKPOINT = 1024

function updateNavHeight() {
  if (navEl.value) {
    document.documentElement.style.setProperty('--navbar-height', `${navEl.value.offsetHeight}px`)
  }
}

const theme = ref<Theme>(
  typeof document !== 'undefined' && document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
)

function toggleThemeMode() {
  const next: Theme = theme.value === 'light' ? 'dark' : 'light'
  theme.value = next
  setTheme(next)
}

const sectionIcons = [Home, Heart, Briefcase, FolderKanban]
const { t, tm, locale } = useI18n()
const sections = computed(() => tm('navbar.sections') as string[])

const languages = [
  { code: 'en' as const, label: 'EN' },
  { code: 'no' as const, label: 'NO' },
]

const socialLinks = [
  { href: 'mailto:siljehtangen@outlook.com', icon: Mail, label: 'Email', titleKey: 'navbar.emailTitle' },
  { href: 'https://www.linkedin.com/in/siljehtangen', icon: Linkedin, label: 'LinkedIn', titleKey: 'navbar.linkedinTitle', external: true },
  { href: 'https://github.com/siljehtangen', icon: Github, label: 'GitHub', titleKey: 'navbar.githubTitle', external: true },
]

function switchLanguage(nextLocale: 'en' | 'no') {
  if (locale.value === nextLocale) return
  setLocale(nextLocale)
}

function goToSection(index: number) {
  closeMenu()
  emit('goto', index)
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  emit('menuOpenChange', isMenuOpen.value)
  nextTick(updateNavHeight)
}

function closeMenu() {
  isMenuOpen.value = false
  emit('menuOpenChange', false)
  nextTick(updateNavHeight)
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function handleResize() {
  if (window.innerWidth > MOBILE_BREAKPOINT) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  updateNavHeight()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

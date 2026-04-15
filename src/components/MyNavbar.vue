<template>
  <nav
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
        class="hidden size-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)] text-lg text-[var(--text-primary)] transition-all duration-200 ease-out max-lg:inline-flex max-sm:size-9 max-sm:text-base hover:border-[var(--purple)] hover:text-[var(--purple)]"
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
        <button
          type="button"
          class="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-[var(--border-light)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-all duration-200 ease-out hover:border-[var(--purple)] hover:bg-[color-mix(in_srgb,var(--bg-tertiary)_70%,var(--bg-secondary))] hover:text-[var(--purple)] max-lg:size-[34px] max-sm:size-[30px]"
          :aria-label="theme === 'dark' ? t('navbar.themeLight') : t('navbar.themeDark')"
          :title="theme === 'dark' ? t('navbar.themeLight') : t('navbar.themeDark')"
          @click="toggleThemeMode"
        >
          <Moon v-if="theme === 'light'" :size="18" class="size-[18px] shrink-0 max-lg:size-4 max-sm:size-3.5" />
          <Sun v-else :size="18" class="size-[18px] shrink-0 max-lg:size-4 max-sm:size-3.5" />
        </button>
        <div
          class="inline-flex overflow-hidden rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)]"
          :aria-label="t('navbar.language')"
        >
          <button
            type="button"
            class="cursor-pointer border-none bg-transparent px-[0.55rem] py-[0.45rem] text-[0.7rem] font-bold text-[var(--text-secondary)] transition-all duration-200 ease-out hover:bg-[var(--bg-tertiary)] max-lg:px-[0.45rem] max-lg:py-[0.35rem] max-lg:text-[0.62rem] max-sm:px-[0.38rem] max-sm:py-[0.3rem] max-sm:text-[0.58rem]"
            :class="{ 'bg-[image:var(--gradient-primary)] text-[var(--text-on-primary)]': locale === 'en' }"
            @click="switchLanguage('en')"
          >
            EN
          </button>
          <button
            type="button"
            class="cursor-pointer border-none bg-transparent px-[0.55rem] py-[0.45rem] text-[0.7rem] font-bold text-[var(--text-secondary)] transition-all duration-200 ease-out hover:bg-[var(--bg-tertiary)] max-lg:px-[0.45rem] max-lg:py-[0.35rem] max-lg:text-[0.62rem] max-sm:px-[0.38rem] max-sm:py-[0.3rem] max-sm:text-[0.58rem]"
            :class="{ '[background:var(--gradient-primary)] text-[var(--text-on-primary)]': locale === 'no' }"
            @click="switchLanguage('no')"
          >
            NO
          </button>
        </div>
        <a
          href="mailto:siljehtangen@outlook.com"
          class="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[var(--border-light)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] no-underline transition-all duration-200 ease-out hover:border-[var(--purple)] hover:[background:var(--gradient-primary)] hover:text-[var(--text-on-primary)] hover:shadow-[var(--shadow-md)] max-lg:size-[34px] max-sm:size-[30px]"
          aria-label="Email"
          :title="t('navbar.emailTitle')"
        >
          <svg class="relative z-[1] size-5 transition-colors duration-200 ease-out max-lg:size-4 max-sm:size-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/siljehtangen"
          target="_blank"
          rel="noopener noreferrer"
          class="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[var(--border-light)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] no-underline transition-all duration-200 ease-out hover:border-[var(--purple)] hover:[background:var(--gradient-primary)] hover:text-[var(--text-on-primary)] hover:shadow-[var(--shadow-md)] max-lg:size-[34px] max-sm:size-[30px]"
          aria-label="LinkedIn"
          :title="t('navbar.linkedinTitle')"
        >
          <svg class="relative z-[1] size-5 transition-colors duration-200 ease-out max-lg:size-4 max-sm:size-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
        <a
          href="https://github.com/siljehtangen"
          target="_blank"
          rel="noopener noreferrer"
          class="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[var(--border-light)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] no-underline transition-all duration-200 ease-out hover:border-[var(--purple)] hover:[background:var(--gradient-primary)] hover:text-[var(--text-on-primary)] hover:shadow-[var(--shadow-md)] max-lg:size-[34px] max-sm:size-[30px]"
          aria-label="GitHub"
          :title="t('navbar.githubTitle')"
        >
          <svg class="relative z-[1] size-5 transition-colors duration-200 ease-out max-lg:size-4 max-sm:size-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
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
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { Home, Heart, Briefcase, FolderKanban, Sun, Moon } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/i18n'
import { setTheme, type Theme } from '@/theme'

defineProps<{
  currentStep: number
}>()

const emit = defineEmits<{
  (e: 'goto', index: number): void
}>()

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const MOBILE_BREAKPOINT = 1024

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
}

function closeMenu() {
  isMenuOpen.value = false
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
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

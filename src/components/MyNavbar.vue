<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-container">
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span>{{ isMenuOpen ? '✕' : '☰' }}</span>
      </button>

      <div class="navbar-content" :class="{ open: isMenuOpen }">
        <div class="navbar-links">
          <button
            v-for="(section, index) in sections"
            :key="index"
            :class="['nav-link', { active: currentStep === index }]"
            @click="goToSection(index)"
            :aria-label="section"
          >
            <component :is="sectionIcons[index]" class="nav-icon" :size="20" />
            <span class="nav-label">{{ section }}</span>
            <span class="nav-indicator"></span>
          </button>
        </div>
      </div>

      <div class="navbar-social">
        <button
          type="button"
          class="theme-toggle"
          :aria-label="theme === 'dark' ? t('navbar.themeLight') : t('navbar.themeDark')"
          :title="theme === 'dark' ? t('navbar.themeLight') : t('navbar.themeDark')"
          @click="toggleThemeMode"
        >
          <Moon v-if="theme === 'light'" :size="18" class="theme-icon" />
          <Sun v-else :size="18" class="theme-icon" />
        </button>
        <div class="language-switch" :aria-label="t('navbar.language')">
          <button
            class="language-button"
            :class="{ active: locale === 'en' }"
            @click="switchLanguage('en')"
          >
            EN
          </button>
          <button
            class="language-button"
            :class="{ active: locale === 'no' }"
            @click="switchLanguage('no')"
          >
            NO
          </button>
        </div>
        <a
          href="mailto:siljehtangen@outlook.com"
          class="social-link"
          aria-label="Email"
          :title="t('navbar.emailTitle')"
        >
          <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/siljehtangen"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="LinkedIn"
          :title="t('navbar.linkedinTitle')"
        >
          <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
        <a
          href="https://github.com/siljehtangen"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="GitHub"
          :title="t('navbar.githubTitle')"
        >
          <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
      </div>

      <div class="navbar-progress">
        <div
          class="progress-bar"
          :style="{ width: `${((currentStep + 1) / sections.length) * 100}%` }"
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

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  background: color-mix(in srgb, var(--bg-primary) 82%, transparent);
  border-bottom: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  padding: 1rem 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.navbar.scrolled {
  background: color-mix(in srgb, var(--bg-primary) 90%, transparent);
  box-shadow: var(--shadow-md);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  position: relative;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  flex: 1;
}

.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--text-secondary);
  overflow: visible;
}

.nav-icon {
  transition: color var(--transition-normal);
  color: var(--text-secondary);
  position: relative;
  z-index: 2;
}

.nav-link:hover .nav-icon {
  color: var(--purple);
}

.nav-link:hover {
  border-color: var(--border-light);
  background: color-mix(in srgb, var(--bg-secondary) 72%, transparent);
}

.nav-link.active .nav-icon {
  color: var(--purple);
}


.nav-label {
  font-size: 1rem;
  transition: all var(--transition-normal);
  position: relative;
  z-index: 2;
  font-weight: 500;
}

.nav-link:hover .nav-label {
  color: var(--purple);
  font-weight: 600;
}

.nav-link.active .nav-label {
  color: var(--purple);
  font-weight: 600;
}

.nav-link.active {
  background: color-mix(in srgb, var(--bg-secondary) 80%, var(--bg-primary));
  border-color: var(--border-medium);
}

.nav-indicator {
  display: none;
}

.navbar-social {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--border-light);
  background: var(--bg-secondary);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.theme-toggle:hover {
  border-color: var(--purple);
  color: var(--purple);
  background: color-mix(in srgb, var(--bg-tertiary) 70%, var(--bg-secondary));
}

.theme-icon {
  flex-shrink: 0;
}

.language-switch {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  background: var(--bg-secondary);
  overflow: hidden;
}

.language-button {
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-weight: 700;
  font-size: 0.7rem;
  padding: 0.45rem 0.55rem;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.language-button:hover {
  background: var(--bg-tertiary);
}

.language-button.active {
  background: var(--gradient-primary);
  color: var(--text-on-primary);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
  transition: all var(--transition-normal);
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.social-link:hover {
  border-color: var(--purple);
  background: var(--gradient-primary);
  box-shadow: var(--shadow-md);
  color: var(--text-on-primary);
}

.social-icon {
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 1;
  transition: color var(--transition-normal);
}

.navbar-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--bg-secondary);
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--gradient-primary);
  transition: width var(--transition-normal);
  position: relative;
}

.menu-toggle {
  display: none;
  width: 40px;
  height: 40px;
  margin-right: 0;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.menu-toggle:hover {
  border-color: var(--purple);
  color: var(--purple);
}

@media (max-width: 1024px) {
  .navbar-container {
    padding: 0 0.75rem 0.45rem;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .menu-toggle {
    display: inline-flex;
    margin-right: auto;
  }

  .navbar-content {
    display: none;
    width: 100%;
    margin-top: 0.6rem;
    padding: 0.65rem;
    border: 1px solid var(--border-light);
    border-radius: 12px;
    background: var(--bg-primary);
    box-shadow: var(--shadow-md);
  }

  .navbar-content.open {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }

  .navbar-links {
    flex-direction: column;
    align-items: stretch;
    gap: 0.35rem;
    justify-content: flex-start;
  }

  .navbar-social {
    gap: 0.5rem;
    margin-bottom: 0.1rem;
    flex-wrap: wrap;
    margin-left: auto;
  }

  .language-button {
    padding: 0.35rem 0.45rem;
    font-size: 0.62rem;
  }

  .nav-link {
    padding: 0.55rem 0.65rem;
    justify-content: flex-start;
    width: 100%;
  }

  .nav-label {
    font-size: 0.9rem;
  }

  .nav-icon {
    width: 18px;
    height: 18px;
  }

  .theme-toggle {
    width: 34px;
    height: 34px;
  }

  .theme-icon {
    width: 16px;
    height: 16px;
  }

  .social-link {
    width: 34px;
    height: 34px;
  }

  .social-icon {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.4rem 0;
  }

  .navbar-content {
    padding: 0.55rem;
    margin-top: 0.5rem;
  }

  .nav-link {
    padding: 0.5rem 0.6rem;
  }

  .nav-label {
    font-size: 0.85rem;
  }

  .nav-icon {
    width: 16px;
    height: 16px;
  }

  .navbar-social {
    gap: 0.4rem;
  }

  .language-button {
    padding: 0.3rem 0.38rem;
    font-size: 0.58rem;
  }

  .theme-toggle {
    width: 30px;
    height: 30px;
  }

  .theme-icon {
    width: 14px;
    height: 14px;
  }

  .social-link {
    width: 30px;
    height: 30px;
  }

  .social-icon {
    width: 14px;
    height: 14px;
  }
}
</style>

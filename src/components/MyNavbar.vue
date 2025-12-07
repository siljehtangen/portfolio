<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-container">
      <div class="navbar-links">
        <button
          v-for="(section, index) in sections"
          :key="index"
          :class="['nav-link', { active: currentStep === index }]"
          @click="goToSection(index)"
          :aria-label="section"
        >
          <span class="nav-label">{{ section }}</span>
          <span class="nav-indicator"></span>
        </button>
      </div>

      <div class="navbar-social">
        <a
          href="mailto:siljehtangen@outlook.com"
          class="social-link"
          aria-label="Email"
          title="Send me an email"
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
          title="Get in touch on LinkedIn"
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
          title="View my GitHub"
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
import { defineProps, defineEmits, ref, onMounted, onUnmounted } from 'vue'

defineProps<{
  currentStep: number
}>()

const emit = defineEmits<{
  (e: 'goto', index: number): void
}>()

const isScrolled = ref(false)

const sections = ['Home', 'Hobbies', 'Career', 'Projects']

function goToSection(index: number) {
  emit('goto', index)
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1rem 0;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
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
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: rgba(255, 255, 255, 0.85);
  overflow: visible;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 2;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover::before {
  opacity: 1;
}

.nav-label {
  font-size: 1rem;
  opacity: 0.8;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  font-weight: 500;
}

.nav-link:hover .nav-label {
  opacity: 1;
  color: #ffffff;
  font-weight: 600;
}

.nav-link.active .nav-label {
  opacity: 1;
  color: #60a5fa;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(96, 165, 250, 0.6);
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

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 30%, #8b5cf6 60%, #6d28d9 100%);
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
}

.social-link:hover::before {
  opacity: 1;
}

.social-link:hover {
  transform: translateY(-3px) scale(1.1);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

.social-icon {
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-link:hover .social-icon {
  color: #ffffff;
  transform: scale(1.1);
}

.navbar-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 30%, #8b5cf6 60%, #6d28d9 100%);
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 10px rgba(37, 99, 235, 0.6);
  position: relative;
  overflow: hidden;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 0.5rem;
    gap: 0.5rem;
    flex-wrap: nowrap;
  }

  .navbar-links {
    gap: 0.1rem;
    flex-wrap: nowrap;
    order: 1;
    flex: 1;
    justify-content: center;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .navbar-links::-webkit-scrollbar {
    display: none;
  }

  .navbar-social {
    order: 2;
    gap: 0.4rem;
    flex-shrink: 0;
  }

  .nav-link {
    padding: 0.5rem 0.6rem;
    flex-shrink: 0;
  }

  .nav-label {
    font-size: 0.75rem;
  }

  .social-link {
    width: 32px;
    height: 32px;
  }

  .social-icon {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.5rem 0;
  }

  .navbar-container {
    padding: 0 0.5rem;
    gap: 0.25rem;
    flex-wrap: nowrap;
  }

  .navbar-links {
    gap: 0.05rem;
    flex-wrap: nowrap;
  }

  .nav-link {
    padding: 0.4rem 0.5rem;
  }

  .nav-label {
    font-size: 0.7rem;
  }

  .navbar-social {
    gap: 0.3rem;
  }

  .social-link {
    width: 28px;
    height: 28px;
  }

  .social-icon {
    width: 14px;
    height: 14px;
  }
}
</style>

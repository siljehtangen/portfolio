
<template>
  <div class="navigation-controls">
    <button @click="$emit('prev')" class="nav-button" :disabled="step === 0" aria-label="Previous">
      <ChevronLeft :size="20" class="nav-button-icon" />
      <span class="nav-button-text">Previous</span>
    </button>

    <div class="step-indicator">
      <span
        v-for="i in total"
        :key="i"
        :class="['step-dot', { active: i-1 === step }]"
        @click="$emit('goto', i-1)"
        :aria-label="`Go to step ${i}`"
      ></span>
    </div>

    <button @click="$emit('next')" class="nav-button" :disabled="step === total - 1" aria-label="Next">
      <span class="nav-button-text">Next</span>
      <ChevronRight :size="20" class="nav-button-icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const { step, total } = defineProps<{
  step: number
  total: number
}>()

const emit = defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
  (e: 'goto', index: number): void
}>()

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowRight' || event.key === ' ') {
    if (step < total - 1) {
      event.preventDefault()
      emit('next')
    }
  } else if (event.key === 'ArrowLeft') {
    if (step > 0) {
      event.preventDefault()
      emit('prev')
    }
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<style scoped>
.navigation-controls {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  z-index: 1000;
  flex-wrap: nowrap;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  animation: slideInUp 0.6s ease-out;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.nav-button-text {
  white-space: nowrap;
  position: relative;
  z-index: 1;
}

.navigation-controls:hover {
  box-shadow: var(--shadow-xl), 0 8px 20px rgba(139, 92, 246, 0.25), 0 4px 10px rgba(59, 130, 246, 0.2);
  transform: translateX(-50%) translateY(-3px);
  border-color: var(--purple-light);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.nav-button {
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  color: var(--text-primary);
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left var(--transition-slow);
}

.nav-button:hover:not(:disabled)::before {
  left: 100%;
}

.nav-button-icon {
  flex-shrink: 0;
  transition: transform var(--transition-normal);
  color: var(--text-secondary);
  position: relative;
  z-index: 1;
}

.nav-button:hover:not(:disabled) {
  background: var(--gradient-primary);
  border-color: transparent;
  color: var(--text-on-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-gradient);
}

.nav-button:hover:not(:disabled) .nav-button-icon {
  color: var(--text-on-primary);
}

.nav-button:first-child:hover:not(:disabled) .nav-button-icon {
  transform: translateX(-2px);
}

.nav-button:last-child:hover:not(:disabled) .nav-button-icon {
  transform: translateX(2px);
}

.nav-button:active:not(:disabled) {
  transform: translateY(0);
}

.nav-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: var(--bg-secondary);
}

.step-indicator {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.step-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--border-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  border: 2px solid transparent;
}

.step-dot.active {
  background: var(--gradient-primary);
  transform: scale(1.3);
  border-color: var(--purple);
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.5), 0 0 8px rgba(59, 130, 246, 0.4);
}

.step-dot:hover:not(.active) {
  background: var(--purple-light);
  transform: scale(1.15);
  border-color: var(--purple);
}

/* Mobile: compact icon-only prev/next, clean pill layout */
@media (max-width: 600px) {
  .navigation-controls {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    left: 50%;
    transform: translateX(-50%);
    bottom: max(1rem, env(safe-area-inset-bottom));
    border-radius: 40px;
    width: auto;
    max-width: none;
    min-width: 0;
  }

  .navigation-controls:hover {
    transform: translateX(-50%) translateY(-3px);
  }

  .nav-button {
    font-size: 0;
    padding: 0.5rem;
    min-width: 44px;
    min-height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-button .nav-button-icon {
    margin: 0;
  }

  .nav-button-text {
    display: none;
  }

  .step-indicator {
    gap: 0.4rem;
    padding: 0 0.25rem;
  }

  .step-dot {
    width: 8px;
    height: 8px;
    min-width: 8px;
    min-height: 8px;
  }

  .step-dot.active {
    transform: scale(1.25);
  }
}

@media (max-width: 380px) {
  .navigation-controls {
    padding: 0.4rem 0.6rem;
    gap: 0.4rem;
    bottom: max(0.75rem, env(safe-area-inset-bottom));
  }

  .nav-button {
    min-width: 40px;
    min-height: 40px;
    padding: 0.4rem;
  }

  .nav-button .nav-button-icon {
    width: 18px;
    height: 18px;
  }

  .step-dot {
    width: 6px;
    height: 6px;
    min-width: 6px;
    min-height: 6px;
  }

  .step-dot.active {
    transform: scale(1.2);
  }
}
</style>

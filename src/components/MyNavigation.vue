
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  z-index: 1000;
  flex-wrap: nowrap;
  justify-content: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2), 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  animation: slideInUp 0.6s ease-out, glowPulse 4s ease-in-out infinite;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-button-text {
  white-space: nowrap;
}

.navigation-controls:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(37, 99, 235, 0.4);
  transform: translateX(-50%) translateY(-5px);
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

@keyframes glowPulse {
  0%, 100% {
    box-shadow:
      0 8px 30px rgba(0, 0, 0, 0.2),
      0 0 20px rgba(59, 130, 246, 0.3),
      0 0 40px rgba(139, 92, 246, 0.2);
  }
  50% {
    box-shadow:
      0 8px 30px rgba(0, 0, 0, 0.2),
      0 0 30px rgba(59, 130, 246, 0.5),
      0 0 60px rgba(139, 92, 246, 0.4);
  }
}

.nav-button {
  background: linear-gradient(
    135deg,
    #1e293b 0%,
    #1e3a8a 20%,
    #2563eb 35%,
    #7c3aed 50%,
    #5b21b6 65%,
    #1e293b 100%
  );
  border: none;
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-button-icon {
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #ffffff;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 8px rgba(96, 165, 250, 0.6));
}

.nav-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-button:hover:not(:disabled)::before {
  left: 100%;
}

.nav-button:hover:not(:disabled) {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(37, 99, 235, 0.4);
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 30%, #8b5cf6 60%, #6d28d9 100%);
}

.nav-button:hover:not(:disabled) .nav-button-icon {
  transform: scale(1.2);
  filter: drop-shadow(0 0 8px rgba(96, 165, 250, 1)) drop-shadow(0 0 16px rgba(96, 165, 250, 0.8));
}

.nav-button:first-child:hover:not(:disabled) .nav-button-icon {
  transform: translateX(-3px) scale(1.2);
  filter: drop-shadow(0 0 8px rgba(96, 165, 250, 1)) drop-shadow(0 0 16px rgba(96, 165, 250, 0.8));
}

.nav-button:last-child:hover:not(:disabled) .nav-button-icon {
  transform: translateX(3px) scale(1.2);
  filter: drop-shadow(0 0 8px rgba(96, 165, 250, 1)) drop-shadow(0 0 16px rgba(96, 165, 250, 0.8));
}

.nav-button:active:not(:disabled) {
  transform: translateY(-1px) scale(1.02);
}

.nav-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: rgba(255, 255, 255, 0.1);
}

.step-indicator {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.step-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  border: 2px solid transparent;
}

.step-dot::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #2563eb;
  opacity: 0.3;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-dot:hover::before {
  transform: translate(-50%, -50%) scale(2);
}

.step-dot.active {
  background: #2563eb;
  transform: scale(1.4);
  box-shadow: 0 0 15px #2563eb, 0 0 30px rgba(96, 165, 250, 0.5);
  border-color: rgba(255, 255, 255, 0.5);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1.4);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.5);
  }
}

.step-dot.active::before {
  transform: translate(-50%, -50%) scale(2.5);
  opacity: 0.2;
}

.step-dot:hover:not(.active) {
  background: rgba(255, 255, 255, 0.6);
  transform: scale(1.2);
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

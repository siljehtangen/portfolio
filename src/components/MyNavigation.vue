<template>
  <div
    class="fixed bottom-8 left-1/2 z-[1000] flex -translate-x-1/2 flex-nowrap items-center justify-center gap-4 rounded-full border border-[var(--border-light)] bg-[color-mix(in_srgb,var(--bg-primary)_84%,transparent)] px-6 py-3 shadow-[var(--shadow-lg)] backdrop-blur-[10px] transition-all duration-200 ease-out animate-[slideInUp_0.6s_ease-out] hover:-translate-x-1/2 hover:-translate-y-[3px] hover:border-[var(--purple-light)] hover:shadow-[var(--shadow-xl),0_8px_20px_rgba(178,96,84,0.24),0_4px_10px_rgba(143,79,69,0.2)] max-[600px]:bottom-[max(1rem,env(safe-area-inset-bottom))] max-[600px]:gap-2 max-[600px]:rounded-[40px] max-[600px]:px-3 max-[600px]:py-2 max-[600px]:hover:-translate-x-1/2 max-[600px]:hover:-translate-y-[3px] max-[380px]:bottom-[max(0.75rem,env(safe-area-inset-bottom))] max-[380px]:gap-1.5 max-[380px]:px-2.5 max-[380px]:py-1.5"
  >
    <button
      type="button"
      class="group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-xl border border-[var(--border-light)] bg-[var(--bg-secondary)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] shadow-[var(--shadow-sm)] transition-all duration-200 ease-out enabled:hover:-translate-y-0.5 enabled:hover:border-transparent enabled:hover:text-[var(--text-on-primary)] enabled:hover:shadow-[var(--shadow-gradient)] enabled:hover:[background:var(--gradient-primary)] disabled:cursor-not-allowed disabled:opacity-40 max-[600px]:size-11 max-[600px]:min-h-11 max-[600px]:min-w-11 max-[600px]:justify-center max-[600px]:rounded-full max-[600px]:p-2 max-[600px]:text-[0] max-[380px]:size-10 max-[380px]:min-h-10 max-[380px]:min-w-10 max-[380px]:p-1.5"
      :disabled="step === 0"
      :aria-label="t('navigation.previous')"
      @click="$emit('prev')"
    >
      <ChevronLeft
        :size="20"
        class="nav-button-icon relative z-[1] shrink-0 text-[var(--text-secondary)] transition-transform duration-200 ease-out group-hover:-translate-x-0.5 group-hover:text-[var(--text-on-primary)] max-[380px]:size-[18px] max-[600px]:m-0"
      />
      <span
        class="nav-button-text relative z-[1] whitespace-nowrap max-[600px]:hidden"
      >
        {{ t('navigation.previous') }}
      </span>
    </button>

    <div
      class="flex items-center gap-3 max-[600px]:gap-1.5 max-[600px]:px-1 max-[380px]:gap-1.5"
    >
      <button
        v-for="i in total"
        :key="i"
        type="button"
        class="size-2.5 min-h-2.5 min-w-2.5 cursor-pointer rounded-full border-2 border-transparent bg-[var(--border-medium)] transition-all duration-200 ease-out hover:scale-[1.15] hover:border-[var(--purple)] hover:bg-[var(--purple-light)] max-[600px]:size-2 max-[600px]:min-h-2 max-[600px]:min-w-2 max-[380px]:size-1.5 max-[380px]:min-h-1.5 max-[380px]:min-w-1.5"
        :class="
          i - 1 === step
            ? 'scale-[1.3] border-[var(--purple)] shadow-[0_0_12px_rgba(178,96,84,0.45),0_0_8px_rgba(143,79,69,0.35)] [background:var(--gradient-primary)] max-[600px]:scale-[1.25] max-[380px]:scale-[1.2]'
            : ''
        "
        :aria-label="t('navigation.goToStep', { step: i })"
        @click="$emit('goto', i - 1)"
      ></button>
    </div>

    <button
      type="button"
      class="group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-xl border border-[var(--border-light)] bg-[var(--bg-secondary)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] shadow-[var(--shadow-sm)] transition-all duration-200 ease-out enabled:hover:-translate-y-0.5 enabled:hover:border-transparent enabled:hover:text-[var(--text-on-primary)] enabled:hover:shadow-[var(--shadow-gradient)] enabled:hover:[background:var(--gradient-primary)] disabled:cursor-not-allowed disabled:opacity-40 max-[600px]:size-11 max-[600px]:min-h-11 max-[600px]:min-w-11 max-[600px]:justify-center max-[600px]:rounded-full max-[600px]:p-2 max-[600px]:text-[0] max-[380px]:size-10 max-[380px]:min-h-10 max-[380px]:min-w-10 max-[380px]:p-1.5"
      :disabled="step === total - 1"
      :aria-label="t('navigation.next')"
      @click="$emit('next')"
    >
      <span
        class="nav-button-text relative z-[1] whitespace-nowrap max-[600px]:hidden"
      >
        {{ t('navigation.next') }}
      </span>
      <ChevronRight
        :size="20"
        class="nav-button-icon relative z-[1] shrink-0 text-[var(--text-secondary)] transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-[var(--text-on-primary)] max-[380px]:size-[18px] max-[600px]:m-0"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { step, total } = defineProps<{
  step: number
  total: number
}>()

const emit = defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
  (e: 'goto', index: number): void
}>()
const { t } = useI18n()

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

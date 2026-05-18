<template>
  <Transition name="back-to-top">
    <button
      v-if="visible"
      type="button"
      class="fixed bottom-8 right-8 z-[1000] flex size-12 cursor-pointer items-center justify-center rounded-full border border-[var(--border-medium)] bg-[color-mix(in_srgb,var(--bg-primary)_90%,transparent)] text-[var(--text-secondary)] shadow-[var(--shadow-lg)] backdrop-blur-[10px] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--purple)] hover:text-[var(--purple)] hover:shadow-[var(--shadow-xl)] max-sm:bottom-4 max-sm:right-4"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <ChevronUp :size="20" class="size-5 shrink-0" aria-hidden="true" />
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronUp } from 'lucide-vue-next'

const visible = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  visible.value = window.scrollY > window.innerHeight * 0.5
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.back-to-top-enter-active,
.back-to-top-leave-active {
  transition:
    opacity 0.2s ease-out,
    transform 0.2s ease-out;
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>

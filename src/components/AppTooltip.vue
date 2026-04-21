<template>
  <div ref="triggerRef" class="inline-flex" @mouseenter="onShow" @mouseleave="onHide">
    <slot />
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="visible"
          role="tooltip"
          class="pointer-events-none fixed z-[9999] whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide shadow-[var(--shadow-gradient)] [background:var(--gradient-primary)] [color:var(--text-on-primary)]"
          :style="tooltipStyle"
        >
          {{ label }}
          <!-- arrow -->
          <span :class="arrowClass" aria-hidden="true" />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(
  defineProps<{ label: string; placement?: 'top' | 'bottom' | 'left' }>(),
  { placement: 'top' },
)

const triggerRef = ref<HTMLElement | null>(null)
const visible = ref(false)
const coords = ref({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 })

function onShow() {
  if (!triggerRef.value) return
  coords.value = triggerRef.value.getBoundingClientRect()
  visible.value = true
}

function onHide() {
  visible.value = false
}

const GAP = 10

const tooltipStyle = computed(() => {
  const { top, bottom, left, right, width, height } = coords.value
  if (props.placement === 'bottom') {
    return {
      top: `${bottom + GAP}px`,
      left: `${left + width / 2}px`,
      transform: 'translateX(-50%)',
    }
  }
  if (props.placement === 'left') {
    return {
      top: `${top + height / 2}px`,
      right: `${window.innerWidth - left + GAP}px`,
      transform: 'translateY(-50%)',
    }
  }
  // top (default)
  return {
    bottom: `${window.innerHeight - top + GAP}px`,
    left: `${left + width / 2}px`,
    transform: 'translateX(-50%)',
  }
})

const arrowClass = computed(() => {
  const base = 'absolute border-4 border-transparent'
  if (props.placement === 'bottom') {
    // arrow points up, sits above the tooltip box
    return `${base} bottom-full left-1/2 -translate-x-1/2 border-b-[#c77767]`
  }
  if (props.placement === 'left') {
    // arrow points right, sits at the right edge
    return `${base} left-full top-1/2 -translate-y-1/2 border-l-[#984d42]`
  }
  // top: arrow points down, sits below the tooltip box
  return `${base} top-full left-1/2 -translate-x-1/2 border-t-[#984d42]`
})
</script>

<template>
  <div
    class="fixed bottom-28 right-4 z-[1500] flex flex-col gap-2 max-md:bottom-24 max-md:right-3 max-[600px]:bottom-[5.5rem] max-[600px]:right-2.5"
    role="toolbar"
    :aria-label="t('scroll.toolbar')"
  >
    <button
      v-for="action in scrollActions"
      :key="action.labelKey"
      type="button"
      class="flex size-11 cursor-pointer items-center justify-center rounded-[10px] border border-[var(--border-light)] bg-[color-mix(in_srgb,var(--bg-primary)_88%,transparent)] text-[var(--text-secondary)] shadow-[var(--shadow-md)] backdrop-blur-[10px] transition-all duration-200 ease-out hover:border-[var(--purple)] hover:text-[var(--purple)] hover:shadow-[var(--shadow-lg)] max-[600px]:size-10"
      :aria-label="t(action.labelKey)"
      :title="t(action.labelKey)"
      @click="action.handler()"
    >
      <component :is="action.icon" :size="22" class="size-[22px] shrink-0 max-[600px]:size-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import { ChevronUp, ChevronDown } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const SECTION_START_ID = 'portfolio-section-start'
const SECTION_END_ID = 'portfolio-section-end'

function scrollIntoView(id: string, block: ScrollLogicalPosition) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block })
}

async function scrollToFirstCard() {
  await nextTick()
  scrollIntoView(SECTION_START_ID, 'start')
}

async function scrollToLastCard() {
  await nextTick()
  const id = document.getElementById(SECTION_END_ID) ? SECTION_END_ID : SECTION_START_ID
  scrollIntoView(id, 'end')
}

const scrollActions = [
  { icon: ChevronUp, labelKey: 'scroll.toFirstCard', handler: scrollToFirstCard },
  { icon: ChevronDown, labelKey: 'scroll.toLastCard', handler: scrollToLastCard },
]
</script>

<template>
  <div
    class="fixed bottom-28 right-4 z-[1500] flex flex-col gap-2 max-md:bottom-24 max-md:right-3 max-[600px]:bottom-[5.5rem] max-[600px]:right-2.5"
    role="toolbar"
    :aria-label="t('scroll.toolbar')"
  >
    <button
      type="button"
      class="flex size-11 items-center justify-center rounded-[10px] border border-[var(--border-light)] bg-[color-mix(in_srgb,var(--bg-primary)_88%,transparent)] text-[var(--text-secondary)] shadow-[var(--shadow-md)] backdrop-blur-[10px] transition-all duration-200 ease-out hover:border-[var(--purple)] hover:text-[var(--purple)] hover:shadow-[var(--shadow-lg)] max-[600px]:size-10"
      :aria-label="t('scroll.toFirstCard')"
      :title="t('scroll.toFirstCard')"
      @click="scrollToFirstCard"
    >
      <ChevronUp :size="22" class="size-[22px] shrink-0 max-[600px]:size-5" />
    </button>
    <button
      type="button"
      class="flex size-11 items-center justify-center rounded-[10px] border border-[var(--border-light)] bg-[color-mix(in_srgb,var(--bg-primary)_88%,transparent)] text-[var(--text-secondary)] shadow-[var(--shadow-md)] backdrop-blur-[10px] transition-all duration-200 ease-out hover:border-[var(--purple)] hover:text-[var(--purple)] hover:shadow-[var(--shadow-lg)] max-[600px]:size-10"
      :aria-label="t('scroll.toLastCard')"
      :title="t('scroll.toLastCard')"
      @click="scrollToLastCard"
    >
      <ChevronDown :size="22" class="size-[22px] shrink-0 max-[600px]:size-5" />
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

async function scrollToFirstCard() {
  await nextTick()
  const el = document.getElementById(SECTION_START_ID)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

async function scrollToLastCard() {
  await nextTick()
  const el =
    document.getElementById(SECTION_END_ID) ?? document.getElementById(SECTION_START_ID)
  el?.scrollIntoView({ behavior: 'smooth', block: 'end' })
}
</script>

<template>
  <div
    class="w-full overflow-hidden rounded-[16px] border border-[var(--border-light)] bg-[color-mix(in_srgb,var(--bg-primary)_82%,var(--bg-secondary))] shadow-[var(--shadow-md)] transition-all duration-200 ease-out hover:border-[var(--border-medium)] hover:shadow-[var(--shadow-lg)]"
    :class="{ 'border-[var(--border-medium)]': expanded }"
  >
    <div
      class="flex cursor-pointer select-none items-center gap-4 px-[18px] py-[14px]"
      role="button"
      :tabindex="0"
      :aria-expanded="expanded"
      :aria-controls="`project-details-${index}`"
      :aria-label="`${project.cleanTitle} — ${expanded ? t('expandable.hideDetails') : t('expandable.showDetails')}`"
      @click="emit('toggle')"
      @keydown.enter.prevent="emit('toggle')"
      @keydown.space.prevent="emit('toggle')"
    >
      <div
        class="flex size-12 shrink-0 items-center justify-center rounded-[12px] shadow-[var(--shadow-sm)]"
        :style="{ background: cardGradient }"
        aria-hidden="true"
      >
        <component :is="icon" :size="22" class="text-white/90" />
      </div>

      <div class="min-w-0 flex-1">
        <h3 class="m-0 truncate text-[17px] font-bold leading-snug text-[var(--text-primary)]">
          {{ project.cleanTitle }}
        </h3>
      </div>

      <div class="flex shrink-0 items-center gap-2.5">
        <span class="text-[12px] font-medium text-[var(--text-muted)]">{{ year }}</span>
        <ChevronDown
          :size="18"
          class="size-[18px] shrink-0 text-[var(--text-muted)] transition-all duration-200 ease-out"
          :class="{ 'rotate-180 text-[var(--primary)]': expanded }"
          aria-hidden="true"
        />
      </div>
    </div>

    <div
      v-show="expanded"
      :id="`project-details-${index}`"
      class="border-t border-[var(--border-light)] px-[18px] pb-5 pt-5"
    >
      <div
        class="relative mb-5 flex h-[140px] w-full items-center justify-center overflow-hidden rounded-[12px]"
        :style="{ background: cardGradient }"
        aria-hidden="true"
      >
        <div
          class="absolute inset-0"
          style="background: radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.18) 0%, transparent 70%), radial-gradient(ellipse at 72% 18%, rgba(0,0,0,0.08) 0%, transparent 60%)"
        ></div>
        <component
          :is="icon"
          :size="56"
          class="relative z-[1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)] text-white/90"
        />
      </div>

      <p class="mb-5 text-[15px] font-normal leading-[1.65] text-[var(--text-secondary)]">
        {{ project.description }}
      </p>

      <div v-if="project.technologies.length" class="mb-5">
        <p class="mb-2.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--text-muted)]">
          {{ t('projects.techStack') }}
        </p>
        <div class="flex flex-wrap gap-1.5">
          <SkillTag v-for="tech in project.technologies" :key="tech">{{ tech }}</SkillTag>
        </div>
      </div>

      <div v-if="project.highlights.length" class="mb-5">
        <p class="mb-2.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--text-muted)]">
          {{ t('projects.keyFeatures') }}
        </p>
        <div class="flex flex-col gap-1.5">
          <span
            v-for="highlight in project.highlights"
            :key="highlight"
            class="flex items-start gap-2 text-[14px] leading-snug text-[var(--text-secondary)]"
          >
            <CheckCircle2
              :size="14"
              class="mt-0.5 size-3.5 shrink-0 text-[var(--purple)]"
              aria-hidden="true"
            />
            {{ highlight }}
          </span>
        </div>
      </div>

      <div v-if="project.links?.length" class="flex flex-wrap gap-3" @click.stop>
        <a
          v-for="link in project.links"
          :key="link.type"
          :href="link.url"
          class="inline-flex items-center gap-2 overflow-hidden rounded-[10px] px-5 py-2.5 text-sm font-semibold text-[var(--text-on-primary)] shadow-[var(--shadow-gradient)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-xl)] [background:var(--gradient-primary)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github :size="15" class="size-[15px] shrink-0" aria-hidden="true" />
          {{ link.type }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Github, CheckCircle2, ChevronDown } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import type { Component } from 'vue'
import type { ParsedProject } from '@/types/project'
import SkillTag from './SkillTag.vue'

const CARD_GRADIENTS = [
  'var(--gradient-primary)',
  'var(--gradient-clay)',
  'var(--gradient-warm)',
  'var(--gradient-deep)',
]

const props = defineProps<{
  project: ParsedProject
  index: number
  icon: Component
  expanded: boolean
}>()

const emit = defineEmits<{ toggle: [] }>()
const { t } = useI18n()

const cardGradient = computed(() => CARD_GRADIENTS[props.index % CARD_GRADIENTS.length])
const year = computed(() => props.project.date?.match(/\d{4}/)?.[0] ?? '')
</script>

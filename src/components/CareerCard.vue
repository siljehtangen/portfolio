<template>
  <div
    class="w-full overflow-hidden rounded-[16px] border border-[var(--border-light)] bg-[color-mix(in_srgb,var(--bg-primary)_82%,var(--bg-secondary))] shadow-[var(--shadow-md)] transition-all duration-200 ease-out hover:border-[var(--border-medium)] hover:shadow-[var(--shadow-lg)]"
    :class="{ 'border-[var(--border-medium)]': expanded }"
  >
    <!-- Clickable header row -->
    <div
      class="flex cursor-pointer select-none items-center gap-4 px-[18px] py-[14px]"
      role="button"
      :tabindex="0"
      :aria-expanded="expanded"
      :aria-controls="`career-details-${index}`"
      :aria-label="`${career.title} at ${career.company} — ${expanded ? t('expandable.hideDetails') : t('expandable.showDetails')}`"
      @click="emit('toggle')"
      @keydown.enter.prevent="emit('toggle')"
      @keydown.space.prevent="emit('toggle')"
    >
      <!-- 48px Briefcase gradient thumbnail — visual identity comes from gradient rotation -->
      <div
        class="flex size-12 shrink-0 items-center justify-center rounded-[12px] shadow-[var(--shadow-sm)]"
        :style="{ background: cardGradient }"
        aria-hidden="true"
      >
        <Briefcase :size="22" class="text-white/90" />
      </div>

      <!-- Title + company/duration -->
      <div class="min-w-0 flex-1">
        <h3 class="m-0 truncate text-[17px] font-bold leading-snug text-[var(--text-primary)]">
          {{ career.title }}
        </h3>
        <p class="mt-0.5 line-clamp-1 text-[13px] leading-snug text-[var(--text-secondary)]">
          {{ career.company }}
        </p>
      </div>

      <!-- Year + chevron -->
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

    <!-- Expanded body — no hero gradient block for career -->
    <div
      v-show="expanded"
      :id="`career-details-${index}`"
      class="border-t border-[var(--border-light)] px-[18px] pb-5 pt-5"
    >
      <!-- Duration + type pills -->
      <div class="mb-4 flex flex-wrap items-center gap-2">
        <div
          class="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-light)] bg-[var(--bg-secondary)] px-3 py-1.5 text-sm font-semibold text-[var(--text-secondary)]"
        >
          <Calendar :size="14" class="size-3.5 shrink-0 text-[var(--text-muted)]" aria-hidden="true" />
          {{ career.duration }}
        </div>
        <span class="text-sm italic text-[var(--text-muted)]">{{ career.type }}</span>
      </div>

      <!-- Full description -->
      <p class="mb-5 text-[15px] font-normal leading-[1.65] text-[var(--text-secondary)]">
        {{ career.description }}
      </p>

      <!-- Skills & Technologies -->
      <div v-if="career.skills.length">
        <p class="mb-2.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--text-muted)]">
          {{ t('career.skillsAndTech') }}
        </p>
        <div class="flex flex-wrap gap-1.5">
          <SkillTag v-for="skill in career.skills" :key="skill">{{ skill }}</SkillTag>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Briefcase, Calendar, ChevronDown } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import type { Career } from '@/types/career'
import SkillTag from './SkillTag.vue'

const CARD_GRADIENTS = [
  'var(--gradient-primary)',
  'var(--gradient-clay)',
  'var(--gradient-warm)',
  'var(--gradient-deep)',
]

const props = defineProps<{
  career: Career
  index: number
  expanded: boolean
}>()

const emit = defineEmits<{ toggle: [] }>()
const { t } = useI18n()

const cardGradient = computed(() => CARD_GRADIENTS[props.index % CARD_GRADIENTS.length])
const year = computed(() => props.career.duration.match(/\d{4}/)?.[0] ?? '')
</script>

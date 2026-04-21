<template>
  <section
    class="relative z-[1] min-h-screen overflow-hidden bg-[color-mix(in_srgb,var(--bg-primary)_88%,transparent)] px-8 pb-16 pt-24 backdrop-blur-[6px] max-md:px-4 max-md:pb-8 max-md:pt-28 max-sm:pt-[6.5rem]"
  >
    <div class="relative z-[1] mx-auto max-w-[1200px]">
      <div
        class="animate-[fadeIn_0.6s_ease-out] mb-16 text-center text-[var(--text-primary)] max-md:mb-12"
      >
        <div class="mb-8">
          <h2 class="m-0 text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--text-primary)]">
            {{ t('projects.title') }}
          </h2>
          <div
            class="mx-auto mt-4 h-[3px] w-20 rounded-sm [background:var(--gradient-primary)]"
          ></div>
        </div>
        <p
          class="mx-auto max-w-[700px] text-xl font-normal leading-relaxed text-[var(--text-secondary)]"
        >
          {{ t('projects.description') }}
        </p>
      </div>

      <div class="relative mx-auto my-16 max-w-[1100px] px-8 max-md:my-12 max-md:px-4">
        <div
          class="absolute bottom-0 top-0 w-0.5 bg-[linear-gradient(180deg,var(--border-light),var(--border-medium),var(--border-light))] max-md:left-6 max-md:translate-x-0 md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        ></div>

        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
          :index="index"
          :icon="projectIcons[index] ?? Code2"
          :expanded="isExpanded(index)"
          :card-id="cardId(index)"
          @toggle="toggleExpanded(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Code2,
  Scissors,
  Calculator,
  Trophy,
  GraduationCap,
  Music,
  Calendar,
  Map,
  Users,
  Gamepad2,
  MessageSquare,
  Flower2,
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import ProjectCard from './ProjectCard.vue'
import { useExpandable } from '@/composables/useExpandable'
import type { Project } from '@/types/project'

const projectIcons = [
  Code2,
  Scissors,
  Calculator,
  Trophy,
  GraduationCap,
  Music,
  Calendar,
  Map,
  Users,
  Gamepad2,
  MessageSquare,
  Flower2,
]

const { t, tm } = useI18n()

const monthToNumber: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  mai: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  okt: 9,
  nov: 10,
  dec: 11,
  des: 11,
}

function extractDate(title: string): string {
  return title.match(/\(([^)]+)\)/)?.[1] ?? ''
}

function getStartTimestamp(title: string): number {
  const dateRange = extractDate(title)
  if (!dateRange) return 0

  const startPart = dateRange.split('-')[0]?.trim().toLowerCase()
  if (!startPart) return 0

  const yearMatch = startPart.match(/^(\d{4})$/)
  if (yearMatch) return new Date(Number(yearMatch[1]), 0, 1).getTime()

  const monthYearMatch = startPart.match(/^([a-z]+)\s+(\d{4})$/)
  if (!monthYearMatch) return 0

  const [, monthLabel, year] = monthYearMatch
  const monthNumber = monthToNumber[monthLabel]
  return monthNumber !== undefined ? new Date(Number(year), monthNumber, 1).getTime() : 0
}

const { isExpanded, toggleExpanded } = useExpandable()

function cardId(index: number): string | undefined {
  if (index === 0) return 'portfolio-section-start'
  if (index === projects.value.length - 1) return 'portfolio-section-end'
  return undefined
}

const projects = computed(() => {
  const items = tm('projects.items') as Project[]
  return [...items]
    .sort((a, b) => getStartTimestamp(b.title) - getStartTimestamp(a.title))
    .map(item => ({
      ...item,
      cleanTitle: item.title.replace(/\s*\([^)]*\)\s*/g, ''),
      date: extractDate(item.title),
    }))
})
</script>

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

        <div
          v-for="(project, index) in projects"
          :key="index"
          class="relative mb-16 flex w-full items-start last:mb-0 max-md:mb-12 max-md:flex-row"
          :class="index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'"
        >
          <div
            class="absolute top-0 z-10 flex size-7 -translate-x-1/2 items-center justify-center max-md:left-6 max-md:translate-x-0 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          >
            <div
              class="relative size-4 rounded-full border-[3px] border-[var(--bg-secondary)] bg-[var(--primary)] shadow-[var(--shadow-sm)]"
            ></div>
          </div>

          <div
            class="group relative w-full cursor-pointer overflow-hidden rounded-[18px] border border-[var(--border-light)] bg-[color-mix(in_srgb,var(--bg-primary)_80%,var(--bg-secondary))] p-8 text-[var(--text-primary)] shadow-[var(--shadow-md)] transition-all duration-200 ease-out before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:[background:var(--gradient-primary)] before:transition-transform before:duration-200 before:ease-out before:content-[''] hover:-translate-y-1 hover:border-[var(--border-dark)] hover:bg-[var(--bg-primary)] hover:shadow-[var(--shadow-lg)] hover:before:scale-x-100 max-md:ml-16 max-md:w-[calc(100%-4rem)] max-md:rounded-3xl max-md:p-6 md:w-[calc(50%-3.5rem)]"
            :class="[
              index % 2 === 0 ? 'md:ml-14 md:mr-0' : 'md:ml-0 md:mr-14',
              index === 0 ? 'scroll-mt-28' : '',
            ]"
            :id="
              index === 0
                ? 'portfolio-section-start'
                : index === projects.length - 1
                  ? 'portfolio-section-end'
                  : undefined
            "
          >
            <div class="mb-6 flex items-start gap-4 max-md:flex-col max-md:text-left">
              <div class="min-w-0 flex-1">
                <div
                  class="mb-3 inline-block rounded-md border border-[var(--border-light)] bg-[var(--bg-secondary)] px-3 py-1.5 text-[0.85rem] font-semibold tracking-wide text-[var(--text-secondary)]"
                >
                  {{ extractDate(project.title) }}
                </div>
                <h3
                  class="m-0 mb-4 flex items-center gap-3 text-[1.4rem] font-bold text-[var(--text-primary)]"
                >
                  <component
                    :is="projectIcons[index]"
                    :size="24"
                    class="size-6 shrink-0 text-[var(--purple)] transition-all duration-200 ease-out group-hover:scale-110 group-hover:text-[var(--blue)]"
                  />
                  {{ project.title.replace(/\s*\([^)]*\)\s*/g, '') }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="inline-block rounded-md border border-[var(--border-light)] bg-[var(--bg-secondary)] px-[0.85rem] py-[0.35rem] text-[0.8rem] font-semibold text-[var(--text-primary)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--border-dark)] hover:text-[var(--text-on-primary)] hover:shadow-[var(--shadow-sm)] hover:[background:var(--gradient-primary)]"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <p class="mb-6 text-base font-normal leading-relaxed text-[var(--text-secondary)]">
              {{ project.description }}
            </p>

            <div class="mb-6">
              <h4
                class="m-0 mb-3 flex items-center gap-2 text-base font-semibold text-[var(--text-primary)]"
              >
                <Code2 :size="18" class="size-[18px] shrink-0 text-[var(--purple)]" />
                {{ t('projects.keyFeatures') }}
              </h4>
              <div class="mb-6 flex flex-col gap-2">
                <span
                  v-for="highlight in project.highlights"
                  :key="highlight"
                  class="group/hl flex items-center gap-2 py-1 text-sm font-medium text-[var(--text-secondary)] transition-all duration-200 ease-out hover:translate-x-[3px] hover:text-[var(--text-primary)]"
                >
                  <CheckCircle2
                    :size="16"
                    class="size-4 shrink-0 text-[var(--purple)] transition-transform duration-200 ease-out group-hover/hl:scale-110"
                  />
                  {{ highlight }}
                </span>
              </div>
            </div>

            <div v-if="project.links" class="mb-4 flex flex-wrap gap-4 max-md:justify-start">
              <a
                v-for="link in project.links"
                :key="link.type"
                :href="link.url"
                class="group/link relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-[var(--border-light)] bg-[var(--bg-secondary)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] no-underline transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--border-dark)] hover:text-[var(--text-on-primary)] hover:shadow-[var(--shadow-md)] hover:[background:var(--gradient-primary)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  :size="16"
                  class="size-4 shrink-0 text-[var(--text-secondary)] transition-transform duration-200 ease-out group-hover/link:scale-110 group-hover/link:text-[var(--text-on-primary)]"
                />
                {{ link.type }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Github,
  CheckCircle2,
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
type ProjectItem = {
  title: string
  technologies: string[]
  description: string
  highlights: string[]
  links?: Array<{ type: string; url: string }>
}

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

function getStartTimestamp(title: string): number {
  const dateRange = extractDate(title)
  if (!dateRange) return 0

  const startPart = dateRange.split('-')[0]?.trim().toLowerCase()
  if (!startPart) return 0

  const yearOnlyMatch = startPart.match(/^(\d{4})$/)
  if (yearOnlyMatch) {
    return new Date(Number(yearOnlyMatch[1]), 0, 1).getTime()
  }

  const monthYearMatch = startPart.match(/^([a-z]+)\s+(\d{4})$/)
  if (!monthYearMatch) return 0

  const [, monthLabel, year] = monthYearMatch
  const monthNumber = monthToNumber[monthLabel]
  if (monthNumber === undefined) return 0

  return new Date(Number(year), monthNumber, 1).getTime()
}

const projects = computed(() => {
  const items = tm('projects.items') as ProjectItem[]
  return [...items].sort((a, b) => getStartTimestamp(b.title) - getStartTimestamp(a.title))
})

function extractDate(title: string): string {
  const match = title.match(/\(([^)]+)\)/)
  return match ? match[1] : ''
}
</script>

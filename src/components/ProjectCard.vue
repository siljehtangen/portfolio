<template>
  <div
    class="relative mb-16 flex w-full items-start last:mb-0 max-md:mb-12 max-md:flex-row"
    :class="isEven ? 'md:flex-row-reverse' : 'md:flex-row'"
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
      class="relative w-full overflow-hidden rounded-[18px] border border-[var(--border-light)] bg-[color-mix(in_srgb,var(--bg-primary)_80%,var(--bg-secondary))] p-6 text-[var(--text-primary)] shadow-[var(--shadow-md)] transition-all duration-200 ease-out before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:[background:var(--gradient-primary)] before:transition-transform before:duration-200 before:ease-out before:content-[''] hover:border-[var(--border-dark)] hover:bg-[var(--bg-primary)] hover:shadow-[var(--shadow-lg)] hover:before:scale-x-100 max-md:ml-16 max-md:w-[calc(100%-4rem)] max-md:rounded-3xl max-md:p-5 md:w-[calc(50%-3.5rem)] md:p-8"
      :class="[isEven ? 'md:ml-14 md:mr-0' : 'md:ml-0 md:mr-14', index === 0 ? 'scroll-mt-28' : '']"
      :id="cardId"
    >
      <div class="flex items-start gap-3">
        <component
          :is="icon"
          :size="22"
          class="mt-0.5 size-[22px] shrink-0 text-[var(--purple)] max-md:size-5"
          aria-hidden="true"
        />
        <div class="min-w-0 flex-1">
          <h3
            class="m-0 line-clamp-2 text-lg font-bold leading-snug text-[var(--text-primary)] md:text-[1.35rem]"
          >
            {{ project.cleanTitle }}
          </h3>
          <p class="mt-1 line-clamp-2 text-sm leading-snug text-[var(--text-secondary)] md:text-base">
            <span v-if="project.date" class="font-medium text-[var(--text-muted)]">
              {{ project.date }}
            </span>
            <span v-if="project.date && project.technologies.length"> · </span>
            {{ techSummary(project.technologies) }}
          </p>
        </div>
        <div class="flex shrink-0 items-center gap-2">
          <AppTooltip
            v-if="project.links?.find(l => l.type === 'GitHub')"
            :label="t('projects.viewOnGitHub')"
          >
            <a
              :href="project.links.find(l => l.type === 'GitHub')!.url"
              class="flex size-10 items-center justify-center rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-all duration-200 ease-out hover:border-[var(--purple)] hover:text-[var(--purple)]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              @click.stop
            >
              <Github :size="18" class="size-[18px]" aria-hidden="true" />
            </a>
          </AppTooltip>
          <AppTooltip :label="expanded ? t('expandable.hideDetails') : t('expandable.showDetails')">
            <button
              type="button"
              class="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-all duration-200 ease-out hover:border-[var(--purple)] hover:text-[var(--purple)]"
              :aria-expanded="expanded"
              :aria-controls="`project-details-${index}`"
              :aria-label="expanded ? t('expandable.hideDetails') : t('expandable.showDetails')"
              @click.stop="emit('toggle')"
            >
              <ChevronDown
                :size="20"
                class="size-5 transition-transform duration-200"
                :class="{ 'rotate-180': expanded }"
                aria-hidden="true"
              />
            </button>
          </AppTooltip>
        </div>
      </div>

      <div
        v-show="expanded"
        :id="`project-details-${index}`"
        class="mt-5 border-t border-[var(--border-light)] pt-5 text-left"
      >
        <div v-if="project.technologies.length" class="mb-5 flex flex-wrap gap-2">
          <SkillTag v-for="tech in project.technologies" :key="tech">{{ tech }}</SkillTag>
        </div>

        <p class="mb-5 text-base font-normal leading-relaxed text-[var(--text-secondary)]">
          {{ project.description }}
        </p>

        <div class="mb-5">
          <h4
            class="m-0 mb-3 flex items-center gap-2 text-base font-semibold text-[var(--text-primary)]"
          >
            <Code2 :size="18" class="size-[18px] shrink-0 text-[var(--purple)]" />
            {{ t('projects.keyFeatures') }}
          </h4>
          <div class="flex flex-col gap-2">
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

        <div v-if="project.links" class="flex flex-wrap gap-4 max-md:justify-start">
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
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Github, CheckCircle2, Code2, ChevronDown } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import type { Component } from 'vue'
import type { ParsedProject } from '@/types/project'
import SkillTag from './SkillTag.vue'
import AppTooltip from './AppTooltip.vue'

const props = defineProps<{
  project: ParsedProject
  index: number
  icon: Component
  expanded: boolean
  cardId?: string
}>()

const emit = defineEmits<{ toggle: [] }>()

const { t } = useI18n()

const isEven = computed(() => props.index % 2 === 0)

function techSummary(technologies: string[]): string {
  if (!technologies.length) return ''
  const head = technologies.slice(0, 3).join(' · ')
  const rest = technologies.length - 3
  return rest > 0 ? `${head} ${t('expandable.moreTechnologies', { count: rest })}` : head
}
</script>

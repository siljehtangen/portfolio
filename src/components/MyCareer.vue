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
            {{ t('career.title') }}
          </h2>
          <div
            class="mx-auto mt-4 h-[3px] w-20 rounded-sm [background:var(--gradient-primary)]"
          ></div>
        </div>
        <p
          class="mx-auto max-w-[700px] text-xl font-normal leading-relaxed text-[var(--text-secondary)]"
        >
          {{ t('career.description') }}
        </p>
      </div>

      <div class="relative mx-auto my-16 max-w-[1000px] px-8 max-md:my-12 max-md:px-4">
        <div
          class="absolute bottom-0 top-0 w-0.5 bg-[linear-gradient(180deg,var(--border-light),var(--border-medium),var(--border-light))] max-md:left-6 max-md:translate-x-0 md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        ></div>

        <div
          v-for="(career, index) in careers"
          :key="index"
          class="relative mb-16 flex w-full items-start last:mb-0 max-md:mb-12 max-md:flex-row"
          :class="index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'"
        >
          <div
            class="absolute top-0 z-10 flex size-5 -translate-x-1/2 items-center justify-center max-md:left-6 max-md:translate-x-0 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          >
            <div
              class="size-4 rounded-full border-[3px] border-[var(--bg-secondary)] bg-[var(--primary)] shadow-[var(--shadow-sm)]"
            ></div>
          </div>

          <div
            class="relative w-full overflow-hidden rounded-[18px] border border-[var(--border-light)] bg-[color-mix(in_srgb,var(--bg-primary)_80%,var(--bg-secondary))] p-6 text-[var(--text-primary)] shadow-[var(--shadow-md)] transition-all duration-200 ease-out before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:[background:var(--gradient-primary)] before:transition-transform before:duration-200 before:ease-out before:content-[''] hover:border-[var(--border-dark)] hover:bg-[var(--bg-primary)] hover:shadow-[var(--shadow-lg)] hover:before:scale-x-100 max-md:ml-16 max-md:w-[calc(100%-4rem)] max-md:p-5 md:w-[calc(50%-3rem)] md:p-8"
            :class="[
              index % 2 === 0 ? 'md:ml-12 md:mr-0' : 'md:ml-0 md:mr-12',
              index === 0 ? 'scroll-mt-28' : '',
            ]"
            :id="
              index === 0
                ? 'portfolio-section-start'
                : index === careers.length - 1
                  ? 'portfolio-section-end'
                  : undefined
            "
          >
            <div class="flex items-start gap-3">
              <Briefcase
                :size="22"
                class="mt-0.5 size-[22px] shrink-0 text-[var(--purple)] max-md:size-5"
                aria-hidden="true"
              />
              <div class="min-w-0 flex-1">
                <h3
                  class="m-0 line-clamp-2 text-lg font-bold leading-snug text-[var(--text-primary)] md:text-[1.35rem]"
                >
                  {{ career.title }}
                </h3>
                <p
                  class="mt-1 line-clamp-2 text-sm leading-snug text-[var(--text-secondary)] md:text-base"
                >
                  {{ career.company }} · {{ career.duration }} · {{ career.type }}
                </p>
              </div>
              <button
                type="button"
                class="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-all duration-200 ease-out hover:border-[var(--purple)] hover:text-[var(--purple)]"
                :aria-expanded="isExpanded(index)"
                :aria-controls="`career-details-${index}`"
                :aria-label="isExpanded(index) ? t('expandable.hideDetails') : t('expandable.showDetails')"
                @click.stop="toggleExpanded(index)"
              >
                <ChevronDown
                  :size="20"
                  class="size-5 transition-transform duration-200"
                  :class="{ 'rotate-180': isExpanded(index) }"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div
              v-show="isExpanded(index)"
              :id="`career-details-${index}`"
              class="mt-5 border-t border-[var(--border-light)] pt-5"
            >
              <div class="mb-5 flex flex-wrap items-center gap-2 text-left">
                <div
                  class="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-light)] bg-[var(--bg-secondary)] px-3 py-1.5 text-sm font-semibold text-[var(--text-secondary)]"
                >
                  <Calendar :size="14" class="size-3.5 shrink-0 text-[var(--text-secondary)]" />
                  {{ career.duration }}
                </div>
                <span class="text-xs italic text-[var(--text-muted)]">{{ career.type }}</span>
              </div>

              <p class="mb-5 text-base font-normal leading-relaxed text-[var(--text-secondary)]">
                {{ career.description }}
              </p>

              <div>
                <h4
                  class="m-0 mb-3 flex items-center gap-2 text-base font-semibold text-[var(--text-primary)]"
                >
                  <Code2 :size="18" class="size-[18px] shrink-0 text-[var(--purple)]" />
                  {{ t('career.keySkills') }}
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in career.skills"
                    :key="skill"
                    class="inline-block rounded-md border border-[var(--border-light)] bg-[var(--bg-secondary)] px-[0.85rem] py-[0.35rem] text-[0.8rem] font-semibold text-[var(--text-primary)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--border-dark)] hover:text-[var(--text-on-primary)] hover:shadow-[var(--shadow-sm)] hover:[background:var(--gradient-primary)]"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Briefcase, Calendar, Code2, ChevronDown } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const careers = computed(
  () =>
    tm('career.items') as Array<{
      title: string
      company: string
      duration: string
      type: string
      description: string
      skills: string[]
    }>,
)

const expandedByIndex = ref<Record<number, boolean>>({})

function isExpanded(index: number): boolean {
  return !!expandedByIndex.value[index]
}

function toggleExpanded(index: number) {
  expandedByIndex.value = {
    ...expandedByIndex.value,
    [index]: !expandedByIndex.value[index],
  }
}
</script>

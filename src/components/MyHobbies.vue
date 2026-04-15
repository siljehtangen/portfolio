<template>
  <section
    class="relative z-[1] flex min-h-screen items-center overflow-hidden bg-[color-mix(in_srgb,var(--bg-primary)_88%,transparent)] p-8 pb-8 pt-24 backdrop-blur-[6px] max-md:px-4 max-md:pb-8 max-md:pt-28 max-sm:pt-[6.5rem]"
  >
    <div class="relative z-[1] mx-auto w-full max-w-[1200px]">
      <div
        class="animate-[fadeIn_0.6s_ease-out] mb-16 text-center text-[var(--text-primary)] max-md:mb-12"
      >
        <div class="mb-8">
          <h2 class="m-0 text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--text-primary)]">
            {{ t('hobbies.title') }}
          </h2>
          <div
            class="mx-auto mt-4 h-[3px] w-20 rounded-sm [background:var(--gradient-primary)]"
          ></div>
        </div>
        <p
          class="mx-auto max-w-[600px] text-xl font-normal leading-relaxed text-[var(--text-secondary)]"
        >
          {{ t('hobbies.description') }}
        </p>
      </div>

      <div
        class="animate-[fadeIn_0.6s_ease-out_0.2s_both] grid grid-cols-1 gap-8 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] max-md:gap-6"
      >
        <div
          v-for="(hobby, index) in hobbies"
          :key="index"
          class="group relative cursor-pointer overflow-hidden rounded-[18px] border border-[var(--border-light)] bg-[color-mix(in_srgb,var(--bg-primary)_80%,var(--bg-secondary))] p-8 text-[var(--text-primary)] shadow-[var(--shadow-md)] transition-all duration-200 ease-out before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:[background:var(--gradient-primary)] before:transition-transform before:duration-200 before:ease-out before:content-[''] hover:-translate-y-1 hover:border-[var(--border-dark)] hover:bg-[var(--bg-primary)] hover:shadow-[var(--shadow-lg)] hover:before:scale-x-100 max-md:p-6"
        >
          <div class="mb-6 flex items-start gap-4 max-md:flex-col max-md:text-center">
            <div class="min-w-0 flex-1">
              <h3
                class="m-0 flex items-center gap-3 text-[1.4rem] font-bold text-[var(--text-primary)] max-md:justify-center"
              >
                <component
                  :is="hobbyIcons[index]"
                  :size="24"
                  class="size-7 shrink-0 text-[var(--purple)] transition-all duration-200 ease-out group-hover:scale-110 group-hover:text-[var(--blue)]"
                />
                {{ hobby.title }}
              </h3>
            </div>
          </div>

          <p class="mb-6 text-base font-normal leading-relaxed text-[var(--text-secondary)]">
            {{ hobby.description }}
          </p>

          <div class="mb-6">
            <h4
              class="m-0 mb-3 flex items-center gap-2 text-base font-semibold text-[var(--text-primary)]"
            >
              <Code2 :size="18" class="size-[18px] shrink-0 text-[var(--purple)]" />
              {{ t('hobbies.skillsGained') }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in hobby.skills"
                :key="skill"
                class="inline-block rounded-md border border-[var(--border-light)] bg-[color-mix(in_srgb,var(--bg-secondary)_80%,var(--bg-primary))] px-[0.85rem] py-[0.35rem] text-[0.8rem] font-semibold text-[var(--text-primary)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--border-dark)] hover:text-[var(--text-on-primary)] hover:shadow-[var(--shadow-sm)] hover:[background:var(--gradient-primary)]"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <div class="mb-0">
            <h4
              class="m-0 mb-3 flex items-center gap-2 text-base font-semibold text-[var(--text-primary)] max-md:justify-center"
            >
              <Lightbulb :size="18" class="size-[18px] shrink-0 text-[var(--purple)]" />
              {{ t('hobbies.devGrowth') }}
            </h4>
            <p
              class="m-0 text-[0.95rem] font-medium italic leading-relaxed text-[var(--text-secondary)] transition-colors duration-200 ease-out group-hover:text-[var(--text-primary)]"
            >
              {{ hobby.devConnection }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PenSquare, Zap, Activity, Lightbulb, Code2 } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const hobbyIcons = [PenSquare, Zap, Activity]
const { t, tm } = useI18n()
const hobbies = computed(
  () =>
    tm('hobbies.items') as Array<{
      title: string
      description: string
      skills: string[]
      devConnection: string
    }>,
)
</script>

<template>
  <section
    id="career"
    class="relative z-[1] min-h-screen overflow-hidden bg-[color-mix(in_srgb,var(--bg-primary)_72%,transparent)] px-8 pb-16 pt-24 backdrop-blur-[6px] scroll-mt-[var(--navbar-height)] max-md:px-4 max-md:pb-8 max-md:pt-28 max-sm:pt-[6.5rem]"
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

      <div class="relative mx-auto my-12 max-w-[1000px] px-8 max-md:my-8 max-md:px-4">
        <!-- Center spine -->
        <div
          class="absolute bottom-0 top-0 w-0.5 bg-[linear-gradient(180deg,var(--border-light),var(--border-medium),var(--border-light))] max-md:left-6 max-md:translate-x-0 md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        ></div>

        <div
          v-for="(career, index) in careers"
          :key="index"
          class="relative mb-4 flex w-full items-start last:mb-0 max-md:flex-row"
          :class="index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'"
        >
          <!-- Timeline dot -->
          <div
            class="absolute top-0 z-10 flex size-7 -translate-x-1/2 items-center justify-center max-md:left-6 max-md:translate-x-0 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          >
            <div class="size-3.5 rounded-full border-[3px] border-[var(--bg-secondary)] bg-[var(--primary)] shadow-[var(--shadow-sm)]"></div>
          </div>

          <!-- Card -->
          <div
            class="max-md:ml-16 max-md:w-[calc(100%-4rem)] md:w-[calc(50%-3.5rem)]"
            :class="index % 2 === 0 ? 'md:ml-14 md:mr-0' : 'md:ml-0 md:mr-14'"
          >
            <CareerCard
              :career="career"
              :index="index"
              :expanded="isExpanded(index)"
              @toggle="toggleExpanded(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useExpandable } from '@/composables/useExpandable'
import CareerCard from './CareerCard.vue'
import type { Career } from '@/types/career'

const { t, tm } = useI18n()
const { isExpanded, toggleExpanded } = useExpandable()

const careers = computed(() => tm('career.items') as Career[])
</script>

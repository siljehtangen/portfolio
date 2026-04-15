<template>
  <section
    class="relative z-[1] flex min-h-screen items-center overflow-hidden bg-[color-mix(in_srgb,var(--bg-primary)_88%,transparent)] p-8 pb-8 pt-24 backdrop-blur-[6px] max-md:pt-28 max-sm:pt-[6.5rem]"
  >
    <div
      class="relative z-[1] mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-16"
    >
      <div class="animate-[fadeIn_0.6s_ease-out] relative z-[2] text-[var(--text-primary)]">
        <div class="mb-8">
          <h1 class="m-0 flex flex-col text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]">
            <span class="relative mb-[0.2em] inline-block text-[0.6em] font-normal text-[var(--text-secondary)]">
              {{ t('intro.greeting') }}
            </span>
            <span class="relative inline-block font-extrabold text-[var(--text-primary)]">Silje</span>
          </h1>
          <div
            class="mt-4 h-[3px] w-[60px] rounded-sm [background:var(--gradient-primary)]"
          ></div>
        </div>

        <p class="mb-6 text-[1.3rem] font-normal leading-relaxed text-[var(--text-primary)]">
          {{ t('intro.descriptionPrefix') }}
          <span class="font-bold text-[var(--primary)]">{{ t('intro.descriptionHighlight') }}</span>
          {{ t('intro.descriptionMiddle') }}
          <span
            v-for="(keyword, index) in introKeywords"
            :key="keyword"
            class="relative inline-block cursor-default font-semibold text-[var(--purple)] transition-all duration-200 ease-out after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:opacity-50 after:transition-[transform,opacity] after:duration-200 after:ease-out after:[background:var(--gradient-primary)] after:content-[''] hover:text-[var(--blue)] hover:after:scale-x-100 hover:after:opacity-100"
          >
            {{ keyword }}<span v-if="index < introKeywords.length - 1">, </span>
          </span>
        </p>

        <p
          class="mb-10 text-[1.1rem] font-normal leading-[1.7] text-[var(--text-secondary)] max-md:mb-8"
        >
          {{ t('intro.journey') }}
        </p>
      </div>

      <div
        class="animate-[fadeIn_0.6s_ease-out_0.2s_both] relative flex min-h-[400px] items-center justify-center"
      >
        <div
          class="group relative w-full max-w-[600px] overflow-hidden rounded-[20px] border border-[var(--border-light)] bg-[color-mix(in_srgb,var(--bg-primary)_76%,var(--bg-secondary))] p-10 text-[var(--text-primary)] shadow-[var(--shadow-lg)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--border-medium)] hover:bg-[color-mix(in_srgb,var(--bg-primary)_88%,var(--bg-secondary))] hover:shadow-[var(--shadow-xl)] max-md:p-8"
        >
          <div
            class="relative z-[1] flex items-center justify-between gap-8 max-md:flex-col max-md:text-center"
          >
            <div class="min-w-0 flex-1">
              <h3 class="mb-4 text-[1.3rem] font-bold text-[var(--text-primary)]">
                {{ t('intro.traitsTitle') }}
              </h3>
              <ul class="m-0 list-none p-0">
                <li
                  v-for="(trait, index) in traits"
                  :key="trait"
                  class="group/trait relative my-3 flex items-center gap-3 text-[1.05rem] font-medium leading-relaxed text-[var(--text-primary)] first:mt-0 last:mb-0 max-md:justify-center"
                >
                  <component
                    :is="traitIcons[index]"
                    :size="18"
                    class="size-[18px] shrink-0 text-[var(--purple)] transition-all duration-200 ease-out group-hover/trait:scale-110 group-hover/trait:text-[var(--blue)]"
                  />
                  {{ trait }}
                </li>
              </ul>
            </div>
            <div
              class="relative size-[140px] shrink-0 overflow-hidden rounded-full border-[3px] border-[var(--border-medium)] shadow-[var(--shadow-md)] transition-all duration-200 ease-out group-hover:scale-105 group-hover:border-[var(--purple)] group-hover:shadow-[var(--shadow-lg)] max-md:mt-6 max-md:size-[120px]"
            >
              <img
                :src="profileImage"
                alt="Silje"
                class="relative z-[1] block size-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Shield, Heart, BookOpen, Target } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import profileImage from '@/images/profil.jpeg'

const { t, tm } = useI18n()
const traitIcons = [Shield, Heart, BookOpen, Target]
const traits = computed(() => tm('intro.traits') as string[])
const introKeywords = computed(() => tm('intro.keywords') as string[])
</script>

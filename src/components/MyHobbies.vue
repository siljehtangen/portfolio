<template>
  <section class="MyHobbies">
    <div class="hobbies-container">
      <div class="text-content">
        <div class="title-wrapper">
          <h2 class="section-title">{{ t('hobbies.title') }}</h2>
          <div class="title-underline"></div>
        </div>

        <p class="section-description">
          {{ t('hobbies.description') }}
        </p>
      </div>

      <div class="cards-grid">
        <div
          class="journey-card"
          v-for="(hobby, index) in hobbies"
          :key="index"
          :class="`hobby-${index + 1}`"
        >
          <div class="card-header">
            <div class="hobby-info">
              <h3 class="card-title">
                <component :is="hobbyIcons[index]" :size="24" class="hobby-icon" />
                {{ hobby.title }}
              </h3>
            </div>
          </div>

          <p class="card-description">{{ hobby.description }}</p>

          <div class="skills-section">
            <h4>
              <Code2 :size="18" class="section-icon" />
              {{ t('hobbies.skillsGained') }}
            </h4>
            <div class="skills-list">
              <span class="skill-tag" v-for="skill in hobby.skills" :key="skill">
                {{ skill }}
              </span>
            </div>
          </div>

          <div class="dev-connection">
            <h4>
              <Lightbulb :size="18" class="section-icon" />
              {{ t('hobbies.devGrowth') }}
            </h4>
            <p class="connection-text">{{ hobby.devConnection }}</p>
          </div>

          <div class="card-accent"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import '@/styles/MyHobbies.css'
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

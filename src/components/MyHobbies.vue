<template>
  <section class="MyHobbies">
    <div class="hobbies-container">
      <div class="text-content">
        <div class="title-wrapper">
          <h2 class="section-title">My Hobbies & Interests</h2>
          <div class="title-underline"></div>
        </div>

        <p class="section-description">
          Beyond coding, these passions fuel my creativity and shape my approach to problem-solving
          and teamwork.
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
              Skills gained:
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
              How it helps me grow as a developer:
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
import '@/styles/MyHobbies.css'
import { hobbies } from '@/data/MyHobbies'
import { PenSquare, Zap, Activity, Lightbulb, Code2 } from 'lucide-vue-next'

const hobbyIcons = [PenSquare, Zap, Activity]
</script>

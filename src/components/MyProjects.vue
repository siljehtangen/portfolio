<template>
  <section class="MyProjects">
    <div class="projects-container">
      <div class="text-content">
        <div class="title-wrapper">
          <h2 class="section-title">{{ t('projects.title') }}</h2>
          <div class="title-underline"></div>
        </div>
        <p class="section-description">
          {{ t('projects.description') }}
        </p>
      </div>

      <div class="timeline-container">
        <div class="timeline-line"></div>
        <div
          class="timeline-item"
          v-for="(project, index) in projects"
          :key="index"
          :class="`project-${index + 1}`"
        >
          <div class="timeline-node">
            <div class="node-inner"></div>
          </div>
          <div class="project-card">
            <div class="card-header">
              <div class="project-info">
                <div class="timeline-date">{{ extractDate(project.title) }}</div>
                <h3 class="card-title">
                  <component :is="projectIcons[index]" :size="24" class="project-title-icon" />
                  {{ project.title.replace(/\s*\([^)]*\)\s*/g, '') }}
                </h3>
                <div class="tech-stack">
                  <span class="tech-tag" v-for="tech in project.technologies" :key="tech">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <p class="card-description">{{ project.description }}</p>

            <div class="project-highlights">
              <h4>
                <Code2 :size="18" class="section-icon" />
                {{ t('projects.keyFeatures') }}
              </h4>
              <div class="highlights-list">
                <span class="highlight-item" v-for="highlight in project.highlights" :key="highlight">
                  <CheckCircle2 :size="16" class="check-icon" />
                  {{ highlight }}
                </span>
              </div>
            </div>

            <div class="project-links" v-if="project.links">
              <a
                v-for="link in project.links"
                :key="link.type"
                :href="link.url"
                class="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github :size="16" class="link-icon" />
                {{ link.type }}
              </a>
            </div>

            <div class="card-accent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import "@/styles/MyProjects.css"
import { computed } from 'vue'
import { Github, CheckCircle2, Code2, Scissors, Calculator, Trophy, GraduationCap, Music, Calendar, Map, Users, Gamepad2, MessageSquare, Flower2 } from 'lucide-vue-next'
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
  Flower2
]

const { t, tm } = useI18n()
const projects = computed(
  () =>
    tm('projects.items') as Array<{
      title: string
      technologies: string[]
      description: string
      highlights: string[]
      links?: Array<{ type: string; url: string }>
    }>,
)

function extractDate(title: string): string {
  const match = title.match(/\(([^)]+)\)/)
  return match ? match[1] : ''
}
</script>

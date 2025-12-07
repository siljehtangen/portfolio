<template>
  <section class="MyCareer">
    <div class="career-container">
      <div class="text-content">
        <div class="title-wrapper">
          <h2 class="section-title">My Career Journey</h2>
          <div class="title-underline"></div>
        </div>

        <p class="section-description">
          Each role has contributed to understanding my interests and identifying how I can best
          contribute.
        </p>
      </div>

      <div class="timeline-container">
        <div class="timeline-line"></div>
        <div
          class="timeline-item"
          v-for="(career, index) in careers"
          :key="index"
          :class="`career-${index + 1}`"
        >
          <div class="timeline-node">
            <div class="node-inner"></div>
          </div>
          <div class="career-card">
            <div class="card-header">
              <div class="job-info">
                <div class="timeline-date">
                  <Calendar :size="14" class="date-icon" />
                  {{ career.duration }}
                </div>
                <h3 class="card-title">
                  <Briefcase :size="20" class="title-icon" />
                  {{ career.title }}
                </h3>
                <p class="company">
                  <Building2 :size="16" class="company-icon" />
                  {{ career.company }}
                </p>
                <p class="type">{{ career.type }}</p>
              </div>
            </div>

            <p class="card-description">{{ career.description }}</p>

            <div class="skills-section">
              <h4>
                <Code2 :size="18" class="section-icon" />
                Key Skills & Technologies:
              </h4>
              <div class="skills-list">
                <span class="skill-tag" v-for="skill in career.skills" :key="skill">
                  {{ skill }}
                </span>
              </div>
            </div>

            <div class="card-accent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import "@/styles/MyCareer.css"
import { careers } from "@/data/MyCareer"
import { Briefcase, Building2, Calendar, Code2 } from 'lucide-vue-next'
</script>

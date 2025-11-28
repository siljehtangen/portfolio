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
                <div class="timeline-date">{{ career.duration }}</div>
                <h3 class="card-title">{{ career.title }}</h3>
                <p class="company">{{ career.company }}</p>
                <p class="type">{{ career.type }}</p>
              </div>
            </div>

            <p class="card-description">{{ career.description }}</p>

            <div class="skills-section">
              <h4>Key Skills & Technologies:</h4>
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
</script>

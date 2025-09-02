<template>
  <section class="MyProjects">
    <div class="projects-container">
      <div class="text-content">
        <div class="title-wrapper">
          <h2 class="section-title">My Projects</h2>
          <div class="title-underline"></div>
        </div>
        <p class="section-description">
          Most of my experience so far has come from part-time jobs during my studies, rather than
          personal projects. 
        </p>
      </div>

      <div class="projects-grid">
        <div
          class="project-card"
          v-for="(project, index) in projects"
          :key="index"
          :class="`project-${index + 1}`"
        >
          <div class="card-header">
            <div class="project-info">
              <h3 class="card-title">{{ project.title }}</h3>
              <div class="tech-stack">
                <span class="tech-tag" v-for="tech in project.technologies" :key="tech">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <p class="card-description">{{ project.description }}</p>

          <div class="project-highlights">
            <h4>Key Features:</h4>
            <div class="highlights-list">
              <span class="highlight-item" v-for="highlight in project.highlights" :key="highlight">
                ✓ {{ highlight }}
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
            >
              {{ link.type }}
            </a>
          </div>

          <div class="card-accent"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import "@/styles/MyProjects.css"
import { projects } from "@/data/MyProjects"
</script>

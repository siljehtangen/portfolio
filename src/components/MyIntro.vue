<template>
  <section class="MyIntro">
    <div class="intro-container">
      <div class="text-content">
        <div class="greeting-wrapper">
          <h1 class="main-title">
            <span class="greeting">{{ t('intro.greeting') }}</span>
            <span class="name">Silje</span>
          </h1>
          <div class="title-underline"></div>
        </div>

        <p class="description">
          {{ t('intro.descriptionPrefix') }}
          <span class="highlight-text">{{ t('intro.descriptionHighlight') }}</span>
          {{ t('intro.descriptionMiddle') }}
          <span
            v-for="(keyword, index) in introKeywords"
            :key="keyword"
            class="keyword"
          >
            {{ keyword }}<span v-if="index < introKeywords.length - 1">, </span>
          </span>
        </p>

        <p class="journey-text">{{ t('intro.journey') }}</p>
      </div>

      <div class="visual-elements">
        <div class="traits-card">
          <div class="blue-shape"></div>
          <div class="traits-content">
            <div class="traits-text">
              <h3 class="traits-title">{{ t('intro.traitsTitle') }}</h3>
              <ul class="traits-list">
                <li v-for="(trait, index) in traits" :key="trait">
                  <component :is="traitIcons[index]" :size="18" class="trait-icon" />
                  {{ trait }}
                </li>
              </ul>
            </div>
            <div class="traits-image">
              <img :src="profileImage" alt="Silje" />
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

<style scoped>
.MyIntro {
  min-height: 100vh;
  background: color-mix(in srgb, var(--bg-primary) 88%, transparent);
  backdrop-filter: blur(6px);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 2rem;
  padding-top: 6rem;
  z-index: 1;
}

.intro-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.text-content {
  color: var(--text-primary);
  animation: fadeIn 0.6s ease-out;
  position: relative;
  z-index: 2;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.greeting-wrapper {
  margin-bottom: 2rem;
}

.main-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.greeting {
  font-size: 0.6em;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 0.2em;
  display: inline-block;
  position: relative;
}

.name {
  color: var(--text-primary);
  position: relative;
  display: inline-block;
  font-weight: 800;
}

.title-underline {
  height: 3px;
  width: 60px;
  background: var(--gradient-primary);
  border-radius: 2px;
  margin-top: 1rem;
}

.description {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-weight: 400;
}

.highlight-text {
  color: var(--primary);
  font-weight: 700;
}

.keyword {
  color: var(--purple);
  font-weight: 600;
  position: relative;
  display: inline-block;
  transition: all var(--transition-normal);
  cursor: default;
}

.keyword::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--gradient-primary);
  opacity: 0.5;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-normal);
}

.keyword:hover {
  color: var(--blue);
}

.keyword:hover::after {
  transform: scaleX(1);
  opacity: 1;
}

.journey-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  font-weight: 400;
}

.visual-elements {
  position: relative;
  animation: fadeIn 0.6s ease-out 0.2s both;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.traits-card {
  background: color-mix(in srgb, var(--bg-primary) 76%, var(--bg-secondary));
  border: 1px solid var(--border-light);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: var(--shadow-lg);
  color: var(--text-primary);
  max-width: 600px;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: all var(--transition-normal);
}

.traits-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-medium);
  box-shadow: var(--shadow-xl);
  background: color-mix(in srgb, var(--bg-primary) 88%, white);
}

.traits-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.traits-text {
  flex: 1;
}

.traits-image {
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--border-medium);
  box-shadow: var(--shadow-md);
  position: relative;
  transition: all var(--transition-normal);
}

.traits-image:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
  border-color: var(--purple);
}

.traits-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  display: block;
}

.traits-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.traits-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.traits-list li {
  margin: 0.8rem 0;
  padding-left: 0;
  position: relative;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-primary);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.trait-icon {
  flex-shrink: 0;
  color: var(--purple);
  transition: all var(--transition-normal);
}

.traits-list li:hover .trait-icon {
  transform: scale(1.1);
  color: var(--blue);
}

@media (max-width: 768px) {
  .MyIntro {
    padding-top: 7rem;
  }

  .intro-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .traits-content {
    flex-direction: column;
    text-align: center;
  }

  .traits-image {
    margin-top: 1.5rem;
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 480px) {
  .MyIntro {
    padding-top: 6.5rem;
  }
}
</style>

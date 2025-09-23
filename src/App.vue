<template>
  <div class="app-container">
    <component :is="components[step]" />

    <Navigation
      :step="step"
      :total="components.length"
      @prev="prevStep"
      @next="nextStep"
      @goto="goToStep"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Intro from '@/components/MyIntro.vue'
import Hobbies from '@/components/MyHobbies.vue'
import Career from '@/components/MyCareer.vue'
import Projects from '@/components/MyProjects.vue'
import Navigation from '@/components/MyNavigation.vue'

const step = ref(0)
const components = [Intro, Hobbies, Career, Projects]

function nextStep() { step.value = (step.value + 1) % components.length }
function prevStep() { step.value = step.value > 0 ? step.value - 1 : 0 }
function goToStep(index: number) { step.value = index }
</script>

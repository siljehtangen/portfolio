<template>
  <div class="app-container">
    <!-- Two ambient light bubbles -->
    <div class="floating-bubble bubble-1"></div>
    <div class="floating-bubble bubble-3"></div>

    <Navbar @menu-open-change="navMenuOpen = $event" />

    <div
      class="transition-[padding-top] duration-300 ease-out"
      :style="navMenuOpen ? { paddingTop: 'calc(var(--navbar-height, 6.5rem) - 6.5rem)' } : undefined"
    >
      <Intro />
      <Hobbies />
      <Career />
      <Projects />
    </div>

    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Intro from '@/components/MyIntro.vue'
import Hobbies from '@/components/MyHobbies.vue'
import Career from '@/components/MyCareer.vue'
import Projects from '@/components/MyProjects.vue'
import Navbar from '@/components/MyNavbar.vue'
import BackToTop from '@/components/BackToTop.vue'

const navMenuOpen = ref(false)
</script>


<template>
  <div class="navigation-controls">
    <button @click="$emit('prev')" class="nav-button">← Previous</button>

    <div class="step-indicator">
      <span
        v-for="i in total"
        :key="i"
        :class="['step-dot', { active: i-1 === step }]"
        @click="$emit('goto', i-1)"
      ></span>
    </div>

    <button @click="$emit('next')" class="nav-button">Next →</button>
  </div>
</template>

<script setup lang="ts">
import "@/styles/MyNavigation.css"
import { defineProps, defineEmits } from 'vue'
import { onMounted, onUnmounted } from 'vue'

const { step, total } = defineProps<{
  step: number
  total: number
}>()

const emit = defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
  (e: 'goto', index: number): void
}>()

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowRight' || event.key === ' ') {
    event.preventDefault()
    emit('next')
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    emit('prev')
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <section class="MyIntro">
    <div class="intro-container">
      <div class="text-content">
        <div class="greeting-wrapper">
          <h1 class="main-title">
            <span class="greeting">Hi, I'm</span>
            <span class="name">Silje</span>
          </h1>
          <div class="title-underline"></div>
        </div>

        <p class="description">
          A <span class="highlight-text">developer</span> who’s driven by
          <span class="keyword">going the extra mile</span>, <span class="keyword">teamwork</span>,
          <span class="keyword">quality</span>, and <span class="keyword">reliability</span>.
        </p>

        <p class="journey-text">
          In a team, I perform my best when I’m with people who
          <span class="emphasis">believe in me</span>, aren’t afraid to
          <span class="emphasis">speak up</span>, and are always eager to
          <span class="emphasis">learn and grow together</span>.
        </p>
      </div>

      <div class="visual-elements">
        <div class="traits-card">
          <div class="traits-content">
            <div class="traits-text">
              <h3 class="traits-title">Key Traits</h3>
              <ul class="traits-list">
                <li>Takes Responsibility</li>
                <li>Supportive & Helpful</li>
                <li>Passionate Learner</li>
                <li>Seeks Challenges</li>
              </ul>
            </div>
            <div class="traits-image">
              <img src="/src/images/me.jpeg" alt="Silje" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import "@/styles/MyIntro.css"
</script>

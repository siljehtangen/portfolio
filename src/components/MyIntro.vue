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
          <div class="blue-shape"></div>
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

<script setup lang="ts"></script>

<style scoped>
.MyIntro {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #1e293b 0%,
    #1e3a8a 20%,
    #2563eb 35%,
    #7c3aed 50%,
    #5b21b6 65%,
    #1e293b 100%
  );
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 2rem;
  padding-top: 6rem;
}

.MyIntro::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(30, 41, 59, 0.5) 0%, transparent 60%),
    radial-gradient(circle at 30% 30%, rgba(91, 33, 182, 0.3) 0%, transparent 50%);
  pointer-events: none;
  animation: gradientShift 15s ease infinite;
}

.MyIntro::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: floatBackground 20s linear infinite;
  pointer-events: none;
}

@keyframes gradientShift {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes floatBackground {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
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
  color: #ffffff;
  animation: slideInLeft 1s ease-out;
  position: relative;
  z-index: 2;
}

.text-content > * {
  animation: slideInStagger 0.8s ease-out both;
}

.text-content > *:nth-child(1) {
  animation-delay: 0.1s;
}
.text-content > *:nth-child(2) {
  animation-delay: 0.3s;
}
.text-content > *:nth-child(3) {
  animation-delay: 0.5s;
}
.text-content > *:nth-child(4) {
  animation-delay: 0.7s;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInStagger {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
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
  opacity: 0.9;
  margin-bottom: 0.2em;
  animation: fadeInUp 1s ease-out 0.3s both;
  display: inline-block;
  position: relative;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.name {
  color: #ffffff;
  animation: fadeInUp 1s ease-out 0.6s both;
  position: relative;
  display: inline-block;
  text-shadow:
    0 2px 10px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(59, 130, 246, 0.6);
  font-weight: 800;
}

.title-underline {
  height: 4px;
  width: 60px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 30%, #8b5cf6 60%, #6d28d9 100%);
  border-radius: 2px;
  margin-top: 1rem;
  animation: expandWidth 1s ease-out 0.9s both;
}

@keyframes expandWidth {
  from {
    width: 0;
  }
  to {
    width: 60px;
  }
}

.description {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-weight: 400;
  animation: fadeInUp 1s ease-out 1.2s both;
}

.highlight-text {
  color: #0f172a;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
}

.keyword {
  color: #0f172a;
  font-weight: 600;
  position: relative;
  display: inline-block;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
}

.keyword::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #2563eb, #8b5cf6);
  opacity: 0.5;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.keyword:hover {
  color: #0f172a;
  transform: translateY(-2px);
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.4);
}

.keyword:hover::after {
  transform: scaleX(1);
  opacity: 1;
}

.journey-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #ffffff;
  opacity: 0.95;
  margin-bottom: 2.5rem;
  font-weight: 400;
  animation: fadeInUp 1s ease-out 1.5s both;
}

.emphasis {
  color: #ffffff;
  font-weight: 700;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.visual-elements {
  position: relative;
  animation: slideInRight 1s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  transform-style: preserve-3d;
  perspective: 1000px;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.traits-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.3),
    0 8px 32px 0 rgba(31, 38, 135, 0.37);
  color: #ffffff;
  animation:
    float 6s ease-in-out infinite,
    cardGlow 4s ease-in-out infinite;
  max-width: 600px;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.traits-card:hover {
  transform: translateY(-10px) scale(1.02) rotateX(2deg);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(96, 165, 250, 0.5),
    0 20px 60px rgba(59, 130, 246, 0.3);
  background: rgba(255, 255, 255, 0.15);
}

.traits-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  animation: shimmer 3s infinite;
}

@keyframes cardGlow {
  0%,
  100% {
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.3),
      0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }
  50% {
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.3),
      0 0 40px rgba(59, 130, 246, 0.3);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.blue-shape {
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(37, 99, 235, 0.2));
  border-radius: 50% 40% 60% 30%;
  top: -50px;
  right: -50px;
  z-index: 0;
  animation: shapeFloat 8s ease-in-out infinite;
  filter: blur(20px);
  opacity: 0.6;
}

@keyframes shapeFloat {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
    border-radius: 50% 40% 60% 30%;
  }
  25% {
    transform: translate(-20px, 20px) rotate(90deg);
    border-radius: 40% 60% 30% 50%;
  }
  50% {
    transform: translate(20px, -20px) rotate(180deg);
    border-radius: 60% 30% 50% 40%;
  }
  75% {
    transform: translate(-10px, -10px) rotate(270deg);
    border-radius: 30% 50% 40% 60%;
  }
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
  border: 4px solid #6d28d9;
  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.2),
    0 0 30px rgba(96, 165, 250, 0.5),
    0 0 20px rgba(109, 40, 217, 0.5);
  position: relative;
  animation: bounce 2s ease-in-out infinite;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.traits-image::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #2563eb, #6d28d9, #2563eb);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  z-index: -1;
}

.traits-image:hover {
  transform: scale(1.1);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(109, 40, 217, 0.7),
    0 0 20px rgba(59, 130, 246, 0.4);
  border-color: #2563eb;
}

.traits-image:hover::before {
  background: linear-gradient(135deg, #6d28d9, #2563eb, #6d28d9);
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

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.traits-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.traits-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.traits-list li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #ffffff;
  font-weight: 500;
}

.traits-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.2em;
  animation: checkmarkPop 0.5s ease-out both;
  animation-delay: calc(var(--index, 0) * 0.1s);
  text-shadow: 0 0 8px rgba(59, 130, 246, 0.8);
}

.traits-list li {
  --index: 0;
}

.traits-list li:nth-child(1) {
  --index: 1;
}
.traits-list li:nth-child(2) {
  --index: 2;
}
.traits-list li:nth-child(3) {
  --index: 3;
}
.traits-list li:nth-child(4) {
  --index: 4;
}

@keyframes checkmarkPop {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.3) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(1deg);
  }
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

<script setup>
import { ArrowRight } from '@lucide/vue'
import BaseCard from '../ui/BaseCard.vue'
import { services } from '../../data/services'
import { vReveal } from '../../composables/useScrollReveal'
</script>

<template>
  <section id="services" class="section-padding scroll-mt-24 bg-slate-50/60 dark:bg-white/[0.02]">
    <div class="container-lumina">
      <div class="mx-auto max-w-2xl text-center">
        <div v-reveal class="eyebrow mx-auto">What we do</div>
        <h2 v-reveal="80" class="heading-lg mt-6">
          Everything you need to <span class="gradient-text">launch and scale</span>
        </h2>
        <p v-reveal="140" class="mt-5 text-lg text-muted">
          End-to-end services covering the full product lifecycle — from first sketch to
          post-launch growth.
        </p>
      </div>

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BaseCard
          v-for="(service, i) in services"
          :key="service.title"
          v-reveal="i * 90"
        >
          <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400">
            <component :is="service.icon" class="h-6 w-6" />
          </span>
          <h3 class="mt-5 text-lg font-semibold">{{ service.title }}</h3>
          <p class="mt-2 text-muted leading-relaxed">{{ service.description }}</p>
          <a href="#contact" class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-all hover:gap-2.5 dark:text-primary-400">
            Learn more <ArrowRight class="h-4 w-4" />
          </a>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

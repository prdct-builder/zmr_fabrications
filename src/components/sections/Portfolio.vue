<script setup>
import { ArrowUpRight } from '@lucide/vue'
import { projects } from '../../data/portfolio'
import { vReveal } from '../../composables/useScrollReveal'
</script>

<template>
  <section id="portfolio" class="section-padding scroll-mt-24 bg-slate-50/60 dark:bg-white/[0.02]">
    <div class="container-lumina">
      <div class="mx-auto max-w-2xl text-center">
        <div v-reveal class="eyebrow mx-auto">Featured work</div>
        <h2 v-reveal="80" class="heading-lg mt-6">
          Products we're <span class="gradient-text">proud to have shipped</span>
        </h2>
        <p v-reveal="140" class="mt-5 text-lg text-muted">
          A selection of recent engagements across fintech, health, retail, and enterprise SaaS.
        </p>
      </div>

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="(project, i) in projects"
          :key="project.title"
          v-reveal="i * 90"
          href="#contact"
          class="group relative block overflow-hidden rounded-2xl border border-slate-200/70 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-soft-lg dark:border-white/10"
        >
          <div class="aspect-[4/3] overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              width="800"
              height="600"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" aria-hidden="true" />

          <div class="absolute inset-x-0 bottom-0 p-6 text-white">
            <p class="text-xs font-semibold uppercase tracking-wider text-primary-300">{{ project.category }}</p>
            <h3 class="mt-1 flex items-center gap-1.5 text-lg font-semibold">
              {{ project.title }}
              <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </h3>
            <p class="mt-1 text-sm text-slate-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {{ project.description }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

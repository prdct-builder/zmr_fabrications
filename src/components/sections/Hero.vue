<script setup>
import { ArrowRight, PlayCircle, Sparkles, TrendingUp, ShieldCheck, Users } from '@lucide/vue'
import BaseButton from '../ui/BaseButton.vue'

const headlineWords = ['We', 'build', 'digital', 'products', 'people', 'love', 'to', 'use.']
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
  >
    <div class="absolute inset-0 -z-10 bg-hero-glow" aria-hidden="true" />
    <div
      class="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl animate-blob"
      aria-hidden="true"
    />
    <div
      class="absolute -right-16 top-56 -z-10 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl animate-blob"
      style="animation-delay: 2s"
      aria-hidden="true"
    />

    <div class="container-lumina grid items-center gap-16 lg:grid-cols-2">
      <div>
        <div class="animate-fade-in-down eyebrow">
          <Sparkles class="h-4 w-4" />
          Digital Growth Partners
        </div>

        <h1 class="heading-xl mt-6">
          <span
            v-for="(word, i) in headlineWords"
            :key="i"
            class="mr-3 inline-block animate-fade-in-up opacity-0"
            :class="i >= 4 && 'gradient-text'"
            :style="{ animationDelay: `${150 + i * 90}ms` }"
          >
            {{ word }}
          </span>
        </h1>

        <p
          class="mt-6 max-w-xl animate-fade-in-up text-lg text-muted opacity-0"
          style="animation-delay: 950ms"
        >
          Lumina partners with ambitious companies to design, build, and scale premium digital
          products — blending strategy, design, and engineering into one seamless team.
        </p>

        <div
          class="mt-10 flex animate-fade-in-up flex-col gap-4 opacity-0 sm:flex-row sm:items-center"
          style="animation-delay: 1050ms"
        >
          <BaseButton href="#contact" size="lg">
            Start a project
            <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </BaseButton>
          <BaseButton href="#portfolio" variant="secondary" size="lg">
            <PlayCircle class="h-5 w-5" />
            View our work
          </BaseButton>
        </div>

        <dl
          class="mt-14 grid animate-fade-in-up grid-cols-3 gap-6 border-t border-slate-200 pt-8 opacity-0 dark:border-white/10"
          style="animation-delay: 1150ms"
        >
          <div>
            <dt class="text-xs uppercase tracking-wide text-slate-400">Delivered</dt>
            <dd class="mt-1 font-display text-2xl font-bold">180+</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-slate-400">Satisfaction</dt>
            <dd class="mt-1 font-display text-2xl font-bold">98%</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-slate-400">Experience</dt>
            <dd class="mt-1 font-display text-2xl font-bold">12 yrs</dd>
          </div>
        </dl>
      </div>

      <div class="relative animate-scale-in opacity-0" style="animation-delay: 500ms">
        <div class="relative mx-auto max-w-md rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-soft-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-fuchsia-500 text-white">
                <TrendingUp class="h-5 w-5" />
              </span>
              <div>
                <p class="text-sm font-semibold">Growth Overview</p>
                <p class="text-xs text-muted">Last 30 days</p>
              </div>
            </div>
            <span class="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400">+24.6%</span>
          </div>

          <div class="mt-6 flex h-32 items-end gap-2">
            <div
              v-for="(h, i) in [40, 65, 45, 80, 55, 95, 70]"
              :key="i"
              class="flex-1 rounded-t-md bg-gradient-to-t from-primary-500 to-fuchsia-400 opacity-80 transition-all duration-700"
              :style="{ height: h + '%' }"
            />
          </div>

          <div class="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 p-4 dark:bg-white/5">
            <div class="flex items-center gap-2">
              <Users class="h-4 w-4 text-primary-600 dark:text-primary-400" />
              <span class="text-sm font-medium">Active users</span>
            </div>
            <span class="font-display text-lg font-bold">24,891</span>
          </div>
        </div>

        <div class="absolute -bottom-6 -left-6 flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-soft-lg animate-float dark:border-white/10 dark:bg-slate-900">
          <ShieldCheck class="h-5 w-5 text-primary-600 dark:text-primary-400" />
          <span class="text-sm font-semibold">Enterprise ready</span>
        </div>
      </div>
    </div>
  </section>
</template>

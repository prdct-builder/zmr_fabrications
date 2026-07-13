<script setup>
import { CheckCircle2 } from '@lucide/vue'
import { vReveal } from '../../composables/useScrollReveal'

const points = [
  'Multidisciplinary team of designers, engineers, and strategists',
  'Proven process refined across 180+ product launches',
  'Transparent pricing with no hidden retainers or surprises',
  'Long-term partnership, not a one-off handoff'
]
</script>

<template>
  <section id="about" class="section-padding scroll-mt-24">
    <div class="container-lumina grid items-center gap-16 lg:grid-cols-2">
      <div v-reveal class="relative order-2 lg:order-1">
        <div class="overflow-hidden rounded-3xl border border-slate-200/70 shadow-soft-lg dark:border-white/10">
          <img
            src="https://picsum.photos/seed/lumina-team/900/700"
            alt="The Lumina team collaborating in a studio session"
            loading="lazy"
            width="900"
            height="700"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="absolute -bottom-8 -right-6 hidden max-w-[220px] rounded-2xl border border-slate-200/70 bg-white p-5 shadow-soft-lg dark:border-white/10 dark:bg-slate-900 sm:block">
          <p class="font-display text-3xl font-bold gradient-text">12+</p>
          <p class="mt-1 text-sm text-muted">years crafting premium digital products</p>
        </div>
      </div>

      <div class="order-1 lg:order-2">
        <div v-reveal class="eyebrow">About Lumina</div>
        <h2 v-reveal="80" class="heading-lg mt-6">
          A partner invested in your <span class="gradient-text">long-term success</span>
        </h2>
        <p v-reveal="140" class="mt-6 text-lg text-muted leading-relaxed">
          Founded in 2014, Lumina has grown from a two-person design studio into a full-service
          digital partner trusted by startups and enterprises alike. We believe great products
          are built at the intersection of thoughtful design, solid engineering, and a deep
          understanding of the business behind them.
        </p>

        <ul class="mt-8 space-y-4">
          <li
            v-for="(point, i) in points"
            :key="point"
            v-reveal="200 + i * 80"
            class="flex items-start gap-3"
          >
            <CheckCircle2 class="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400" />
            <span class="text-slate-700 dark:text-slate-300">{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

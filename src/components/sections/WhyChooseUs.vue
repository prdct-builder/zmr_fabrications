<script setup>
import { reasons } from '../../data/whyChooseUs'
import { vReveal } from '../../composables/useScrollReveal'
</script>

<template>
  <section id="why-us" class="section-padding scroll-mt-24">
    <div class="container-lumina grid items-center gap-16 lg:grid-cols-2">
      <div>
        <div v-reveal class="eyebrow">Why choose us</div>
        <h2 v-reveal="80" class="heading-lg mt-6">
          Built for teams who refuse to <span class="gradient-text">ship average</span>
        </h2>
        <p v-reveal="140" class="mt-6 text-lg text-muted leading-relaxed">
          We combine the craft of a boutique studio with the discipline of an enterprise
          partner — so you get thoughtful, high-quality work delivered on time, every time.
        </p>

        <div class="mt-10 grid gap-6 sm:grid-cols-2">
          <div
            v-for="(reason, i) in reasons"
            :key="reason.title"
            v-reveal="200 + i * 90"
            class="rounded-2xl border border-slate-200/70 p-5 transition-colors hover:border-primary-300 dark:border-white/10 dark:hover:border-primary-400/30"
          >
            <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400">
              <component :is="reason.icon" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-semibold">{{ reason.title }}</h3>
            <p class="mt-1.5 text-sm text-muted leading-relaxed">{{ reason.description }}</p>
          </div>
        </div>
      </div>

      <div v-reveal="{ type: 'scale' }" class="relative">
        <div class="overflow-hidden rounded-3xl border border-slate-200/70 shadow-soft-lg dark:border-white/10">
          <img
            src="https://picsum.photos/seed/lumina-workshop/900/1000"
            alt="Lumina strategists reviewing a product roadmap"
            loading="lazy"
            width="900"
            height="1000"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

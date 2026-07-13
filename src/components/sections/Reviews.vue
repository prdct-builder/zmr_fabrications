<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight, Quote, Star } from '@lucide/vue'
import { testimonials, reviewsContent } from '../../data/testimonials'
import { vReveal } from '../../composables/useScrollReveal'

const active = ref(0)
let timer = null

function next() {
  active.value = (active.value + 1) % testimonials.length
}

function prev() {
  active.value = (active.value - 1 + testimonials.length) % testimonials.length
}

function goTo(i) {
  active.value = i
  restart()
}

function restart() {
  clearInterval(timer)
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduced) {
    timer = setInterval(next, 6000)
  }
}

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

onMounted(restart)
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section id="testimonials" class="section-padding scroll-mt-24">
    <div class="container-zmr">
      <div class="mx-auto max-w-2xl text-center">
        <div v-reveal class="eyebrow mx-auto">{{ reviewsContent.eyebrow }}</div>
        <h2 v-reveal="80" class="heading-lg mt-6">
          {{ reviewsContent.headingBefore }}<span class="gradient-text">{{ reviewsContent.headingHighlight }}</span>{{ reviewsContent.headingAfter }}
        </h2>
      </div>

      <div v-reveal="140" class="relative mx-auto mt-14 max-w-3xl">
        <Quote class="mx-auto h-10 w-10 text-primary-200 dark:text-primary-400/20" />

        <div class="relative mt-4 min-h-[300px] sm:min-h-[260px]">
          <TransitionGroup
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0 translate-x-6"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition duration-300 ease-in absolute inset-0"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-6"
          >
            <div v-for="(t, i) in [testimonials[active]]" :key="active" class="text-center">
              <div class="flex items-center justify-center gap-1 text-amber-400">
                <Star
                  v-for="n in 5"
                  :key="n"
                  class="h-4 w-4"
                  :class="n <= t.rating ? 'fill-current' : 'fill-none text-slate-300 dark:text-slate-700'"
                />
              </div>
              <p class="mt-4 font-display text-lg font-semibold">{{ t.headline }}</p>
              <p class="mt-3 text-xl font-medium leading-relaxed text-slate-800 dark:text-slate-100 sm:text-2xl">
                &ldquo;{{ t.quote }}&rdquo;
              </p>
              <div class="mt-6 flex items-center justify-center gap-3">
                <span class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-steel-800 to-primary-600 font-display text-sm font-bold text-white">
                  {{ initials(t.name) }}
                </span>
                <div class="text-left">
                  <p class="font-semibold">{{ t.name }}</p>
                  <p class="text-sm text-muted">{{ t.date }}</p>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>

        <div class="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous review"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:border-primary-300 hover:text-primary-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-primary-400/40"
            @click="prev(); restart()"
          >
            <ChevronLeft class="h-5 w-5" />
          </button>

          <div class="flex items-center gap-2">
            <button
              v-for="(t, i) in testimonials"
              :key="t.name"
              type="button"
              :aria-label="`Go to review ${i + 1}`"
              class="h-2 rounded-full transition-all duration-300"
              :class="i === active ? 'w-6 bg-primary-600 dark:bg-primary-400' : 'w-2 bg-slate-300 dark:bg-slate-700'"
              @click="goTo(i)"
            />
          </div>

          <button
            type="button"
            aria-label="Next review"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:border-primary-300 hover:text-primary-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-primary-400/40"
            @click="next(); restart()"
          >
            <ChevronRight class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight, Quote, Star } from '@lucide/vue'
import { testimonials } from '../../data/testimonials'
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

onMounted(restart)
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section id="testimonials" class="section-padding scroll-mt-24">
    <div class="container-lumina">
      <div class="mx-auto max-w-2xl text-center">
        <div v-reveal class="eyebrow mx-auto">Testimonials</div>
        <h2 v-reveal="80" class="heading-lg mt-6">
          Loved by <span class="gradient-text">product teams</span> everywhere
        </h2>
      </div>

      <div v-reveal="140" class="relative mx-auto mt-14 max-w-3xl">
        <Quote class="mx-auto h-10 w-10 text-primary-200 dark:text-primary-400/20" />

        <div class="relative mt-4 min-h-[280px] sm:min-h-[240px]">
          <TransitionGroup
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0 translate-x-6"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition duration-300 ease-in absolute inset-0"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-6"
          >
            <div v-for="(t, i) in [testimonials[active]]" :key="active" class="text-center">
              <p class="text-xl font-medium leading-relaxed text-slate-800 dark:text-slate-100 sm:text-2xl">
                &ldquo;{{ t.quote }}&rdquo;
              </p>
              <div class="mt-6 flex items-center justify-center gap-1 text-amber-400">
                <Star v-for="n in 5" :key="n" class="h-4 w-4 fill-current" />
              </div>
              <div class="mt-4 flex items-center justify-center gap-3">
                <img
                  :src="t.avatar"
                  :alt="t.name"
                  loading="lazy"
                  width="48"
                  height="48"
                  class="h-12 w-12 rounded-full object-cover ring-2 ring-primary-100 dark:ring-primary-400/20"
                />
                <div class="text-left">
                  <p class="font-semibold">{{ t.name }}</p>
                  <p class="text-sm text-muted">{{ t.role }}</p>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>

        <div class="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous testimonial"
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
              :aria-label="`Go to testimonial ${i + 1}`"
              class="h-2 rounded-full transition-all duration-300"
              :class="i === active ? 'w-6 bg-primary-600 dark:bg-primary-400' : 'w-2 bg-slate-300 dark:bg-slate-700'"
              @click="goTo(i)"
            />
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
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

<script setup>
import { Phone, MapPin, Clock } from '@lucide/vue'
import { site, footerColumns } from '../../data/site'
import { useDarkMode } from '../../composables/useDarkMode'

const year = new Date().getFullYear()
const columns = footerColumns
const { isDark } = useDarkMode()
</script>

<template>
  <footer class="relative overflow-hidden border-t border-slate-200/70 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
    <div class="container-zmr section-padding !py-16 grid gap-12 lg:grid-cols-[1.4fr_2fr]">
      <div>
        <a href="#home" class="inline-flex items-center rounded-xl">
          <img :src="isDark ? site.dark_logo : site.light_logo" :alt="site.name" class="h-24 w-auto" />
        </a>
        <p class="mt-4 max-w-sm text-muted leading-relaxed">
          {{ site.tagline }}
        </p>
        <ul class="mt-6 space-y-3 text-sm text-muted">
          <li class="flex items-center gap-2">
            <Phone class="h-4 w-4 text-primary-600 dark:text-primary-400" />
            {{ site.phones.map((p) => p.display).join(', ') }}
          </li>
          <li class="flex items-start gap-2">
            <MapPin class="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400" />
            {{ site.address }}
          </li>
          <li class="flex items-center gap-2">
            <Clock class="h-4 w-4 text-primary-600 dark:text-primary-400" /> {{ site.hours }}
          </li>
        </ul>
      </div>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div v-for="col in columns" :key="col.title">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {{ col.title }}
          </h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in col.links" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-muted transition-colors hover:text-primary-600 dark:hover:text-primary-400"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-200/70 dark:border-white/10">
      <div class="container-zmr flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted sm:flex-row">
        <p>&copy; {{ year }} {{ site.name }}. All rights reserved.</p>
        <p>{{ site.addressShort }}</p>
      </div>
    </div>
  </footer>
</template>

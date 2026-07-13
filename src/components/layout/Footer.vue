<script setup>
import { Sparkles, Mail, Phone, MapPin } from '@lucide/vue'
import SocialIcon from '../ui/SocialIcon.vue'

const year = new Date().getFullYear()

const socials = [
  { name: 'twitter', href: '#', label: 'Twitter / X' },
  { name: 'linkedin', href: '#', label: 'LinkedIn' },
  { name: 'github', href: '#', label: 'GitHub' },
  { name: 'instagram', href: '#', label: 'Instagram' }
]

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Our Work', href: '#portfolio' },
      { label: 'Careers', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' }
    ]
  }
]
</script>

<template>
  <footer class="relative overflow-hidden border-t border-slate-200/70 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
    <div class="container-lumina section-padding !py-16 grid gap-12 lg:grid-cols-[1.4fr_2fr]">
      <div>
        <a href="#top" class="flex items-center gap-2 font-display text-lg font-bold">
          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-fuchsia-500 text-white shadow-glow">
            <Sparkles class="h-5 w-5" />
          </span>
          <span>Lumina</span>
        </a>
        <p class="mt-4 max-w-sm text-muted leading-relaxed">
          We design, build, and scale premium digital products for ambitious companies — from
          strategy and design to engineering and growth.
        </p>
        <ul class="mt-6 space-y-3 text-sm text-muted">
          <li class="flex items-center gap-2">
            <Mail class="h-4 w-4 text-primary-600 dark:text-primary-400" /> hello@lumina.studio
          </li>
          <li class="flex items-center gap-2">
            <Phone class="h-4 w-4 text-primary-600 dark:text-primary-400" /> +1 (415) 555-0182
          </li>
          <li class="flex items-center gap-2">
            <MapPin class="h-4 w-4 text-primary-600 dark:text-primary-400" /> 548 Market St, San
            Francisco, CA
          </li>
        </ul>
        <div class="mt-6 flex items-center gap-3">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.href"
            :aria-label="social.label"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-primary-400/40 dark:hover:text-primary-400"
          >
            <SocialIcon :name="social.name" class="h-4 w-4" />
          </a>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-8 sm:grid-cols-3">
        <div v-for="col in columns" :key="col.title">
          <h3 class="font-display text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
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
      <div class="container-lumina flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted sm:flex-row">
        <p>&copy; {{ year }} Lumina Studio. All rights reserved.</p>
        <p>Designed &amp; built with care.</p>
      </div>
    </div>
  </footer>
</template>

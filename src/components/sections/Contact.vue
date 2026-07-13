<script setup>
import { reactive, ref } from 'vue'
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from '@lucide/vue'
import BaseButton from '../ui/BaseButton.vue'
import SocialIcon from '../ui/SocialIcon.vue'
import { vReveal } from '../../composables/useScrollReveal'

const form = reactive({ name: '', email: '', company: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const status = ref('idle') // idle | submitting | success

const socials = [
  { name: 'twitter', href: '#', label: 'Twitter / X' },
  { name: 'linkedin', href: '#', label: 'LinkedIn' },
  { name: 'github', href: '#', label: 'GitHub' },
  { name: 'instagram', href: '#', label: 'Instagram' }
]

function validate() {
  errors.name = form.name.trim().length < 2 ? 'Please enter your full name.' : ''
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Please enter a valid email address.'
  errors.message = form.message.trim().length < 10 ? 'Tell us a bit more (10+ characters).' : ''
  return !errors.name && !errors.email && !errors.message
}

async function handleSubmit() {
  if (!validate()) return
  status.value = 'submitting'
  await new Promise((resolve) => setTimeout(resolve, 1200))
  status.value = 'success'
  form.name = form.email = form.company = form.message = ''
}
</script>

<template>
  <section id="contact" class="section-padding scroll-mt-24">
    <div class="container-lumina">
      <div class="mx-auto max-w-2xl text-center">
        <div v-reveal class="eyebrow mx-auto">Get in touch</div>
        <h2 v-reveal="80" class="heading-lg mt-6">
          Let's build something <span class="gradient-text">exceptional together</span>
        </h2>
        <p v-reveal="140" class="mt-5 text-lg text-muted">
          Tell us about your project and we'll get back to you within one business day.
        </p>
      </div>

      <div class="mt-16 grid gap-10 lg:grid-cols-5">
        <div v-reveal="180" class="card-surface p-8 lg:col-span-3">
          <form v-if="status !== 'success'" novalidate @submit.prevent="handleSubmit">
            <div class="grid gap-6 sm:grid-cols-2">
              <div>
                <label for="name" class="mb-2 block text-sm font-medium">Full name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  autocomplete="name"
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 dark:border-white/10 dark:bg-white/5"
                  :aria-invalid="!!errors.name"
                  placeholder="Jane Doe"
                />
                <p v-if="errors.name" class="mt-1.5 text-sm text-rose-500">{{ errors.name }}</p>
              </div>

              <div>
                <label for="email" class="mb-2 block text-sm font-medium">Email address</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 dark:border-white/10 dark:bg-white/5"
                  :aria-invalid="!!errors.email"
                  placeholder="jane@company.com"
                />
                <p v-if="errors.email" class="mt-1.5 text-sm text-rose-500">{{ errors.email }}</p>
              </div>
            </div>

            <div class="mt-6">
              <label for="company" class="mb-2 block text-sm font-medium">Company <span class="text-muted font-normal">(optional)</span></label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                autocomplete="organization"
                class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 dark:border-white/10 dark:bg-white/5"
                placeholder="Acme Inc."
              />
            </div>

            <div class="mt-6">
              <label for="message" class="mb-2 block text-sm font-medium">Project details</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                class="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 dark:border-white/10 dark:bg-white/5"
                :aria-invalid="!!errors.message"
                placeholder="Tell us about your project, timeline, and budget..."
              />
              <p v-if="errors.message" class="mt-1.5 text-sm text-rose-500">{{ errors.message }}</p>
            </div>

            <BaseButton type="submit" class="mt-8 w-full" size="lg" :disabled="status === 'submitting'">
              <Loader2 v-if="status === 'submitting'" class="h-5 w-5 animate-spin" />
              {{ status === 'submitting' ? 'Sending...' : 'Send message' }}
            </BaseButton>
          </form>

          <div v-else class="flex flex-col items-center justify-center py-12 text-center animate-scale-in">
            <span class="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
              <CheckCircle2 class="h-8 w-8" />
            </span>
            <h3 class="mt-5 text-xl font-semibold">Message sent!</h3>
            <p class="mt-2 max-w-sm text-muted">
              Thanks for reaching out — a member of our team will get back to you within one
              business day.
            </p>
            <BaseButton variant="secondary" class="mt-6" @click="status = 'idle'">
              Send another message
            </BaseButton>
          </div>
        </div>

        <div v-reveal="240" class="flex flex-col gap-6 lg:col-span-2">
          <div class="card-surface p-6">
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Mail class="mt-0.5 h-5 w-5 text-primary-600 dark:text-primary-400" />
                <div>
                  <p class="text-sm font-semibold">Email</p>
                  <p class="text-sm text-muted">hello@lumina.studio</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Phone class="mt-0.5 h-5 w-5 text-primary-600 dark:text-primary-400" />
                <div>
                  <p class="text-sm font-semibold">Phone</p>
                  <p class="text-sm text-muted">+1 (415) 555-0182</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <MapPin class="mt-0.5 h-5 w-5 text-primary-600 dark:text-primary-400" />
                <div>
                  <p class="text-sm font-semibold">Studio</p>
                  <p class="text-sm text-muted">548 Market St, San Francisco, CA 94104</p>
                </div>
              </li>
            </ul>

            <div class="mt-6 flex items-center gap-3 border-t border-slate-200/70 pt-6 dark:border-white/10">
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

          <div class="card-surface overflow-hidden p-0">
            <iframe
              title="Lumina studio location"
              src="https://www.google.com/maps?q=548+Market+St+San+Francisco+CA&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="h-64 w-full grayscale-[0.2] dark:invert dark:hue-rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

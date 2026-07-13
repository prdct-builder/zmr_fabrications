<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import ScrollProgress from './components/layout/ScrollProgress.vue'
import BackToTop from './components/layout/BackToTop.vue'

import Hero from './components/sections/Hero.vue'
import About from './components/sections/About.vue'
import Services from './components/sections/Services.vue'
import WhyChooseUs from './components/sections/WhyChooseUs.vue'
import Stats from './components/sections/Stats.vue'
import Portfolio from './components/sections/Portfolio.vue'
import Testimonials from './components/sections/Testimonials.vue'
import FAQ from './components/sections/FAQ.vue'
import Contact from './components/sections/Contact.vue'
</script>

<template>
  <ScrollProgress />
  <Navbar />
  <main>
    <Hero />
    <About />
    <Services />
    <WhyChooseUs />
    <Stats />
    <Portfolio />
    <Testimonials />
    <FAQ />
    <Contact />
  </main>
  <Footer />
  <BackToTop />
</template>

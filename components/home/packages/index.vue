<script setup lang="ts">
import { ref } from 'vue'

const steps = [
  {
    name: 'Source Packages',
    icon: resolveComponent('icon-rectangle-code'),
    content: resolveComponent('home-packages-one'),
  },
  {
    name: 'Data Packages',
    icon: resolveComponent('icon-database'),
    content: resolveComponent('home-packages-two'),
  },
]
const activeTab = ref(0)
</script>

<template>
  <div class="relative mx-auto mt-36 max-w-7xl px-4">
    <div class="max-w-3xl">
      <div class="h-24 w-24">
        <div class="aspect-w-1 aspect-h-1 text-sky-600"><icon-packages /></div>
      </div>
      <h2 class="font-semibold text-sky-500">A journey ahead of you</h2>
      <p class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Not ready to embrace Unlocked Packages? Don't worry, we got your back, and more...</p>
      <div class="prose mt-6 leading-normal text-slate-700 dark:text-slate-300">
        <p>A "Well Architected" Saleforce org enables your business to adapt to change and release new capabilities faster. The end goal, where feasible is to embrace unlocked packages.</p>
        <p>However some times, they may seem overwhelming; they may not be the right fit or they lack some capabilities like the support for data-driven packages like Revenue Cloud.</p>
        <p>We faced the same challenges and developed capabilities we think you'll appreciate.</p>
      </div>
      <div class="mt-8 flex flex-row space-x-16 overflow-auto pl-2">
        <a @click="activeTab = index" v-for="(step, index) in steps" class="group w-16 focus:outline-none" :class="[activeTab === index ? 'text-sky-400 dark:text-sky-500' : 'text-slate-300 hover:text-slate-600 dark:text-slate-700 dark:hover:text-slate-400']" :key="step">
          <div class="flex h-full flex-col items-center justify-between text-center">
            <div class="h-8">
              <component :is="step.icon" :class="{ active: activeTab === index }" />
            </div>
            <div class="mt-2 text-sm font-semibold">{{ step.name }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="relative overflow-hidden">
    <textured-section>
      <component :is="steps[activeTab].content" />
    </textured-section>
  </div>
</template>

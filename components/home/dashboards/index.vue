<script setup>
import { ref } from 'vue'

const steps = [
  {
    name: 'Metrics',
    icon: resolveComponent('icon-file-lines'),
    content: resolveComponent('home-dashboards-one'),
  },
  {
    name: 'Dashboards',
    icon: resolveComponent('icon-chart-column'),
    content: resolveComponent('home-dashboards-two'),
  },
]
const activeTab = ref(0)
</script>

<template>
  <div class="relative mx-auto mt-36 max-w-7xl px-4">
    <div class="max-w-3xl">
      <div class="h-24 w-24">
        <div class="aspect-w-1 aspect-h-1 text-sky-600"><icon-statistics /></div>
      </div>
      <h2 class="font-semibold text-sky-500">Build, measure, assess, rince and repeat</h2>
      <p class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">You can only improve what you measure.</p>
      <div class="prose mt-6 leading-normal text-slate-700 dark:text-slate-300">
        <p>Metrics should be a key part of any development process. That's the reason why DX@Scale is instrumented.</p>
      </div>
      <div class="mt-8 flex flex-row space-x-16 overflow-auto pl-2 text-center">
        <a @click="activeTab = index" v-for="(step, index) in steps" class="group w-16 focus:outline-none" :class="[activeTab === index ? 'text-sky-400 dark:text-sky-500' : 'text-slate-300 hover:text-slate-600 dark:text-slate-700 dark:hover:text-slate-400']" :key="step">
          <div class="flex h-full flex-col items-center justify-between">
            <div class="h-8">
              <component :is="step.icon" :class="{ active: activeTab === index }" />
            </div>
            <div class="mt-2 text-sm font-semibold">{{ step.name }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="relative overflow-hidden pb-12">
    <textured-section>
      <component :is="steps[activeTab].content" />
    </textured-section>
  </div>
</template>

<template>
  <div class="relative mx-auto mt-36 max-w-7xl px-4">
    <div class="max-w-3xl">
      <div class="h-24 w-24">
        <div class="aspect-w-1 aspect-h-1 text-sky-600"><icon-launch /></div>
      </div>
      <h2 class="mt-6 font-semibold text-sky-500">Streamline your CI/CD</h2>
      <p class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Meet our declarative orchestrator.</p>
      <div class="prose mt-6 leading-normal text-slate-700 dark:text-slate-300">
        <p>
          Don't waste time with custom CI/CD scripts anymore, our declarative orchestrator uses your
          <span class="font-mono">sfdx-project.json</span>
          to build and deploy everything auto-magically.
        </p>
        <p>And it is compatible with all major CI/CD platforms.</p>
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
  <div class="relative overflow-hidden">
    <textured-section>
      <component :is="steps[activeTab].content" />
    </textured-section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const steps = [
  {
    name: 'test',
    icon: resolveComponent('icon-timeline-arrow'),
    content: resolveComponent('home-orchestrator-test'),
  },
  {
    name: 'Capabilities',
    icon: resolveComponent('icon-timeline-arrow'),
    content: resolveComponent('home-pools-one'),
  },
  {
    name: 'Platforms',
    icon: resolveComponent('icon-code-pull-request'),
    content: resolveComponent('home-pools-two'),
  },
]
const activeTab = ref(0)
</script>

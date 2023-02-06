<template>
  <div class="relative mx-auto mt-36 max-w-7xl px-4">
    <div class="max-w-3xl">
      <div class="h-24 w-24">
        <div class="aspect-w-1 aspect-h-1 text-sky-600"><icon-launch /></div>
      </div>
      <h2 class="font-semibold text-sky-500">Stop fiddling with custom CI/CD scripts</h2>
      <p class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Meet our declarative orchestrator.</p>
      <div class="prose mt-6 leading-normal text-slate-700 dark:text-slate-300">
        <p>
          As you modularise your application, you would need to update regularly your CI/CD scripts. We know it, we faced the same issue! That's the reason we have created the
          <span class="text-sky-600 dark:text-sky-400">Orchestrator</span>
          .
        </p>
        <p>Just modularise your solution, the orchestrator will auto-magically take care of the rest for you.</p>
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
  <div class="relative overflow-hidden pb-20">
    <textured-section>
      <component :is="steps[activeTab].content" />
    </textured-section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const steps = [
  {
    name: 'Declarative',
    icon: resolveComponent('icon-gears'),
    content: resolveComponent('home-orchestrator-one'),
  },
  {
    name: 'Optimised',
    icon: resolveComponent('icon-rabbit-running'),
    content: resolveComponent('home-orchestrator-two'),
  },
]
const activeTab = ref(0)
</script>

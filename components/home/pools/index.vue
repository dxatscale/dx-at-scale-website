<script setup lang="ts">
import { ref } from 'vue'

const steps = [
  {
    name: 'For the developers',
    icon: resolveComponent('icon-developer'),
    content: resolveComponent('home-pools-one'),
  },
  {
    name: 'For your CI/CD',
    icon: resolveComponent('icon-infinity'),
    content: resolveComponent('home-pools-two'),
  },
]
const activeTab = ref(0)
</script>

<template>
  <div class="relative mx-auto mt-36 max-w-7xl px-4">
    <div class="max-w-3xl">
      <div class="h-24 w-24">
        <div class="aspect-w-1 aspect-h-1 text-sky-600"><icon-speed /></div>
      </div>
      <h2 class="mt-6 font-semibold text-sky-500">Speed up your workflow</h2>
      <p class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Provision scratch orgs in seconds not hours.</p>
      <div class="prose mt-6 leading-normal text-slate-700 dark:text-slate-300">
        <p>As you automate more of your business processes in Salesforce, you cannot avoid adding third party managed packages as a dependency to your configuration metadata and code in your repository.</p>
        <p>The time required to spin up a new CI or a developer environment increases, diminishing the value of using scratch orgs. We have seen teams avoiding scratch orgs for that.</p>
        <p>
          We think scratch orgs are amazing, and we solved this problem with
          <span class="text-sky-500">Scratch Org pools.</span>
        </p>
        <p>Pools are created of the back of your version control system, meaning extra time saved...</p>
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

<template>
  <section class="mt-36" id="steps">
    <div class="relative mx-auto max-w-7xl px-4">
      <div class="max-w-3xl">
        <div class="h-24 w-24">
          <div class="aspect-w-1 aspect-h-1 text-sky-600"><icon-steps /></div>
        </div>
        <h2 class="font-semibold text-sky-500">Not just another tool</h2>
        <p class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">DX@Scale is about simplifying your Salesforce development experience.</p>
        <div class="prose mt-6 leading-normal text-slate-700 dark:text-slate-300">
          <p>DX@Scale is not just another tool. We advocate for sane enginering practices applied to Salesforce, and we have built and open source all the tools to support them.</p>
        </div>
        <div class="mt-8 flex flex-row space-x-16 overflow-auto pl-2">
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
    <div class="relative overflow-hidden pb-16">
      <textured-section>
        <component :is="steps[activeTab].content" />
      </textured-section>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const steps = [
  {
    name: 'Modularise',
    icon: resolveComponent('icon-modularise'),
    content: resolveComponent('home-steps-one'),
  },
  {
    name: 'Build',
    icon: resolveComponent('icon-build'),
    content: resolveComponent('home-steps-two'),
  },
  {
    name: 'Launch',
    icon: resolveComponent('icon-rocket-launch'),
    content: resolveComponent('home-steps-three'),
  },
]
const activeTab = ref(1)
</script>

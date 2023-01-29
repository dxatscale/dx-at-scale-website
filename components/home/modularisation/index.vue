<template>
  <section id="modularisation" class="mt-36">
    <div class="relative mx-auto mt-36 max-w-7xl px-4">
      <div class="max-w-3xl">
        <div class="h-16 w-16">
          <div class="aspect-w-1 aspect-h-1 text-sky-600"><icon-modules /></div>
        </div>
        <h2 class="mt-3 font-semibold text-sky-500">Not just another tool</h2>
        <p class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">DX@Scale is about simplifying your Salesforce development experience.</p>
        <div class="prose mt-6 leading-7 text-slate-700 dark:text-slate-300">
          <p>DX@Scale is a collection of practices, open-source tools, frameworks, and practitioners built on 'collective' experience in delivering large and complex Salesforce programs. Using these "curated" practices, you can build a modular Salesforce Org that is reliable and easy to maintain.</p>
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
    <div class="relative">
      <textured-section>
        <component :is="steps[activeTab].content" />
      </textured-section>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    name: 'Before',
    icon: resolveComponent('icon-happy-soup'),
    content: resolveComponent('home-modularisation-one'),
  },
  {
    name: 'After',
    icon: resolveComponent('icon-food-container'),
    content: resolveComponent('home-modularisation-two'),
  },
]
const activeTab = ref(1)
</script>

<template>
  <section id="modularisation" class="bg-lime-50">
    <div class="bg-lime-100">test</div>
  </section>
  <section class="mt-36">
    <div class="container mx-auto max-w-7xl px-4">
      <div>
        <h2 class="font-semibold text-sky-500">The business benefits of modularisation</h2>
        <p class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">What is modularisation? Why should you care?</p>
      </div>
      <div class="prose mt-6 h-full leading-normal text-slate-700 prose-a:text-sky-500 prose-a:no-underline hover:prose-a:text-amber-500 dark:text-slate-300">
        <p>Breaking your Salesforce implementation into components or modules can ultimately lead to a more streamlined development process, faster time to market, and a more flexible and adaptable platform for the business.</p>
      </div>
    </div>
    <textured-section class="mt-12 bg-slate-100 py-12 dark:bg-slate-900">
      <div class="container mx-auto max-w-7xl px-4">
        <dl class="grid grid-cols-1 gap-16 text-left lg:grid lg:grid-cols-2">
          <div v-for="feature in features" :key="feature.name">
            <dt>
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white">
                <component :is="feature.icon" class="h-8 w-8" aria-hidden="true" />
              </div>
              <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-700 dark:text-slate-300">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </textured-section>
  </section>
</template>

<script setup>
import { StarIcon, CubeTransparentIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Increased Efficiency',
    description: 'By breaking up a your Salesforce Org into smaller, independent modules, developers can work on specific project parts simultaneously, speeding up the overall development process.',
    icon: StarIcon,
  },
  {
    name: 'Better Maintainability',
    description: 'Because your modules are smaller and independent it is easier to identify and fix bugs or issues that may arise. Additionally, it is easier to update or refactor individual parts without affecting the entire codebase.',
    icon: Cog6ToothIcon,
  },
]
</script>

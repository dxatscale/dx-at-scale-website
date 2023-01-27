<template>
  <div class="mx-auto mt-12 max-w-7xl md:grid md:grid-cols-12 lg:min-h-[580px] lg:gap-8">
    <div class="col-span-12 px-4 py-16 lg:col-span-5">
      <dl class="grid grid-cols-1 gap-16 text-left">
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

      <a class="group mt-6 inline-flex max-w-fit items-center rounded-full bg-slate-300/50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-400/50 dark:bg-slate-600/50 dark:text-slate-200 dark:hover:bg-slate-500/50" href="https://docs.dxatscale.io/sfpowerscripts/prepare" target="_blank">
        Learn more
        <chevron-right class="ml-2 h-5 w-5" />
      </a>
    </div>
    <div class="relative col-span-12 lg:col-span-7">
      <div class="lg:absolute lg:inset-0 lg:-mt-12 lg:overflow-hidden">
        <img class="h-full w-full object-cover lg:rounded-xl" src="~/assets/img/pools/cicd.webp" />
      </div>
    </div>
  </div>
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

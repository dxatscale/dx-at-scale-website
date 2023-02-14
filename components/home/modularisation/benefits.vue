<template>
  <div class="mx-auto mt-12 max-w-7xl md:grid md:grid-cols-12 lg:min-h-[580px] lg:gap-8">
    <div class="col-span-12 px-4 py-16 lg:col-span-5">
      <dl class="grid grid-cols-1 gap-16 text-left sm:grid-cols-2 lg:grid-cols-1">
        <div v-for="feature in features" :key="feature.name">
          <dt>
            <p class="mt-2 text-lg font-semibold leading-8 tracking-tight text-slate-700 dark:text-slate-300">{{ feature.name }}</p>
          </dt>
          <dd class="text-base leading-7 text-slate-600 dark:text-slate-400">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
    <div class="relative col-span-12 lg:col-span-7">
      <div class="lg:absolute lg:inset-0 lg:-mt-8 lg:w-[960px]">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    name: 'Increased Efficiency',
    description: 'By breaking up a your Salesforce Org into smaller, independent modules, developers can work on specific project parts simultaneously, speeding up the overall development process.',
  },
  {
    name: 'Better Maintainability',
    description: 'Because your modules are smaller and independent it is easier to identify and fix bugs or issues that may arise. Additionally, it is easier to update or refactor individual parts without affecting the entire codebase.',
  },
]
</script>

<template>
  <section class="mt-36">
    <div class="relative mx-auto max-w-7xl px-4">
      <div class="">
        <div class="h-16 w-16 text-sky-600"><icon-award /></div>
        <h2 class="mt-6 font-semibold text-sky-500">Results observed in the trenches</h2>
        <p class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">What it could look like for you.</p>
      </div>
    </div>
    <textured-section class="mt-12 bg-sky-100 py-12 dark:bg-slate-900 lg:py-24">
      <div class="relative">
        <div class="mx-auto max-w-4xl px-4 md:max-w-7xl lg:grid lg:grid-flow-col-dense lg:grid-cols-2">
          <div class="prose mt-5 leading-normal text-slate-700 dark:text-slate-300 xl:col-start-1">
            <p>We use DX@Scale on a multi-year Salesforce program involving Sales Cloud, Service Cloud, Revenue Cloud and several integrations with Front-End and Back-End Systems. This is what we have observed so far.</p>
            <p>Our community users achieve similar results when they follow our approach and use our open-source tools.</p>
          </div>
          <div class="py-8 lg:ml-8 lg:py-0">
            <div class="grid h-full grid-flow-row grid-cols-1 place-content-center gap-8 sm:grid-cols-2">
              <div v-for="item in metrics" :key="item.id" class="">
                <span class="block text-2xl font-bold text-slate-900 dark:text-white">{{ item.stat }}</span>
                <span class="mt-1 block text-base">
                  <span class="font-medium text-slate-900 dark:text-white">{{ item.emphasis }}</span>
                  <span class="text-slate-700 dark:text-slate-400">{{ item.rest }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </textured-section>
  </section>
</template>

<script setup>
const metrics = [
  { id: 1, stat: '0', emphasis: 'Severity 1 or 2', rest: ' defects in production since the first go-live in 2020.' },
  { id: 2, stat: '99%', emphasis: 'Success rate', rest: ' for our deployments in production.' },
  { id: 3, stat: '3x', emphasis: 'Velocity:', rest: ' one of our community users reported this improvement when using DX@Scale compared to other methods.' },
  { id: 4, stat: 'On Demand', emphasis: 'Release capability:', rest: ' when a fix or a more important feature is ready, it goes to production: no need to wait.' },
]
</script>

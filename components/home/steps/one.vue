<template>
  <div class="mx-auto mt-12 max-w-7xl md:grid md:grid-cols-12 lg:min-h-[580px] lg:gap-8">
    <div class="col-span-12 px-4 py-16 lg:col-span-5">
      <div class="prose relative leading-normal text-slate-700 dark:text-slate-300 md:pr-4">
        <p>The first step that we recommend is to assess the level of technical debt in your Salesforce org. Then start modularising it. We know this is a painful exercise, but it is really worth it.</p>
        <p>The more modular and composable your Salesforce org is, the faster you'll become. No module is too small...</p>
        <p>Be mindful that depending on the size of your org, this exercise could take several months. Take tiny steps, extract, assess, rinse and repeat.</p>
      </div>
      <a class="group mt-6 inline-flex max-w-fit items-center rounded-full bg-slate-300/50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-400/50 dark:bg-slate-600/50 dark:text-slate-200 dark:hover:bg-slate-500/50" href="https://docs.dxatscale.io/development-practices/modular-deployment" target="_blank">
        Learn more
        <chevron-right class="ml-2 h-5 w-5" />
      </a>
    </div>
    <div class="relative col-span-12 lg:col-span-7">
      <div class="lg:absolute lg:inset-0 lg:-mt-8 lg:w-[960px]">
        <home-steps-modular-code />
      </div>
    </div>
  </div>
</template>

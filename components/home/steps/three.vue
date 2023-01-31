<template>
  <div class="mx-auto mt-12 max-w-7xl md:grid md:grid-cols-12 lg:min-h-[580px] lg:gap-8">
    <div class="col-span-12 px-4 py-16 lg:col-span-5">
      <div class="prose relative leading-normal text-slate-700 dark:text-slate-300 md:pr-4">
        <p>
          We are like
          <span class="font-mono text-base text-indigo-500 dark:text-indigo-400">npm install</span>
          but for Salesforce...
        </p>
        <p>What this means for you is that you don't need to fiddle with bespoke CI/CD scripts anymore.</p>
        <p>Just focus on building and properly architecting application, our orchestrator will do the heavy lifting for you.</p>
      </div>
      <a class="group mt-6 inline-flex max-w-fit items-center rounded-full bg-slate-300/50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-400/50 dark:bg-slate-600/50 dark:text-slate-200 dark:hover:bg-slate-500/50" href="https://docs.dxatscale.io/sfpowerscripts/orchestrator" target="_blank">
        Learn more
        <chevron-right class="ml-2 h-5 w-5" />
      </a>
    </div>
    <div class="relative col-span-12 lg:col-span-7">
      <div class="lg:absolute lg:inset-0 lg:-mt-12 lg:w-[960px]">
        <img class="dark:hidden" src="~/assets/img/steps/launch-light.webp" />
        <img class="hidden dark:block" src="~/assets/img/steps/launch-dark.webp" />
      </div>
    </div>
  </div>
</template>

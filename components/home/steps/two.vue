<template>
  <div class="mx-auto mt-12 max-w-7xl lg:grid lg:min-h-[580px] lg:grid-cols-12 lg:gap-8">
    <div class="col-span-12 px-4 py-16 lg:col-span-5">
      <div class="prose relative w-full max-w-none leading-normal text-slate-700 dark:text-slate-300">
        <p>We fit in your workflow by enriching your project manifest. For you this means that you don't need to learn an entirely new product.</p>
        <p>Start by installing DX@Scale:</p>
        <div class="flex w-full items-center overflow-hidden font-mono text-sm">
          <svg viewBox="0 -9 3 24" aria-hidden="true" class="mr-3 h-6 w-auto flex-none overflow-visible text-pink-400"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <span class="text-ellipsis">sfdx plugins:install @dxatscale/sfpowerscripts</span>
        </div>
        <p>And enrich your project manifest with few keywords...</p>
      </div>
      <a class="group mt-6 inline-flex max-w-fit items-center rounded-full bg-slate-300/50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-400/50 dark:bg-slate-600/50 dark:text-slate-200 dark:hover:bg-slate-500/50" href="https://docs.dxatscale.io/sfpowerscripts/orchestrator#controlling-aspects-of-the-orchestrator" target="_blank">
        Learn more
        <chevron-right class="ml-2 h-5 w-5" />
      </a>
    </div>
    <div class="relative col-span-12 lg:col-span-7">
      <div class="lg:absolute lg:inset-0 lg:-mt-8 lg:w-[960px]">
        <home-steps-build-code />
      </div>
    </div>
  </div>
</template>

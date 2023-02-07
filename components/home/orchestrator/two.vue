<template>
  <div class="mx-auto mt-12 max-w-7xl lg:grid lg:min-h-[580px] lg:grid-cols-12 lg:gap-8">
    <div class="col-span-12 px-4 py-16 lg:col-span-4">
      <div class="prose relative w-full max-w-none leading-normal text-slate-700 dark:text-slate-300">
        <p>The orchestrator understands what has changed and optimises its process automatically</p>
        <ul>
          <li>If a module has not been changed, it's not going to be built.</li>
          <li>If a module version has not been changed, it will not be re-installed.</li>
        </ul>
      </div>
      <a class="group mt-6 inline-flex max-w-fit items-center rounded-full bg-slate-300/50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-400/50 dark:bg-slate-600/50 dark:text-slate-200 dark:hover:bg-slate-500/50" href="https://docs.dxatscale.io/sfpowerscripts/orchestrator" target="_blank">
        Learn more
        <chevron-right class="ml-2 h-5 w-5" />
      </a>
    </div>
    <div class="relative col-span-12 lg:col-span-8">
      <div class="lg:absolute lg:inset-0 lg:-mt-8 lg:w-[960px]">
        <home-orchestrator-term-two />
      </div>
    </div>
  </div>
</template>

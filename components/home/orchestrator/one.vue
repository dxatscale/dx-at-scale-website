<template>
  <div class="mx-auto mt-12 max-w-7xl lg:grid lg:min-h-[580px] lg:grid-cols-12 lg:gap-8">
    <div class="col-span-12 px-4 py-16 lg:col-span-5">
      <div class="prose relative leading-normal text-slate-700 dark:text-slate-300 lg:pr-4">
        <p class="">As a developer, you are going to love this (we hope!).</p>
        <p>How long does it take to spin up a new scratch org? Install the managed packages required for the new feature you need to build? Minutes? Hours?</p>
        <p>Think seconds, no matter how complex your set up is... Simply fetch a new scratch org from the pool and start your new feature. Take the time to grab your favourite drink though!</p>
        <p>This is as simple as:</p>
      </div>
      <div class="mt-4 flex w-full items-start overflow-hidden font-mono text-sm">
        <span class="flex items-start">
          <svg viewBox="0 -6 3 22" aria-hidden="true" class="mr-3 h-6 w-auto flex-none overflow-visible text-pink-400"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <span class="text-slate-800 dark:text-slate-200">
            sfdx sfpowerscripts:pool:fetch -t
            <span class="text-slate-600 dark:text-slate-400">[POOL_NAME]</span>
            -v
            <span class="text-slate-600 dark:text-slate-400">[devhub-alias]</span>
            -a
            <span class="text-slate-600 dark:text-slate-400">[scratchorg-alias]</span>
          </span>
        </span>
      </div>

      <a class="group mt-6 inline-flex max-w-fit items-center rounded-full bg-slate-300/50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-400/50 dark:bg-slate-600/50 dark:text-slate-200 dark:hover:bg-slate-500/50" href="https://docs.dxatscale.io/sfpowerscripts/prepare#fetching-scratch-orgs-from-pool" target="_blank">
        Learn more
        <chevron-right class="ml-2 h-5 w-5" />
      </a>
    </div>
    <div class="relative col-span-12 pb-12 lg:col-span-7">
      <div class="lg:absolute lg:inset-0 lg:-mt-12 lg:w-[810px]">
        <img class="" src="~/assets/img/pools/developer.webp" />
      </div>
    </div>
  </div>
</template>

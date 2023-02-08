<template>
  <div class="mx-auto mt-12 max-w-7xl md:grid md:grid-cols-12 lg:min-h-[580px] lg:gap-8">
    <div class="col-span-12 px-4 py-16 lg:col-span-4">
      <div class="prose relative leading-normal text-slate-700 dark:text-slate-300 md:pr-4">
        <p class="">Your CI/CD will spend its time provisioning new environments. Each time a new pull request is raised, you'll need to run some automated tasks, like: deployments, execute the unit tests...</p>
        <p>With the scratch org pool capability, your CI/CD is not going to waste valuable time by "just" provisioning new environments.</p>
        <p>Your developers will thank you (again), because they will get a faster feedback on their pull request.</p>
      </div>

      <a class="group mt-6 inline-flex max-w-fit items-center rounded-full bg-slate-300/50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-400/50 dark:bg-slate-600/50 dark:text-slate-200 dark:hover:bg-slate-500/50" href="https://docs.dxatscale.io/sfpowerscripts/prepare" target="_blank">
        Learn more
        <chevron-right class="ml-2 h-5 w-5" />
      </a>
    </div>
    <div class="relative col-span-12 overflow-visible lg:col-span-8">
      <div class="overflow-visible lg:absolute lg:inset-0 lg:-mt-36 lg:w-[960px]">
        <img class="dark:hidden lg:rounded-xl" src="~/assets/img/dashboards/light.webp" />
        <img class="hidden dark:block lg:rounded-xl" src="~/assets/img/dashboards/dark.webp" />
      </div>
    </div>
  </div>
</template>

<template>
  <div class="mx-auto mt-12 max-w-7xl md:grid md:grid-cols-12 lg:min-h-[580px] lg:gap-8">
    <div class="col-span-12 px-4 py-16 lg:col-span-4">
      <div class="prose relative leading-normal text-slate-700 dark:text-slate-300 md:pr-4">
        <p>The metrics are exposed using industry standards like statsd. If you already have such dashboarding platform, you are just one step away from creating amazing and useful dashboards.</p>

        <div class="mx-auto mt-12">
          <div class="grid grid-cols-2 gap-12">
            <logo-newrelic class="h-12" />
            <logo-splunk class="h-12" />
            <logo-datadog class="h-12" />
            <logo-statsd class="h-12" />
          </div>
        </div>
      </div>

      <a class="group mt-12 inline-flex max-w-fit items-center rounded-full bg-slate-300/50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-400/50 dark:bg-slate-600/50 dark:text-slate-200 dark:hover:bg-slate-500/50" href="https://docs.dxatscale.io/implementing-your-ci-cd/dashboard-setup" target="_blank">
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

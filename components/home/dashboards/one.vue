<template>
  <div class="mx-auto mt-12 max-w-7xl lg:grid lg:min-h-[580px] lg:grid-cols-12 lg:gap-8">
    <div class="col-span-12 px-4 py-16 lg:col-span-5">
      <div class="prose relative leading-normal text-slate-700 dark:text-slate-300 lg:pr-4">
        <p class="">DX@Scale exposes metrics that track counts, duration, success rate for all the phases of your CI/CD.</p>
        <p class="">By monitoring these metrics you can than identify the bottlenecks in your process and act accordingly.</p>
        <p class="">For instance:</p>
        <ul>
          <li>Is your build taking too long? Perhaps there is a dependency that you can invert.</li>
          <li>Are your unit tests taking too long? This is usually an issue with your tests not being isolated enough.</li>
          <li>Are your deployments failing too often? Perhaps you are missing some automation when deploying to the downstream systems.</li>
        </ul>
      </div>

      <a class="group mt-6 inline-flex max-w-fit items-center rounded-full bg-slate-300/50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-400/50 dark:bg-slate-600/50 dark:text-slate-200 dark:hover:bg-slate-500/50" href="https://docs.dxatscale.io/sfpowerscripts/metrics-and-dashboards#metrics-available-within-sfpowerscripts" target="_blank">
        Learn more
        <chevron-right class="ml-2 h-5 w-5" />
      </a>
    </div>
    <div class="relative col-span-12 pb-12 lg:col-span-7">
      <div class="lg:absolute lg:inset-0 lg:-mt-12 lg:w-[810px]"><home-dashboards-sample-one /></div>
    </div>
  </div>
</template>

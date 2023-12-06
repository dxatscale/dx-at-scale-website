<template>
  <section class="relative mt-16">
    <div class="absolute inset-x-0 isolate transform-gpu overflow-hidden blur-3xl md:top-[-20rem]">
      <high-beam />
    </div>
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl md:top-[calc(100%-30rem)]"><low-beam /></div>
    <div class="container relative mx-auto max-w-7xl px-4 md:grid md:grid-cols-3">
      <div class="absolute -top-12 right-0 hidden md:block"><img class="w-96" src="~/assets/img/bg/hero-image.webp" /></div>
      <div class="relative col-span-2 flex h-full flex-col justify-between text-center md:text-left">
        <announcement />
        <h1 class="mt-8 max-w-3xl text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-3xl lg:text-5xl xl:text-6xl">
          Unlock the Full Potential of your Salesforce Org with
          <span class="text-sky-500">Modularisation</span>
          and
          <span class="text-sky-500">DX@Scale</span>
        </h1>
        <p class="mt-8 max-w-3xl text-xl tracking-tight text-slate-700 dark:text-slate-300 md:text-2xl">Streamline your Salesforce application lifecycle by enhancing the experience of your developers and admins.</p>
        <div class="mt-16 flex flex-col items-stretch justify-center gap-2 text-sm sm:flex-row sm:gap-4 md:justify-start">
          <a class="group relative inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold text-slate-900 ring-2 ring-sky-600 dark:text-slate-200" href="https://docs.dxatscale.io/implementing-your-ci-cd/getting-started">
            Get started
            <chevron-right class="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
          <a class="group relative inline-flex justify-center px-6 py-2 font-semibold text-slate-900 dark:text-slate-200" href="https://launchpass.com/flxblio">
            Join the Community
            <chevron-right class="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

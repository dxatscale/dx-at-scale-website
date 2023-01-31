<template>
  <div class="mx-auto mt-12 max-w-7xl lg:grid lg:min-h-[580px] lg:grid-cols-12 lg:gap-8">
    <div class="col-span-12 px-4 py-16 lg:col-span-6">
      <div class="prose relative w-full max-w-none leading-normal text-slate-700 dark:text-slate-300">
        <p>Source packages bridge the gap between metadata deployment and unlocked packages.</p>
        <p>They are a construct which wraps Salesforce Metadata with meta-information (such as version number, commit id, branch, tag, ...)</p>
        <p>We use them, and recommend them in the following cases:</p>
        <ul>
          <li>Metadata not supported by Unlocked Packages</li>
          <li>Dealing with metadata that is global or org-specific in nature (such as queues, profiles, etc or composite UI layouts, which doesn't make sense to be packaged using unlocked package)</li>
          <li>Development teams who are starting to adopt package-based development and want to organize their metadata</li>
        </ul>
      </div>
      <a class="group mt-6 inline-flex max-w-fit items-center rounded-full bg-slate-300/50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-400/50 dark:bg-slate-600/50 dark:text-slate-200 dark:hover:bg-slate-500/50" href="https://docs.dxatscale.io/sfpowerscripts/types-of-packaging/source-packages" target="_blank">
        Learn more
        <chevron-right class="ml-2 h-5 w-5" />
      </a>
    </div>
    <div class="relative col-span-12 lg:col-span-6">
      <div class="lg:absolute lg:inset-0 lg:-mt-8 lg:w-[960px]">
        <home-packages-source-code />
      </div>
    </div>
  </div>
</template>

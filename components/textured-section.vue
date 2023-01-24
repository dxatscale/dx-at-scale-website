<template>
  <div class="relative">
    <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-b from-white to-slate-200 dark:from-slate-900 dark:to-slate-800/50 lg:bg-gradient-to-r"></div>
      <div class="absolute inset-0 bg-grid-slate-200/30 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-800"></div>
      <div class="absolute transform-gpu blur-3xl sm:top-[-20rem]">
        <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/4 rotate-[30deg] overflow-hidden sm:left-[calc(50%+30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
    <div class="relative">
      <slot />
    </div>
  </div>
</template>

<template>
  <header class="relative">
    <Popover class="px-4 sm:px-6 sm:mx-4 md:px-8">
      <div class="absolute inset-0 bottom-0 bg-bottom bg-cover bg-no-repeat bg-[url('~/assets/img/bg/hero-light.webp')] dark:bg-[url('~/assets/img/bg/hero-dark.webp')]">
        <div
          class="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] dark:bg-bottom"
          style="maskImage: 'linear-gradient(to bottom, transparent, black)' , WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)' , " />
      </div>

      <div
        class="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
        <SiteLogo class="w-auto h-5" />
        <div class="flex items-center">
          <div class="-mr-2 flex items-center md:hidden">
            <PopoverButton
              class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
              <span class="sr-only">Open main menu</span>
              <span class="sr-only">Navigation</span>
              <svg width="24" height="24" fill="none" aria-hidden="true">
                <path
                  d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </PopoverButton>
            <PopoverOverlay class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
          </div>

          <SiteNavPopover class="-my-1 ml-2 -mr-1" />

          <div class="hidden md:flex items-center">
            <nav>
              <ul class="flex items-center space-x-8">
                <SiteNavItems />
              </ul>
            </nav>
            <div class="flex items-center border-l border-slate-300 ml-6 pl-6 dark:border-slate-600">
              <!-- <ThemeToggle /> -->
              <a href="https://launchpass.com/dxatscale" class="px-3 block text-slate-500 dark:text-white/70 hover:text-slate-500 dark:hover:text-slate-300">
                <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path
                    d="M 13 10 C 13 11.1046 13.8954 12 15 12 C 16.1046 12 17 11.1046 17 10 V 5 C 17 3.89543 16.1046 3 15 3 C 13.8954 3 13 3.89543 13 5 V 10 Z M 5 8 C 3.89543 8 3 8.89543 3 10 C 3 11.1046 3.89543 12 5 12 H 10 C 11.1046 12 12 11.1046 12 10 C 12 8.89543 11.1046 8 10 8 H 5 Z M 15 13 C 13.8954 13 13 13.8954 13 15 C 13 16.1046 13.8954 17 15 17 H 20 C 21.1046 17 22 16.1046 22 15 C 22 13.8954 21.1046 13 20 13 H 15 Z M 10 22 C 8.89543 22 8 21.1046 8 20 L 8 15 C 8 13.8954 8.89543 13 10 13 C 11.1046 13 12 13.8954 12 15 V 20 C 12 21.1046 11.1046 22 10 22 Z M 8 5 C 8 3.89543 8.89543 3 10 3 C 11.1046 3 12 3.89543 12 5 V 7 H 10 C 8.89543 7 8 6.10457 8 5 Z M 3 15 C 3 16.1046 3.89543 17 5 17 C 6.10457 17 7 16.1046 7 15 V 13 H 5 C 3.89543 13 3 13.8954 3 15 Z M 17 20 C 17 21.1046 16.1046 22 15 22 C 13.8954 22 13 21.1046 13 20 V 18 H 15 C 16.1046 18 17 18.8954 17 20 Z M 22 10 C 22 8.89543 21.1046 8 20 8 C 18.8954 8 18 8.89543 18 10 V 12 H 20 C 21.1046 12 22 11.1046 22 10 Z" />
                </svg>
                <span class="sr-only">DX@Scale on Slack</span>
              </a>
               <a href="https://github.com/dxatscale/" class="block text-slate-500 dark:text-white/70 hover:text-slate-500 dark:hover:text-slate-300">
                <svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span class="sr-only">DX@Scale on GitHub</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </Popover>

    <SiteHero />
  </header>
</template>

<script setup>
import { Popover, PopoverButton, PopoverOverlay } from '@headlessui/vue'
</script>
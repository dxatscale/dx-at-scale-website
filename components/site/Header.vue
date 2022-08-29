<template>
  <header class="relative">
    <Popover class="px-4 sm:px-6 md:px-8">
      <div class="absolute inset-0 bottom-0 bg-bottom bg-cover bg-no-repeat bg-slate-50 dark:bg-[#0B1120] bg-[url('~/assets/img/beams/hero@75.jpg')] dark:bg-[url('~/assets/img/beams/hero-dark@90.jpg')]">
        <!-- TODO: style beams to add in the div class up above -->
        <div
          class="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
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
            <div class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
              <!-- <ThemeToggle /> -->
              <a href="#" class="block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
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
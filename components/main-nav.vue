<template>
  <header class="sticky top-0 z-40 w-full flex-none border-b border-slate-900/10 bg-white/80 p-4 backdrop-blur dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50">
    <div class="mx-auto max-w-8xl">
      <Popover>
        <div class="mx-auto px-4">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-end" aria-label="Global">
            <div class="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
              <div class="flex w-full items-center justify-between md:w-auto">
                <nuxt-link href="/">
                  <span class="sr-only">DX@Scale</span>
                  <logo-dxatscale class="w-16" />
                </nuxt-link>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton class="inline-flex items-center justify-center rounded-md bg-slate-50 p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 dark:bg-slate-900 dark:text-slate-600 dark:hover:bg-slate-900/70 dark:hover:text-slate-400">
                    <span class="sr-only">Open main menu</span>
                    <svg width="24" height="24" fill="none" aria-hidden="true"><path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div class="hidden md:flex md:space-x-10">
              <nuxt-link v-for="item in navigation" :key="item.name" :href="item.href" :target="item.target" class="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-200">{{ item.name }}</nuxt-link>
            </div>
            <div class="hidden md:flex md:items-center">
              <div class="ml-6 mr-3 hidden h-5 w-px bg-slate-900/10 md:block"></div>
              <span class="mt-2">
                <theme-toggler />
              </span>
              <nuxt-link href="https://github.com/dxatscale" target="_blank" class="ml-3 block text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
                <span class="sr-only">DX@Scale on GitHub</span>
                <svg viewBox="0 0 16 16" class="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              </nuxt-link>
              <nuxt-link href="https://launchpass.com/flxblio" target="_blank" class="ml-6 block text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
                <span class="sr-only">DX@Scale on Slack</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-5 w-5" fill="currentColor">
                  <path d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z" />
                </svg>
              </nuxt-link>
            </div>
          </nav>
        </div>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
          <PopoverPanel class="absolute inset-x-0 top-0 z-10 origin-top-right transform bg-white/0 p-2 dark:bg-black/0 md:hidden">
            <div class="rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 transition duration-1000 dark:bg-slate-900">
              <div class="flex items-center justify-between px-5 pt-4">
                <div>
                  <logo-dxatscale class="h-8 w-auto" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 dark:text-slate-600 dark:hover:bg-slate-900/70 dark:hover:text-slate-400">
                    <span class="sr-only">Close main menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="space-y-1 px-2 pt-2 pb-3">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :target="target" class="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/70">{{ item.name }}</a>
                <theme-toggler />
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
  </header>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Documentation', href: 'https://docs.dxatscale.io/', target: '_blank' },
  { name: 'Getting Started', href: 'https://docs.dxatscale.io/implementing-your-ci-cd/getting-started', target: '_blank' },
  { name: 'Release Logs', href: 'https://github.com/dxatscale/dxatscale/releases', target: '_blank' },
  { name: 'Team', href: 'https://docs.dxatscale.io/about-us/meet-our-team', target: '_blank' },
]
</script>

<template>
  <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
    leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
    <PopoverPanel focus class="absolute z-50 top-4 right-4 inset-x-0 p-2 transition transform origin-top md:hidden">
      <div class="rounded-lg shadow-md bg-white dark:bg-slate-700 ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <img class="h-8 w-auto" src="~/assets/img/logos/color.svg" alt="" />
          </div>
          <div class="-mr-2">
            <PopoverButton
              class="bg-white dark:bg-slate-700 rounded-md p-2 inline-flex items-center justify-center text-slate-400 hover:bg-pink-200 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500/50 dark:focus:ring-slate-600">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
        <div class="pt-5 pb-6">
          <div class="px-2 space-y-1">
            <ul>
              <SiteNavItems />
            </ul>
          </div>
        </div>
      </div>
    </PopoverPanel>
  </transition>
</template>
<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
// import {
//   MenuIcon,
//   XIcon,
// } from '@heroicons/vue/outline'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    Bars3Icon,
    XMarkIcon
  },
}
</script>

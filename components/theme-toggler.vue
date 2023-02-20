<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

useHead({
  script: [
    {
      children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add('dark')
       document.documentElement.setAttribute("data-theme", "dark")
     } else {
      document.documentElement.classList.remove('dark')
       document.documentElement.removeAttribute("data-theme")
     }`,
    },
  ],
})

const { theme, setTheme, getTheme } = useTheme()

const selectedTheme = computed(() => theme.value.charAt(0).toUpperCase() + theme.value.slice(1))

onMounted(() => {
  selectedTheme.value = getTheme()
})

const changeTheme = (value: string) => {
  setTheme(value)
}

const selectTheme = (event: Event) => {
  setTheme(event.target?.value)
}

const displayTheme = () => {
  theme.value.charAt(0).toUpperCase() + theme.value.slice(1)
}
</script>

<template>
  <Popover class="relative hidden md:block">
    <PopoverButton>
      <div class="group p-2 py-3">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group h-6 w-6 dark:hidden">
          <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="stroke-slate-400 dark:stroke-slate-500"></path>
          <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-slate-400 dark:stroke-slate-500"></path></svg
        ><svg viewBox="0 0 24 24" fill="none" class="hidden h-6 w-6 dark:block">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" class="fill-transparent"></path>
          <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" class="fill-slate-500"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" class="fill-slate-500"></path>
        </svg>
      </div>

      <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
        <PopoverPanel class="absolute left-1/2 z-10 mt-3 -translate-x-1/2 transform px-2">
          <div class="w-32 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="relative grid bg-white py-4 dark:bg-slate-800">
              <a @click="changeTheme('light')" class="flex items-start py-1 px-2 transition duration-150 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-900/70">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" :class="[theme === 'light' ? 'fill-sky-500/20 stroke-sky-500' : 'fill-slate-400/20 stroke-slate-400 dark:fill-slate-500/20 dark:stroke-slate-500']"></path>
                  <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" :class="[theme === 'light' ? 'stroke-sky-500' : 'stroke-slate-400 dark:stroke-slate-500']"></path>
                </svg>
                <div class="ml-4 text-sm font-medium" :class="[theme === 'light' ? 'text-sky-500' : 'text-slate-400 dark:text-slate-500']">Light</div>
              </a>
              <a @click="changeTheme('dark')" class="flex items-start py-1 px-2 transition duration-150 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-900/70">
                <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" :class="[theme === 'dark' ? 'fill-sky-500/20' : 'fill-slate-400/20 dark:fill-slate-500/20']"></path>
                  <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" :class="[theme === 'dark' ? 'fill-sky-500' : 'fill-slate-400 dark:fill-slate-500']"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" :class="[theme === 'dark' ? 'fill-sky-500' : 'fill-slate-400 dark:fill-slate-500']"></path>
                </svg>
                <div class="ml-4 text-sm font-medium" :class="[theme === 'dark' ? 'text-sky-500' : 'text-slate-400 dark:text-slate-500']">Dark</div>
              </a>
              <a @click="changeTheme('system')" class="flex items-start py-1 px-2 transition duration-150 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-900/70">
                <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6">
                  <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" stroke-width="2" stroke-linejoin="round" :class="[theme === 'system' ? 'fill-sky-400/20 stroke-sky-500' : 'stroke-slate-400 dark:stroke-slate-500']"></path>
                  <path d="M14 15c0 3 2 5 2 5H8s2-2 2-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="[theme === 'system' ? 'stroke-sky-500' : 'stroke-slate-400 dark:stroke-slate-500']"></path>
                </svg>
                <div class="ml-4 text-sm font-medium" :class="[theme === 'system' ? 'text-sky-500' : 'text-slate-400 dark:text-slate-500']">System</div>
              </a>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </PopoverButton>
  </Popover>

  <div class="mt-6 border-t border-slate-200 pt-6 dark:border-slate-200/10 md:hidden">
    <div class="flex items-center justify-between px-3">
      <label for="theme" class="text-sm font-medium text-slate-700 dark:text-slate-400">Switch theme</label>
      <div class="relative flex items-center rounded-lg p-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:ring-0 dark:highlight-white/5">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-6 w-6 dark:hidden">
          <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="stroke-slate-400 dark:stroke-slate-500"></path>
          <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-slate-400 dark:stroke-slate-500"></path></svg
        ><svg viewBox="0 0 24 24" fill="none" class="mr-2 hidden h-6 w-6 dark:block">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" class="fill-transparent"></path>
          <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" class="fill-slate-400"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" class="fill-slate-400"></path>
        </svg>
        {{ selectedTheme }}
        <svg class="ml-2 h-6 w-6 text-slate-400" fill="none"><path d="m15 11-3 3-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <select @change="selectTheme($event)" id="theme" :value="theme" class="form-select absolute inset-0 h-full w-full appearance-none opacity-0">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
    </div>
  </div>
</template>

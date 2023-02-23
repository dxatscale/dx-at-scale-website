<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
  <nav id="nav" class="relative lg:text-sm lg:leading-6">
    <div class="pointer-events-none sticky top-0 -ml-0.5">
      <div class="h-10 bg-white dark:bg-slate-900"></div>
      <div class="pointer-events-auto relative bg-white dark:bg-slate-900">
        <button type="button" class="hidden w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700 lg:flex">
          <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none">
            <path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
          </svg>
          Quick search...
          <span class="ml-auto flex-none pl-3 text-xs font-semibold">⌘K</span>
        </button>
      </div>
      <div class="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
    </div>
    <ul>
      <li>
        <a href="/docs/installation" class="group mb-4 flex items-center font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 lg:text-sm lg:leading-6">
          <div class="mr-4 rounded-md shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-pink-200 group-hover:ring-slate-900/10 dark:bg-slate-800 dark:shadow-none dark:ring-0 dark:highlight-white/5 dark:group-hover:bg-pink-500 dark:group-hover:shadow-none dark:group-hover:highlight-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" height="100%" width="100%" viewBox="0 0 576 512">
              <path fill="currentColor" d="M288 72V480s-92.8-32-144-32c-38.5 0-88.4 12.1-119.9 22.6C12.8 474.3 0 466 0 454.1V83.8C0 71.7 6.8 60.5 18.1 56.1C46.3 45.3 93.5 32 144 32c64 0 128 24 144 40z" />
              <path fill="currentColor" fill-opacity=".4" d="M288 72V480s92.8-32 144-32c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-64 0-128 24-144 40z" />
            </svg>
          </div>
          Documentation
        </a>
      </li>
      <li>
        <a href="#" class="group mb-4 flex items-center font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 lg:text-sm lg:leading-6">
          <div class="mr-4 rounded-md shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-pink-200 group-hover:ring-slate-900/10 dark:bg-slate-800 dark:shadow-none dark:ring-0 dark:highlight-white/5 dark:group-hover:bg-pink-500 dark:group-hover:shadow-none dark:group-hover:highlight-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" height="100%" width="100%" viewBox="0 0 576 512">
              <path fill="currentColor" d="M288 72V480s-92.8-32-144-32c-38.5 0-88.4 12.1-119.9 22.6C12.8 474.3 0 466 0 454.1V83.8C0 71.7 6.8 60.5 18.1 56.1C46.3 45.3 93.5 32 144 32c64 0 128 24 144 40z" />
              <path fill="currentColor" fill-opacity=".4" d="M288 72V480s92.8-32 144-32c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-64 0-128 24-144 40z" />
            </svg>
          </div>
          Screencasts
        </a>
      </li>
      <li>
        <a href="#" class="group mb-4 flex items-center font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 lg:text-sm lg:leading-6">
          <div class="mr-4 rounded-md shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-pink-200 group-hover:ring-slate-900/10 dark:bg-slate-800 dark:shadow-none dark:ring-0 dark:highlight-white/5 dark:group-hover:bg-pink-500 dark:group-hover:shadow-none dark:group-hover:highlight-white/10">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" class="fill-pink-400 group-hover:fill-pink-500 dark:fill-slate-600 dark:group-hover:fill-pink-300"></path>
              <path d="M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z" class="fill-pink-50 group-hover:fill-pink-100 dark:fill-slate-400 dark:group-hover:fill-white"></path>
            </svg>
          </div>
          Screencasts
        </a>
      </li>
      <li>
        <a href="#" class="group mb-4 flex items-center font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 lg:text-sm lg:leading-6">
          <div class="mr-4 rounded-md shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-violet-200 group-hover:ring-slate-900/10 dark:bg-slate-800 dark:shadow-none dark:ring-0 dark:highlight-white/5 dark:group-hover:bg-violet-500 dark:group-hover:shadow-none dark:group-hover:highlight-white/10">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z" class="fill-violet-400 group-hover:fill-violet-500 dark:fill-slate-600 dark:group-hover:fill-violet-300"></path>
              <circle cx="12" cy="11" r="1" class="fill-white dark:fill-slate-400 dark:group-hover:fill-white"></circle>
              <circle cx="9" cy="11" r="1" class="fill-violet-200 dark:fill-slate-400 dark:group-hover:fill-white"></circle>
              <circle cx="15" cy="11" r="1" class="fill-violet-200 dark:fill-slate-400 dark:group-hover:fill-white"></circle>
            </svg>
          </div>
          Community
        </a>
      </li>
      <li v-for="(item, index) in navigation" :key="index">
        <div v-if="item.children">
          <ul>
            <li v-for="(child, index) in item.children" :key="index" class="mt-8">
              <h5 class="mb-3 font-semibold text-slate-900 dark:text-slate-200">{{ child.title }}</h5>
              <div v-if="child.children">
                <ul class="space-y-2 border-l border-slate-100 dark:border-slate-800">
                  <li v-for="(grandchild, index) in child.children" :key="index">
                    <NuxtLink :to="grandchild._path" activeClass="-ml-px block border-l border-current pl-4 font-semibold !text-sky-500 !dark:text-sky-400 !border-sky-500 !dark:border-sky-400" class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300">{{ grandchild.title }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

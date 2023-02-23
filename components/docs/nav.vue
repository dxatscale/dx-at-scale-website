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
        <a href="https://docs.dxatscale.io" target="_blank" class="group mb-4 flex items-center font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 lg:text-sm lg:leading-6">
          <div class="mr-4 rounded-md shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-sky-200 group-hover:ring-slate-900/10 dark:bg-slate-800 dark:shadow-none dark:ring-0 dark:highlight-white/5 dark:group-hover:bg-sky-500 dark:group-hover:shadow-none dark:group-hover:highlight-white/10">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z" class="fill-sky-200 group-hover:fill-sky-500 dark:fill-slate-400 dark:group-hover:fill-sky-300"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z" class="fill-sky-400 group-hover:fill-sky-500 dark:fill-slate-600 dark:group-hover:fill-sky-200"></path>
            </svg>
          </div>
          Gitbook Documentation
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

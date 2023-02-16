<script setup>
defineProps(['prev', 'next'])
</script>

<template>
  <footer class="mt-12 text-sm leading-6">
    <div class="mb-10 flex items-center font-semibold text-slate-700 dark:text-slate-200">
      <!-- Previous article -->

      <a v-if="prev" class="group flex items-center hover:text-slate-900 dark:hover:text-white" :href="prev._path">
        <svg viewBox="0 0 3 6" class="mr-3 h-1.5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"><path d="M3 0L0 3L3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        {{ prev.title }}
      </a>

      <!-- Next article -->
      <a v-if="next" class="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white" :href="next._path">
        {{ next.title }}
        <svg viewBox="0 0 3 6" class="ml-3 h-1.5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
    </div>
    <!-- Footer -->
    <div class="justify-between border-t border-slate-200 pt-10 pb-28 text-slate-500 dark:border-slate-200/5 sm:flex">
      <div class="mb-6 sm:mb-0 sm:flex">
        <p>Copyright © 2019-2023 DX@Scale</p>
        <p class="hidden sm:ml-4 sm:border-l sm:border-slate-200 sm:pl-4 dark:sm:border-slate-200/5"><a class="hover:text-slate-900 dark:hover:text-slate-400" href="#">Brand</a></p>
      </div>
      <a class="hidden hover:text-slate-900 dark:hover:text-slate-400" href="#">Edit this page on GitHub</a>
    </div>
  </footer>
</template>

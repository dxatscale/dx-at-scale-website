<script setup>
import { useActive } from 'vue-use-active-scroll'
// define links prop
const props = defineProps(['links'])

const targets = computed(() => props.links.flatMap(({ id, children = [] }) => [id, ...children.map(({ id }) => id)]))

// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link]
      if (link.children) {
        let flattened = flattenLinks(link.children)
        _link = [link, ...flattened]
      }
      return _link
    })
    .flat(1)

  return _links
}
const { isActive, setActive } = useActive(targets, { overlayHeight: 100 })
</script>

<template>
  <div class="px-8">
    <h5 class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">On this page</h5>
    <ul class="text-sm font-medium leading-6 text-slate-700">
      <!-- <li v-for="link of flattenLinks(links)" :key="link.id" class="toc-link" :class="`_${link.depth}`"> -->
      <li v-for="link of flattenLinks(links)" :key="link.id" class="flex flex-col gap-2 px-2" :class="{ 'pl-4': link.depth === 3, 'prose-a:text-sky-500 dark:prose-a:text-sky-400': isActive(link.id) }">
        <a :href="`#${link.id}`" @click="setActive(link.id)" class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
          <svg v-if="link.depth === 3" width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
          {{ link.text }}
        </a>
      </li>
    </ul>

    <ul class="hidden text-sm leading-6 text-slate-700">
      <li><a href="#" class="block py-1 font-medium text-sky-500 dark:text-sky-400">Quick reference</a></li>
      <li><a href="#" class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Basic usage</a></li>

      <li><a href="#" class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Applying conditionally</a></li>
      <li class="ml-4">
        <a href="#hover-focus-and-other-states" class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
          <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
          Hover, focus, and other states
        </a>
      </li>
      <li class="ml-4">
        <a href="#breakpoints-and-media-queries" class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
          <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
          Breakpoints and media queries
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

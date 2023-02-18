<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const { copy, copied } = useClipboard()

const props = withDefaults(
  defineProps<{
    code?: string
    language?: string | null
    filename?: string | null
    highlights?: Array<number>
  }>(),
  { code: '', language: null, filename: null, highlights: [] }
)
</script>

<template>
  <div class="relative overflow-visible rounded-lg bg-slate-50 pb-2 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5 xl:ml-0">
    <div class="relative flex text-xs leading-6 text-slate-400">
      <div v-if="filename" class="mt-2 flex flex-none items-center border-t border-b border-t-transparent border-b-sky-700 px-4 py-1 text-sky-700 dark:border-b-sky-700 dark:text-sky-300">{{ filename }}</div>
      <div class="flex flex-auto rounded-tr-xl pt-2">
        <div class="-mr-px flex-auto rounded-tl border-y border-l bg-slate-200/50 dark:border-slate-500/30 dark:bg-slate-700/50">
          <div class="flex h-8 items-center justify-end pr-4">
            <div class="relative -mr-2 flex">
              <div class="mb-4 flex items-center">
                <div v-if="copied" class="absolute -left-3 -top-9 mb-2 rounded-lg bg-sky-400 p-2 text-xs text-slate-800 dark:bg-sky-600 dark:text-slate-200">
                  <div>Copied!</div>
                  <div class="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-sky-400 dark:bg-sky-600"></div>
                </div>
              </div>

              <button @click="copy(code)" type="button" class="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-8 w-8">
                  <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                  <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <slot />
    </div>
  </div>
</template>

<style scoped>
:slotted(pre) {
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex: 1 1 0%;
  overflow-x: auto;
  line-height: 1.625;
  counter-reset: lines;
  @apply bg-slate-50 dark:bg-slate-800;
}

:slotted(pre code) {
  width: 100%;
  background-color: #00000000;
  display: flex;
  flex-direction: column;
}

:slotted(pre code .line) {
  display: inline-table;
  min-height: 1rem;
}

:slotted(pre code .line::before) {
  counter-increment: lines;
  content: counter(lines);
  width: 1rem;
  margin-right: 1.5rem;
  display: inline-block;
  text-align: right;
  color: rgba(115, 138, 148, 0.4);
}

:slotted(pre code .highlight) {
  @apply border-l-2 border-cyan-400 bg-cyan-400/20 dark:border-cyan-600 dark:bg-cyan-700/20;
  display: block;
  margin-right: -1.2em;
  margin-left: -1.2em;
  padding-right: 1.1em;
  padding-left: 0.75em;
}
</style>

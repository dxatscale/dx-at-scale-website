<template>
  <div class="relative my-1 overflow-hidden rounded-md bg-slate-50/50 py-2 text-base dark:bg-slate-800">
    <div class="flex justify-between px-2 pb-2">
      <div class="text-xs text-slate-500">
        {{ filename }}
      </div>
      <div class="h-4 w-4 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
        <button @click="copy(code)" class="">
          <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 512 512">
            <path fill="currentColor" d="M272 416C263.2 416 256 423.2 256 432V448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V192c0-17.67 14.33-32 32-32h112C184.8 160 192 152.8 192 144C192 135.2 184.8 128 176 128H63.99c-35.35 0-64 28.65-64 64l.0098 256C0 483.3 28.65 512 64 512h160c35.35 0 64-28.65 64-64v-16C288 423.2 280.8 416 272 416zM502.6 86.63l-77.25-77.25C419.4 3.371 411.2 0 402.7 0H288C252.7 0 224 28.65 224 64v256c0 35.35 28.65 64 64 64h160c35.35 0 64-28.65 64-64V109.3C512 100.8 508.6 92.63 502.6 86.63zM416 45.25L466.7 96H416V45.25zM480 320c0 17.67-14.33 32-32 32h-160c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h96l.0026 64c0 17.67 14.33 32 32 32H480V320z" />
          </svg>
        </button>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const { copy } = useClipboard()

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

<style scoped>
.bottom-container {
  display: flex;
  justify-content: flex-end;
}

.filename-text  {
  position: absolute;
  top: 0;
  left: 1em;
  padding: 0.25em 0.5em;
  color: white;
  font-size: 14px;
}

:slotted(pre) {
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex: 1 1 0%;
  overflow-x: auto;
  padding: 1rem;
  line-height: 1.625;
  counter-reset: lines;
  @apply bg-slate-50 dark:bg-slate-800;
}

:slotted(pre code) {
  width: 100%;
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
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
}
</style>

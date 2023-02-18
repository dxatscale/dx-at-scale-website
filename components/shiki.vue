<script lang="ts" setup>
// import { statSync } from 'fs'
import { ref, Ref } from 'vue'
const props = defineProps(['code', 'lang'])

const splitLines = (str: String) => str.split(/\r?\n/)

const getLineOptions = (code: String) => {
  let lineOptions: { index: number; content: string }[] = []
  let formattedCode: String = ''
  splitLines(code).forEach((line: string, index: number) => {
    switch (line[0]) {
      case '-':
        lineOptions.push({ line: index + 1, classes: ['deleted'] })
        formattedCode += line.substring(1, line.length) + '\n'
        break
      case '+':
        lineOptions.push({ line: index + 1, classes: ['added'] })
        formattedCode += line.substring(1, line.length) + '\n'
        break
      case '~':
        lineOptions.push({ line: index + 1, classes: ['highlighted'] })
        formattedCode += line.substring(1, line.length) + '\n'
        break
      default:
        lineOptions.push({ line: index + 1, classes: ['unchanged'] })
        formattedCode += line + '\n'
    }
  })

  return [formattedCode, lineOptions]
}

const [formattedCode, lineOptions] = getLineOptions(props.code.trim())
const lang = computed(() => props.lang.trim().toLowerCase())

const hlCode = await useShiki(ref(formattedCode), {
  theme: 'css-variables',
  lang: lang.value,
  lineOptions: lineOptions,
})
</script>

<template>
  <div v-html="hlCode"></div>
</template>

<style>
.code code {
  counter-reset: step;
  counter-increment: step 0;
}

.code code .line::before {
  content: counter(step);
  counter-increment: step;
  display: inline-block;
  text-align: right;
  color: var(--line-numbers);
  @apply pointer-events-none mr-2 w-10 select-none border-r border-slate-200 px-2 dark:border-slate-800;
}

.code code .line.added::before {
  @apply before:border-green-900 dark:bg-slate-800;
}
.code code .line.deleted::before {
  @apply before:border-red-900 dark:bg-slate-800;
}

.added {
  @apply w-full border-l-2 border-green-400 bg-green-400/10 dark:border-green-600 dark:bg-green-600/10;
}
.deleted {
  @apply w-full border-l-2 border-rose-400 bg-rose-400/10 dark:border-rose-600 dark:bg-rose-600/10;
}
.highlighted {
  @apply w-full border-l-2 border-amber-500 bg-amber-400/20 dark:border-amber-600 dark:bg-amber-600/10;
}
</style>

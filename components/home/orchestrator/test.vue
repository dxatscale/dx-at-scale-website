<template>
  <v-termynal :type-delay="30" :line-delay="400" :start-delay="0" class="terminal" @before-new-line="scrollToNewLine($event)">
    <div ref="container" class="line-container">
      <vt-input class="prompt">npm uninstall react</vt-input>
      <vt-text>Are you sure you want to uninstall 'react'?</vt-text>
      <vt-text>Are you sure you want to unstall 'react'?</vt-text>
      <vt-text>Are you sure you want tostall 'react'?</vt-text>
      <vt-text>Are you sure you want toddstall 'react'?</vt-text>
      <vt-text>Are you sure you want toddxxxxstall 'react'?</vt-text>
      <vt-text>Are you sure you want toddxxxxccccccstall 'react'?</vt-text>
      <vt-text>Are you sure you want toddxxxxccccccccdcdxdstall 'react'?</vt-text>
      <vt-text>Are you sure you want toddxxxxccccccccdcdxddvcvdcxvstall 'react'?</vt-text>
      <vt-text>Are you sure you want toddxxxxccccccccdcdxddvcvdcxvvcdvcxdvstall 'react'?</vt-text>
      <vt-text>Are you sure you want toddxxxxccccccccdcdxddvcvdcxvvcdvcxdvvxcvcxvxcdstall 'react'?</vt-text>
      <vt-text>Are you sure you want toddxxxxccccccccdcdxddvcvdcxvvcdvcxdvvxcvcxvxcdxcvdcvxcvstall 'react'?</vt-text>
      <vt-input class="prompt" :type-delay="1000">y</vt-input>
      <vt-progress progress-char="·" />
      <vt-text>Uninstalled 'react'</vt-text>
      <vt-input class="prompt">node</vt-input>
      <vt-input class="prompt">">Array(5).fill('🦄 ')</vt-input>
      <vt-text>['🦄', '🦄', '🦄', '🦄', '🦄']</vt-text>
      <vt-input class="prompt">Are you sure?</vt-input>
      <vt-input class="prompt">git checkout branch master</vt-input>
      <vt-input class="prompt">git commit -m "Fix things"</vt-input>
    </div>
  </v-termynal>
</template>

<script setup lang="ts">
import { VTermynal, VtInput, VtProgress, VtText, VtSpinner } from '@lehoczky/vue-termynal'
const container = ref<HTMLDivElement | null>(null)

const scrollToNewLine = (event: Event) => {
  let line = event as HTMLElement | unknown
  console.log(line.offsetTop)

  if (line.offsetTop + line.offsetHeight > container.value?.offsetHeight) {
    container.value?.scrollTo({
      top: line.offsetTop + line.offsetHeight - container.value?.offsetHeight,
      behavior: 'smooth',
    })
  }
}
</script>
nnnnn
<style>
.line-container {
  @apply h-48 overflow-hidden scroll-smooth;
}

.prompt::before {
  /* content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='50' r='40' stroke='black' stroke-width='2' fill='red'/%3E%3Cpolyline points='20,20 40,25 60,40 80,120 120,140 200,180' style='fill:none;stroke:black;stroke-width:3'/%3E%3C/svg%3E "); */
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -3 1 25' height='32px' width='10px'%3E%3Cpath d='M0 0L3 3L0 6' fill='none' stroke='%23f00000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E");
  height: 14px;
  @apply !text-rose-500;
}
</style>

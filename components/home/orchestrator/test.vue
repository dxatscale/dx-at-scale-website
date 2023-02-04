<template>
  <v-termynal :lazy="true" :type-delay="30" :line-delay="400" :start-delay="0" class="terminal" @before-new-line="scrollToNewLine($event)">
    <div ref="container" class="line-container">
      <vt-input class="prompt">npm uninstall reasssct</vt-input>
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

  if (line instanceof HTMLElement && container.value) {
    if (line.offsetTop + line.offsetHeight > container.value?.offsetHeight) {
      container.value?.scrollTo({
        top: line.offsetTop + line.offsetHeight - container.value?.offsetHeight,
        behavior: 'smooth',
      })
    }
  } else {
    return
  }
}
</script>
nnnnn
<style>
.line-container {
  @apply h-48 overflow-hidden scroll-smooth;
}
</style>

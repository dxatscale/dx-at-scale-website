<template>
  <v-termynal :type-delay="40" :line-delay="700" :start-delay="0" class="terminal" @before-new-line="scrollToNewLine($event)">
    <div ref="container" class="line-container">
      <vt-input prompt="$">npm uninstall react</vt-input>
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
      <vt-input prompt="(y/n)" :type-delay="1000">y</vt-input>
      <vt-progress progress-char="·" />
      <vt-text>Uninstalled 'react'</vt-text>
      <vt-input prompt="$">node</vt-input>
      <vt-input prompt=">">Array(5).fill('🦄 ')</vt-input>
      <vt-text>['🦄', '🦄', '🦄', '🦄', '🦄']</vt-text>
      <vt-input prompt=">">cd ~/repos</vt-input>
      <vt-input prompt="$  ~/repos">git checkout branch master</vt-input>
      <vt-input prompt="$  ~/repos (master)">git commit -m "Fix things"</vt-input>
    </div>
  </v-termynal>
</template>

<script setup lang="ts">
import { VTermynal, VtInput, VtProgress, VtText, VtSpinner } from '@lehoczky/vue-termynal'
const container = ref<HTMLDivElement | null>(null)

const scrollToNewLine = (event: Event) => {
  let line = event as HTMLElement | unknown
  console.log(line.offsetTop)

  if (line.offsetTop - 2 * line.offsetHeight > container.value?.offsetHeight) {
    container.value?.scrollTo({
      top: line.offsetTop - line.offsetHeight - container.value?.offsetHeight,
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
</style>

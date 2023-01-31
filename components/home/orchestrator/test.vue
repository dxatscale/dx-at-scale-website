<template>
  <v-termynal :type-delay="40" :line-delay="700" :start-delay="0" forward-button restart-button>
    <vt-input prompt="▲">npm uninstall react</vt-input>
    <vt-text>Are you sure you want to uninstall 'react'?</vt-text>
    <vt-input prompt="(y/n)" :type-delay="1000">y</vt-input>
    <vt-progress progress-char="·" />
    <vt-text>Uninstalled 'react'</vt-text>
    <vt-input prompt="▲">node</vt-input>
    <vt-input prompt=">">Array(5).fill('🦄 ')</vt-input>
    <vt-text>['🦄', '🦄', '🦄', '🦄', '🦄']</vt-text>
    <vt-input prompt=">">cd ~/repos</vt-input>
    <vt-input prompt="▲  ~/repos">git checkout branch master</vt-input>
    <vt-input prompt="▲  ~/repos (master)">git commit -m "Fix things"</vt-input>
  </v-termynal>
</template>

<script setup lang="ts">
import { VTermynal, VtInput, VtProgress, VtText, VtSpinner } from '@lehoczky/vue-termynal'
</script>

<style>
:root {
  --vt-color-bg: var(--color-slate-100);
  --vt-color-text: var(--color-slate-700);
  --vt-color-text-subtle: var(--color-slate-500);
  --vt-color-btn: var(--color-slate-400);
  --vt-color-btn-hover: var(--color-slate-700);
}

html.dark {
  --vt-color-bg: var(--color-slate-800);
  --vt-color-text: var(--color-slate-300);
  --vt-color-text-subtle: var(--color-slate-500);
  --vt-color-btn: var(--color-slate-700);
  --vt-color-btn-hover: var(--color-slate-500);
}

.v-termynal {
  @apply p-4 font-mono text-sm;
}

.v-termynal::after,
.v-termynal::before {
  @apply hidden;
}

.v-termynal .vt__line {
  @apply leading-normal;
}
</style>

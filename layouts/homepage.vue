<template>
  <main-nav />
  <div class="relative">
    <slot />
  </div>
</template>

<script setup>
useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  ],
  bodyAttrs: {
    class: 'bg-white dark:bg-slate-900',
  },
})
</script>

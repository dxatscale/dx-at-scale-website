<template>
  <main-nav />
  <div class="relative">
    <slot />
  </div>
  <site-footer />
</template>

<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
  ],
  bodyAttrs: { class: 'bg-white dark:bg-slate-900' },
})
</script>

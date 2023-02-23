<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=1' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=1' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=1' },
    { rel: 'manifest', href: '/site.webmanifest?v=1' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg?v=1', color: '#5bbad5' },
    { rel: 'shortcut icon', href: '/favicon.ico?v=1' },
  ],
  bodyAttrs: { class: 'bg-white dark:bg-slate-900' },
})
</script>
<template>
  <slot />
</template>

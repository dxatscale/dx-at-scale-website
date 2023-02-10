---
layout: documentation
---

# Hello Content 2

```js
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['@heroicons/vue'],
  },
  css: ['~/assets/fonts/inter/inter.css', '~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxt/content'],
  content: {},
})
```

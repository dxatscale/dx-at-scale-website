// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['@heroicons/vue'],
  },
  css: ['~/assets/fonts/inter/inter.css', '~/assets/css/main.css', '~/assets/css/v-termynal.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
})

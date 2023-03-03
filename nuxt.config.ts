// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {},
  css: ['~/assets/fonts/inter/inter.css', '~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    highlight: {
      theme: 'css-variables',
    },
  },
  devServer: {
    host: '0.0.0.0',
  },
})

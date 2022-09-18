import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],

  css: ["~/assets/css/fonts.css"],

  build: {
    transpile: ["@heroicons/vue"],
  },

  meta: [
    { title: 'test' }
  ]
});

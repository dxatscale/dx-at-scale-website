import VueTermynalPlugin from '@lehoczky/vue-termynal'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTermynalPlugin)
})

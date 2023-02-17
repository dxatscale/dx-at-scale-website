<script setup>
const title = 'DX@Scale'
const description = 'Used on more than 150 Salesforce orgs worldwide, DX@Scale helps you unlock the full potential of your Salesforce Org with modularisation techniques and a declarative orchestrator. Streamline your Salesforce application lifecycle by enhancing the experience of your developers and admins.'
const shortDescription = 'Modular Salesforce Development powered by open source tools'
const baseUrl = 'https://dxatscale.io'
const imageUrl = 'https://dxatscale.io/social-image.webp'

definePageMeta({
  layout: 'homepage',
})
useHead({
  title: title,
  meta: [
    { hid: 'description', name: 'description', content: description },
    { hid: 'robots', name: 'robots', content: 'noodp' },
    { hid: 'ogSiteName', name: 'og:site_name', content: 'DX@Scale' },
    { hid: 'ogTitle', name: 'og:title', content: shortDescription },
    { hid: 'ogDescription', name: 'og:description', content: description },
    { hid: 'ogImage', name: 'og:image', content: imageUrl },
    { hid: 'ogUrl', name: 'og:url', content: baseUrl },
    { hid: 'ogType', name: 'og:type', content: 'website' },
    { hid: 'twitterTitle', name: 'twitter:title', content: shortDescription },
    { hid: 'twitterDescription', name: 'twitter:description', content: description },
    { hid: 'twitterImage', name: 'twitter:image', content: imageUrl },
    { hid: 'twitterCard', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitterUrl', name: 'twitter:creator', content: '@dxatscale' },
    { hid: 'twitterSite', name: 'twitter:site', content: '@dxatscale' },
    { hid: 'twitterType', name: 'twitter:type', content: 'website' },
    { hid: 'twitterImageAlt', name: 'twitter:image:alt', content: 'DX@Scale' },
  ],
})

const code = "console.log('test')"
const lang = 'javascript'
</script>

<template>
  <home-hero />
  <home-community-users />
  <home-why />
  <home-statistics />
  <home-testimonial-ruslan />
  <home-modularisation />
  <home-testimonial-dieffrei />
  <home-steps />
  <home-testimonial-nils />
  <home-packages />
  <home-testimonial-enea />
  <home-orchestrator />
  <home-testimonial-vernon />
  <home-dashboards />
  <home-pools />
</template>

<template>
  <main-nav />
  <div class="relative">
    <home-hero />
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

const code = `
// Test
public MarketingContactTarget(Contact contact) {
    this.record = contact;
    Integer len = 10;
    Blob blobKey = crypto.generateAesKey(128);
    String key = EncodingUtil.convertToHex(blobKey);
    fakeId = key.substring(0,len);

`
const lang = 'apex'
</script>

<template>
  <main>
    Test
    <ContentDoc />
  </main>
</template>

<script setup lang="ts">
const docs = await queryContent('docs').find()
</script>

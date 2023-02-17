<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    videoId?: string | null
    aspectRatio?: string | null
  }>(),
  { videoId: '', aspectRatio: '6:9' }
)

const [width, height] = props.aspectRatio?.split(':')
</script>

<template>
  <div :class="`aspect-w-[${width}] aspect-h-[${height}]`">
    <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full" :src="`https://www.youtube.com/embed/${videoId}`" allow="fullscreen" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
  </div>
</template>

<template>
  <h4 :id="id">
    <slot />
  </h4>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id?: string }>()
const heading = 4
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

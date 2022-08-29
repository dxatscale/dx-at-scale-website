<template>
  <li v-for="item in navigation">
    <a :href="item.href" :key="item.name" class="text-base block px-3 md:px-0 py-2 hover:text-pink-500 dark:hover:text-pink-400">{{ item.name }}</a>
  </li>
</template>

<script>
  const navigation = [
    { name: 'About', href: '#' },
    { name: 'Getting Started', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Blog', href: '#' }
  ]

  export default {
    setup() {
      return {
        navigation,
      }
    }
  }
</script>
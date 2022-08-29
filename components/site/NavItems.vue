<template>
  <li v-for="item in navigation">
    <a :href="item.href" :key="item.name" class="hover:text-sky-500 dark:hover:text-sky-400">{{ item.name }}</a>
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
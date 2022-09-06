<template>
  <li v-for="item in navigation">
    <a :href="item.href" :key="item.name" class="text-base block px-3 md:px-0 py-2 hover:text-pink-500 dark:hover:text-pink-400">{{ item.name }}</a>
  </li>
</template>

<script>
  const navigation = [
    { name: 'About', href: 'https://docs.dxatscale.io/about-us/meet-our-team' },
    { name: 'Documentation', href: 'https://docs.dxatscale.io/' },
    { name: 'Getting Started', href: 'https://docs.dxatscale.io/implementing-your-ci-cd/prerequisites' },
    { name: 'Release Logs', href: 'https://github.com/dxatscale/dxatscale/releases' }
  ]

  export default {
    setup() {
      return {
        navigation,
      }
    }
  }
</script>
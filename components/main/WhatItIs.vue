<template>
  <section aria-label="What is DX@Scale?" class="relative overflow-hidden pb-28 py-12 sm:py-24 bg-cover bg-bottom bg-[url('~/assets/img/bg/features.jpg')]">
    <div>
      <div class="max-w-7xl mx-auto relative px-4">
        <div class="dark:text-white/70 max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 class="py-12 text-center text-base font-semibold uppercase text-white tracking-wider">What is DX@Scale?
          </h2>
          <p class="text-lg tracking-tight text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro magnam vel omnis repellendus optio ea animi molestiae harum odit, quis dolorum voluptatum aperiam, facere voluptates officiis quibusdam nobis iure? Soluta?
          </p>
        </div>
        <TabGroup :selectedIndex="selectedTab" @change="changeTab" as="div"
          class="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0" vertical>
          <div class="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            <TabList
              class="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
              <div v-for="(feature, index) in features"
                class="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6"
                :class="[index === selectedTab ? 'bg-pink-500 lg:bg-sky-200/20 lg:ring-1 lg:ring-inset lg:ring-white/10' : 'hover:bg-slate-800 lg:hover:bg-sky-200/10']">
                <h3>
                  <Tab class="font-display text-lg focus:outline-none"
                    :class="[index === selectedTab ? 'text-white' : 'text-white']">
                    <span class="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                    {{ feature.title }}
                  </Tab>
                </h3>
                <p class="mt-2 hidden text-sm lg:block"
                  :class="[index === selectedTab ? 'text-white' : 'text-white hover:text-white']">
                  {{ feature.description }}
                </p>
              </div>
            </TabList>
          </div>
          <TabPanels class="lg:col-span-7">
            <TabPanel v-for="feature in features" :unmount="false">
              <div class="relative sm:px-6 lg:hidden">
                <div class="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                <p class="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                  {{ feature.description }}
                </p>
              </div>
              <div
                class="mt-10 w-[45rem] overflow-hidden rounded-xl bg-white shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                <img :src="`${feature.image}`" :alt="`${feature.title}`" />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  </section>
</template>

<script setup>

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
const features = [
  {
    title: 'Orchestrator',
    description:
      "Do not spend time with custom scripts anymore, the orchestrator uses your application manifest to deploy everything auto-magically",
    image: "/assets/img/screenshots/payroll.png",
  },
  {
    title: 'Scratch Org Pool',
    description:
      "Your development and CI/CD environments in sync with your latest commits in minutes instead of hours",
    image: "/assets/img/screenshots/expenses.png",
  },
  {
    title: 'Use your own CI/CD',
    description:
      "DX@Scale plays well with your existing CI/CD",
    image: "/assets/img/screenshots/vat-returns.png",
  },
  {
    title: 'Reports',
    description:
      'All metrics are exposed so you can build your own dashboards and better monitor your development performance',
    image: "/assets/img/screenshots/reports-light.jpg",
  },
]

const selectedTab = ref(0)

function changeTab(index) {
  selectedTab.value = index
  console.log('Changed active tab to:', index)
}

function getImageUrl(image) {
  return require(image)
}
</script>

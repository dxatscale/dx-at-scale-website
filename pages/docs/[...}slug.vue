<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

const mobileMenuOpen = ref(false)
const { path } = useRoute()
const { data } = await useAsyncData(`${path}`, async () => {
  let article = queryContent().where({ _path: path }).findOne()
  let surround = queryContent().only(['_path', 'title', 'description']).sort({ date: 1 }).findSurround(path)

  return {
    article: await article,
    surround: await surround,
  }
})

const [prev, next] = data.value?.surround
const section = data.value?.article.section
const title = data.value?.article.title
const subTitle = data.value?.article['sub-title']
</script>

<template>
  <main-nav />
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileMenuOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white px-4 pb-12 shadow-xl dark:bg-slate-900">
              <button @click="mobileMenuOpen = false" type="button" class="absolute top-5 right-5 z-10 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                <span class="sr-only">Close navigation</span>
                <svg viewBox="0 0 10 10" class="h-2.5 w-2.5 overflow-visible"><path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>
              </button>
              <docs-nav />
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>

  <!--  -->
  <div class="z-50 flex items-center border-b border-slate-900/10 p-4 dark:border-slate-50/[0.06] lg:hidden">
    <button type="button" class="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" @click="mobileMenuOpen = true">
      <span class="sr-only">Navigation</span>
      <svg width="24" height="24"><path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>
    </button>
    <ol class="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
      <li class="flex items-center text-slate-600 dark:text-slate-400">
        {{ section }}
        <svg width="3" height="6" aria-hidden="true" class="mx-3 overflow-visible text-slate-400"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
      </li>
      <li class="truncate font-semibold text-slate-900 dark:text-slate-200">{{ title }}</li>
    </ol>
  </div>
  <div class="doc mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
    <div class="fixed inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto hidden w-[19.5rem] overflow-y-auto px-8 pb-10 lg:block">
      <docs-nav />
    </div>

    <div class="lg:pl-[19.5rem]">
      <div class="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
        <header id="header" class="relative">
          <div>
            <p class="mb-2 text-sm font-semibold leading-6 text-sky-500 dark:text-sky-400">{{ section }}</p>
            <div class="flex items-center">
              <h1 class="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">{{ title }}</h1>
            </div>
          </div>
          <p class="mt-2 text-lg text-slate-700 dark:text-slate-400">{{ subTitle }}</p>
        </header>

        <div id="content-wrapper" class="prose prose-slate relative mt-12 max-w-8xl dark:prose-invert">
          <ContentDoc />
        </div>

        <docs-footer :prev="prev" :next="next" />

        <!-- Aside -->
        <div class="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] hidden w-[19.5rem] overflow-y-auto py-10 xl:block">
          <docs-aside :links="data?.article.body.toc.links" />
        </div>
      </div>
    </div>
  </div>
</template>

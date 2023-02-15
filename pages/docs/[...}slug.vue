<script setup lang="ts">
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
  <div class="doc mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
    <docs-nav />
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

        <div id="content-wrapper" class="dark:prose-dark prose prose-slate relative mt-12">
          <ContentDoc />
        </div>
        <docs-footer :prev="prev" :next="next" />

        <!-- Aside -->
        <div class="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] hidden w-[19.5rem] overflow-y-auto py-10 xl:block">
          <docs-aside :links="data.article.body.toc.links" />
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <main-nav />
  <div class="doc mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
    <docs-nav />
    <div class="lg:pl-[19.5rem]">
      <div class="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
        <header id="header" class="relative">
          <div>
            <p class="mb-2 text-sm font-semibold leading-6 text-sky-500 dark:text-sky-400">Interactivity</p>
            <div class="flex items-center"><h1 class="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">Will Change</h1></div>
          </div>
          <p class="mt-2 text-lg text-slate-700 dark:text-slate-400">Utilities for optimizing upcoming animations of elements that are expected to change.</p>
        </header>

        <div id="content-wrapper" class="dark:prose-dark prose prose-slate relative mt-12">
          <ContentDoc />
        </div>
        <footer class="mt-12 text-sm leading-6">
          <div class="mb-10 flex items-center font-semibold text-slate-700 dark:text-slate-200">
            <!-- Previous article -->
            <a class="group flex items-center hover:text-slate-900 dark:hover:text-white" href="/docs/user-select">
              <svg viewBox="0 0 3 6" class="mr-3 h-1.5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"><path d="M3 0L0 3L3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              User Select
            </a>
            <!-- Next article -->
            <a class="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white" href="/docs/fill">
              Fill
              <svg viewBox="0 0 3 6" class="ml-3 h-1.5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </div>
          <!-- Footer -->
          <div class="justify-between border-t border-slate-200 pt-10 pb-28 text-slate-500 dark:border-slate-200/5 sm:flex">
            <div class="mb-6 sm:mb-0 sm:flex">
              <p>Copyright © 2023 DX@Scale</p>
              <p class="sm:ml-4 sm:border-l sm:border-slate-200 sm:pl-4 dark:sm:border-slate-200/5"><a class="hover:text-slate-900 dark:hover:text-slate-400" href="#">Brand</a></p>
            </div>
            <a class="hover:text-slate-900 dark:hover:text-slate-400" href="#">Edit this page on GitHub</a>
          </div>
        </footer>

        <!-- Aside -->
        <div class="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] hidden w-[19.5rem] overflow-y-auto py-10 xl:block">
          <div class="px-8">
            <h5 class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">On this page</h5>
            <ul class="text-sm leading-6 text-slate-700">
              <li><a href="#" class="block py-1 font-medium text-sky-500 dark:text-sky-400">Quick reference</a></li>
              <li><a href="#" class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Basic usage</a></li>

              <li><a href="#" class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Applying conditionally</a></li>
              <li class="ml-4">
                <a href="#hover-focus-and-other-states" class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                  <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
                  Hover, focus, and other states
                </a>
              </li>
              <li class="ml-4">
                <a href="#breakpoints-and-media-queries" class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                  <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
                  Breakpoints and media queries
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

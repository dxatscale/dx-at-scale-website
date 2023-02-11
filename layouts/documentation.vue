<template>
  <main-nav />
  <div class="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
    <div class="fixed inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto hidden w-[19.5rem] overflow-y-auto px-8 pb-10 lg:block">
      <nav id="nav" class="relative lg:text-sm lg:leading-6">
        <div class="pointer-events-none sticky top-0 -ml-0.5">
          <div class="h-10 bg-white dark:bg-slate-900"></div>
          <div class="pointer-events-auto relative bg-white dark:bg-slate-900">
            <button type="button" class="hidden w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700 lg:flex">
              <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none">
                <path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
              </svg>
              Quick search...
              <span class="ml-auto flex-none pl-3 text-xs font-semibold">⌘K</span>
            </button>
          </div>
          <div class="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
        </div>
        <ul>
          <li>
            <a href="https://www.youtube.com/tailwindlabs" class="group mb-4 flex items-center font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 lg:text-sm lg:leading-6">
              <div class="mr-4 rounded-md shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-pink-200 group-hover:ring-slate-900/10 dark:bg-slate-800 dark:shadow-none dark:ring-0 dark:highlight-white/5 dark:group-hover:bg-pink-500 dark:group-hover:shadow-none dark:group-hover:highlight-white/10">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" class="fill-pink-400 group-hover:fill-pink-500 dark:fill-slate-600 dark:group-hover:fill-pink-300"></path>
                  <path d="M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z" class="fill-pink-50 group-hover:fill-pink-100 dark:fill-slate-400 dark:group-hover:fill-white"></path>
                </svg>
              </div>
              Screencasts
            </a>
          </li>
          <li>
            <a href="https://github.com/tailwindlabs/tailwindcss/discussions" class="group mb-4 flex items-center font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 lg:text-sm lg:leading-6">
              <div class="mr-4 rounded-md shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-violet-200 group-hover:ring-slate-900/10 dark:bg-slate-800 dark:shadow-none dark:ring-0 dark:highlight-white/5 dark:group-hover:bg-violet-500 dark:group-hover:shadow-none dark:group-hover:highlight-white/10">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z" class="fill-violet-400 group-hover:fill-violet-500 dark:fill-slate-600 dark:group-hover:fill-violet-300"></path>
                  <circle cx="12" cy="11" r="1" class="fill-white dark:fill-slate-400 dark:group-hover:fill-white"></circle>
                  <circle cx="9" cy="11" r="1" class="fill-violet-200 dark:fill-slate-400 dark:group-hover:fill-white"></circle>
                  <circle cx="15" cy="11" r="1" class="fill-violet-200 dark:fill-slate-400 dark:group-hover:fill-white"></circle>
                </svg>
              </div>
              Community
            </a>
          </li>
          <li class="mt-12 lg:mt-8">
            <h5 class="mb-8 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">Getting Started</h5>
            <ul class="space-y-6 border-l border-slate-100 dark:border-slate-800 lg:space-y-2">
              <li><a class="-ml-px block border-l border-current pl-4 font-semibold text-sky-500 dark:text-sky-400" href="/docs/editor-setup">Editor Setup</a></li>
              <li><a class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300" href="/docs/editor-setup">Editor Setup</a></li>
              <li><a class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300" href="/docs/using-with-preprocessors">Using with Preprocessors</a></li>
              <li><a class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300" href="/docs/optimizing-for-production">Optimizing for Production</a></li>
              <li><a class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300" href="/docs/browser-support">Browser Support</a></li>
              <li><a class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300" href="/docs/upgrade-guide">Upgrade Guide</a></li>
            </ul>
          </li>
          <li class="mt-12 lg:mt-8">
            <h5 class="mb-8 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">Core Concepts</h5>
            <ul class="space-y-6 border-l border-slate-100 dark:border-slate-800 lg:space-y-2">
              <li><a class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300" href="/docs/utility-first">Utility-First Fundamentals</a></li>
              <li><a class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300" href="/docs/hover-focus-and-other-states">Hover, Focus, and Other States</a></li>
              <li><a class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300" href="/docs/responsive-design">Responsive Design</a></li>
              <li><a class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300" href="/docs/dark-mode">Dark Mode</a></li>
              <li><a class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300" href="/docs/reusing-styles">Reusing Styles</a></li>
              <li><a class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300" href="/docs/adding-custom-styles">Adding Custom Styles</a></li>
              <li><a class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300" href="/docs/functions-and-directives">Functions &amp; Directives</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <div class="lg:pl-[19.5rem]">
      <div class="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
        <header id="header" class="relative z-20">
          <div>
            <p class="mb-2 text-sm font-semibold leading-6 text-sky-500 dark:text-sky-400">Interactivity</p>
            <div class="flex items-center"><h1 class="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">Will Change</h1></div>
          </div>
          <p class="mt-2 text-lg text-slate-700 dark:text-slate-400">Utilities for optimizing upcoming animations of elements that are expected to change.</p>
        </header>

        <div id="content-wrapper" class="dark:prose-dark prose prose-slate relative z-20 mt-12">
          <!-- Content -->
          <slot />
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

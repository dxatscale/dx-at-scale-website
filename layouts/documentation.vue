<template>
  <main-nav />
  <div class="relative mx-auto flex max-w-7xl justify-center sm:px-2 lg:px-8 xl:px-12">
    <div class="hidden lg:relative lg:block lg:flex-none">
      <div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"></div>
      <div class="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"></div>
      <div class="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block"></div>
      <div class="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
        <nav class="w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16">
          <ul role="list" class="space-y-9">
            <li>
              <h2 class="font-display font-medium text-slate-900 dark:text-white">Introduction</h2>
              <ul role="list" class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/">Getting started</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/installation">Installation</a></li>
              </ul>
            </li>
            <li>
              <h2 class="font-display font-medium text-slate-900 dark:text-white">Core concepts</h2>
              <ul role="list" class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                <li class="relative"><a class="block w-full pl-3.5 font-semibold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500" href="/docs/understanding-caching">Understanding caching</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/predicting-user-behavior">Predicting user behavior</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/basics-of-time-travel">Basics of time-travel</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/introduction-to-string-theory">Introduction to string theory</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/the-butterfly-effect">The butterfly effect</a></li>
              </ul>
            </li>
            <li>
              <h2 class="font-display font-medium text-slate-900 dark:text-white">Advanced guides</h2>
              <ul role="list" class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/writing-plugins">Writing plugins</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/neuralink-integration">Neuralink integration</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/temporal-paradoxes">Temporal paradoxes</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/testing">Testing</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/compile-time-caching">Compile-time caching</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/predictive-data-generation">Predictive data generation</a></li>
              </ul>
            </li>
            <li>
              <h2 class="font-display font-medium text-slate-900 dark:text-white">API reference</h2>
              <ul role="list" class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/cacheadvance-predict">CacheAdvance.predict()</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/cacheadvance-flush">CacheAdvance.flush()</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/cacheadvance-revert">CacheAdvance.revert()</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/cacheadvance-regret">CacheAdvance.regret()</a></li>
              </ul>
            </li>
            <li>
              <h2 class="font-display font-medium text-slate-900 dark:text-white">Contributing</h2>
              <ul role="list" class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/how-to-contribute">How to contribute</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/architecture-guide">Architecture guide</a></li>
                <li class="relative"><a class="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/design-principles">Design principles</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
      <article>
        <header class="mb-9 space-y-1">
          <p class="font-display text-sm font-medium text-sky-500">Core concepts</p>
          <h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">Understanding caching</h1>
        </header>
        <div class="prose-headings:font-display prose prose-slate max-w-none prose-headings:scroll-mt-28 prose-headings:font-normal prose-a:font-semibold prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg prose-lead:text-slate-500 dark:prose-invert dark:text-slate-400 dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:text-sky-400 dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px] dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400 lg:prose-headings:scroll-mt-[8.5rem]">
          <p>Quasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis.</p>
          <hr />
          <h2 id="quis-vel-iste-dicta">Quis vel iste dicta</h2>
          <p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.</p>
          <h3 id="et-pariatur-ab-quas">Et pariatur ab quas</h3>
          <p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.</p>
          <pre class="prism-code language-js"><code><span class="token comment">/** @type {import('@tailwindlabs/lorem').ipsum} */</span><span class="token plain"></span>
<span class="token plain"></span><span class="token keyword module">export</span><span class="token plain"> </span><span class="token keyword module">default</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>
<span class="token plain">  </span><span class="token literal-property property">lorem</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">'ipsum'</span><span class="token punctuation">,</span><span class="token plain"></span>
<span class="token plain">  </span><span class="token literal-property property">dolor</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">[</span><span class="token string">'sit'</span><span class="token punctuation">,</span><span class="token plain"> </span><span class="token string">'amet'</span><span class="token punctuation">,</span><span class="token plain"> </span><span class="token string">'consectetur'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token plain"></span>
<span class="token plain">  </span><span class="token literal-property property">adipiscing</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>
<span class="token plain">    </span><span class="token literal-property property">elit</span><span class="token operator">:</span><span class="token plain"> </span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token plain"></span>
<span class="token plain">  </span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token plain"></span>
<span class="token plain"></span><span class="token punctuation">}</span>
</code></pre>
          <p>Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.</p>
          <h3 id="natus-aspernatur-iste">Natus aspernatur iste</h3>
          <p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.</p>
          <p>Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.</p>
          <hr />
          <h2 id="quos-porro-ut-molestiae">Quos porro ut molestiae</h2>
          <p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.</p>
          <h3 id="voluptatem-quas-possimus">Voluptatem quas possimus</h3>
          <p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.</p>
          <p>Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.</p>
          <h3 id="id-vitae-minima">Id vitae minima</h3>
          <p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.</p>
          <p>Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.</p>
          <hr />
          <h2 id="vitae-laborum-maiores">Vitae laborum maiores</h2>
          <p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.</p>
          <h3 id="corporis-exercitationem">Corporis exercitationem</h3>
          <p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.</p>
          <p>Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.</p>
          <h3 id="reprehenderit-magni">Reprehenderit magni</h3>
          <p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.</p>
          <p>Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.</p>
        </div>
      </article>
      <dl class="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
        <div>
          <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">Previous</dt>
          <dd class="mt-1">
            <a class="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/installation">
              <span aria-hidden="true">←</span>
              Installation
            </a>
          </dd>
        </div>
        <div class="ml-auto text-right">
          <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">Next</dt>
          <dd class="mt-1">
            <a class="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/predicting-user-behavior">
              Predicting user behavior
              <!-- -->
              <span aria-hidden="true">→</span>
            </a>
          </dd>
        </div>
      </dl>
    </div>
    <div class="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
      <nav aria-labelledby="on-this-page-title" class="w-56">
        <h2 id="on-this-page-title" class="font-display text-sm font-medium text-slate-900 dark:text-white">On this page</h2>
        <ol role="list" class="mt-4 space-y-3 text-sm">
          <li>
            <h3><a class="text-sky-500" href="/docs/understanding-caching#quis-vel-iste-dicta">Quis vel iste dicta</a></h3>
            <ol role="list" class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
              <li><a class="hover:text-slate-600 dark:hover:text-slate-300" href="/docs/understanding-caching#et-pariatur-ab-quas">Et pariatur ab quas</a></li>
              <li><a class="hover:text-slate-600 dark:hover:text-slate-300" href="/docs/understanding-caching#natus-aspernatur-iste">Natus aspernatur iste</a></li>
            </ol>
          </li>
          <li>
            <h3><a class="font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/understanding-caching#quos-porro-ut-molestiae">Quos porro ut molestiae</a></h3>
            <ol role="list" class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
              <li><a class="hover:text-slate-600 dark:hover:text-slate-300" href="/docs/understanding-caching#voluptatem-quas-possimus">Voluptatem quas possimus</a></li>
              <li><a class="hover:text-slate-600 dark:hover:text-slate-300" href="/docs/understanding-caching#id-vitae-minima">Id vitae minima</a></li>
            </ol>
          </li>
          <li>
            <h3><a class="font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/understanding-caching#vitae-laborum-maiores">Vitae laborum maiores</a></h3>
            <ol role="list" class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
              <li><a class="hover:text-slate-600 dark:hover:text-slate-300" href="/docs/understanding-caching#corporis-exercitationem">Corporis exercitationem</a></li>
              <li><a class="hover:text-slate-600 dark:hover:text-slate-300" href="/docs/understanding-caching#reprehenderit-magni">Reprehenderit magni</a></li>
            </ol>
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <main class="doc">
    <slot />
  </main>
</template>

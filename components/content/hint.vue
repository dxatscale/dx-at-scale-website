<template>
  <div class="mt-2 flex overflow-hidden rounded-lg border-l-4 border-sky-200 bg-sky-100 px-2 dark:border-sky-900 dark:bg-sky-900/50">
    <div class="mr-4 w-8 flex-shrink-0 self-center text-sky-500">
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 512 512">
        <path fill="currentColor" d="M256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336z" />
        <path fill="currentColor" fill-opacity=".4" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" />
      </svg>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<template>
  <div class="max-w-7xl px-4 py-48 mt-48 m-auto bg-white sm:px-8 dark:bg-gray-800 sm:rounded">
    <!-- Fetch and display the Markdown document from current path -->
    <ContentDoc class="prose prose-gray dark:prose-invert max-w-none">
      <!-- Slot if document is not found -->
      <template #not-found>
        <h1 class="text-2xl">
          Page not found
        </h1>
      </template>
    </ContentDoc>
  </div>
</template>

<style lang="postcss">
</style>

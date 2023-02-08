<template>
  <div class="bg-white/10 backdrop-blur dark:bg-slate-900/10 lg:rounded-xl">
    <div class="p-4">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Production Install Time</h1>
        </div>
      </div>
      <div class="-mx-4 mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table class="min-w-full divide-y divide-slate-300 dark:divide-slate-700">
          <thead class="bg-slate-50 dark:bg-slate-800">
            <tr>
              <th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-slate-100 sm:pl-6">Package</th>
              <th scope="col" class="hidden px-3 py-2 text-left text-sm font-semibold text-slate-900 dark:text-slate-100 lg:table-cell">Metadata Count</th>
              <th scope="col" class="px-3 py-2 text-left text-sm font-semibold text-slate-900 dark:text-slate-100">Install Time</th>
              <th scope="col" class="px-3 py-2 text-left text-sm font-semibold text-slate-900 dark:text-slate-100">Average Time</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900">
            <tr v-for="module in modules" :key="module.name">
              <td class="py-1 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-slate-100 sm:w-auto sm:max-w-none sm:pl-6">
                {{ module.name }}
                <dl class="font-normal lg:hidden">
                  <dt class="sr-only">Metadata Count</dt>
                  <dd class="mt-1 truncate text-slate-700 dark:text-slate-400">
                    {{ module.metadataCount }}
                    <span class="text-slate-500">metadata type</span>
                  </dd>
                </dl>
              </td>
              <td class="hidden px-3 py-2 text-sm text-slate-500 lg:table-cell">{{ module.metadataCount }}</td>
              <!-- <td class="hidden px-3 py-2 text-sm text-slate-500 sm:table-cell">{{ module.installTime }}</td> -->
              <td class="px-3 py-2 text-sm text-slate-500">
                <div class="relative h-4 w-full rounded-2xl bg-slate-200 dark:bg-slate-800">
                  <div class="absolute top-0 left-0 flex h-full items-center justify-center rounded-md bg-red-500 text-xs font-semibold text-white" :style="getWidthStyle(module.installTime)">{{ module.installTime }}</div>
                </div>
              </td>
              <td class="px-3 py-2 text-sm text-slate-500">
                <div class="relative h-4 w-full rounded-2xl bg-slate-200 dark:bg-slate-800">
                  <div class="absolute top-0 left-0 flex h-full items-center justify-center rounded-md bg-red-500 text-xs font-semibold text-white" :style="getWidthStyle(module.averageInstallTime)">{{ module.averageInstallTime }}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="p-4">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Last 7 days</h1>
        </div>
      </div>
      <div>
        <dl class="mt-5 grid grid-cols-1 divide-y divide-slate-200 overflow-hidden rounded-lg bg-white shadow dark:divide-slate-800 dark:bg-slate-900 md:grid-cols-2 md:divide-y-0 md:divide-x">
          <div v-for="item in stats" :key="item.name" class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-normal text-slate-900 dark:text-slate-100">{{ item.name }}</dt>
            <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div class="flex items-baseline text-xl font-semibold text-purple-600 dark:text-purple-400">
                {{ item.stat }}
                <span class="ml-2 text-xs font-medium text-slate-500">from {{ item.previousStat }}</span>
              </div>

              <div :class="[item.changeType === 'better' ? 'bg-green-100 text-green-800 dark:bg-green-500 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-500 dark:text-red-100', 'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-xs font-medium md:mt-2 lg:mt-0']">
                <ArrowUpIcon v-if="parseFloat(item.change) >= 0" class="-ml-1 mr-0.5 h-4 w-4 flex-shrink-0 self-center" aria-hidden="true" />
                <ArrowDownIcon v-else class="-ml-1 mr-0.5 h-4 w-4 flex-shrink-0 self-center" aria-hidden="true" />
                <span class="sr-only">{{ item.changeType === 'better' ? 'Improved' : 'Deteriorated' }} by</span>
                {{ item.change }}
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/20/solid'

const modules = [
  {
    name: 'sales',
    installTime: 12.09,
    metadataCount: 428,
    averageInstallTime: 7.23,
  },
  {
    name: 'service',
    installTime: 7.94,
    metadataCount: 210,
    averageInstallTime: 5.58,
  },
  {
    name: 'billing-product-pre',
    installTime: 2.39,
    metadataCount: 28,
    averageInstallTime: 1.23,
  },
  {
    name: 'billing-product-post',
    installTime: 3.23,
    metadataCount: 8,
    averageInstallTime: 0.5,
  },
  {
    name: 'case-config',
    installTime: 2.24,
    metadataCount: 132,
    averageInstallTime: 4.5,
  },
  {
    name: 'case-entitlements',
    installTime: 4.17,
    metadataCount: 48,
    averageInstallTime: 4.23,
  },
  {
    name: 'web-to-case-api',
    installTime: 7.29,
    metadataCount: 26,
    averageInstallTime: 3.57,
  },
  {
    name: 'marketing-preferences',
    installTime: 1.98,
    metadataCount: 8,
    averageInstallTime: 2.18,
  },
]
const stats = [
  { name: '# Pull Requests', stat: '137', previousStat: '118', change: '16%', changeType: 'better' },
  { name: 'Validation Time in mn', stat: '14.41', previousStat: '15.13', change: '-4.1%', changeType: 'better' },
  { name: 'Success Rate', stat: '60.87%', previousStat: '70.62%', change: '-13.8%', changeType: 'worse' },
  { name: 'Feedback Time in mn', stat: '11.9', previousStat: '13.2', change: '-9.8%', changeType: 'better' },
]
const getWidthStyle = (t: number) => {
  const widthPercentage = Math.min(100, Math.round((t / 10) * 100))
  return `width: ${widthPercentage}%; background-color: ${widthPercentage > 50 ? '#ef4444' : '#84cc16'};`
}
</script>

<script setup lang="ts">
import { VTermynal, VtInput, VtProgress, VtText, VtSpinner } from '@lehoczky/vue-termynal'
const container = ref<HTMLDivElement | null>(null)

const scrollToNewLine = (event: Event) => {
  let line = event as HTMLElement | unknown

  if (line instanceof HTMLElement && container.value) {
    if (line.offsetTop + line.offsetHeight > container.value?.offsetHeight) {
      container.value?.scrollTo({
        top: line.offsetTop + line.offsetHeight - container.value?.offsetHeight,
        behavior: 'smooth',
      })
    }
  } else {
    return
  }
}
</script>

<template>
  <div class="relative">
    <div class="relative overflow-hidden bg-slate-50 pt-2 shadow-xl ring-1 ring-inset ring-slate-500/20 backdrop-blur dark:bg-slate-800 dark:bg-slate-900/70 dark:ring-white/10 sm:rounded-xl lg:grid lg:grid-cols-2 lg:grid-rows-1">
      <div class="row-span-2 border-t border-slate-300/30 pt-1.5 dark:border-slate-500/30 lg:border-0 lg:pt-0">
        <div class="flex text-xs leading-6 text-slate-400">
          <div class="flex flex-none items-center border-t border-b border-t-transparent border-b-sky-600 px-4 py-1 text-sky-600 dark:border-b-sky-400 dark:text-sky-400">
            Terminal
            <svg viewBox="0 0 4 4" class="ml-2.5 h-1 w-1 flex-none overflow-visible text-slate-500"><path d="M-1 -1L5 5M5 -1L-1 5" fill="none" stroke="currentColor" stroke-linecap="round"></path></svg>
          </div>
          <div class="flex flex-auto items-center rounded-tl border border-slate-300/30 bg-slate-200/50 dark:border-slate-500/30 dark:bg-slate-800/50">
            <div class="flex flex-auto items-center justify-end space-x-4 px-4">
              <svg width="12" height="2" fill="currentColor">
                <circle cx="1" cy="1" r="1"></circle>
                <circle cx="6" cy="1" r="1"></circle>
                <circle cx="11" cy="1" r="1"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex min-h-0 w-full flex-auto overflow-hidden scroll-smooth p-2 font-mono text-xs">
          <v-termynal :lazy="true" :type-delay="30" :line-delay="400" :start-delay="0" class="terminal" @before-new-line="scrollToNewLine($event)">
            <div ref="container" class="line-container font-mono text-xs">
              <vt-input class="prompt">sfdx sfpowerscripts:orchestrator:quickbuild -v MyDevHub --branch main</vt-input>
              <vt-spinner />
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">-------------------------------------------------------------------------------------------</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">sfpowerscripts -- The DX@Scale CI/CD Orchestrator -Version:20.2.11 -Release:November 22</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">-------------------------------------------------------------------------------------------</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">command: quickbuild</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">Build Packages Only Changed: false</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">Config File Path: config/project-scratch-def.json</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">Artifact Directory: artifacts</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">--------------------------------------------------------------</vt-text>
              <vt-spinner :line-delay="0" prefix="Invoking Build" type="point"></vt-spinner>
              <vt-text :line-delay="0" class="text-purple-700 dark:text-purple-400">Packages scheduled for build</vt-text>
              <vt-text :line-delay="0">Package&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reason to be built</vt-text>
              <vt-text :line-delay="0">--------------- --------------------------------------</vt-text>
              <vt-text :line-delay="0">ESObjects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Activated as part of all package build</vt-text>
              <vt-text :line-delay="0">ESBaseStylesLWC Activated as part of all package build</vt-text>
              <vt-text :line-delay="0">ESBaseCodeLWC&nbsp;&nbsp; Activated as part of all package build</vt-text>
              <vt-text :line-delay="0">ESSpaceMgmtLWC&nbsp; Activated as part of all package build</vt-text>
              <vt-text :line-delay="0"></vt-text>
              <vt-spinner :line-delay="0" prefix="Resolving dependencies" type="point"></vt-spinner>
              <vt-text :line-delay="700"></vt-text>
              <vt-text :line-delay="0">&nbsp;&nbsp;&nbsp;&nbsp;Packages currently processed: {2} ESObjects, ESBaseStylesLWC</vt-text>
              <vt-text :line-delay="0">&nbsp;&nbsp;&nbsp;&nbsp;Awaiting Dependencies to be resolved: {2} ESBaseCodeLWC, ESSpaceMgmtLWC</vt-text>
              <vt-text :line-delay="700"></vt-text>
              <vt-text :line-delay="0" class="text-purple-700 dark:text-purple-400">&nbsp;&nbsp;&nbsp;&nbsp;Package creation initiated for ESObjects</vt-text>
              <vt-text :line-delay="0" class="text-purple-700 dark:text-purple-400">&nbsp;&nbsp;&nbsp;&nbsp;Package creation initiated for ESBaseStylesWC</vt-text>

              <vt-text :line-delay="700"></vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;ESObjects package created in 00:00:30.986</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;-- Package Details:--</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Package Type : unlocked</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Package Version Number : 55.0.0.80</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Package Version Id : 04t5f0000NtABAA0</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Metadata Count : 23</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Apex In Package : Yes</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Profiles In Package : No</vt-text>
              <vt-text :line-delay="0"></vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;ESObjects package created in 00:00:20.183</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;-- Package Details:--</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Package Type : unlocked</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Package Version Number : 55.0.0.54</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Package Version Id : 04t5f000000ABAA0</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Metadata Count : 32</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Apex In Package : No</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Profiles In Package : No</vt-text>
              <vt-text :line-delay="700"></vt-text>
              <vt-text :line-delay="0" class="text-purple-700 dark:text-purple-400">&nbsp;&nbsp;&nbsp;&nbsp;Package creation initiated for ESBaseCodeLWC</vt-text>
              <vt-text :line-delay="0" class="text-purple-700 dark:text-purple-400">&nbsp;&nbsp;&nbsp;&nbsp;Package creation initiated for ESSpaceMgmtLWC</vt-text>
              <vt-text :line-delay="0"></vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;ESBaseCodeLWC package created in 00:01:26.86</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;-- Package Details:--</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Package Type : unlocked</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Package Version Number : 55.0.0.32</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Package Version Id : 04t5f0000NtABCAA0</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Metadata Count : 68</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Apex In Package : Yes</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Profiles In Package : No</vt-text>
              <vt-text :line-delay="0"></vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;ESSpaceMgmtLWC package created in 00:03:10.13</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;-- Package Details:--</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Package Type : unlocked</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Package Version Number : 55.0.0.94</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Package Version Id : 04t5f00000CBAA0</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Metadata Count : 74</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Apex In Package : Yes</vt-text>
              <vt-text :line-delay="0" class="text-amber-700 dark:text-amber-300">&nbsp;&nbsp;&nbsp;&nbsp;Profiles In Package : No</vt-text>
              <vt-text :line-delay="700"></vt-text>
              <vt-text :line-delay="0" class="text-green-700 dark:text-green-300">----------------------------------------------------------------------------------------------------</vt-text>
              <vt-text :line-delay="0" class="text-green-700 dark:text-green-300">4 packages created in 00:00:04.32 minutes with {0} errors}</vt-text>
              <vt-text :line-delay="0" class="text-green-700 dark:text-green-300">----------------------------------------------------------------------------------------------------</vt-text>
            </div>
          </v-termynal>
        </div>
      </div>
      <div class="">
        <div class="flex text-xs leading-6 text-slate-400">
          <div class="flex flex-none items-center border-t border-b border-t-transparent border-b-sky-600 px-4 py-1 text-sky-600 dark:text-sky-400">
            <p class="mx-2 inline-flex items-center">
              <svg class="mr-2 w-4" viewBox="0 0 16 16">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M6 2.984V2h-.09c-.313 0-.616.062-.909.185a2.33 2.33 0 0 0-.775.53a2.23 2.23 0 0 0-.493.753v.001a3.542 3.542 0 0 0-.198.83v.002a6.08 6.08 0 0 0-.024.863c.012.29.018.58.018.869c0 .203-.04.393-.117.572v.001a1.504 1.504 0 0 1-.765.787a1.376 1.376 0 0 1-.558.115H2v.984h.09c.195 0 .38.04.556.121l.001.001c.178.078.329.184.455.318l.002.002c.13.13.233.285.307.465l.001.002c.078.18.117.368.117.566c0 .29-.006.58-.018.869c-.012.296-.004.585.024.87v.001c.033.283.099.558.197.824v.001c.106.273.271.524.494.753c.223.23.482.407.775.53c.293.123.596.185.91.185H6v-.984h-.09c-.2 0-.387-.038-.563-.115a1.613 1.613 0 0 1-.457-.32a1.659 1.659 0 0 1-.309-.467c-.074-.18-.11-.37-.11-.573c0-.228.003-.453.011-.672c.008-.228.008-.45 0-.665a4.639 4.639 0 0 0-.055-.64a2.682 2.682 0 0 0-.168-.609A2.284 2.284 0 0 0 3.522 8a2.284 2.284 0 0 0 .738-.955c.08-.192.135-.393.168-.602c.033-.21.051-.423.055-.64c.008-.22.008-.442 0-.666c-.008-.224-.012-.45-.012-.678a1.47 1.47 0 0 1 .877-1.354a1.33 1.33 0 0 1 .563-.121H6zm4 10.032V14h.09c.313 0 .616-.062.909-.185c.293-.123.552-.3.775-.53c.223-.23.388-.48.493-.753v-.001c.1-.266.165-.543.198-.83v-.002c.028-.28.036-.567.024-.863c-.012-.29-.018-.58-.018-.869c0-.203.04-.393.117-.572v-.001a1.502 1.502 0 0 1 .765-.787a1.38 1.38 0 0 1 .558-.115H14v-.984h-.09c-.196 0-.381-.04-.557-.121l-.001-.001a1.376 1.376 0 0 1-.455-.318l-.002-.002a1.415 1.415 0 0 1-.307-.465v-.002a1.405 1.405 0 0 1-.118-.566c0-.29.006-.58.018-.869a6.174 6.174 0 0 0-.024-.87v-.001a3.537 3.537 0 0 0-.197-.824v-.001a2.23 2.23 0 0 0-.494-.753a2.331 2.331 0 0 0-.775-.53a2.325 2.325 0 0 0-.91-.185H10v.984h.09c.2 0 .387.038.562.115c.174.082.326.188.457.32c.127.134.23.29.309.467c.074.18.11.37.11.573c0 .228-.003.452-.011.672c-.008.228-.008.45 0 .665c.004.222.022.435.055.64c.033.214.089.416.168.609a2.285 2.285 0 0 0 .738.955a2.285 2.285 0 0 0-.738.955a2.689 2.689 0 0 0-.168.602c-.033.21-.051.423-.055.64a9.15 9.15 0 0 0 0 .666c.008.224.012.45.012.678a1.471 1.471 0 0 1-.877 1.354a1.33 1.33 0 0 1-.563.121H10z"
                  clip-rule="evenodd"
                />
              </svg>
              sfdx-project.json
              <span class="ml-2 inline-block text-slate-400">
                <svg class="w-3" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m8 8.707l3.646 3.647l.708-.707L8.707 8l3.647-3.646l-.707-.708L8 7.293L4.354 3.646l-.707.708L7.293 8l-3.646 3.646l.707.708L8 8.707z" clip-rule="evenodd" /></svg>
              </span>
            </p>
          </div>
          <div class="flex flex-auto items-center rounded-tl border border-slate-300/30 bg-slate-200/50 dark:border-slate-500/20 dark:bg-slate-900/50 lg:rounded-tr">
            <div class="flex flex-auto items-center justify-end space-x-4 px-4">
              <svg width="15" height="14" fill="none" stroke="currentColor">
                <rect width="14" height="13" x="0.5" y="0.5" rx="3"></rect>
                <path d="M7.5 0V14"></path></svg
              ><svg width="12" height="2" fill="currentColor">
                <circle cx="1" cy="1" r="1"></circle>
                <circle cx="6" cy="1" r="1"></circle>
                <circle cx="11" cy="1" r="1"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex min-h-0 w-full flex-auto overflow-hidden border-r border-slate-500/30 p-4 md:pl-0">
          <div class="relative w-full flex-auto">
            <div class="code font-mono text-xs">
              <pre class="shiki css-variables" style="background-color: var(--shiki-color-background)"><code><span class="line unchanged"><span style="color: var(--shiki-color-text)">{</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">"packageDirectories"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [{</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"path"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"./es-base-objects"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"package"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"ESObjects"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"versionName"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"Base Objects - Winter '22"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"versionNumber"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"55.0.0.NEXT"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"default"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"path"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"./es-base-styles"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"package"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"ESBaseStylesLWC"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"versionName"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"Base Styles LWC - Winter '22"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"versionNumber"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"55.0.0.NEXT"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"default"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"path"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"./es-base-code"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"package"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"ESBaseCodeLWC"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    ...</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"path"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"./es-space-mgmt"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"package"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"ESSpaceMgmtLWC"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    ...</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">  }]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">"sfdcLoginUrl"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"https://login.salesforce.com"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">"sourceApiVersion"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"55.0"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">"packageAliases"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"ESObjects"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"0Ho4W000000CaeJSAS"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">"ESBaseCodeLWC"</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">"0Ho4W000000CaeTSAS"</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">    ...</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line unchanged"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"></span></code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.line-container {
  @apply h-[51em] overflow-hidden scroll-smooth;
}
</style>

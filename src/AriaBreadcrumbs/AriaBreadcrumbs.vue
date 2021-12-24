<template>
  <div>
    <nav class="sm:hidden">
      <nuxt-link to="/" class="hover:text-gray-600 flex items-center text-sm font-semibold leading-5 text-gray-900 transition duration-150 ease-in-out">
        <svg class="flex-shrink-0 w-5 h-5 mr-1 -ml-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        Forsiden
      </nuxt-link>
    </nav>
    <nav class="sm:flex items-center hidden text-sm font-semibold leading-5">
      <div v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="flex items-center">
        <template v-if="!breadcrumb.current">
          <nuxt-link :to="breadcrumb.href" class="hover:text-brand-600 text-gray-900 transition duration-150 ease-in-out">
            {{ breadcrumb.text }}
          </nuxt-link>
          <svg class="flex-shrink-0 w-5 h-5 mx-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </template>
        <template v-else>
          <span class="text-gray-400">{{ breadcrumb.text }}</span>
        </template>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import { BreadcrumbsType } from './types'

export default {
  name: 'AriaBreadcrumbs',
  props: {
    /**
    * Shows a path in the hierarchy of which the user is currently at.
    */
    breadcrumbs: {
      type: Array as PropType<BreadcrumbsType[]>,
      required: true
    }
  }
}
</script>
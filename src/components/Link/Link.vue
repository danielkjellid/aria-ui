<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="decoration-brand-900 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 focus:border-transparent hover:text-brand-800 inline-flex items-center flex-shrink-0 text-sm font-medium text-gray-900 rounded-sm appearance-none"
  >
    <slot /> →
  </component>
</template>

<script lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/solid'
import config from '../../utils/config'

export default {
  name: 'ALink',
  components: { ArrowRightIcon },
  props: {
    tag: {
      type: String,
      required: true,
      default: () => config.defaultLinkTag,
    },
  },
}
</script>

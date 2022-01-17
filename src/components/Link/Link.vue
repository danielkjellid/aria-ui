<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="decoration-brand-900 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 focus:border-transparent hover:text-brand-800 inline-flex items-center flex-shrink-0 text-sm font-medium text-gray-900 rounded-sm appearance-none cursor-pointer"
  >
    <slot /> →
  </component>
</template>

<script lang="ts">
import config from '../../utils/config'

export default {
  name: 'ALink',
  props: {
    /**
     * Which tag to render the link as. Defaults to 'a', or whatever is set in the plugin config.
     */
    tag: {
      type: String,
      required: true,
      default: () => config.defaultLinkTag,
    },
  },
}
</script>

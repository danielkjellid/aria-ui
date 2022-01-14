<template>
  <component
    :is="tag"
    class="hover:text-gray-800 hover:bg-gray-100 group flex items-center px-4 py-2 text-sm text-gray-700"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import config from '../../utils/config'

export default {
  name: 'AActionMenuItem',
  props: {
    tag: {
      type: String,
      required: false,
      default: () => config.defaultLinkTag,
    },
  },
}
</script>

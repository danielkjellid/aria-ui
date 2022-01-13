<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="focus:outline-none focus:ring-2 focus:ring-offset-2 flex p-2 rounded-md"
    :class="
      transparentBg
        ? 'bg-transparent focus:ring-transparent focus:ring-offset-white'
        : 'bg-white focus:ring-offset-brand-800 focus:ring-white'
    "
  >
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: 'AIcon',
  props: {
    tag: {
      type: String,
      required: true,
      default: 'div',
    },
    transparentBg: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

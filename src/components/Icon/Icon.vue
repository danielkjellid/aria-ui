<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-800 focus:ring-white flex p-1 text-sm rounded-full"
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
  },
}
</script>

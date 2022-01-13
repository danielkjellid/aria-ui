<template>
  <li class="flex">
    <component :is="tag" v-bind="$attrs">
      <slot />
    </component>
  </li>
</template>

<script lang="ts">
export default {
  name: 'ListBlockItem',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
  },
}
</script>

<template>
  <li class="flex">
    <component v-if="!loading" :is="tag" v-bind="$attrs">
      <slot />
    </component>
    <a-skeleton-loader v-else :loading="loading" />
  </li>
</template>

<script lang="ts">
import ASkeletonLoader from '../SkeletonLoader/SkeletonLoader.vue'

export default {
  name: 'AListBlockItem',
  inheritAttrs: false,
  components: { ASkeletonLoader },
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

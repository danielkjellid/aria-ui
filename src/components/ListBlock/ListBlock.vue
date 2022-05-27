<template>
  <div>
    <component v-if="!loading" :is="tag" v-bind="$attrs" class="font-medium text-gray-900">
      {{ label }}
    </component>
    <a-skeleton-loader v-else :loading="loading" width="w-24" />

    <ul role="list" class="mt-6 space-y-6">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import ASkeletonLoader from '../SkeletonLoader/SkeletonLoader.vue'

/**
 * `a-list-block` is a simple component which basically just renders an unordered list with a label, and
 * WCAG appropriate attributes. The `a-list-block-item` blocks can be anything.
 */
export default {
  name: 'AListBlock',
  components: { ASkeletonLoader },
  props: {
    /**
    * Tag enclosing label.
    */
    labelTag: {
      label:String,
      required: false,
      default: 'p'
    },
    /**
     * Label on top of list block.
     */
    label: {
      type: String,
      required: true,
      default: 'ListBlock',
    },
    /**
     * Loading prop, set to true when waiting for async content.
     */
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

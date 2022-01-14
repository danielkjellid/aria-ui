<template>
  <div>
    <p v-if="!loading" class="font-medium text-gray-900">
      {{ label }}
    </p>
    <a-skeleton-loader v-else :loading="loading" width="w-24" />

    <ul role="list" class="mt-6 space-y-6">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import ASkeletonLoader from '../SkeletonLoader/SkeletonLoader.vue'

export default {
  name: 'AListBlock',
  components: { ASkeletonLoader },
  props: {
    label: {
      type: String,
      required: true,
      default: 'ListBlock',
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

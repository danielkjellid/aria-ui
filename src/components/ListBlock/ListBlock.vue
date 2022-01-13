<template>
  <div>
    <p class="font-medium text-gray-900">
      {{ label }}
    </p>
    <ul role="list" class="mt-6 space-y-6">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AListBlock',
  components: {},
  props: {
    label: {
      type: String,
      required: true,
      default: 'ListBlock',
    },
  },
  setup(_, {}) {
    return {}
  },
}
</script>

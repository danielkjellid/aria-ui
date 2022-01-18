<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex rounded-md"
    :class="
      transparentBg
        ? 'bg-transparent focus:ring-transparent focus:ring-offset-white'
        : 'bg-inherit focus:ring-offset-brand-800 focus:ring-transparent'
    "
  >
    <slot />
  </component>
</template>

<script lang="ts">
/**
 * The `a-icon-wrapper` component is a wrapper component for icons. It add appropriate
 * focus state. Slot is reserved for an actual icon. Can be rendered as any tag, and
 * binds its attributes.
 */
export default {
  name: 'AIconWrapper',
  props: {
    /**
     * Type of tag to be rendered.
     */
    tag: {
      type: String,
      required: true,
      default: 'div',
    },
    /**
     * Controls if the background is transparent, gives a white focus ring
     * instead of a brand-colored one.
     */
    transparentBg: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<template>
  <component
    :is="as"
    class="mx-auto"
    :class="[
      xPadding || xPadding === null ? xPadding : '2xl:px-8 md:px-6 lg:px-8 px-5',
      yPadding || yPadding === null ? yPadding : '2xl:py-12 py-8',
      maxWidth
        ? {
            'max-w-none': maxWidth === 'none',
            'max-w-prose': maxWidth === 'prose',
            'max-w-xs': maxWidth === 'xs',
            'max-w-sm': maxWidth === 'sm',
            'max-w-md': maxWidth === 'md',
            'max-w-xl': maxWidth === 'xl',
            'max-w-2xl': maxWidth === '2xl',
          }
        : 'container',
    ]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import { MaxWidthOptions } from './types'

export default {
  name: 'AContainer',
  props: {
    /**
     * Sets element of container. Defaults to `div`.
     */
    as: {
      type: String,
      required: false,
      default: 'div',
    },
    /**
     * In some cases padding needs to be controlled outside the component (for example if needed to align items
     * differently based on active state)
     */
    xPadding: {
      type: String,
      required: false,
      default: undefined,
    },
    /**
     * In some cases padding needs to be controlled outside the component (for example if needed to align items
     * differently based on active state)
     */
    yPadding: {
      type: String,
      required: false,
      default: undefined,
    },
    /**
     * Set a new max width for content. Should not be more than 2xl breakpoint (1536px)
     */
    maxWidth: {
      type: String as PropType<MaxWidthOptions>,
      required: false,
      default: undefined,
    },
  },
}
</script>

<template>
  <component
    :is="tag"
    :class="[
      muted ? 'text-gray-500' : 'text-gray-900',
      prose ? 'max-w-prose' : 'max-w-full',
      {
        'text-3xl font-extrabold': variant === 'title1',
        'text-3xl font-medium': variant === 'title2',
        'text-2xl semibold': variant === 'title3',
        'text-xl font-medium': variant === 'title4',
        'text-lg font-medium': variant === 'title5',
        'text-base font-medium': variant === 'subtitle1',
        'text-sm font-medium': variant === 'subtitle2',
        'text-base': variant === 'body1',
        'text-sm': variant === 'body2',
      },
      {
        'self-start': alignSelf === 'left',
        'self-center': alignSelf === 'center',
        'self-end': alignSelf === 'right',
        'self-stretch': alignSelf === 'stretch',
      },
    ]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import { TextAlignment, TextVariant } from './types'

export default {
  name: 'AText',
  components: {},
  props: {
    /**
     * Type of tag to be rendered.
     */
    tag: {
      type: String,
      required: false,
      default: 'p',
    },
    /**
     * Text variant.
     */
    variant: {
      type: String as PropType<TextVariant>,
      required: true,
    },
    /**
     * Will dim the text in a lighter color.
     */
    muted: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Aligns the text within parent. Align `justify` will fit the text
     * all the way to the edges of the parents width.
     */
    alignSelf: {
      type: String as PropType<TextAlignment>,
      required: false,
      default: 'left',
    },
    /**
     * Prose gives an element a max-width optimized for readability
     * and adapts based on the font size.
     */
    prose: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
}
</script>

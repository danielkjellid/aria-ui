<template>
  <component
    :is="tag"
    class="flex w-full h-full"
    :class="[
      direction === 'vertical' ? 'flex-col' : 'flex-row',
      {
        'space-y-2': direction === 'vertical' && spacing === 'xs',
        'space-y-4': direction === 'vertical' && spacing === 'sm',
        'space-y-5': direction === 'vertical' && spacing === 'md',
        'space-y-8': direction === 'vertical' && spacing === 'lg',
        'space-y-12': direction === 'vertical' && spacing === 'xl',
        'space-x-2': direction === 'horizontal' && spacing === 'xs',
        'space-x-4': direction === 'horizontal' && spacing === 'sm',
        'space-x-5': direction === 'horizontal' && spacing === 'md',
        'space-x-8': direction === 'horizontal' && spacing === 'lg',
        'space-x-12': direction === 'horizontal' && spacing === 'xl',
      },
      {
        'justify-start': justifyContent === 'left',
        'justify-end': justifyContent === 'right',
        'justify-center': justifyContent === 'center',
        'justify-between': justifyContent === 'between',
        'justify-around': justifyContent === 'around',
        'justify-evenly': justifyContent === 'evenly',
      },
      {
        'items-start': alignItems === 'top',
        'items-end': alignItems === 'bottom',
        'items-center': alignItems === 'center',
        'items-baseline': alignItems === 'baseline',
        'items-stretch': alignItems === 'stretch',
      },
    ]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import { Direction, Spacing, JustifyContent, AlignItems } from './types'

export default {
  name: 'AStack',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
    direction: {
      type: String as PropType<Direction>,
      required: false,
      default: 'vertical',
    },
    spacing: {
      type: String as PropType<Spacing>,
      required: false,
      default: 'md',
    },
    justifyContent: {
      type: String as PropType<JustifyContent>,
      required: false,
      default: 'left',
    },
    alignItems: {
      type: String as PropType<AlignItems>,
      required: false,
      default: 'top',
    },
  },
}
</script>

<template>
  <div
    v-if="loading"
    class="inline-flex flex-col space-y-2 align-middle"
    :class="[width ? width : 'w-full', height ? height : 'h-4']"
  >
    <div
      v-for="i in count"
      :key="i"
      class="skeleton animate-loading w-full h-full"
      :class="[
        {
          'rounded-full': shape === 'circle',
          rounded: shape === 'square',
        },
      ]"
    />
  </div>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import { LoaderShape } from './types'

const shapes: LoaderShape[] = ['square', 'circle']

/**
 * The skeleton loader is used to give a visual feedback to
 * the user that content is loading.
 */
export default {
  name: 'ASkeletonLoader',
  components: {},
  props: {
    /**
     * Loading state, will display the skeleton loader.
     */
    loading: {
      type: Boolean,
      required: true,
    },
    /**
     * Decides whether or not skeleton loader will pulsate.
     */
    animated: {
      type: Boolean,
      required: false,
      default: true,
    },
    /**
     * Css class deciding the height.
     */
    height: {
      type: String,
      required: false,
    },
    /**
     * Css class deciding the width.
     */
    width: {
      type: String,
      required: false,
    },
    /**
     * Shape of the loader itself.
     */
    shape: {
      type: String as PropType<LoaderShape>,
      required: false,
      validator(value: any) {
        return shapes.indexOf(value) > -1
      },
      default: 'square',
    },
    /**
     * Number of shapes to render.
     */
    count: {
      type: Number,
      required: false,
      default: 1,
    },
  },
}
</script>

<style scoped>
.skeleton {
  background: linear-gradient(
    90deg,
    rgb(156, 163, 175) 25%,
    rgba(156, 163, 175, 0.5) 50%,
    rgb(156, 163, 175) 75%
  );
  background-size: 400% 100%;
  width: 100%;
}
</style>

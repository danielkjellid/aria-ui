<template>
  <div class="relative h-48">
    <slot></slot>
    <div class="absolute bottom-0 left-0 right-0 mx-auto">
      <aria-button @click="toggleVisibility">Run animation</aria-button>
    </div>
  </div>
</template>

<script lang="ts">
import AriaButton from '../AriaButton/AriaButton.vue'

export default {
  name: 'AnimationHandler',
  components: {
    AriaButton
  },
  setup(_, { emit }) {
    const toggleVisibility = () => {
      emit('toggle')
    }

    return { toggleVisibility }
  }
}
</script>
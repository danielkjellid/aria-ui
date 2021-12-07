<template>
  <div class="relative h-48">
    <slot></slot>
    <div class="absolute bottom-0 left-0 right-0 mx-auto">
      <Button @click="toggleVisibility">Run animation</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../Button/Button.vue'

export default {
  name: 'AnimationHandler',
  components: {
    Button
  },
  setup(_, { emit }) {
    const toggleVisibility = () => {
      emit('toggle')
    }

    return { toggleVisibility }
  }
}
</script>
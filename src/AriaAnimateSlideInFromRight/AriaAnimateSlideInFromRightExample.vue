<template>
  <AnimationHandler @toggle="show = !show">
    <aria-animate-slide-in-from-right>
      <div v-show="show" class="w-24 h-24 bg-blue-400" />
    </aria-animate-slide-in-from-right>
  </AnimationHandler>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import AnimationHandler from '../AnimationHandler/AnimationHandler.vue'
import AriaAnimateSlideInFromRight from './AriaAnimateSlideInFromRight.vue'

export default {
  name: 'AnimateSlideInFromRightExample',
  components: {
    AnimationHandler,
    AriaAnimateSlideInFromRight,
  },
  setup() {
    let show = ref<boolean>(false)

    return { show }
  }
}
</script>
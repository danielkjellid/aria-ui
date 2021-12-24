<template>
  <AnimationHandler @toggle="show = !show">
    <aria-animate-fade-out>
      <div v-show="show" class="w-24 h-24 bg-blue-400" />
    </aria-animate-fade-out>
  </AnimationHandler>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import AnimationHandler from '../AnimationHandler/AnimationHandler.vue'
import AriaAnimateFadeOut from './AriaAnimateFadeOut.vue'

export default {
  name: 'AnimateFadeOutExample',
  components: {
    AnimationHandler,
    AriaAnimateFadeOut,
  },
  setup() {
    let show = ref<boolean>(false)

    return { show }
  }
}
</script>
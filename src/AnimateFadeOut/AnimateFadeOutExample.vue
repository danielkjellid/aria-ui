<template>
  <AnimationHandler @toggle="show = !show">
    <AnimateFadeOut>
      <div v-show="show" class="w-24 h-24 bg-blue-400" />
    </AnimateFadeOut>
  </AnimationHandler>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import AnimationHandler from '../AnimationHandler/AnimationHandler.vue'
import AnimateFadeOut from './AnimateFadeOut.vue'

export default {
  name: 'AnimateFadeOutExample',
  components: {
    AnimationHandler,
    AnimateFadeOut
  },
  setup() {
    let show = ref<boolean>(false)

    return { show }
  }
}
</script>
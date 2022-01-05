<template>
  <transition
    enter-active-class="duration-500 ease-in-out"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-500 ease-in-out"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'AriaAnimateFadeIn',
}
</script>
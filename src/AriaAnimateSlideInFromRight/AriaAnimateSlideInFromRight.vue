<template>
  <transition
    enter-active-class="sm:duration-700 transition duration-500 ease-in-out transform"
    enter-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="sm:duration-700 transition duration-500 ease-in-out transform"
    leave-class="translate-x-1"
    leave-to-class="translate-x-full"
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'AriaAnimateSlideInFromRight',
}
</script>
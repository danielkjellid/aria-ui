<template>
  <transition
    enter-class="sm:translate-y-0 sm:translate-x-2 translate-y-2 opacity-0"
    enter-active-class="transition duration-300 ease-out transform"
    enter-to-class="sm:translate-x-0 translate-y-0 opacity-100"
    leave-class="opacity-100"
    leave-active-class="transition duration-100 ease-in"
    leave-to-class="opacity-0"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'AriaSlideDownFromTop'
}
</script>

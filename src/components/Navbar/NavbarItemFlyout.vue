<template>
  <div class="lg:border-0 lg:p-0 lg:m-0 lg:pb-0 flex p-2 pb-6 border-b border-gray-200">
    <div class="relative flex">
      <button
        type="button"
        class="lg:flex relative z-10 items-center hidden pt-px -mb-px text-sm font-medium transition-colors duration-200 ease-out border-b-2 border-transparent"
        :class="[
          active && !renderTransparent ? 'border-brand-800' : 'border-transparent',
          active && renderTransparent ? 'border-brand-100' : 'border-transparent',
          renderTransparent
            ? 'text-white hover:text-gray-300'
            : 'hover:text-brand-800 text-brand-700',
        ]"
        :aria-expanded="active ? 'true' : 'false'"
        @click="toggleFlyoutMenu"
      >
        <slot />
      </button>
    </div>
    <div class="lg:block hidden">
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <flyout-menu v-show="active">
          <slot name="items" />
        </flyout-menu>
      </transition>
    </div>
    <div class="lg:hidden block">
      <flyout-menu>
        <slot name="items" />
      </flyout-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import FlyoutMenu from './FlyoutMenu.vue'

export default defineComponent({
  name: 'ANavbarFlyoutItem',
  components: { FlyoutMenu },
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    renderTransparent: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(_, { emit }) {
    const toggleFlyoutMenu = () => {
      emit('on-flyout-toggle')
    }

    return { toggleFlyoutMenu }
  },
})
</script>

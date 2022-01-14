<template>
  <div v-click-outside="hideActionMenu" class="inline-block">
    <div class="relative">
      <a-icon-wrapper
        tag="button"
        type="button"
        class="relative"
        :transparentBg="transparentBg"
        aria-haspopup="true"
        :aria-expanded="actionMenuActive ? 'true' : 'false'"
        @click="actionMenuActive = true"
      >
        <slot />
      </a-icon-wrapper>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        class="ring-1 ring-black ring-opacity-5 focus:outline-none absolute mt-3 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg"
        :class="[
          {
            'right-0': alignment === 'right',
            'left-0': alignment === 'left',
            'left-0 right-0': alignment === 'center',
          },
          width ? width : 'w-48',
        ]"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabindex="-1"
        v-show="actionMenuActive"
      >
        <slot name="items" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import clickOutside from '../../directives/click-outside'
import AIconWrapper from '../IconWrapper/IconWrapper.vue'
import { MenuAlignment } from './types'
import { PropType } from '@vue/runtime-core'

/**
 * Action menu is a hidden menu that opens upon an action, and displays multiple sub actions.
 */
export default {
  name: 'AActionMenu',
  components: { AIconWrapper },
  directives: {
    'click-outside': clickOutside,
  },
  props: {
    alignment: {
      type: String as PropType<MenuAlignment>,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    /**
     * Controls if the background is transparent, gives a white focus ring
     * to the icon-wrapper instead of a brand-colored one.
     */
    transparentBg: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    let actionMenuActive = ref<boolean>(false)

    const hideActionMenu = () => {
      actionMenuActive.value = false
    }

    return {
      actionMenuActive,
      hideActionMenu,
    }
  },
}
</script>

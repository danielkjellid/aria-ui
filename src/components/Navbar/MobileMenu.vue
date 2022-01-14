<template>
  <div>
    <div class="lg:hidden fixed inset-0 z-40 flex" role="dialog" aria-modal="true">
      <transition
        enter-active-class="transition-opacity duration-300 ease-linear"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300 ease-linear"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" @click="closeMenu" />
      </transition>
      <transition
        enter-active-class="transition duration-300 ease-in-out transform"
        enter-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition duration-300 ease-in-out transform"
        leave-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          class="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl"
        >
          <div class="flex items-center justify-between px-4 pt-5 pb-2">
            <h1 class="font-medium text-gray-900">Meny</h1>
            <div>
              <button
                @click="closeMenu"
                type="button"
                class="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
              >
                <span class="sr-only">Close menu</span>
                <XIcon class="w-6 h-6" />
              </button>
            </div>
          </div>
          <div class="mt-2">
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { XIcon } from '@heroicons/vue/outline'
import { computed, defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'AriaNavbarMobileMenu',
  components: {
    XIcon,
  },
  setup(_, { slots, emit }) {
    const userMenuSlotUsed = computed(() => !!slots.userMenu)

    const closeMenu = () => {
      emit('on-close-menu')
    }

    return { closeMenu, userMenuSlotUsed }
  },
})
</script>

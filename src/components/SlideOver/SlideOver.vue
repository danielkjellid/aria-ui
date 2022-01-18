<template>
  <div
    class="fixed inset-0 overflow-hidden"
    :aria-labelledby="title"
    role="dialog"
    aria-modal="true"
  >
    <div class="absolute inset-0 overflow-hidden">
      <transition
        enter-active-class="duration-500 ease-in-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-500 ease-in-out"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="active"
          class="absolute inset-0 transition-opacity bg-black bg-opacity-25"
          aria-hidden="true"
        />
      </transition>

      <div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <transition
          enter-active-class="sm:duration-700 transition duration-500 ease-in-out transform"
          enter-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="sm:duration-700 transition duration-500 ease-in-out transform"
          leave-class="translate-x-1"
          leave-to-class="translate-x-full"
        >
          <div
            v-show="active"
            :class="maxWidth ? maxWidth : 'md:max-w-lg lg:max-w-xl w-screen max-w-md'"
          >
            <div class="flex flex-col h-full pt-6 overflow-y-auto bg-white shadow-xl">
              <div :class="paddingX ? paddingX : 'sm:px-6 px-4'">
                <div class="flex items-start justify-between">
                  <slot name="head">
                    <a-text tag="h1" variant="title5">{{ title }}</a-text>
                  </slot>
                  <div class="h-7 flex items-center ml-3">
                    <a-icon-wrapper tag="button" type="button" @click="onClose">
                      <span class="sr-only">Close panel</span>
                      <XIcon class="hover:text-gray-900 w-6 h-6 text-gray-600" />
                    </a-icon-wrapper>
                  </div>
                </div>
              </div>
              <div :class="paddingX ? paddingX : 'sm:px-6 px-4'" class="relative flex-1 my-6">
                <slot>
                  <div :class="paddingX ? paddingX : 'sm:px-6 px-4'" class="absolute inset-0">
                    <div class="h-full border-2 border-gray-200 border-dashed" aria-hidden="true" />
                  </div>
                </slot>
              </div>
              <div
                v-if="actionsSlot"
                :class="paddingX ? paddingX : 'sm:px-6 px-4'"
                class="bg-gray-50 relative bottom-0 left-0 right-0 py-5"
              >
                <slot name="actions" />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
import { XIcon } from '@heroicons/vue/outline'
import AIconWrapper from '../IconWrapper/IconWrapper.vue'
import AText from '../Text/Text.vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'ASlideOver',
  components: { AIconWrapper, AText, XIcon },
  props: {
    /**
     * Title of slide over.
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * Active state - controlled by parent.
     */
    active: {
      type: Boolean,
      required: true,
    },
    /**
     * Apply custom x-axis padding in the form of css class(es).
     */
    paddingX: {
      type: String,
      required: false,
    },
    /**
     * Apply custom max width if needed, in the form of css class(es).
     */
    maxWidth: {
      type: String,
      required: false,
    },
  },
  setup(_, { slots, emit }) {
    const actionsSlot = computed(() => !!slots.actions)

    const onClose = () => {
      emit('on-close')
    }

    return { actionsSlot, onClose }
  },
})
</script>

<template>
  <div
    v-if="display"
    class="relative top-0 left-0 right-0 z-40 bg-white shadow-md"
  >
    <a-container>
      <div style="max-width: 1600px" class="sm:px-8 px-5 py-3 mx-auto">
        <div class="flex items-center text-sm font-medium text-gray-700">
          <span
            class="flex p-2 mr-3 -ml-1 rounded-lg"
            :class="{
              'bg-green-200': variant === 'success',
              'bg-blue-200': variant === 'info',
              'bg-yellow-200': variant === 'warning',
              'bg-red-200': variant === 'danger',
            }"
          >
            <BellIcon
              class="w-6 h-6"
              :class="{
                'text-green-600': variant === 'success',
                'text-blue-600': variant === 'info',
                'text-yellow-600': variant === 'warning',
                'text-red-600': variant === 'danger',
              }"
            />
          </span>
          <div class="flex-col items-center">
            <slot></slot>
          </div>
        </div>
      </div>
    </a-container>
  </div>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import { MessageVariant } from './types'
import { BellIcon } from '@heroicons/vue/outline'

import AContainer from '../Container'

export default {
  name: 'AMessage',
  components: {
    BellIcon,
    AContainer,
  },
  props: {
    /**
     * Shows/hides message.
     */
    display: {
      type: Boolean,
      required: true,
    },
    /**
     * Message variant.
     */
    variant: {
      required: false,
      default: 'warning',
      type: String as PropType<MessageVariant>,
    },
  },
}
</script>

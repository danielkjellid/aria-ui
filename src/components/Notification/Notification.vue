<template>
  <!-- NEEDS ANIMATION: FADE OUT -->
  <div v-if="display" class="sm:p-6 sm:items-start sm:justify-end sticky inset-0 z-50 flex items-end justify-center px-4 py-6 pointer-events-none">
    <div class="w-full max-w-sm bg-white rounded-lg shadow-lg pointer-events-auto">
      <div class="overflow-hidden rounded-lg shadow-xs">
        <div class="p-4">
          <div class="flex" :class="subtitle ? 'items-start' : 'items-center'">
            <div class="shrink-0">
              <XCircleIcon v-if="variant === 'danger'" class="w-5 h-5 text-red-400" />
              <ExclamationCircleIcon v-else-if="variant === 'warning'" class="w-5 h-5 text-yellow-400" />
              <InformationCircleIcon v-else-if="variant === 'info'" class="w-5 h-5 text-blue-400" />
              <CheckCircleIcon v-else-if="variant === 'success'" class="w-5 h-5 text-green-400" />
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-semibold leading-5 text-gray-900">
                {{ title }}
              </p>
              <p v-if="subtitle" class="mt-1 text-sm leading-5 text-gray-600">
                {{ subtitle }}
              </p>
            </div>
            <div class="shrink-0 flex ml-4">
              <button @click="onCloseNotification" class="focus:outline-none focus:text-gray-600 inline-flex text-gray-500 transition duration-150 ease-in-out">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUpdated,
  PropType,
} from '@vue/runtime-core'
import {
  ExclamationCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/vue/outline'
import { NotificationVariant } from './types'

export default defineComponent({
  name: 'ANotification',
  components: {
    ExclamationCircleIcon,
    XCircleIcon,
    CheckCircleIcon,
    InformationCircleIcon,
  },
  props: {
    /**
     * Title of the notification.
     */
    title: {
      required: true,
      type: String,
    },
    /**
     * Subtitle of the notification.
     */
    subtitle: {
      required: false,
      type: String,
    },
    /**
     * The notification variant.
     */
    variant: {
      required: false,
      default: 'success',
      type: String as PropType<NotificationVariant>,
    },
    /**
     * Display the variant or not. Typically we only want to display the notification until its dismissed or no longer relevant.
     */
    display: {
      default: false,
      type: Boolean,
    },
  },
  setup(_, { emit }) {
    const onCloseNotification = (): void => {
      emit('on-close-notification')
    }

    const closeAfterThreeSeconds = (): void => {
      setTimeout(() => {
        onCloseNotification()
      }, 3000)
    }

    onMounted(() => {
      closeAfterThreeSeconds()
    })

    onUpdated(() => {
      closeAfterThreeSeconds()
    })

    return {
      onCloseNotification,
    }
  },
})
</script>

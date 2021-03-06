<template>
  <div
    class="bg-red-50 p-4 rounded-md"
    :class="{
      'bg-red-50': variant === 'danger',
      'bg-yellow-50': variant === 'warning',
      'bg-blue-50': variant === 'info',
      'bg-green-50': variant === 'success',
    }"
  >
    <div class="flex">
      <div class="shrink-0">
        <XCircleIcon v-if="variant === 'danger'" class="w-5 h-5 text-red-400" />
        <ExclamationCircleIcon v-else-if="variant === 'warning'" class="w-5 h-5 text-yellow-400" />
        <InformationCircleIcon v-else-if="variant === 'info'" class="w-5 h-5 text-blue-400" />
        <CheckCircleIcon v-else-if="variant === 'success'" class="w-5 h-5 text-green-400" />
      </div>
      <div class="ml-3">
        <h3
          class="text-sm font-semibold leading-5 text-red-800"
          :class="{
            'text-red-800': variant === 'danger',
            'text-yellow-700': variant === 'warning',
            'text-blue-800': variant === 'info',
            'text-green-800': variant === 'success',
          }"
        >
          {{ message }}
        </h3>
        <div
          v-if="context && context.length"
          class="mt-2 text-sm leading-5"
          :class="{
            'text-red-700': variant === 'danger',
            'text-yellow-700': variant === 'warning',
            'text-blue-700': variant === 'info',
            'text-green-700': variant === 'success',
          }"
        >
          <ul class="pl-5 list-disc">
            <li v-for="c in context" :key="c" class="mt-1">
              <span>
                {{ c }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import {
  ExclamationCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/vue/solid'
import { CalloutVariant } from './types'

export default {
  name: 'ACallout',
  components: {
    ExclamationCircleIcon,
    XCircleIcon,
    CheckCircleIcon,
    InformationCircleIcon,
  },
  props: {
    /**
     * Initial heading message.
     */
    message: {
      required: false,
      default: 'Callout',
      type: String,
    },
    /**
     * The button variant.
     */
    variant: {
      required: false,
      default: 'danger',
      type: String as PropType<CalloutVariant>,
    },
    /**
     * Bullet points to provide additional context if needed.
     */
    context: {
      required: false,
      type: Array as PropType<string[]>,
    },
  },
}
</script>

<template>
  <div :class="[fluid ? 'w-auto' : 'w-full', {'mb-8': error}]">
    <label
      :for="id" :class="{ 'sr-only' : hiddenLabel, 'mb-1' : label }"
      class="block text-sm font-semibold leading-5 text-gray-700"
    >
      {{ label }}
    </label>
    <div class="relative rounded-md">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <slot></slot>
      </div>
      <input
        @input="$emit('input', $event.target.value)"
        :id="id"
        :value="value"
        :class="{
          'pl-10': existingIcon,
          'w-full': !fluid,
          'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:ring-red': error,
          'border-0 focus:ring-transparent' : plain,
        }"
        :placeholder="placeholder"
        :type="type"
        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 focus:border-transparent block text-sm leading-5 border-gray-200 rounded-md"
      />
      <div v-if="error" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <ExclamationCircleIcon class="w-5 h-5 text-red-500" />
      </div>
    </div>
    <p v-if="error" class="absolute text-sm text-red-600">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/solid'
import { computed } from '@vue/reactivity'

export default {
  name: 'AriaInput',
  components: {
    ExclamationCircleIcon
  },
  props: {
    // controls the for and id fields in input and label
    id: {
      type: String,
      required: false,
    },
    // sets label to screen reader only
    hiddenLabel: {
      type: Boolean,
      required: false,
      default: false,
    },
    // sets the label itself
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    // expands input to 100% av available space
    fluid: {
      type: Boolean,
      required: false,
      default: false
    },
    error: {
      type: [Array, String],
      required: false
    },
    plain: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup(_, { slots }) {
    const existingIcon = computed(() => !!slots.default)

    return { existingIcon }
  }
}
</script>

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
        <slot name="icon" />
      </div>
      <select
        @input="$emit('input', $event.target.value)"
        :id="id"
        :class="{
          'pl-10': existingIcon,
          'w-full': !fluid,
          'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:ring-red': error,
        }"
        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:border-transparent block text-sm leading-5 border-gray-200 rounded-md"
      >
        <slot />
      </select>
      <div v-if="error" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <div class="absolute top-0 bottom-0 right-0 w-5 h-5 mt-2 mr-3 bg-white rounded-full" /> 
        <ExclamationCircleIcon class="z-10 w-5 h-5 text-red-500" />
      </div>
    </div>
    <p v-if="error" class="absolute text-sm text-red-600">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/solid'
import { computed } from '@vue/reactivity'

export default {
  name: 'AriaSelect',
  components: {
    ExclamationCircleIcon
  },
  props: {
    // controls the for and id fields in input and label
    id: {
      type: String,
      required: false,
      default: 'input'
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
    fluid: {
      type: Boolean,
      required: false,
      default: false
    },
    error: {
      type: [Array, String],
      required: false
    },
  },
  setup(_, { slots }) {
    const existingIcon = computed(() => !!slots.icon)

    return { existingIcon }
  }
}
</script>

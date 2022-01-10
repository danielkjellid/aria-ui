<template>
  <div :class="{'mb-8': error}">
    <label
      :for="id" :class="{ 'sr-only' : hiddenLabel, 'mb-1' : label }"
      class="block text-sm font-semibold leading-5 text-gray-700"
    >
      {{ label }}
    </label>
    <div class="relative rounded-md">
      <div v-if="existingIcon" class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <slot />
      </div>
      <input
        @input="$emit('input', $event.target.value)"
        :id="id"
        :value="value"
        :class="{
          'pl-10': existingIcon,
          'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:ring-red': error,
          'border-0 focus:ring-transparent' : plain,
        }"
        :placeholder="placeholder"
        :type="type"
        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 focus:border-transparent block w-full text-sm leading-5 border-gray-200 rounded-md"
      />
      <div v-if="error" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <ExclamationCircleIcon class="w-5 h-5 text-red-500" />
      </div>
    </div>
    <p v-if="error" class="absolute mt-1 text-sm text-red-600">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/solid'
import { computed } from '@vue/reactivity'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'AInput',
  components: {
    ExclamationCircleIcon
  },
  props: {
    /**
     * The id for the element itself.
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * Sets the label to screen reader only.
     */
    hiddenLabel: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Sets the label itself.
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * Optional placeholder. Used as guidance for the user.
     */
    placeholder: {
      type: String,
      required: false,
    },
    /**
     * The value of the input itself, usually set by v-model.
     */
    value: {
      type: String,
      required: false
    },
    /**
     * Type of input: https://www.w3schools.com/html/html_form_input_types.asp.
     */
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    /**
    * Field error as string.
    */
    error: {
      type: String,
      required: false
    },
    /**
     * Removes borders and most styling.
     */
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
})
</script>

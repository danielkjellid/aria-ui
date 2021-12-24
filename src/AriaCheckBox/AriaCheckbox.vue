<template>
  <div class="flex items-center" :class="{'mr-3' : hiddenLabel }">
    <label class="inline-flex">
      <input
        @change="$emit('input', $event.target.checked)"
        type="checkbox"
        :checked="checked"
        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 focus:border-transparent text-brand-800 w-5 h-5 rounded"
      >
      <div v-if="!hiddenLabel" class="ml-3 -mt-px text-sm">
        <span class="block font-semibold text-gray-800">{{ label }}</span>
        <span v-if="helpText" class="block text-gray-500">{{ helpText }}</span>
      </div>
    </label>
  </div>
</template>

<script lang="ts">

export default{
  name: 'AriaCheckbox',
  props: {
    /**
     * Checkbox id.
     */
    id: {
      type: String,
      required: false,
    },
    /**
    * Label that shows next to the checkbox.
    */
    label: {
      type: String,
      required: true,
    },
    /**
    * Additional help text bellow checkbox.
    */
    helpText: {
      type: String,
      required: false,
    },
    /**
    * Controls if the checkbox is checked or not.
    */
    checked: {
      type: Boolean,
      required: true,
      default: true
    },
    /**
    * Sets label as screen reader only.
    */
    hiddenLabel: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
}
</script>

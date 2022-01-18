<template>
  <div
    class="relative block w-full p-12 text-center border-2 border-gray-300 border-dashed rounded-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-12 h-12 mx-auto text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span class="block mt-2 text-sm font-medium text-gray-900">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
import { EmojiSadIcon } from '@heroicons/vue/outline'

export default {
  name: 'ANoData',
  components: {
    EmojiSadIcon,
  },
  props: {
    /**
     * Provide a custom error message if needed.
     */
    errorMessage: {
      type: String,
      required: false,
      default: 'Her fant vi dessverre ingen ting',
    },
  },
}
</script>

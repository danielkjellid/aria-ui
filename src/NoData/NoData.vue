<template>
  <div class="w-full min-w-full mt-5 border-2 border-gray-200 border-dashed">
    <div class="p-12 text-center">
      <p class="text-gray-500">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AriaNodata',
  props: {
    errorMessage: {
      type: String,
      required: false,
      default: 'Ingen data'
    }
  }
}
</script>
<template>
  <button class="bg-brand-600 py-2 px-1 text-white">This is a button with text: {{ sampleText }}</button>
</template>

<script>
export default {
  setup() {
    let sampleText = 'WOOOO!'

    return {
      sampleText
    }
  }
}
</script>

<style>

</style>
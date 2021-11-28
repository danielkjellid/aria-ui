<template>
  <button>This is a button with text: {{ sampleText }}</button>
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
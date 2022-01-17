<template>
  <section>
    <a-container>
      <div class="lg:gap-8 grid grid-cols-1 gap-5">
        <slot />
      </div>
    </a-container>
  </section>
</template>

<script lang="ts">
import AContainer from '../Container/Container.vue'

export default {
  name: 'CollectionList',
  components: { AContainer },
}
</script>

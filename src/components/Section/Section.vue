<template>
  <section>
    <div
      class="bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 rounded-lg cursor-pointer"
      :class="{ 'flex items-center justify-between': !disableCollapse }"
      @click="collapsed = !collapsed"
    >
      <h1>{{ title }}</h1>
      <button v-if="!disableCollapse" class="hover:text-gray-900 text-gray-600">
        <ChevronUpIcon v-if="!collapsed" class="w-5 h-5" />
        <ChevronDownIcon v-else class="w-5 h-5" />
      </button>
    </div>
    <div class="px-4 my-6">
      <div v-show="!collapsed">
        <slot> Content </slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/solid'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'ASection',
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
  },
  props: {
    /**
     * Sets the title of the collapsable section.
     */
    title: {
      type: String,
      required: true,
      default: 'Section title',
    },
    /**
     * Prevents the section from being collapsable.
     */
    disableCollapse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    const collapsed = ref<boolean>(false)

    return { collapsed }
  },
})
</script>

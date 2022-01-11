<template>
  <li>
    <div class="flex items-center">
      <component
        :is="tag"
        v-bind="$attrs"
        :aria-current="active ? 'page' : undefined"
        class="mr-2 text-sm font-medium"
        :class="
          active
            ? 'text-brand-600 cursor-not-allowed'
            : 'hover:text-brand-600 text-brand-800 cursor-pointer'
        "
      >
        <slot />
      </component>
      <ChevronRightIcon
        v-if="!active"
        class="flex-shrink-0 w-5 h-5 text-gray-400"
        aria-hidden="true"
      />
    </div>
  </li>
</template>

<script lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/solid'
import config from '../../utils/config'

export default {
  name: 'ABreadcrumbItem',
  components: { ChevronRightIcon },
  props: {
    tag: {
      type: String,
      required: false,
      default: () => config.defaultBreadcrumbTag,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

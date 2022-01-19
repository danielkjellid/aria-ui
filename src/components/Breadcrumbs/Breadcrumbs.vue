<template>
  <nav class="sm:hidden flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-2">
      <li class="sm:hidden block">
        <div class="flex items-center">
          <ChevronLeftIcon class="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
          <component
            :is="tag"
            :href="tag === 'a' ? homePath : undefined"
            :to="tag !== 'a' ? homePath : undefined"
            v-bind="$attrs"
            class="hover:text-brand-600 text-brand-800 ml-2 text-sm font-medium cursor-pointer"
          >
            {{ homeTitle }}
          </component>
        </div>
      </li>
    </ol>
  </nav>
  <nav class="sm:flex hidden" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <slot />
    </ol>
  </nav>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core'
import { ChevronLeftIcon } from '@heroicons/vue/solid'
import config from '../../utils/config'

export default {
  name: 'ABreadcrumbs',
  inheritAttrs: false,
  components: {
    ChevronLeftIcon,
  },
  props: {
    /**
     * On smaller viewports, we only display a link to home,
     * this prop sets the title for that.
     */
    homeTitle: {
      type: String,
      required: false,
      default: 'Hjem',
    },
    /**
     * On smaller viewports, we only display a link to home,
     * this prop sets the path for that. Also configurable
     * through plugin config through the `defaultHomePath` option.
     */
    homePath: {
      type: String,
      required: false,
      default: () => config.defaultHomePath,
    },
  },
  setup() {
    const tag = computed(() => config.defaultLinkTag)

    return { tag }
  },
}
</script>

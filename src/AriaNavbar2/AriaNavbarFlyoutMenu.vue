<template>
  <div class="top-full sm:text-sm absolute inset-x-0 text-gray-600">
    <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
    <div class="top-1/2 absolute inset-0 bg-white shadow" aria-hidden="true"></div>

    <div class="relative bg-white">
      <aria-container :yPadding="null">
        <div class="gap-y-10 gap-x-8 grid grid-cols-5 pt-5 pb-12">
          <div v-for="subMenuItem in subMenuItems" :key="subMenuItem.id">
            <p class="font-medium text-gray-900">
              {{ subMenuItem.name }}
            </p>
            <ul role="list" aria-labelledby="desktop-featured-heading-0" class="sm:mt-4 sm:space-y-4 mt-6 space-y-6">
              <li v-for="child in subMenuItem.children" :key="child.id" class="flex">
                <a :href="`/category/${subMenuItem.slug}/?subcategory=${child.slug}`" class="hover:text-gray-800">
                  {{ child.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aria-container>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, ref } from '@vue/runtime-core'
import { AuthenticatedUser, SubMenuItem, MenuItem } from './types'
import AriaContainer from '../AriaContainer/AriaContainer.vue'


export default {
  name: 'AriaNavbarMobileMenu',
  components: {
    AriaContainer
  },
  props: {
    subMenuItems: {
      required: true,
      type: Array as PropType<SubMenuItem[]>
    }
  }
}
</script>
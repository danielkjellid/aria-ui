<template>
  <header 
    :class="renderTransparent ? 'absolute left-0 right-0 z-40' : 'relative'"
    v-click-outside="hideFlyoutMenu"
  >
    <div 
      class="relative z-10" 
      :class="renderTransparent ? ( flyoutMenuActive ? 'bg-white shadow' : 'navbar-blur') : 'bg-white shadow'"
    >
      <!-- TODO: Add container -->
      <div style="max-width: 1600px;" class="sm:py-4 sm:px-8 px-5 py-5 mx-auto">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div>
              <a :href="homePath">
                <slot name="logo">
                  <CubeTransparentIcon 
                    class="w-12 h-12"
                    :class="renderTransparent ? ( flyoutMenuActive ? 'text-gray-800' : 'text-white') : 'text-gray-800'"
                  />
                </slot>
              </a>
            </div>
            <!-- navigation from lg breakpoint and above -->
            <nav class="lg:flex items-center hidden ml-5">
              <div v-for="menuItem in menuItems" :key="menuItem.slug">
                <button 
                  v-if="menuItem.activatesSubMenu"
                  class="flex items-center"
                  :class="renderNavbarLinkClasses"
                  @click="flyoutMenuActive = !flyoutMenuActive"
                >
                  {{menuItem.name}}                  
                  <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 mt-px ml-1" :class="{'text-gray-500 hover:fill-current' : !renderTransparent}">
                    <path fill-rule="evenodd" :d="renderChevronPath" clip-rule="evenodd"></path>
                  </svg>
                </button>
                <component
                  :is="menuItem.tag ? menuItem.tag : 'a'"
                  v-else
                  class="block ml-4"
                  :class="renderNavbarLinkClasses"
                  :active-class="renderNavbarLinkActiveClasses"
                >
                  {{menuItem.name}}
                </component>
              </div>
            </nav>
          </div>
          <div class="flex items-center">
            <slot name="left" />
            <button class="lg:hidden" @click="mobileMenuActive = true">
              <MenuAlt3Icon class="w-6 h-6" :class="renderNavbarLinkClasses" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <aria-animate-fade-in>
      <div 
        v-show="flyoutMenuActive"
        key="flyout-menu"
        class="absolute left-0 right-0 z-10 transform bg-white shadow-lg"
      >
        <div 
          class="xl:gap-12 grid max-w-6xl gap-20 px-8 py-6 mx-auto"
          :class="flyoutMenuGridColumns"
        >
          <!-- loop through submenu items and set title and subcontent accordingly in a grid format -->
          <div v-for="subMenuItem in subMenuItems" :key="subMenuItem.id">
            <h3 class="text-sm font-semibold leading-4 tracking-wide text-gray-500 uppercase">
              {{ subMenuItem.name }}
            </h3>
            <div class="mt-2">
              <a
                v-for="child in subMenuItem.children"
                :key="child.id"
                :href="`/category/${subMenuItem.slug}/?subcategory=${child.slug}`"
                class="hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 focus:border-transparent block py-2 text-sm leading-6 text-gray-700 rounded-sm appearance-none"
                @click="flyoutMenuActive = false"
              >
                {{ child.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </aria-animate-fade-in>
    <aria-animate-slide-in-from-right>
      <div 
        v-show="mobileMenuActive"
        key="mobile-menu"
        class="fixed inset-0 z-50 overflow-y-auto"
      >
        <div class="relative min-h-screen bg-white">
          <div class="h-full px-5 pt-5">
            <div class="flex items-center justify-between">
              <div class="text-center">
                <p class="text-base leading-6 text-gray-900">Meny</p>
              </div>
              <button @click="mobileMenuActive = false" class="hover:text-gray-800 w-5 h-5 text-gray-600">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <nav class="mt-5">
              <div>
                
              </div>
            </nav>
          </div>
          <div>
            <slot name="mobile-menu-footer" />
          </div>
        </div>
      </div>
    </aria-animate-slide-in-from-right>
  </header>
</template>

<script lang="ts">
import { computed, PropType, ref } from '@vue/runtime-core'
import { CubeTransparentIcon, ChevronDownIcon, ChevronUpIcon, MenuAlt3Icon } from '@heroicons/vue/outline'
import AriaAnimateFadeIn from '../AriaAnimateFadeIn/AriaAnimateFadeIn.vue'
import AriaAnimateSlideInFromRight from '../AriaAnimateSlideInFromRight/AriaAnimateSlideInFromRight.vue'
import clickOutside from '../click-outside'
import { MenuItem, SubMenuItem } from './types'

export default {
  name: 'AriaNavbar',
  components: {
    CubeTransparentIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    MenuAlt3Icon,
    AriaAnimateFadeIn,
    AriaAnimateSlideInFromRight
  },
  directives: {
    'click-outside': clickOutside
  },
  props: {
    renderTransparent: {
      required: false,
      default: true,
      type: Boolean,
    },
    menuItems: {
      required: true,
      type: Array as PropType<MenuItem[]>
    },
    subMenuItems: {
      required: true,
      type: Array as PropType<SubMenuItem[]>
    },
    homePath: {
      required: false,
      default: '/',
      type: String
    }
  },
  setup(props, {}) {
    let mobileMenuActive = ref<boolean>(false)
    let flyoutMenuActive = ref<boolean>(false)

    const renderNavbarLinkClasses = computed(() => {
      if (!props.renderTransparent || flyoutMenuActive.value) return 'hover:text-gray-600 leading-8 text-gray-800 transition duration-150 ease-in-out cursor-pointer'

      return 'text-white leading-8 transition duration-150 ease-in-out hover:text-brand-500 cursor-pointer'
    })

    const renderNavbarLinkActiveClasses = computed(() => {
      if (!props.renderTransparent || flyoutMenuActive.value) return 'text-gray-900 cursor-pointer'

      return 'active-pale-link cursor-pointer'
    })

    const flyoutMenuGridColumns = computed(() => {
      return `grid-cols-${props.subMenuItems.length}`
    })

    const toggleFlyoutMenu = () => {
      flyoutMenuActive.value = !flyoutMenuActive.value
    }

    const hideFlyoutMenu = () => {
      flyoutMenuActive.value = false
    }

    const renderChevronPath = computed(() => {
      if (flyoutMenuActive.value) return 'M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'

      return 'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
    })

    return {
      flyoutMenuActive,
      renderNavbarLinkClasses,
      renderNavbarLinkActiveClasses,
      flyoutMenuGridColumns,
      toggleFlyoutMenu,
      hideFlyoutMenu,
      renderChevronPath,
      mobileMenuActive
    }
  }
}
</script>

<style scoped>
.active-pale-link {
  color: #ffffff !important;
}

.navbar-blur {
  background-color: rgba(145, 146, 140, 0.3);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}
</style>
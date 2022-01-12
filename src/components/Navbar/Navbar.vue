<template>
  <div v-click-outside="cleanupMenus">
    <!-- Mobile menu -->
    <aria-navbar-mobile-menu
      v-show="mobileMenuActive"
      :menuItems="menuItems"
      :subMenuItems="subMenuItems"
      :authenticatedUser="authenticatedUser"
      @on-close-menu="mobileMenuActive = false"
    />

    <!-- Header -->
    <header class="relative">
      <nav aria-label="Top">
        <div :class="isTransparent ? 'bg-transparent-blur' : 'bg-white'">
          <a-container :yPadding="null">
            <div
              class="border-b"
              :class="isTransparent ? 'border-transparent' : 'border-gray-200'"
            >
              <div class="flex items-center justify-between h-20">
                <!-- Logo (lg+) -->
                <div class="lg:flex lg:items-center hidden">
                  <a :href="homePath">
                    <span class="sr-only">{{ brandName }}</span>
                    <slot name="logo">
                      <CubeTransparentIcon
                        class="w-8 h-8"
                        :class="isTransparent ? 'text-white' : 'text-brand-800'"
                      />
                    </slot>
                  </a>
                </div>

                <div class="lg:flex hidden h-full">
                  <div class="ml-8">
                    <div class="flex justify-center h-full space-x-8">
                      <div
                        class="flex"
                        v-for="menuItem in menuItems"
                        :key="menuItem.slug"
                      >
                        <div
                          v-if="menuItem.activatesSubMenu"
                          class="relative flex"
                        >
                          <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                          <button
                            type="button"
                            class="relative z-10 flex items-center pt-px -mb-px text-sm font-medium transition-colors duration-200 ease-out border-b-2 border-transparent"
                            :class="[
                              isTransparent
                                ? 'text-white hover:text-gray-300'
                                : 'hover:text-gray-800 text-gray-700',
                              {
                                'border-brand-800 text-brand-800':
                                  menuItem.active || flyoutMenuActive,
                              },
                            ]"
                            aria-expanded="false"
                            @click="flyoutMenuActive = !flyoutMenuActive"
                          >
                            {{ menuItem.name }}
                          </button>
                        </div>
                        <component
                          :is="menuItem.tag ? menuItem.tag : 'a'"
                          href="/"
                          v-else
                          class="flex items-center text-sm font-medium"
                          :class="
                            isTransparent
                              ? 'text-white hover:text-gray-300'
                              : 'hover:text-gray-800 text-gray-700'
                          "
                          active-class="border-brand-800 text-brand-800"
                        >
                          {{ menuItem.name }}
                        </component>
                      </div>

                      <!-- Flyout menu -->
                      <div class="flex">
                        <transition
                          enter-active-class="transition duration-200 ease-out"
                          enter-class="opacity-0"
                          enter-to-class="opacity-100"
                          leave-active-class="transition duration-150 ease-in"
                          leave-class="opacity-00"
                          leave-to-class="opacity-0"
                        >
                          <aria-navbar-flyout-menu
                            v-show="flyoutMenuActive"
                            :subMenuItems="subMenuItems"
                          />
                        </transition>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Header bellow LG breakpoint -->
                <div class="lg:hidden flex items-center flex-1">
                  <a :href="homePath" class="lg:hidden">
                    <span class="sr-only">{{ brandName }}</span>
                    <slot name="logo">
                      <CubeTransparentIcon class="text-brand-800 w-8 h-8" />
                    </slot>
                  </a>
                </div>

                <!-- Actions  -->
                <div class="flex items-center justify-end flex-1">
                  <div class="lg:ml-8 flex items-center">
                    <div class="flex space-x-8">
                      <div class="flex">
                        <a href="#" class="group flex items-center p-2 -m-2">
                          <ShoppingBagIcon
                            class="group-hover:text-gray-800 w-6 h-6 text-gray-400"
                          />
                          <!-- <span class="group-hover:text-gray-800 ml-1 text-sm font-medium text-gray-700">4</span> -->
                          <span class="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </div>

                    <!-- Separator -->
                    <span
                      class="lg:mx-6 w-px h-6 mx-4 bg-gray-200"
                      aria-hidden="true"
                    ></span>

                    <div class="flow-root">
                      <!-- User avatar and menu -->
                      <div
                        v-if="
                          !authenticatedUser ||
                          !authenticatedUser.isAuthenticated
                        "
                        class="lg:flex hidden"
                      >
                        <a href="#" class="group flex items-center p-2 -m-2">
                          <UserCircleIcon
                            class="group-hover:text-gray-800 w-6 h-6 text-gray-400"
                          />
                          <!-- <span class="group-hover:text-gray-800 ml-1 text-sm font-medium text-gray-700">4</span> -->
                          <span class="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                      <div v-else>
                        <div
                          style="background-color: #60a5fa"
                          class="lg:flex items-center justify-center hidden w-8 h-8 rounded-full"
                        >
                          <span class="text-sm text-white">D</span>
                        </div>
                      </div>

                      <!-- Menu button -->
                      <button
                        @click="mobileMenuActive = true"
                        type="button"
                        class="lg:hidden hover:text-gray-800 block p-2 -ml-2 text-gray-400 bg-white rounded-md"
                      >
                        <span class="sr-only">Open menu</span>
                        <MenuAlt3Icon class="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-container>
        </div>
      </nav>
    </header>
  </div>
</template>

<script lang="ts">
import {
  CubeTransparentIcon,
  ShoppingBagIcon,
  MenuAlt3Icon,
  UserCircleIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/solid'
import { computed, defineComponent, PropType, ref } from '@vue/runtime-core'
import { SubMenuItem, AuthenticatedUser, MenuItem } from './types'
import AContainer from '../Container/Container.vue'
import AriaNavbarMobileMenu from './AriaNavbarMobileMenu.vue'
import AriaNavbarFlyoutMenu from './AriaNavbarFlyoutMenu.vue'
import clickOutside from '../../directives/click-outside'

export default defineComponent({
  name: 'ANavbar',
  components: {
    CubeTransparentIcon,
    ShoppingBagIcon,
    MenuAlt3Icon,
    ChevronDownIcon,
    ChevronUpIcon,
    UserCircleIcon,
    AContainer,
    AriaNavbarMobileMenu,
    AriaNavbarFlyoutMenu,
  },
  directives: {
    'click-outside': clickOutside,
  },
  props: {
    renderTransparent: {
      required: false,
      type: Boolean,
      default: true,
    },
    brandName: {
      required: false,
      type: String,
      default: 'Aria UI',
    },
    homePath: {
      required: false,
      type: String,
      default: '/',
    },
    menuItems: {
      required: true,
      type: Array as PropType<MenuItem[]>,
    },
    subMenuItems: {
      required: true,
      type: Array as PropType<SubMenuItem[]>,
    },
    authenticatedUser: {
      required: false,
      type: Object as PropType<AuthenticatedUser>,
      default: undefined,
    },
  },
  setup(props) {
    const flyoutMenuActive = ref<boolean>(false)
    const mobileMenuActive = ref<boolean>(false)

    const cleanupMenus = () => {
      flyoutMenuActive.value = false
      mobileMenuActive.value = false
    }

    const isTransparent = computed(() => {
      if (props.renderTransparent && flyoutMenuActive.value === false)
        return true

      return false
    })

    return {
      flyoutMenuActive,
      mobileMenuActive,
      cleanupMenus,
      isTransparent,
    }
  },
})
</script>

<style scoped>
.bg-transparent-blur {
  background-color: rgba(145, 146, 140, 0.3);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}
</style>

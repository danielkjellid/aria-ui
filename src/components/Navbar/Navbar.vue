<template>
  <div v-click-outside="cleanupMenus" class="fixed top-0 left-0 right-0">
    <!-- Mobile menu -->
    <mobile-menu v-show="mobileMenuActive" @on-close-menu="mobileMenuActive = false">
      <slot />
    </mobile-menu>

    <!-- Header -->
    <header class="relative">
      <nav aria-label="Top">
        <div class="transition ease-in-out delay-75" :class="renderBgClass">
          <a-container :yPadding="null">
            <div
              class="border-b"
              :class="!isTransparent && flyoutMenuActive ? 'border-gray-200' : 'border-transparent'"
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
                      <slot :isTransparent="isTransparent" />
                    </div>
                  </div>
                </div>

                <div class="lg:hidden flex items-center flex-1">
                  <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->

                  <div class="lg:hidden block">
                    <a-icon
                      tag="button"
                      type="button"
                      :transparentBg="isTransparent"
                      @click="mobileMenuActive = true"
                    >
                      <span class="sr-only">Open menu</span>
                      <MenuAlt2Icon
                        class="w-6 h-6"
                        :class="
                          isTransparent
                            ? 'text-white hover:text-gray-300'
                            : 'text-gray-400 hover:text-brand-800'
                        "
                      />
                    </a-icon>
                  </div>
                </div>

                <!-- Logo (lg-) -->
                <a :href="homePath" class="lg:hidden">
                  <span class="sr-only">{{ brandName }}</span>
                  <slot name="logo">
                    <CubeTransparentIcon
                      class="w-8 h-8"
                      :class="isTransparent ? 'text-white' : 'text-brand-800'"
                    />
                  </slot>
                </a>

                <div class="flex items-center justify-end flex-1">
                  <div class="lg:ml-8 flex items-center">
                    <div class="flex space-x-8">
                      <!-- Search goes here -->
                      <div class="flex">
                        <div v-click-outside="hideUserSubMenu" class="relative">
                          <div>
                            <a-icon
                              tag="button"
                              type="button"
                              :transparentBg="isTransparent"
                              :aria-expanded="userSubMenuActive ? 'true' : 'false'"
                              aria-haspopup="true"
                              @click="userSubMenuActive = !userSubMenuActive"
                            >
                              <UserCircleIcon
                                class="w-6 h-6"
                                :class="
                                  isTransparent
                                    ? 'text-white group-hover:text-gray-300'
                                    : 'text-gray-400 group-hover:text-brand-800'
                                "
                              />
                              <span class="sr-only">Your account, view account options</span>
                            </a-icon>
                          </div>

                          <transition
                            enter-active-class="transition duration-100 ease-out"
                            enter-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-in"
                            leave-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0"
                          >
                            <div
                              class="ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 w-48 py-1 mt-3 origin-top-right bg-white rounded-md shadow-lg"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="user-menu-button"
                              tabindex="-1"
                              v-show="userSubMenuActive"
                            >
                              <a
                                href="#"
                                class="hover:text-gray-800 hover:bg-gray-100 block px-4 py-2 text-sm text-gray-600"
                                >Your Profile</a
                              >
                              <a
                                href="#"
                                class="hover:text-gray-800 hover:bg-gray-100 block px-4 py-2 text-sm text-gray-600"
                                >Settings</a
                              >
                              <a
                                href="#"
                                class="hover:text-gray-800 hover:bg-gray-100 block px-4 py-2 text-sm text-gray-600"
                                >Sign out</a
                              >
                            </div>
                          </transition>
                        </div>
                      </div>
                    </div>

                    <span class="lg:mx-6 w-px h-6 mx-4 bg-gray-200" aria-hidden="true"></span>

                    <div class="flow-root">
                      <a-icon
                        tag="button"
                        type="button"
                        :transparentBg="isTransparent"
                        aria-expanded="false"
                        class="relative"
                      >
                        <ShoppingBagIcon
                          class="z-10 w-6 h-6"
                          :class="
                            isTransparent
                              ? 'text-white group-hover:text-gray-300'
                              : 'text-gray-400 group-hover:text-brand-800'
                          "
                        />
                        <span
                          class="absolute bottom-0 right-0 z-20 flex items-center justify-center w-4 h-4 mb-1 mr-1 text-xs font-light rounded-full"
                          :class="
                            isTransparent ? 'text-brand-900 bg-white' : 'text-white bg-brand-800'
                          "
                        >
                          0
                        </span>
                        <span class="sr-only"> items in cart, view bag </span>
                      </a-icon>
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
  MenuAlt2Icon,
  UserCircleIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/solid'
import { computed, defineComponent, onUnmounted, ref } from '@vue/runtime-core'
import AContainer from '../Container/Container.vue'
import MobileMenu from './MobileMenu.vue'
import clickOutside from '../../directives/click-outside'
import AIcon from '../Icon/Icon.vue'

export default defineComponent({
  name: 'ANavbar',
  components: {
    CubeTransparentIcon,
    ShoppingBagIcon,
    MenuAlt2Icon,
    ChevronDownIcon,
    ChevronUpIcon,
    UserCircleIcon,
    AContainer,
    MobileMenu,
    AIcon,
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
    flyoutMenuActive: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const mobileMenuActive = ref<boolean>(false)
    const userSubMenuActive = ref<boolean>(false)

    const currentScrollState = ref<number>(0)

    const handleScroll = (event: Event) => {
      currentScrollState.value = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const hideUserSubMenu = () => {
      userSubMenuActive.value = false
    }

    const cleanupMenus = () => {
      mobileMenuActive.value = false
      userSubMenuActive.value = false
    }

    const isTransparent = computed(() => {
      if (props.renderTransparent && !props.flyoutMenuActive && currentScrollState.value < 50)
        return true

      return false
    })

    const renderBgClass = computed(() => {
      if (props.renderTransparent && !props.flyoutMenuActive && currentScrollState.value < 50) {
        return 'bg-transparent-blur'
      } else if (
        props.renderTransparent &&
        !props.flyoutMenuActive &&
        currentScrollState.value >= 50
      ) {
        return 'bg-transparent-white'
      } else if (props.flyoutMenuActive) {
        return 'bg-white'
      }
    })

    return {
      mobileMenuActive,
      renderBgClass,
      cleanupMenus,
      hideUserSubMenu,
      isTransparent,
      userSubMenuActive,
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

.bg-transparent-white {
  background-color: hsla(0, 0%, 100%, 0.92);
}
</style>

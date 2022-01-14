<template>
  <div v-click-outside="cleanupMenus" class="fixed top-0 left-0 right-0">
    <!-- Mobile menu -->
    <mobile-menu v-show="mobileMenuActive" @on-close-menu="mobileMenuActive = false">
      <slot />
    </mobile-menu>

    <!-- Header -->
    <header class="relative">
      <nav aria-label="Top">
        <div :class="renderBgClass">
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
                    <slot name="brand">
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
                      <slot name="start" :isTransparent="isTransparent" />
                    </div>
                  </div>
                </div>

                <div class="lg:hidden flex items-center flex-1">
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
                  <slot name="brand">
                    <CubeTransparentIcon
                      class="w-8 h-8"
                      :class="isTransparent ? 'text-white' : 'text-brand-800'"
                    />
                  </slot>
                </a>

                <div class="flex items-center justify-end flex-1">
                  <div class="lg:ml-8 flex items-center">
                    <slot name="end" :isTransparent="isTransparent" />
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

    const currentScrollState = ref<number>(0)

    const handleScroll = (event: Event) => {
      currentScrollState.value = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const cleanupMenus = () => {
      mobileMenuActive.value = false
    }

    const isTransparent = computed(() => {
      if (props.renderTransparent && !props.flyoutMenuActive && currentScrollState.value < 50)
        return true

      return false
    })

    const renderBgClass = computed(() => {
      if (props.renderTransparent && !props.flyoutMenuActive && currentScrollState.value < 50) {
        return 'bg-transparent-blur transition ease-in-out delay-75'
      } else if (
        props.renderTransparent &&
        !props.flyoutMenuActive &&
        currentScrollState.value >= 50
      ) {
        return 'bg-transparent-white transition ease-in-out delay-75'
      } else if (props.flyoutMenuActive) {
        return 'bg-white'
      }
    })

    return {
      mobileMenuActive,
      renderBgClass,
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

.bg-transparent-white {
  background-color: hsla(0, 0%, 100%, 0.92);
}
</style>

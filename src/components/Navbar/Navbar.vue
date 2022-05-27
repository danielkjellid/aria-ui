<template>
  <div v-click-outside="cleanupMenus" class="fixed top-0 left-0 right-0 z-40">
    <!-- Mobile menu -->
    <mobile-menu v-show="mobileMenuActive" @on-close-menu="mobileMenuActive = false">
      <slot name="start" />
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
                    <a-icon-wrapper
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
                    </a-icon-wrapper>
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
import { CubeTransparentIcon, MenuAlt2Icon } from '@heroicons/vue/outline'
import { computed, defineComponent, onUnmounted, onMounted, ref } from '@vue/runtime-core'
import AContainer from '../Container/Container.vue'
import MobileMenu from './MobileMenu.vue'
import clickOutside from '../../directives/click-outside'

export default defineComponent({
  name: 'ANavbar',
  components: {
    CubeTransparentIcon,
    MenuAlt2Icon,
    AContainer,
    MobileMenu,
  },
  directives: {
    'click-outside': clickOutside,
  },
  props: {
    /**
     * Initially render navbar as see through. Will add a white tint on scroll, and full white if there is a flyout menu
     * active.
     */
    renderTransparent: {
      required: false,
      type: Boolean,
      default: false,
    },
    /**
     * Used for screen readers when focus is on logo.
     */
    brandName: {
      required: false,
      type: String,
      default: 'Aria UI',
    },
    /**
     * Path to get home on the site.
     */
    homePath: {
      required: false,
      type: String,
      default: '/',
    },
    /**
     * Only used for setting correct state for navbar color wise.
     * Flyout's has to be sent in as `a-navbar-item-flyout` and state
     * has to be controlled within parent.
     */
    flyoutMenuActive: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const mobileMenuActive = ref<boolean>(false)

    const currentScrollState = ref<number>(0)

    const handleScroll = () => {
      currentScrollState.value = window.scrollY
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const cleanupMenus = () => {
      mobileMenuActive.value = false
    }

    const isTransparent = computed(() => {
      return !!(props.renderTransparent && !props.flyoutMenuActive && currentScrollState.value < 50)
    })

    const renderBgClass = computed(() => {
      if (props.renderTransparent && !props.flyoutMenuActive && currentScrollState.value < 50) {
        return 'bg-transparent-blur transition ease-in-out delay-75'
      }
      if (props.renderTransparent && !props.flyoutMenuActive && currentScrollState.value >= 50) {
        return 'bg-transparent-white transition ease-in-out delay-75'
      }
      if (props.flyoutMenuActive) {
        return 'bg-white'
      }

      return 'bg-white'
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

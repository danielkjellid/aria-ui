<template>
  <div class="h-96 relative">
    <a-navbar :flyoutMenuActive="flyoutActive">
      <template #start="{ isTransparent }">
        <a-navbar-item-flyout
          :renderTransparent="isTransparent"
          @on-flyout-toggle="handleFlyoutToggle"
        >
          Catalog
          <template #items>
            <a-list-block
              v-for="subMenuItem in subMenuItems"
              :key="subMenuItem.id"
              :label="subMenuItem.name"
            >
              <a-list-block-item
                v-for="child in subMenuItem.children"
                :key="child"
                tag="a"
                href="#"
              >
                {{ child.name }}
              </a-list-block-item>
            </a-list-block>
          </template>
        </a-navbar-item-flyout>
        <a-navbar-item tag="a" href="#" :renderTransparent="isTransparent">
          About us
        </a-navbar-item>
        <a-navbar-item tag="a" href="#" :renderTransparent="isTransparent" active>
          Contact us
        </a-navbar-item>
      </template>
      <template #end="{ isTransparent }">
        <div class="flex space-x-8">
          <!-- Search goes here -->
          <div class="relative flex">
            <a-action-menu :transparentBg="isTransparent" alignment="right">
              <UserCircleIcon
                class="w-6 h-6"
                :class="
                  isTransparent
                    ? 'text-white group-hover:text-gray-300'
                    : 'text-gray-400 group-hover:text-brand-800'
                "
              />
              <span class="sr-only">Your account, view account options</span>
              <template #items>
                <a-action-menu-section>
                  <a-action-menu-item>Your profile</a-action-menu-item>
                  <a-action-menu-item>Settings</a-action-menu-item>
                  <a-action-menu-item>Sign out</a-action-menu-item>
                </a-action-menu-section>
              </template>
            </a-action-menu>
          </div>
        </div>

        <span class="lg:mx-6 sm:mx-4 w-px h-6 mx-2 bg-gray-200" aria-hidden="true"></span>

        <div class="flow-root">
          <a-icon-wrapper
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
              :class="isTransparent ? 'text-brand-900 bg-white' : 'text-white bg-brand-800'"
            >
              0
            </span>
            <span class="sr-only"> items in cart, view bag </span>
          </a-icon-wrapper>
        </div>
      </template>
    </a-navbar>
  </div>
</template>

<script lang="ts">
import ANavbar from './Navbar.vue'
import ANavbarItemFlyout from './NavbarItemFlyout.vue'
import ANavbarItem from './NavbarItem.vue'
import AListBlock from '../ListBlock/ListBlock.vue'
import AListBlockItem from '../ListBlock/ListBlockItem.vue'
import { ref } from '@vue/reactivity'
import AIconWrapper from '../IconWrapper/IconWrapper.vue'
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/vue/outline'
import clickOutside from '../../directives/click-outside'
import AActionMenu from '../ActionMenu/ActionMenu.vue'
import AActionMenuSection from '../ActionMenu/ActionMenuSection.vue'
import AActionMenuItem from '../ActionMenu/ActionMenuItem.vue'

export default {
  name: 'NavbarStorybookHandler',
  components: {
    ANavbar,
    ANavbarItemFlyout,
    ANavbarItem,
    AListBlock,
    AListBlockItem,
    AIconWrapper,
    ShoppingBagIcon,
    UserCircleIcon,
    AActionMenu,
    AActionMenuSection,
    AActionMenuItem,
  },
  directives: {
    'click-outside': clickOutside,
  },
  props: {},
  setup(_, {}) {
    let flyoutActive = ref<boolean>(false)
    const userSubMenuActive = ref<boolean>(false)

    const hideUserSubMenu = () => {
      userSubMenuActive.value = false
    }

    const handleFlyoutToggle = (val: boolean) => {
      flyoutActive.value = val
    }

    const subMenuItems = [
      {
        id: 1,
        name: 'Fliser',
        slug: 'fliser',
        children: [
          {
            id: 1,
            name: 'Alle fliser',
            slug: '1-alle-fliser',
            ordering: 1,
          },
          {
            id: 2,
            name: 'Bad',
            slug: '1-bad',
            ordering: 2,
          },
          {
            id: 3,
            name: 'Kjøkken',
            slug: '1-kjokken',
            ordering: 3,
          },
          {
            id: 4,
            name: 'Stue, gang og oppholdsrom',
            slug: '1-stue-gang-og-oppholdsrom',
            ordering: 4,
          },
          {
            id: 5,
            name: 'Utendørs',
            slug: '1-utendors',
            ordering: 5,
          },
          {
            id: 6,
            name: 'Fliseheller',
            slug: '1-fliseheller',
            ordering: 6,
          },
          {
            id: 7,
            name: 'Mosaikk',
            slug: '1-mosaikk',
            ordering: 7,
          },
          {
            id: 8,
            name: 'Spesialflis',
            slug: '1-spesialflis',
            ordering: 8,
          },
        ],
      },
      {
        id: 3,
        name: 'Innredning',
        slug: 'innredning',
        children: [
          {
            id: 26,
            name: 'All innredning',
            slug: '3-all-innredning',
            ordering: 1,
          },
          {
            id: 27,
            name: 'Servanter',
            slug: '3-servanter',
            ordering: 2,
          },
          {
            id: 32,
            name: 'Frittstående servanter',
            slug: '3-frittstaende-servanter',
            ordering: 3,
          },
          {
            id: 28,
            name: 'Moduler',
            slug: '3-moduler',
            ordering: 3,
          },
          {
            id: 29,
            name: 'Vannklosetter',
            slug: '3-vannklosetter',
            ordering: 4,
          },
          {
            id: 30,
            name: 'Badekar',
            slug: '3-badekar',
            ordering: 5,
          },
          {
            id: 31,
            name: 'Dusj',
            slug: '3-dusj',
            ordering: 6,
          },
          {
            id: 33,
            name: 'Speil og speilskap',
            slug: '3-speil-og-speilskap',
            ordering: 8,
          },
        ],
      },
      {
        id: 5,
        name: 'Belysning',
        slug: 'belysning',
        children: [
          {
            id: 17,
            name: 'All belysning',
            slug: '5-all-belysning',
            ordering: 1,
          },
          {
            id: 18,
            name: 'Gulvlamper',
            slug: '5-gulvlamper',
            ordering: 2,
          },
          {
            id: 19,
            name: 'Bordlamper',
            slug: '5-bordlamper',
            ordering: 3,
          },
          {
            id: 20,
            name: 'Vegglamper',
            slug: '5-vegglamper',
            ordering: 4,
          },
          {
            id: 21,
            name: 'Taklamper',
            slug: '5-taklamper',
            ordering: 5,
          },
          {
            id: 22,
            name: 'Baderomsbelysning',
            slug: '5-baderomsbelysning',
            ordering: 6,
          },
        ],
      },
      {
        id: 6,
        name: 'Armatur',
        slug: 'armatur',
        children: [
          {
            id: 23,
            name: 'Alle armaturer',
            slug: '6-alle-armaturer',
            ordering: 1,
          },
          {
            id: 24,
            name: 'Bad',
            slug: '6-bad',
            ordering: 2,
          },
          {
            id: 25,
            name: 'Kjøkken',
            slug: '6-kjokken',
            ordering: 3,
          },
        ],
      },
      {
        id: 3,
        name: 'Innredning',
        slug: 'innredning',
        children: [
          {
            id: 26,
            name: 'All innredning',
            slug: '3-all-innredning',
            ordering: 1,
          },
          {
            id: 27,
            name: 'Servanter',
            slug: '3-servanter',
            ordering: 2,
          },
          {
            id: 32,
            name: 'Frittstående servanter',
            slug: '3-frittstaende-servanter',
            ordering: 3,
          },
          {
            id: 28,
            name: 'Moduler',
            slug: '3-moduler',
            ordering: 3,
          },
          {
            id: 29,
            name: 'Vannklosetter',
            slug: '3-vannklosetter',
            ordering: 4,
          },
          {
            id: 30,
            name: 'Badekar',
            slug: '3-badekar',
            ordering: 5,
          },
          {
            id: 31,
            name: 'Dusj',
            slug: '3-dusj',
            ordering: 6,
          },
          {
            id: 33,
            name: 'Speil og speilskap',
            slug: '3-speil-og-speilskap',
            ordering: 8,
          },
        ],
      },
    ]

    return {
      flyoutActive,
      handleFlyoutToggle,
      userSubMenuActive,
      hideUserSubMenu,
      subMenuItems,
    }
  },
}
</script>

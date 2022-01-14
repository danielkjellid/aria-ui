<template>
  <div class="h-96 relative">
    <a-navbar
      brandName="Aria UI"
      homePath="/"
      renderTransparent
      :flyoutMenuActive="flyoutActive"
      v-click-outside="cleanupMenus"
    >
      <template #start="{ isTransparent }">
        <a-navbar-item-flyout
          :active="flyoutActive"
          :renderTransparent="isTransparent"
          @on-flyout-toggle="flyoutActive = !flyoutActive"
        >
          Catalog
          <template #items>
            <a-list-block
              v-for="subMenuItem in subMenuItems"
              :key="subMenuItem.id"
              :label="subMenuItem.name"
              :loading="loading"
            >
              <a-list-block-item
                v-for="child in subMenuItem.children"
                :key="child"
                tag="a"
                href="#"
                :loading="loading"
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
import { ref } from '@vue/reactivity'
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/vue/outline'
import ANavbar from './Navbar.vue'
import ANavbarItemFlyout from './NavbarItemFlyout.vue'
import ANavbarItem from './NavbarItem.vue'
import AListBlock from '../ListBlock/ListBlock.vue'
import AListBlockItem from '../ListBlock/ListBlockItem.vue'
import AIconWrapper from '../IconWrapper/IconWrapper.vue'
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
  props: {
    /**
     * Path to get home on the site.
     */
    homePath: {
      type: String,
      required: false,
      default: '/',
    },
    /**
     * Used for screen readers when focus is on logo.
     */
    brandName: {
      type: String,
      required: false,
      default: 'Aria UI',
    },
    /**
     * If we're waiting for async content, the loading prop helps us display a skeleton loader
     * to the user while waiting for data.
     */
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Initially render navbar as see through. Will add a white tint on scroll, and full white if there is a flyout menu
     * active.
     */
    renderTransparent: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Control state for flyout menu. If multiple flyout menus are preset, state will need to be controlled individually for
     * all of them.
     */
    flyoutMenuActive: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    const flyoutActive = ref<boolean>(false)
    const userSubMenuActive = ref<boolean>(false)

    const hideUserSubMenu = () => {
      userSubMenuActive.value = false
    }

    const hideFlyoutMenu = () => {
      flyoutActive.value = false
    }

    const cleanupMenus = () => {
      hideUserSubMenu()
      hideFlyoutMenu()
    }

    const subMenuItems = [
      {
        id: 1,
        name: 'Category 1',
        children: [
          {
            id: 1,
            name: 'Subcategory 1',
          },
          {
            id: 2,
            name: 'Subcategory 2',
          },
          {
            id: 3,
            name: 'Subcategory 3',
          },
          {
            id: 4,
            name: 'Subcategory 4',
          },
          {
            id: 5,
            name: 'Subcategory 5',
          },
          {
            id: 6,
            name: 'Subcategory 6',
          },
          {
            id: 7,
            name: 'Subcategory 7',
          },
          {
            id: 8,
            name: 'Subcategory 8',
          },
        ],
      },
      {
        id: 3,
        name: 'Category 2',
        children: [
          {
            id: 1,
            name: 'Subcategory 9',
          },
          {
            id: 2,
            name: 'Subcategory 10',
          },
          {
            id: 3,
            name: 'Subcategory 11',
          },
          {
            id: 4,
            name: 'Subcategory 12',
          },
          {
            id: 5,
            name: 'Subcategory 13',
          },
          {
            id: 6,
            name: 'Subcategory 14',
          },
          {
            id: 7,
            name: 'Subcategory 15',
          },
          {
            id: 8,
            name: 'Subcategory 16',
          },
        ],
      },
      {
        id: 5,
        name: 'Category 3',
        children: [
          {
            id: 1,
            name: 'Subcategory 17',
          },
          {
            id: 2,
            name: 'Subcategory 18',
          },
          {
            id: 3,
            name: 'Subcategory 19',
          },
          {
            id: 4,
            name: 'Subcategory 20',
          },
          {
            id: 5,
            name: 'Subcategory 21',
          },
        ],
      },
      {
        id: 6,
        name: 'Category 4',
        children: [
          {
            id: 1,
            name: 'Subcategory 22',
          },
          {
            id: 2,
            name: 'Subcategory 23',
          },
          {
            id: 3,
            name: 'Subcategory 24',
          },
        ],
      },
      {
        id: 3,
        name: 'Category 5',
        children: [
          {
            id: 1,
            name: 'Subcategory 25',
          },
          {
            id: 2,
            name: 'Subcategory 26',
          },
          {
            id: 3,
            name: 'Subcategory 27',
          },
          {
            id: 4,
            name: 'Subcategory 28',
          },
          {
            id: 5,
            name: 'Subcategory 29',
          },
          {
            id: 6,
            name: 'Subcategory 30',
          },
        ],
      },
    ]

    return {
      flyoutActive,
      userSubMenuActive,
      hideUserSubMenu,
      subMenuItems,
      cleanupMenus,
    }
  },
}
</script>

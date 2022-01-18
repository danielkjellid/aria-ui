import { Meta, Story } from '@storybook/vue3'
import ANavbar from './Navbar.vue'
import ANavbarItem from './NavbarItem.vue'
import NavbarStorybookHandler from './NavbarStorybookHandler.vue'
import AIconWrapper from '../IconWrapper/IconWrapper.vue'
import { NavbarProps } from './types'

export default {
  title: 'Menus/Navbar',
  component: ANavbar,
  parameter: {
    viewMode: 'docs',
  },
} as Meta

const AdvancedTemplate: Story<NavbarProps> = (args: NavbarProps) => ({
  components: { NavbarStorybookHandler, AIconWrapper },
  setup() {
    return { args }
  },
  template: `<div class="transform scale-100 relative"><NavbarStorybookHandler/></div>`,
})

const Template: Story<NavbarProps> = (args: NavbarProps) => ({
  components: { ANavbar, ANavbarItem },
  setup() {
    return { args }
  },
  template: `<div class="h-48 transform scale-100 relative">
  <a-navbar v-bind="args"><template #start><a-navbar-item tag="a" href="#">Item 1</a-navbar-item><a-navbar-item tag="a" href="#">Item 2</a-navbar-item><a-navbar-item tag="a" href="#">Item 3</a-navbar-item></template></a-navbar></div>`,
})

export const API = Template.bind({})
API.args = { flyoutMenuActive: false }
API.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    source: {
      code: `<a-navbar>
  <template #start>
    <a-navbar-item tag="a" href="#">Item 1</a-navbar-item>
    <a-navbar-item tag="a" href="#">Item 2</a-navbar-item>
    <a-navbar-item tag="a" href="#">Item 3</a-navbar-item>
  </template>
</a-navbar>
      `,
    },
  },
}

export const Advanced = AdvancedTemplate.bind({})
Advanced.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    source: {
      code: `<a-navbar
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
</a-navbar>`,
    },
  },
}

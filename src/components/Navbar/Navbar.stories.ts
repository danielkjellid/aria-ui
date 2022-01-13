import { Meta, Story } from '@storybook/vue3'
import NavbarStorybookHandler from './NavbarStorybookHandler.vue'

export default {
  title: 'Menus/Navbar',
  component: NavbarStorybookHandler,
  parameter: {
    viewMode: 'docs',
  },
  argTypes: {
    toggleFlyoutMenu: { action: 'clicked' },
  },
} as Meta

const Template: Story<any> = (args: any) => ({
  components: { NavbarStorybookHandler },
  setup() {
    return { args }
  },
  template: `<div class="min-h-screen overflow-y-auto"><NavbarStorybookHandler /></div>`,
})

export const API = Template.bind({})
API.args = {
  flyoutMenuActive: false,
}
API.parameters = {
  backgrounds: { default: 'dark' },
}

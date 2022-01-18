import { Meta, Story } from '@storybook/vue3'
import ALink from './Link.vue'
import { LinkProps } from './types'

export default {
  title: 'UI Elements/Link',
  component: ALink,
  parameter: {
    viewMode: 'docs',
  },
} as Meta

const Template: Story<LinkProps> = (args: LinkProps) => ({
  components: { ALink },
  setup() {
    return { args }
  },
  template: '<a-link v-bind="args">Example link</a-link>',
})

export const API = Template.bind({})
API.args = { tag: 'a' }
API.parameters = {
  docs: {
    source: {
      code: '<a-link tag="a" href="#">Example link</a-link>',
    },
  },
}

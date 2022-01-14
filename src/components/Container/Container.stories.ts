import { Meta, Story } from '@storybook/vue3'
import AContainer from './Container.vue'
import { MaxWidthOptions } from './types'

const maxWidthOptions: MaxWidthOptions[] = ['none', 'prose', 'xs', 'sm', 'md', 'xl', '2xl']

export default {
  title: 'UI Elements/Container',
  component: AContainer,
  parameter: {
    viewMode: 'docs',
  },
  argTypes: {
    maxWidth: {
      options: maxWidthOptions,
      defaultValue: undefined,
      table: {
        type: {
          summary: maxWidthOptions.join(',').replace(/,/g, ' | '),
        },
      },
    },
  },
} as Meta

const Template: Story = (args) => ({
  components: { AContainer },
  setup() {
    return { args }
  },
  template:
    '<div><h1 class="text-green-400 text-center">Screen</h1><div class="border-4 border-dashed border-green-200 rounded-lg"><a-container v-bind="args"><h1 class="text-gray-400 text-center">Container</h1><div class="border-4 border-dashed border-gray-200 rounded-lg h-96" /></a-container></div></div>',
})

export const API = Template.bind({})

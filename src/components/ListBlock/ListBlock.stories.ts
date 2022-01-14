import { Meta, Story } from '@storybook/vue3'
import AListBlock from './ListBlock.vue'
import AListBlockItem from './ListBlockItem.vue'
import { ListBlockProps } from './types'

export default {
  title: 'UI Elements/List Block',
  component: AListBlock,
  parameter: {
    viewMode: 'docs',
  },
} as Meta

const Template: Story<ListBlockProps> = (args: ListBlockProps) => ({
  components: { AListBlock, AListBlockItem },
  setup() {
    return { args }
  },
  template:
    '<div class="w-48"><a-list-block v-bind="args"><a-list-block-item tag="div" v-bind="args">Item 1</a-list-block-item><a-list-block-item tag="div" v-bind="args">Item 2</a-list-block-item><a-list-block-item tag="div" v-bind="args">Item 3</a-list-block-item></a-list-block></div>',
})

export const API = Template.bind({})
API.args = { label: 'List block label' }
API.parameters = {
  docs: {
    source: {
      code: `<a-list-block label="List block label" :loading="false" >
  <a-list-block-item tag="div" :loading="false">Item 1</a-list-block-item>
  <a-list-block-item tag="div" :loading="false">Item 2</a-list-block-item>
  <a-list-block-item tag="div" :loading="false">Item 3</a-list-block-item>
</a-list-block>`,
    },
  },
}

export const WithLoadingState = Template.bind({})
WithLoadingState.args = { ...API.args, loading: true }

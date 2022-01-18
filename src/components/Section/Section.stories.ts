import { Meta, Story } from '@storybook/vue3'
import ASection from './Section.vue'
import { SectionProps } from './types'

export default {
  title: 'UI Elements/Section',
  component: ASection,
  parameter: {
    viewMode: 'docs',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
} as Meta

const Template: Story<SectionProps> = (args: SectionProps) => ({
  components: { ASection },
  setup() {
    return { args }
  },
  template: '<a-section v-bind="args"></a-section>',
})

export const API = Template.bind({})
API.args = { title: 'Section title' }
API.parameters = {
  docs: {
    source: {
      code: '<a-section title="Section title">Content</a-section>',
    },
  },
}

export const NonCollapsable = Template.bind({})
NonCollapsable.args = { title: 'Non collapsable', disableCollapse: true }
NonCollapsable.parameters = {
  docs: {
    source: {
      code: '<a-section title="Non collapsable" disableCollapse>Content</a-section>',
    },
  },
}

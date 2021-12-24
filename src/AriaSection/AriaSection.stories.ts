import { Meta, Story } from '@storybook/vue3'
import AriaSection from './AriaSection.vue'
import { SectionProps } from './types'

export default {
  title: 'UI Elements/Section',
  component: AriaSection,
  parameter: {
    viewMode: 'docs'
  },
  argTypes: {
    title: {
      control: { type: 'text' }
    }
  }
} as Meta

const Template: Story<SectionProps> = (args: SectionProps) => ({
  components: { AriaSection },
  setup() {
    return { args }
  },
  template: '<aria-section v-bind="args"></aria-section>'
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    source: {
      code: `<aria-section title="Section title">Content</aria-section>`
    }
  }
}

export const NonCollapsable = Template.bind({})
NonCollapsable.args = { title: 'Non collapsable', disableCollapse: true }
NonCollapsable.parameters = {
  docs: {
    source: {
      code: `<aria-section title="Non collapsable" disableCollapse>Content</aria-section>`
    }
  }
}
import { Meta, Story } from '@storybook/vue3'
import AriaNoData from './AriaNoData.vue'
import { NoDataProps } from './types'

export default {
  title: 'UI elements/NoData',
  component: AriaNoData,
  parameter: {
    viewMode: 'docs'
  },
} as Meta

const Template: Story<NoDataProps> = (args: NoDataProps) => ({
  components: { AriaNoData },
  setup() {
    return { args }
  },
  template: '<aria-no-data v-bind="args" />'
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    description: {
      story: 'A light button is usually used as a secondary options where it indicates an action, but not the primary action.'
    },
    source: {
      code: `<aria-no-data />`,  
    }
  }
}

export const CustomErrorMessage = Template.bind({})
CustomErrorMessage.args = { errorMessage: 'This is a custom error message' }
CustomErrorMessage.parameters = {
  docs: {
    description: {
      story: 'If needed, a custom error message can also be provided for these cases.'
    },
    source: {
      code: `<aria-no-data errorMessage="This is a custom error message" />`,  
    }
  }
}
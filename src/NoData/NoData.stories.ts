import { Meta, Story } from '@storybook/vue3'
import NoData from './NoData.vue'

interface NoDataProps {
  errorMessage?: string
}

export default {
  title: 'UI elements/NoData',
  component: NoData,
  parameter: {
    viewMode: 'docs'
  },
} as Meta

const Template: Story<NoDataProps> = (args: NoDataProps) => ({
  components: { NoData },
  setup() {
    return { args }
  },
  template: '<NoData v-bind="args" />'
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    description: {
      story: 'A light button is usually used as a secondary options where it indicates an action, but not the primary action.'
    },
    source: {
      code: `<NoData />`,  
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
      code: `<NoData errorMessage="This is a custom error message" />`,  
    }
  }
}
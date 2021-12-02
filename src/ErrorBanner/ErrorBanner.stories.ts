import { Meta, Story } from '@storybook/vue3'
import ErrorBanner from './ErrorBanner.vue'

interface ErrorBannerProps {
  errors: any[]
}

export default {
  title: 'UI Elements/Error Banner',
  component: ErrorBanner,
  parameters: {
    viewMode: 'docs'
  }
} as Meta

const Template: Story<ErrorBannerProps> = (args: ErrorBannerProps) => ({
  components: { ErrorBanner },
  setup() {
    return { args }
  },
  template: '<ErrorBanner v-bind="args" />'
})

export const API = Template.bind({})
API.parameters = {
  docs: {
      source: {
        code: `<ErrorBanner />`,  
      }
    }
}

export const ErrorBannerWithDetails = Template.bind({})
ErrorBannerWithDetails.args = { 
  errors: [
    'This is the first thing that went wrong', 
    'This is the second thing'
  ] 
}
ErrorBannerWithDetails.parameters = {
  docs: {
      description: {
        story: 'Its useful to tell the user exactly what went wrong. Specific errors can be specified as an array of strings, where each string represents an error.'
      },
      source: {
        code: `<ErrorBanner :errors="['This is the first thing that went wrong', 'This is the second thing'] />`,  
      }
    }
}
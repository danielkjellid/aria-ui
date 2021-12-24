import { Meta, Story } from '@storybook/vue3'
import AriaMessage from './AriaMessage.vue'
import { MessageVariant, MessageProps } from './types'

const variants: MessageVariant[] = [
  'success',
  'info',
  'warning',
  'danger'
]

const config = {
  title: 'UI Elements/Message',
  component: AriaMessage,
  parameter: {
    viewMode: 'docs'
  },
  argTypes: {
    display: {
      defaultValue: true
    },
    variant: {
      options: variants,
      defaultValue: 'warning',
      table: {
        type: {
          summary: variants.join(',').replace(/,/g, ' | ')
        }
      }
    }
  }
} as Meta

export default config

const Template: Story<MessageProps> = (args: MessageProps) => ({
  components: { AriaMessage },
  setup() {
    return { args }
  },
  template: '<AriaMessage v-bind="args"><p class="text-sm font-normal text-gray-900">Some message content</p></AriaMessage>'
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    source: {
      code: `
<aria-message 
  display 
  variant="warning"
>
  <p class="text-sm font-normal text-gray-900">Some message content</p>
</aria-message>`
    }
  }
}

export const Success = Template.bind({})
Success.args = { display: true, variant: 'success' }
Success.parameters = {
  docs: {
    source: {
      code: `
<aria-message 
  display 
  variant="success"
>
  <p class="text-sm font-normal text-gray-900">Some message content</p>
</aria-message>`
    }
  }
}

export const Info = Template.bind({})
Info.args = { display: true, variant: 'info' }
Info.parameters = {
  docs: {
    source: {
      code: `
<aria-message 
  display 
  variant="info"
>
  <p class="text-sm font-normal text-gray-900">Some message content</p>
</aria-message>`
    }
  }
}

export const Warning = Template.bind({})
Warning.args = { display: true, variant: 'warning' }
Warning.parameters = {
  docs: {
    source: {
      code: `
<aria-message 
  display 
  variant="warning"
>
  <p class="text-sm font-normal text-gray-900">Some message content</p>
</aria-message>`
    }
  }
}

export const Danger = Template.bind({})
Danger.args = { display: true, variant: 'danger' }
Danger.parameters = {
  docs: {
    source: {
      code: `
<aria-message 
  display 
  variant="danger"
>
  <p class="text-sm font-normal text-gray-900">Some message content</p>
</aria-message>`
    }
  }
}
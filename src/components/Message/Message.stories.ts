import { Meta, Story } from '@storybook/vue3'
import AMessage from './Message.vue'
import { MessageVariant, MessageProps } from './types'

const variants: MessageVariant[] = ['success', 'info', 'warning', 'danger']

const config = {
  title: 'UI Elements/Message',
  component: AMessage,
  parameter: {
    viewMode: 'docs',
  },
  argTypes: {
    variant: {
      options: variants,
      table: {
        type: {
          summary: variants.join(',').replace(/,/g, ' | '),
        },
      },
    },
  },
} as Meta

export default config

const Template: Story<MessageProps> = (args: MessageProps) => ({
  components: { AMessage },
  setup() {
    return { args }
  },
  template:
    '<a-message v-bind="args"><p class="text-sm font-normal text-gray-900">Some message content</p></a-message>',
})

export const API = Template.bind({})
API.args = { display: true }
API.parameters = {
  docs: {
    source: {
      code: `
<a-message 
  display 
  variant="warning"
>
  <p class="text-sm font-normal text-gray-900">Some message content</p>
</a-message>`,
    },
  },
}

export const Success = Template.bind({})
Success.args = { display: true, variant: 'success' }
Success.parameters = {
  docs: {
    source: {
      code: `
<a-message 
  display 
  variant="success"
>
  <p class="text-sm font-normal text-gray-900">Some message content</p>
</a-message>`,
    },
  },
}

export const Info = Template.bind({})
Info.args = { display: true, variant: 'info' }
Info.parameters = {
  docs: {
    source: {
      code: `
<a-message 
  display 
  variant="info"
>
  <p class="text-sm font-normal text-gray-900">Some message content</p>
</a-message>`,
    },
  },
}

export const Warning = Template.bind({})
Warning.args = { display: true, variant: 'warning' }
Warning.parameters = {
  docs: {
    source: {
      code: `
<a-message 
  display 
  variant="warning"
>
  <p class="text-sm font-normal text-gray-900">Some message content</p>
</a-message>`,
    },
  },
}

export const Danger = Template.bind({})
Danger.args = { display: true, variant: 'danger' }
Danger.parameters = {
  docs: {
    source: {
      code: `
<a-message 
  display 
  variant="danger"
>
  <p class="text-sm font-normal text-gray-900">Some message content</p>
</a-message>`,
    },
  },
}

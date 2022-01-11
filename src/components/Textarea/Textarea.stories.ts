import { Meta, Story } from '@storybook/vue3'
import ATextarea from './Textarea.vue'
import { TextareaProps } from './types'

export default {
  title: 'Forms/Textarea',
  component: ATextarea,
  parameter: {
    viewMode: 'docs',
  },
} as Meta

const Template: Story<TextareaProps> = (args: TextareaProps) => ({
  components: { ATextarea },
  setup() {
    return { args }
  },
  template: '<a-textarea v-bind="args"></a-textarea>',
})

export const API = Template.bind({})
API.args = {
  id: 'some-id',
  label: 'Textarea',
  placeholder: 'Type something...',
}
API.parameters = {
  docs: {
    source: {
      code: `
<a-textarea
  id="some-id"
  label="Textarea"
  placeholder="Type something..."
  @input="someMethod"
>
  ...
</a-textarea>
      `,
    },
  },
}

export const WithError = Template.bind({})
WithError.args = { ...API.args, error: 'Some field error...', value: 'Content' }
WithError.parameters = {
  docs: {
    source: {
      code: `
<a-textarea
  id="some-id"
  label="Textarea"
  placeholder="Type something..."
  error="Some field error..."
  @input="someMethod"
>
  ...
</a-textarea>
      `,
    },
  },
}

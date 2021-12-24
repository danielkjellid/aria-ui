import { Meta, Story } from '@storybook/vue3'
import AriaTextarea from './AriaTextarea.vue'
import { TextareaProps } from './types'

export default {
  title: 'Forms/Textarea',
  component: AriaTextarea,
  parameter: {
    viewMode: 'docs'
  },
} as Meta

const Template: Story<TextareaProps> = (args: TextareaProps) => ({
  components: { AriaTextarea },
  setup() {
    return { args }
  },
  template: '<AriaTextarea v-bind="args"></AriaTextarea>'
})

export const API = Template.bind({})
API.args = { id: 'some-id', label: 'Textarea', placeholder: 'Type something...', }
API.parameters = {
  docs: {
    source: {
      code: `
<aria-textarea
  id="some-id"
  label="Textarea"
  placeholder="Type something..."
  @input="someMethod"
>
  ...
</aria-textarea>
      `
    }
  }
}

export const WithError = Template.bind({})
WithError.args = {...API.args, error: 'Some field error...', value: 'Content'}
WithError.parameters = {
  docs: {
    source: {
      code: `
<aria-textarea
  id="some-id"
  label="Textarea"
  placeholder="Type something..."
  error="Some field error..."
  @input="someMethod"
>
  ...
</aria-textarea>
      `
    }
  }
}
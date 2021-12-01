import { Meta, Story } from '@storybook/vue3'
import Checkbox from './Checkbox.vue'

interface CheckboxProps {
  id?: string
  label: string
  helpText?: string
  checked: boolean
  hiddenLabel?: boolean
}

export default {
  title: 'forms/Checkbox',
  component: Checkbox,
  argTypes: {
    onClick: {}
  }
} as Meta

const Template: Story<CheckboxProps> = (args: CheckboxProps) => ({
  components: { Checkbox },
  setup() {
    return { args }
  },
  template: '<Checkbox v-bind="args" />'
})

export const API = Template.bind({})
API.args = { label: 'This is a checkbox', checked: true }
API.parameters = {
  docs: {
    source: {
      code: 
`<Checkbox
  label="This is a checkbox"
  v-model="field"
  :checked="field"
/>`
    }
  }
}

export const WithHelpText = Template.bind({})
WithHelpText.args = { label: 'This is an example', checked: true, helpText: 'This is an example of added help text' }
WithHelpText.parameters = {
  docs: {
    description: {
      story: 'Try to keep the label as short as possible. If needed, additional explanatory help text can be added.'
    },
    source: {
      code: 
`<Checkbox
  label="This is an example"
  helpText="This is an example of added help text"
  v-model="field"
  :checked="field"
/>
`
    }
  }
}

export const hiddenLabel = Template.bind({})
hiddenLabel.args = { label: 'This is a hidden label', checked: true, hiddenLabel: true}
hiddenLabel.parameters = {
  docs: {
    description: {
      story: 'Checkboxes with hidden labels should be pretty self explanatory. The label is not removed, but the <code>sr-only</code> class is added, to keep it WCAG friendly.'
    },
    source: {
      code: 
`<Checkbox
  label="Subscribe to newsletter"
  hiddenLabel
  v-model="field"
  :checked="field"
/>
`
    }
  }
}

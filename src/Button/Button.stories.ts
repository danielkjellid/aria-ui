import { Meta, Story } from '@storybook/vue3'
import Button from './Button.vue'

interface ButtonProps {
  icon?: Boolean
  light?: Boolean
  to?: String
  activeClass?: String
  buttonType?: String
  plain?: Boolean
  outlined?: Boolean
}

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: {}
  },
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args" >Button</Button>'
})

export const Primary = Template.bind({})

export const Light = Template.bind({})
Light.args = { light: true }

export const Outlined = Template.bind({})
Outlined.args = { outlined: true }

export const Plain = Template.bind({})
Plain.args = { plain: true }
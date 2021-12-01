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
  title: 'UI Elements/Button',
  component: Button,
  parameters: {
    viewMode: 'docs'
  },
  argTypes: {
    onClick: {}
  },
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args">Button</Button>'
})

export const Primary = Template.bind({})
Primary.parameters = {
  docs: {
    source: {
      code: 
`<Button 
  @click="someMethod" 
  class="..."
>
  Button
</Button>`
    }
  }
}

export const Light = Template.bind({})
Light.args = { light: true }
Light.parameters = {
  docs: {
    description: {
      story: 'A light button is usually used as a secondary options where it indicates an action, but not the primary action.'
    },
    source: {
      code: 
`<Button 
  light 
  @click="someMethod" 
  class="..."
>
  Button
</Button>`,  
    }
  }
}

export const Outlined = Template.bind({})
Outlined.args = { outlined: true }
Outlined.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    description: {
      story: 'An outlined button is usually used on top of images.'
    },
    source: {
      code: 
`<Button
  outlined
  @click="someMethod"
  class="..."
>
  Button
</Button>
`
    }
  }
}

export const Plain = Template.bind({})
Plain.args = { plain: true }
Plain.parameters = {
  docs: {
    description: {
      story: 'A plain button is a button without styling, but inherits all the other button properties.'
    }
  }
}
import { Meta, Story } from '@storybook/vue3'
import AriaAnimateFadeOutExample from './AriaAnimateFadeOutExample.vue'

export default {
  title: 'Animations/AnimateFadeOut',
  component: AriaAnimateFadeOutExample,
  parameter: {
    viewMode: 'docs'
  },
  argTypes: {
    onClick: { action: 'clicked' }
  }
} as Meta

const Template: Story = (args) => ({
  components: { AriaAnimateFadeOutExample },
  setup() {
    return { args }
  },
  template: '<aria-animate-fade-out-example />'
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    description: {
      story: 'A light button is usually used as a secondary options where it indicates an action, but not the primary action.'
    },
    source: {
      code: 
  `<aria-animate-fade-out>
  <component :display="display" />
</aria-animate-fade-out>`,  
    }
  }
}
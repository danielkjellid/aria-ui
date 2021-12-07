import { Meta, Story } from '@storybook/vue3'
import AnimateFadeOutExample from './AnimateFadeOutExample.vue'

export default {
  title: 'Animations/AnimateFadeOut',
  component: AnimateFadeOutExample,
  parameter: {
    viewMode: 'docs'
  },
  argTypes: {
    onClick: { action: 'clicked' }
  }
} as Meta

const Template: Story = (args) => ({
  components: { AnimateFadeOutExample },
  setup() {
    return { args }
  },
  template: '<AnimateFadeOutExample />'
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    description: {
      story: 'A light button is usually used as a secondary options where it indicates an action, but not the primary action.'
    },
    source: {
      code: 
  `<AnimateFadeOut>
  <component :display="display" />
</AnimateFadeOut>`,  
    }
  }
}
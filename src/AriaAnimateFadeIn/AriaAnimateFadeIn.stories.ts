import { Meta, Story } from '@storybook/vue3'
import AriaAnimateFadeInExample from './AriaAnimateFadeInExample.vue'

export default {
  title: 'Animations/FadeIn',
  component: AriaAnimateFadeInExample,
  parameter: {
    viewMode: 'docs'
  },
} as Meta

const Template: Story = (args) => ({
  components: { AriaAnimateFadeInExample },
  setup() {
    return { args }
  },
  template: '<aria-animate-fade-in-example />'
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    source: {
      code: 
  `<aria-animate-fade-in>
  <component :display="display" />
</aria-animate-fade-in>`,  
    }
  }
}
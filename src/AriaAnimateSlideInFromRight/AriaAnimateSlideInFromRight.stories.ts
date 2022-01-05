import { Meta, Story } from '@storybook/vue3'
import AriaAnimateSlideInFromRightExample from './AriaAnimateSlideInFromRightExample.vue'

export default {
  title: 'Animations/SlideInFromRight',
  component: AriaAnimateSlideInFromRightExample,
  parameter: {
    viewMode: 'docs'
  },
} as Meta

const Template: Story = (args) => ({
  components: { AriaAnimateSlideInFromRightExample },
  setup() {
    return { args }
  },
  template: '<aria-animate-slide-in-from-right-example v-bind="args"></aria-animate-slide-in-from-right-example>'
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    source: {
      code: 
  `<aria-animate-slide-in-from-right>
  <component :display="display" />
</aria-animate-slide-in-from-right>`,  
    }
  }
}
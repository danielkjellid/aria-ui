import { Meta, Story } from '@storybook/vue3'
import ASlideOver from './SlideOver.vue'
import { SlideOverProps } from './types'

export default {
  title: 'UI Elements/Slide over',
  component: ASlideOver,
  parameter: {
    viewMode: 'docs',
  },
} as Meta

const Template: Story<SlideOverProps> = (args: SlideOverProps) => ({
  components: { ASlideOver },
  setup() {
    return { args }
  },
  template:
    '<div class="relative h-screen transform scale-100"><a-slide-over v-bind="args"></a-slide-over></div>',
})

export const API = Template.bind({})
API.args = { title: 'Panel title', active: true }
API.parameters = {
  docs: {
    source: {
      code: `<a-slide-over
  active
  title="Panel title"
  on-close="active = false"
>
...
</a-slide-over>`,
    },
  },
}

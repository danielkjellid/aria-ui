import { Meta, Story } from '@storybook/vue3'
import AIconWrapper from './IconWrapper.vue'
import { IconProps } from './types'
import { ExclamationCircleIcon } from '@heroicons/vue/outline'

export default {
  title: 'UI Elements/Icon Wrapper',
  component: AIconWrapper,
  parameter: {
    viewMode: 'docs',
  },
} as Meta

const Template: Story<IconProps> = (args: IconProps) => ({
  components: { AIconWrapper, ExclamationCircleIcon },
  setup() {
    return { args }
  },
  template:
    '<a-icon-wrapper v-bind="args"><ExclamationCircleIcon class="w-8 h-8 text-brand-800"/></a-icon-wrapper>',
})

const FocusTemplate: Story<IconProps> = (args: IconProps) => ({
  components: { AIconWrapper, ExclamationCircleIcon },
  setup() {
    return { args }
  },
  template:
    '<div class="inline-block outline-none ring-2 bg-inherit ring-offset-brand-800 ring-transparent ring-offset-2 p-2 rounded-md"><ExclamationCircleIcon class="w-8 h-8 text-brand-800"/></div>',
})

const FocusTransparentBgTemplate: Story<IconProps> = (args: IconProps) => ({
  components: { AIconWrapper, ExclamationCircleIcon },
  setup() {
    return { args }
  },
  template:
    '<div class="outline-none ring-2 ring-offset-2 inline-flex p-2 rounded-md bg-transparent ring-transparent ring-offset-white"><ExclamationCircleIcon class="w-8 h-8 text-white"/></div>',
})

export const API = Template.bind({})
API.args = { tag: 'div' }
API.parameters = {
  docs: {
    source: {
      code: `<a-icon-wrapper tag="div">
  <ExclamationCircleIcon class="w-8 h-8 text-brand-800"/>
</a-icon-wrapper>`,
    },
  },
}

export const FocusState = FocusTemplate.bind({})
FocusState.parameters = {
  docs: {
    description: {
      story: 'Wrapper component with focus state active.',
    },
    source: {
      code: `<a-icon-wrapper tag="div">
  <ExclamationCircleIcon class="w-8 h-8 text-brand-800"/>
</a-icon-wrapper>`,
    },
  },
}

export const FocusStateTransparentBg = FocusTransparentBgTemplate.bind({})
FocusStateTransparentBg.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    description: {
      story: 'Wrapper component with focus state active and the `transparentBg` prop present.',
    },
    source: {
      code: `<a-icon-wrapper tag="div" transparentBg>
  <ExclamationCircleIcon class="w-8 h-8 text-white"/>
</a-icon-wrapper>`,
    },
  },
}

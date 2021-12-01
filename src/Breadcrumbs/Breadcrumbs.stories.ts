import { Meta, Story } from '@storybook/vue3'
import Breadcrumbs from './Breadcrumbs.vue'
import { PropType } from '@vue/runtime-core'
import { BreadcrumbType } from './types'

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbType[]
}

export default {
  title: 'UI Elements/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    viewMode: 'docs'
  },
} as Meta

const Template: Story<BreadcrumbsProps> = (args: BreadcrumbsProps) => ({
  components: { Breadcrumbs },
  setup() {
    return { args }
  },
  template: '<Breadcrumbs v-bind="args" />'
})

export const API = Template.bind({})
API.args = { 
  breadcrumbs: [
    { href: 'some/path/', text: 'Home', disabled: false }, 
    { href: 'some/past/path/', text: 'Previous', disabled: false},
    { href: 'some/other/path/', text: 'Current', disabled: true}
  ]
}
API.argTypes = {
  breadcrumbs: {
    description: '<code>array[{ href: string, text: string, disabled: bool }]</code>'
  }
}
API.parameters = {
  docs: {
    source: {
      code: `<Breadcrumbs :breadcrumbs="breadcrumbs" />`
    }
  }
}



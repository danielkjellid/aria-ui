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
  argTypes: {
    breadcrumbs: {
      table: {
        type: {
          summary: '[{ href: str, text: str, current: bool}]'
        }
      }
    }
  }
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
    { href: 'some/path/', text: 'Home', current: false }, 
    { href: 'some/past/path/', text: 'Previous', current: false },
    { href: 'some/other/path/', text: 'Current', current: true }
  ]
}
API.parameters = {
  docs: {
    source: {
      code: `<Breadcrumbs :breadcrumbs="[{ href: 'some/path/', text: 'Home', current: false }, { href: 'some/past/path/', text: 'Previous', current: false}, { href: 'some/other/path/', text: 'Current', current: true}]" />`
    }
  }
}



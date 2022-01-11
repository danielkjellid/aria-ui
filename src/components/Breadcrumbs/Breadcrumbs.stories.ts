import { Meta, Story } from '@storybook/vue3'
import ABreadcrumbs from './Breadcrumbs.vue'
import { BreadcrumbType } from './types'

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbType[]
}

export default {
  title: 'UI Elements/Breadcrumbs',
  component: ABreadcrumbs,
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    breadcrumbs: {
      table: {
        type: {
          summary: '[{ href: str, text: str, current: bool}]',
        },
      },
    },
  },
} as Meta

const Template: Story<BreadcrumbsProps> = (args: BreadcrumbsProps) => ({
  components: { ABreadcrumbs },
  setup() {
    return { args }
  },
  template: '<a-breadcrumbs v-bind="args" />',
})

export const API = Template.bind({})
API.args = {
  breadcrumbs: [
    { href: 'some/path/', text: 'Home', current: false },
    { href: 'some/past/path/', text: 'Previous', current: false },
    { href: 'some/other/path/', text: 'Current', current: true },
  ],
}
API.parameters = {
  docs: {
    source: {
      code: '<a-breadcrumbs :breadcrumbs="[{ href: \'some/path/\', text: \'Home\', current: false }, { href: \'some/past/path/\', text: \'Previous\', current: false}, { href: \'some/other/path/\', text: \'Current\', current: true}]" />',
    },
  },
}

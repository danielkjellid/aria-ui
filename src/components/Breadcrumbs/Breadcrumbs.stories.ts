import { Meta, Story } from '@storybook/vue3'
import ABreadcrumbs from './Breadcrumbs.vue'
import ABreadcrumbItem from './BreadcrumbItem.vue'
import { BreadcrumbsProps } from './types'

export default {
  title: 'UI Elements/Breadcrumbs',
  component: ABreadcrumbs,
  parameters: {
    viewMode: 'docs',
  },
} as Meta

const Template: Story<BreadcrumbsProps> = (args: BreadcrumbsProps) => ({
  components: { ABreadcrumbs, ABreadcrumbItem },
  setup() {
    return { args }
  },
  template:
    '<a-breadcrumbs v-bind="args"><a-breadcrumb-item tag="a" href="#">Home</a-breadcrumb-item><a-breadcrumb-item tag="a" href="#">Previous</a-breadcrumb-item><a-breadcrumb-item tag="span" href="#" active>Current</a-breadcrumb-item></a-breadcrumbs>',
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    source: {
      code: `<a-breadcrumbs homeTitle="Hjem" homePath="/">
  <a-breadcrumb-item tag="a" href="#">Home</a-breadcrumb-item>
  <a-breadcrumb-item tag="a" href="#">Previous</a-breadcrumb-item>
  <a-breadcrumb-item tag="span" active>Current</a-breadcrumb-item>
</a-breadcrumbs>`,
    },
  },
}

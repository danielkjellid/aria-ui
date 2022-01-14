import { Meta, Story } from '@storybook/vue3'
import ASkeletonLoader from './SkeletonLoader.vue'
import { SkeletonLoaderProps, LoaderShape } from './types'

const shapes: LoaderShape[] = ['circle', 'square']

export default {
  title: 'UI Elements/Skeleton Loader',
  component: ASkeletonLoader,
  parameter: {
    viewMode: 'docs',
  },
  argTypes: {
    shape: {
      options: shapes,
      table: {
        type: {
          summary: shapes.join(',').replace(/,/g, ' | '),
        },
      },
    },
  },
} as Meta

const Template: Story<SkeletonLoaderProps> = (args: any) => ({
  components: { ASkeletonLoader },
  setup() {
    return { args }
  },
  template: '<div class="h-96"><a-skeleton-loader v-bind="args"></a-skeleton-loader></div>',
})

export const API = Template.bind({})
API.args = {
  loading: true,
}

import { Meta, Story } from '@storybook/vue3'
import AStack from './Stack.vue'
import { StackProps, Direction, Spacing, JustifyContent, AlignItems } from './types'

const directionOptions: Direction[] = ['vertical', 'horizontal']
const spacingOptions: Spacing[] = ['xs', 'sm', 'md', 'lg', 'xl']
const justifyContentOptions: JustifyContent[] = [
  'left',
  'right',
  'center',
  'between',
  'around',
  'evenly',
]
const alignItemsOptions: AlignItems[] = ['top', 'bottom', 'center', 'baseline', 'stretch']

export default {
  title: 'UI Elements/Stack',
  component: AStack,
  parameter: {
    viewMode: 'docs',
  },
  argTypes: {
    direction: {
      options: directionOptions,
      table: {
        type: {
          summary: directionOptions.join(',').replace(/,/g, ' | '),
        },
      },
    },
    spacing: {
      options: spacingOptions,
      table: {
        type: {
          summary: spacingOptions.join(',').replace(/,/g, ' | '),
        },
      },
    },
    justifyContent: {
      options: justifyContentOptions,
      table: {
        type: {
          summary: justifyContentOptions.join(',').replace(/,/g, ' | '),
        },
      },
    },
    alignItems: {
      options: alignItemsOptions,
      table: {
        type: {
          summary: alignItemsOptions.join(',').replace(/,/g, ' | '),
        },
      },
    },
  },
} as Meta

const Template: Story<StackProps> = (args: StackProps) => ({
  components: { AStack },
  setup() {
    return { args }
  },
  template:
    '<div class="h-96 border-2 border-gray-400 border-dashed p-5"><a-stack v-bind="args"><div class="w-48 h-48 bg-green-500" /><div class="w-48 h-24 bg-red-500" /><div class="w-48 h-36 bg-blue-500" /></a-stack></div>',
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    source: {
      code: `<a-stack
  tag="div"
  direction="horizontal"
  spacing="md"
  justifyContent="left"
  alignItems="left"
>
...
</a-stack>`,
    },
  },
}

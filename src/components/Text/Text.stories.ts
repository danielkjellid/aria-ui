import { Meta, Story } from '@storybook/vue3'
import AText from './Text.vue'
import { TextAlignment, TextProps, TextVariant } from './types'

const variants: TextVariant[] = [
  'title1',
  'title2',
  'title3',
  'title4',
  'title5',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
]

const alignments: TextAlignment[] = ['left', 'center', 'right', 'stretch']

export default {
  title: 'Typography/Text',
  component: AText,
  parameter: {
    viewMode: 'docs',
  },
  argTypes: {
    variant: {
      options: variants,
      table: {
        type: {
          summary: variants.join(',').replace(/,/g, ' | '),
        },
      },
    },
    alignSelf: {
      options: alignments,
      table: {
        type: {
          alignments: alignments.join(',').replace(/,/g, ' | '),
        },
      },
    },
  },
} as Meta

const Template: Story<TextProps> = (args: TextProps) => ({
  components: { AText },
  setup() {
    return { args }
  },
  template: `<div class="space-y-3 flex flex-col">
<a-text v-bind="args" tag="p" variant="title1">Title 1 / Inter</a-text>
<a-text v-bind="args" tag="p" variant="title2">Title 2 / Inter</a-text>
<a-text v-bind="args" tag="p" variant="title3">Title 3 / Inter</a-text>
<a-text v-bind="args" tag="p" variant="title4">Title 4 / Inter</a-text>
<a-text v-bind="args" tag="p" variant="title5">Title 5 / Inter</a-text>
<a-text v-bind="args" tag="p" variant="subtitle1">Subtitle 1 / Inter</a-text>
<a-text v-bind="args" tag="p" variant="subtitle2">Subtitle 2 / Inter</a-text>
<a-text v-bind="args" tag="p" variant="body1">Body 1 / Inter</a-text>
<a-text v-bind="args" tag="p" variant="body2">Body 1 / Inter</a-text></div>
`,
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    source: {
      code: `<a-text tag="p" variant="title1">Title 1 / Inter</a-text>
<a-text tag="p" variant="title2">Title 2 / Inter</a-text>
<a-text tag="p" variant="title3">Title 3 / Inter</a-text>
<a-text tag="p" variant="title4">Title 4 / Inter</a-text>
<a-text tag="p" variant="title5">Title 5 / Inter</a-text>
<a-text tag="p" variant="subtitle1">Subtitle 1 / Inter</a-text>
<a-text tag="p" variant="subtitle2">Subtitle 2 / Inter</a-text>
<a-text tag="p" variant="body1">Body 1 / Inter</a-text>
<a-text tag="p" variant="body2">Body 1 / Inter</a-text>`,
    },
  },
}

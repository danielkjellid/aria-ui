import { Meta, Story } from '@storybook/vue3'
import Callout from './Callout.vue'
import { CalloutVariant } from './types'

const variants: CalloutVariant[] = [
  'danger',
  'warning',
  'info',
  'success'
]

export default {
  title: 'UI Elements/Callout',
  component: Callout,
  parameter: {
    viewMode: 'docs'
  },
  argTypes: {
    message: {
      control: {
        type: 'text'
      }
    },
    variant: {
      options: variants,
      defaultValue: 'danger',
      table: {
        type: {
          summary: variants.join(',').replace(/,/g, ' | ')
        }
      }
    }
  }
} as Meta

const Template: Story<any> = (args: any) => ({
  components: { Callout },
  setup() {
    return { args }
  },
  template: '<Callout v-bind="args"></Callout>'
})

export const API = Template.bind({})

export const Danger = Template.bind({})
Danger.args = { message: 'Oida! Noe gikk galt', variant: 'danger', context: ['One bullet point', 'Another bullet point']}

export const Warning = Template.bind({})
Warning.args = { message: 'Obs! Vær oppmerksom på', variant: 'warning', context: ['One bullet point', 'Another bullet point']}

export const Info = Template.bind({})
Info.args = { message: 'Visste du at', variant: 'info', context: ['One bullet point', 'Another bullet point']}

export const Success = Template.bind({})
Success.args = { message: 'Oppdatering vellykket', variant: 'success', context: ['One bullet point', 'Another bullet point']}

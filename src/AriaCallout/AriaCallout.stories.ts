import { Meta, Story } from '@storybook/vue3'
import AriaCallout from './AriaCallout.vue'
import { CalloutVariant, CalloutProps } from './types'

const variants: CalloutVariant[] = [
  'danger',
  'warning',
  'info',
  'success'
]

export default {
  title: 'UI Elements/Callout',
  component: AriaCallout,
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

const Template: Story<CalloutProps> = (args: CalloutProps) => ({
  components: { AriaCallout },
  setup() {
    return { args }
  },
  template: '<aria-callout v-bind="args"></AriaCallout>'
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    source: {
      code: 
`<aria-callout 
  variant="danger" 
  message="Oida! Noe gikk galt"
  :context="['One bullet point', 'Another bullet point']"
/>`
    }
  }
}

export const Danger = Template.bind({})
Danger.args = { message: 'Oida! Noe gikk galt', variant: 'danger', context: ['One bullet point', 'Another bullet point']}
Danger.parameters = {
  docs: {
    source: {
      code: 
`<aria-callout 
  variant="danger" 
  message="Oida! Noe gikk galt"
  :context="['One bullet point', 'Another bullet point']"
/>`
    }
  }
}

export const Warning = Template.bind({})
Warning.args = { message: 'Obs! Vær oppmerksom på', variant: 'warning', context: ['One bullet point', 'Another bullet point']}
Warning.parameters = {
  docs: {
    source: {
      code: 
`<aria-callout 
  variant="warning" 
  message="Obs! Vær oppmerksom på"
  :context="['One bullet point', 'Another bullet point']"
/>`
    }
  }
}

export const Info = Template.bind({})
Info.args = { message: 'Visste du at', variant: 'info', context: ['One bullet point', 'Another bullet point']}
Info.parameters = {
  docs: {
    source: {
      code: 
`<aria-callout 
  variant="info" 
  message="Visste du at"
  :context="['One bullet point', 'Another bullet point']"
/>`
    }
  }
}

export const Success = Template.bind({})
Success.args = { message: 'Oppdatering vellykket', variant: 'success', context: ['One bullet point', 'Another bullet point']}
Success.parameters = {
  docs: {
    source: {
      code: 
`<aria-callout 
  variant="success" 
  message="Oppdatering vellykket"
  :context="['One bullet point', 'Another bullet point']"
/>`
    }
  }
}

import { Meta, Story } from '@storybook/vue3'
import { CheckIcon } from '@heroicons/vue/solid'
import AButton from './Button.vue'
import {
  ButtonLoadingState,
  ButtonSize,
  ButtonVariant,
  ButtonProps,
  ButtonAlignSelf,
} from './types'

type StoryArgs = ButtonProps & {
  default: string
  leftIcon: any
  rightIcon: any
}

const sizes: ButtonSize[] = ['s', 'm', 'l']

const variants: ButtonVariant[] = [
  'primary',
  'primaryDanger',
  'secondary',
  'secondaryDanger',
  'outlined',
]

const loadingStates: ButtonLoadingState[] = [
  'initial',
  'loading',
  'error',
  'success',
]

const alignSelfOptions: ButtonAlignSelf[] = [
  'auto',
  'start',
  'end',
  'center',
  'stretch',
  'baseline',
]

export default {
  title: 'UI Elements/Button',
  component: AButton,
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    size: {
      options: sizes,
      defaultValue: 'm',
      table: {
        type: {
          summary: sizes.join(',').replace(/,/g, ' | '),
        },
      },
    },
    variant: {
      options: variants,
      defaultValue: 'primary',
      table: {
        type: {
          summary: variants.join(',').replace(/,/g, ' | '),
        },
      },
    },
    loadingState: {
      options: loadingStates,
      defaultValue: 'initial',
      table: {
        type: {
          summary: loadingStates.join(',').replace(/,/g, ' | '),
        },
      },
    },
    alignSelf: {
      options: alignSelfOptions,
      defaultValue: 'auto',
      table: {
        type: {
          summary: alignSelfOptions.join(',').replace(/,/g, ' | '),
        },
      },
    },
    default: {
      description:
        'Replaces the button content, excluding icons and loading state',
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
    },
    leftIcon: {
      description: 'Will add a given icon to the left of the button text.',
    },
    rightIcon: {
      description: 'Will add a given icon to the right of the button text.',
    },
  },
  parameter: {
    viewMode: 'docs',
  },
} as Meta

const Template: Story<StoryArgs> = (args) => ({
  components: { AButton },
  setup() {
    return { args }
  },
  template: '<a-button v-bind="args">{{ args.default }}</a-button>',
})

const TemplateWithIcon: Story<StoryArgs> = (args) => ({
  components: { AButton, CheckIcon },
  setup() {
    return { args }
  },
  template: `
    <div class="flex items-center space-x-4">
      <a-button v-bind="args">
        <template #leftIcon>
          ${args.leftIcon}
        </template>
        {{ args.default }}
      </a-button>
      <a-button v-bind="args">
        <template #rightIcon>
          ${args.rightIcon}
        </template>
        {{ args.default }}
      </a-button>
    </div>
    `,
})

const TemplateSubmissionStates: Story<StoryArgs> = (args) => ({
  components: { AButton, CheckIcon },
  setup() {
    return { args }
  },
  template: `
    <div class="grid row-auto gap-4">
      <div class="flex items-center space-x-4">
        <a-button variant="primary" loadingState="initial">Initial</a-button>
        <a-button variant="primaryDanger" loadingState="initial">Initial</a-button>
        <a-button variant="secondary" loadingState="initial">Initial</a-button>
        <a-button variant="secondaryDanger" loadingState="initial">Initial</a-button>
      </div>
      <div class="flex items-center space-x-4">
        <a-button variant="primary" loadingState="loading">Loading</a-button>
        <a-button variant="primaryDanger" loadingState="loading">Loading</a-button>
        <a-button variant="secondary" loadingState="loading">Loading</a-button>
        <a-button variant="secondaryDanger" loadingState="loading">Loading</a-button>
      </div>
      <div class="flex items-center space-x-4">
        <a-button variant="primary" loadingState="error">Error</a-button>
        <a-button variant="primaryDanger" loadingState="error">Error</a-button>
        <a-button variant="secondary" loadingState="error">Error</a-button>
        <a-button variant="secondaryDanger" loadingState="error">Error</a-button>
      </div>
      <div class="flex items-center space-x-4">
        <a-button variant="primary" loadingState="success">Success</a-button>
        <a-button variant="primaryDanger" loadingState="success">Success</a-button>
        <a-button variant="secondary" loadingState="success">Success</a-button>
        <a-button variant="secondaryDanger" loadingState="success">Success</a-button>
      </div>
    </div>
    `,
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    source: {
      code: `<a-button 
  @click="someMethod" 
  size="m"
  variant="primary"
>
  Button
</a-button>`,
    },
  },
}

export const AsLink = Template.bind({})
AsLink.args = { default: 'Take me to example.com', to: 'http://example.com/' }
AsLink.parameters = {
  docs: {
    source: {
      code: '<a-button to="http://example.com">Take me to example.com</a-button>',
    },
  },
}

export const WithIcons = TemplateWithIcon.bind({})
WithIcons.args = {
  leftIcon: '<CheckIcon class="w-5 h-5 text-white" />',
  rightIcon: '<CheckIcon class="w-5 h-5 text-white" />',
}
WithIcons.parameters = {
  docs: {
    description: {
      story:
        'Icons can be aligned both to the left and right of the slot text through the <code>leftIcon</code> or <code>rightIcon</code> props.',
    },
    source: {
      code: `
<div class="flex items-center space-x-4">
  <a-button
    @click="someMethod"
    size="m"
    variant="primary"
  >
    <template #leftIcon>
      <CheckIcon class="w-5 h-5 text-white" />
    </template>
    Button
  </a-button>
  <a-button
    @click="someMethod"
    size="m"
    variant="primary"
  >
    <template #rightIcon>
      <CheckIcon class="w-5 h-5 text-white" />
    </template>
  </a-button>
</div>
      `,
    },
  },
}

export const SubmissionButton = TemplateSubmissionStates.bind({})
SubmissionButton.parameters = {
  docs: {
    source: {
      code: `
<div class="grid row-auto gap-4">
  <div class="flex items-center space-x-4">
    <a-button variant="primary" loadingState="initial">Initial</a-button>
    <a-button variant="primaryDanger" loadingState="initial">Initial</a-button>
    <a-button variant="secondary" loadingState="initial">Initial</a-button>
    <a-button variant="secondaryDanger" loadingState="initial">Initial</a-button>
  </div>
  <div class="flex items-center space-x-4">
    <a-button variant="primary" loadingState="loading">Loading</a-button>
    <a-button variant="primaryDanger" loadingState="loading">Loading</a-button>
    <a-button variant="secondary" loadingState="loading">Loading</a-button>
    <a-button variant="secondaryDanger" loadingState="loading">Loading</a-button>
  </div>
  <div class="flex items-center space-x-4">
    <Button variant="primary" loadingState="error">Error</Button>
    <Button variant="primaryDanger" loadingState="error">Error</Button>
    <Button variant="secondary" loadingState="error">Error</Button>
    <Button variant="secondaryDanger" loadingState="error">Error</Button>
  </div>
  <div class="flex items-center space-x-4">
    <a-button variant="primary" loadingState="success">Success</a-button>
    <a-button variant="primaryDanger" loadingState="success">Success</a-button>
    <a-button variant="secondary" loadingState="success">Success</a-button>
    <a-button variant="secondaryDanger" loadingState="success">Success</a-button>
  </div>
</div>
`,
    },
  },
}

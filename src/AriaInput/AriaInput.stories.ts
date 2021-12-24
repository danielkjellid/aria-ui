import { Meta, Story } from '@storybook/vue3'
import AriaInput from './AriaInput.vue'
import { SearchIcon } from '@heroicons/vue/outline'
import { MailIcon } from '@heroicons/vue/solid'
import { InputProps } from './types'

export default {
  title: 'Forms/Input',
  component: AriaInput,
  parameter: {
    viewMode: 'docs'
  },
} as Meta

const Template: Story<InputProps> = (args: InputProps) => ({
  components: { AriaInput },
  setup() {
    return { args }
  },
  template: '<aria-input  v-bind="args"></AriaInput>'
})

const TemplateWithIconSlot: Story<InputProps> = (args: InputProps) => ({
  components: { AriaInput, MailIcon },
  setup() {
    return { args }
  },
  template: '<aria-input  v-bind="args"><MailIcon class="h-5 w-5 text-gray-400" /></AriaInput>'
})

const TemplateWithIconSlotPlain: Story<InputProps> = (args: InputProps) => ({
  components: { AriaInput, SearchIcon },
  setup() {
    return { args }
  },
  template: '<aria-input  v-bind="args"><SearchIcon class="h-5 w-5 text-gray-800" /></AriaInput>'
})

export const API = Template.bind({})
API.args = { id:'defaultInput', label: 'Name'}
API.parameters = {
  docs: {
    source: {
      code: `<aria-input  id="name" label="Name" v-model="var" />`,  
    }
  }
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {...API.args, placeholder: 'AriaInput your name here'}
WithPlaceholder.parameters = {
  docs: {
    source: {
      code: 
`<aria-input  
  id="name" 
  label="Name" 
  :error="error" 
  placeholder="AriaInput your name here"
  block
  v-model="var"
/>`,  
    }
  }
}

export const WithHiddenLabel = Template.bind({})
WithHiddenLabel.args = {...WithPlaceholder.args, hiddenLabel: true}
WithHiddenLabel.parameters = {
  docs: {
    source: {
      code: 
`<aria-input  
  id="name" 
  label="Name"
  :hiddenLabel="false"
  placeholder="AriaInput your name here" 
  v-model="var"
/>`,  
    }
  }
}

export const WithIcon = TemplateWithIconSlot.bind({})
WithIcon.args = {...WithPlaceholder.args}
WithIcon.parameters = {
  docs: {
    source: {
      code: 
`
import { MailIcon } from '@heroicons/vue/solid'

<aria-input  
  id="name" 
  label="Name"
  :hiddenLabel="false"
  placeholder="AriaInput your name here"
  v-model="var"
>
  <MailIcon class="h-5 w-5 text-gray-400" />
</AriaInput>`,  
    }
  }
}

export const Fluid = Template.bind({})
Fluid.args = {...WithPlaceholder.args, fluid: true}
Fluid.parameters = {
  docs: {
    source: {
      code: 
`<aria-input  
  id="name" 
  label="Name"
  :hiddenLabel="false"
  placeholder="AriaInput your name here"
  fluid 
  v-model="var"
/>`,  
    }
  }
}

export const Plain = TemplateWithIconSlotPlain.bind({})
Plain.args = { 
  plain: true, 
  label: 'search', 
  hiddenLabel: true, 
  placeholder: 'Search users by name, email or phone number' 
}
Plain.parameters = {
  docs: {
    source: {
      code: 
`
import { SearchIcon } from '@heroicons/vue/outline'

<aria-input  
  id="name" 
  label="Search"
  placeholder="Search users by name, email or phone number"
  plain
  hiddenLabel
  v-model="var"
>
  <SearchIcon class="h-5 w-5 text-gray-800" />
</AriaInput>`,  
    }
  }
}

export const WithError = Template.bind({})
WithError.args = {...WithPlaceholder.args, error: 'This field cant be empty'}
WithError.parameters = {
  docs: {
    source: {
      code: 
`<aria-input  
  id="name" 
  label="Name"
  :hiddenLabel="false"
  placeholder="AriaInput your name here"
  error='This field cant be empty'
  v-model="var"
/>`,  
    }
  }
}
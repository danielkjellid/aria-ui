import { Meta, Story } from '@storybook/vue3'
import Input from './Input.vue'
import { SearchIcon } from '@heroicons/vue/outline'
import { MailIcon } from '@heroicons/vue/solid'

interface InputProps {
  id: string
  hiddenLabel?: boolean
  label: string
  placeholder?: string
  value?: string
  type?: string
  fluid?: boolean
  error?: string[] | string
  plain?: boolean
}

export default {
  title: 'Forms/Input',
  component: Input,
  parameter: {
    viewMode: 'docs'
  },
} as Meta

const Template: Story<InputProps> = (args: InputProps) => ({
  components: { Input },
  setup() {
    return { args }
  },
  template: '<Input v-bind="args"></Input>'
})

const TemplateWithIconSlot: Story<InputProps> = (args: InputProps) => ({
  components: { Input, MailIcon },
  setup() {
    return { args }
  },
  template: '<Input v-bind="args"><MailIcon class="h-5 w-5 text-gray-400" /></Input>'
})

const TemplateWithIconSlotPlain: Story<InputProps> = (args: InputProps) => ({
  components: { Input, SearchIcon },
  setup() {
    return { args }
  },
  template: '<Input v-bind="args"><SearchIcon class="h-5 w-5 text-gray-800" /></Input>'
})

export const API = Template.bind({})
API.args = { id:'defaultInput', label: 'Name'}
API.parameters = {
  docs: {
    source: {
      code: `<Input id="name" label="Name" v-model="var" />`,  
    }
  }
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {...API.args, placeholder: 'Input your name here'}
WithPlaceholder.parameters = {
  docs: {
    source: {
      code: 
`<Input 
  id="name" 
  label="Name" 
  :error="error" 
  placeholder="Input your name here"
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
`<Input 
  id="name" 
  label="Name"
  :hiddenLabel="false"
  placeholder="Input your name here" 
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

<Input 
  id="name" 
  label="Name"
  :hiddenLabel="false"
  placeholder="Input your name here"
  v-model="var"
>
  <MailIcon class="h-5 w-5 text-gray-400" />
</Input>`,  
    }
  }
}

export const Fluid = Template.bind({})
Fluid.args = {...WithPlaceholder.args, fluid: true}
Fluid.parameters = {
  docs: {
    source: {
      code: 
`<Input 
  id="name" 
  label="Name"
  :hiddenLabel="false"
  placeholder="Input your name here"
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

<Input 
  id="name" 
  label="Search"
  placeholder="Search users by name, email or phone number"
  plain
  hiddenLabel
  v-model="var"
>
  <SearchIcon class="h-5 w-5 text-gray-800" />
</Input>`,  
    }
  }
}

export const WithError = Template.bind({})
WithError.args = {...WithPlaceholder.args, error: 'This field cant be empty'}
WithError.parameters = {
  docs: {
    source: {
      code: 
`<Input 
  id="name" 
  label="Name"
  :hiddenLabel="false"
  placeholder="Input your name here"
  error='This field cant be empty'
  v-model="var"
/>`,  
    }
  }
}
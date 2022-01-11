import { Meta, Story } from '@storybook/vue3'
import { PrinterIcon } from '@heroicons/vue/solid'
import ASelect from './Select.vue'

interface SelectProps {
  id: string
  hiddenLabel?: boolean
  label: string
  fluid?: boolean
  error?: string[] | string
}

export default {
  title: 'Forms/Select',
  component: ASelect,
  parameter: {
    viewMode: 'docs',
  },
} as Meta

const Template: Story<SelectProps> = (args: SelectProps) => ({
  components: { ASelect },
  setup() {
    return { args }
  },
  template:
    '<a-select v-bind="args"><option v-for="i in 31" :key="i" :value="i" :selected="I == 1">{{i}}</option></a-select>',
})

const TemplateWithIconSlot: Story<SelectProps> = (args: SelectProps) => ({
  components: { ASelect, PrinterIcon },
  setup() {
    return { args }
  },
  template:
    '<a-select v-bind="args"><template #icon><PrinterIcon class="h-5 w-5 text-gray-400"/></template><option v-for="i in 31" :key="i" :value="i" :selected="I == 1">{{i}}</option></a-select>',
})

export const API = Template.bind({})
API.args = { label: 'Select a number' }
API.parameters = {
  docs: {
    source: {
      code: `<a-select 
  id="numbers" 
  label="Select a number"
  :error="error" 
  v-model="var"
>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  ...
</a-select>`,
    },
  },
}

export const WithHiddenLabel = Template.bind({})
WithHiddenLabel.args = { ...API.args, hiddenLabel: true }
WithHiddenLabel.parameters = {
  docs: {
    source: {
      code: `<a-select 
  id="numbers" 
  label="Select a number"
  :error="error" 
  v-model="var"
  hiddenLabel
>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  ...
</a-select>`,
    },
  },
}

export const WithIcon = TemplateWithIconSlot.bind({})
WithIcon.args = { label: 'Select a printer' }
WithIcon.parameters = {
  docs: {
    source: {
      code: `<a-select 
  id="printers" 
  label="SSelect a printer"
  :error="error" 
  v-model="var"
>
  <template #icon>
    <PrinterIcon class="h-5 w-5 text-gray-400" />
  </template>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  ...
</a-select>`,
    },
  },
}

export const Fluid = Template.bind({})
Fluid.args = { ...API.args, fluid: true }
Fluid.parameters = {
  docs: {
    description: {
      story:
        'Adding the fluid prop will make the select the length of the content.',
    },
    source: {
      code: `<a-select 
  id="numbers" 
  label="Select a number"
  :error="error" 
  v-model="var"
  fluid
>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  ...
</a-select>`,
    },
  },
}

export const WithError = Template.bind({})
WithError.args = { ...API.args, error: 'Something went wrong' }
WithError.parameters = {
  docs: {
    source: {
      code: `<a-select 
  id="numbers" 
  label="Select a number"
  error="Something went wrong" 
  v-model="var"
  fluid
>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  ...
</a-select>`,
    },
  },
}

import { Meta, Story } from '@storybook/vue3'
import Notification from './Notification.vue'
import { NotificationProps, NotificationVariant } from './types'

const variants: NotificationVariant[] = [
  'danger',
  'warning',
  'info',
  'success'
] 

export default {
  title: 'UI elements/Notification',
  component: Notification,
  parameter: {
    viewMode: 'docs',
  },
  argTypes: {
    variant: {
      options: variants,
      defaultValue: 'success',
      table: {
        type: {
          summary: variants.join(',').replace(/,/g, ' | ')
        }
      }
    }
  }
} as Meta

const Template: Story<NotificationProps> = (args: NotificationProps) => ({
  components: { Notification },
  setup() {
    return { args }
  },
  template: '<Notification v-bind="args" />'
})

export const API = Template.bind({})
API.args = { variant: "success", display: true, title: 'Account created!', subtitle: 'Your account was created successfully.' }
API.parameters = {
  docs: {
    source: {
      code: 
  `
<Notification
  title="Account created!"
  subtitle="Your account was created successfully."
  variant="success"
  :display="true"
  @closeNotification="someMethod"
/>
  `,  
    }
  }
}

export const Danger = Template.bind({})
Danger.args = { variant: 'danger', display: true, title: 'Something went wrong!', subtitle: 'There was a problem creating your account.' }
Danger.parameters = {
  docs: {
    source: {
      code: 
  `
<Notification
  title="Something went wrong!"
  subtitle="There was a problem creating your account."
  variant="danger"
  :display="true"
  @closeNotification="someMethod"
/>
  `,  
    }
  }
}

export const Warning = Template.bind({})
Warning.args = { variant: 'warning', display: true, title: 'We are struggling!', subtitle: 'There might be occurrences of degraded performance.' }
Warning.parameters = {
  docs: {
    source: {
      code: 
  `
<Notification
  title="We are struggling!"
  subtitle="There might be occurrences of degraded performance."
  variant="warning"
  :display="true"
  @closeNotification="someMethod"
/>
  `,  
    }
  }
}

export const Info = Template.bind({})
Info.args = { variant: 'info', display: true, title: 'New feature!', subtitle: 'You can now add products as favorites.' }
Info.parameters = {
  docs: {
    source: {
      code: 
  `
<Notification
  title="New feature!"
  subtitle="You can now add products as favorites."
  variant="info"
  :display="true"
  @closeNotification="someMethod"
/>
  `,  
    }
  }
}

export const Success = Template.bind({})
Success.args = { variant: 'success', display: true, title: 'Account created!', subtitle: 'Your account was created successfully.' }
Success.parameters = {
  docs: {
    source: {
      code: 
  `
<Notification
  title="Account created!"
  subtitle="Your account was created successfully."
  variant="success"
  :display="true"
  @closeNotification="someMethod"
/>
  `,  
    }
  }
}
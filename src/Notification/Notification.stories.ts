import { Meta, Story } from '@storybook/vue3'
import Notification from './Notification.vue'

interface NotificationProps {
  success?: boolean
  display?: boolean
  title: string
  subtitle?: string
}

export default {
  title: 'UI elements/Notification',
  component: Notification,
  parameter: {
    viewMode: 'docs',
  },
} as Meta

const Template: Story<NotificationProps> = (args: NotificationProps) => ({
  components: { Notification },
  setup() {
    return { args }
  },
  template: '<Notification v-bind="args" />'
})

export const API = Template.bind({})
API.args = { success: true, display: true, title: 'Account created!', subtitle: 'Your account was created successfully' }
API.parameters = {
  docs: {
    source: {
      code: 
  `
<Notification
  :success="true"
  :display="true"
  title="Account created!"
  subtitle="Your account was created successfully"
  @closeNotification="someMethod"
/>
  `,  
    }
  }
}

export const Danger = Template.bind({})
Danger.args = { success: false, display: true, title: 'Something went wrong!', subtitle: 'There was a problem creating your account.' }
Danger.parameters = {
  docs: {
    description: {
      story: 'Notifications can also be used to inform of an unsuccessful action.'
    },
    source: {
      code: 
  `
<Notification
  :success="false"
  :display="true"
  title="Something went wrong!"
  subtitle="There was a problem creating your account."
  @closeNotification="someMethod"
/>
  `,  
    }
  }
}

export const WithoutSubtitle = Template.bind({})
WithoutSubtitle.args = { success: true, display: true, title: 'Account created!' }
WithoutSubtitle.parameters = {
  docs: {
      source: {
        code: 
    `
<Notification
  :success="true"
  :display="true"
  title="Account created!"
  @closeNotification="someMethod"
/>
    `,  
      }
    }
}

export const DangerWithoutSubtitle = Template.bind({})
DangerWithoutSubtitle.args = { success: false, display: true, title: 'Something went wrong!' }
DangerWithoutSubtitle.parameters = {
  docs: {
      source: {
        code: 
    `
<Notification
  :success="false"
  :display="true"
  title="Something went wrong!"
  @closeNotification="someMethod"
/>
    `,  
      }
    }
}

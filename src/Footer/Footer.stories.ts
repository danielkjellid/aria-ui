import { Meta, Story } from '@storybook/vue3'
import Footer from './Footer.vue'

interface FooterProps {
  instagramLink: string
  facebookLink: string
  mailLink: string
  copyrightYear?: string
  legalName: string
}

export default {
  title: 'Menus/Footer',
  component: Footer,
  parameters: {
    viewMode: 'docs'
  }
} as Meta

const Template: Story<FooterProps> = (args: FooterProps) => ({
  components: { Footer },
  setup() {
    return { args }
  },
  template: '<Footer v-bind="args" />'
})

export const API = Template.bind({})
API.args = {
  instagramLink: '/some/instagram/link',
  facebookLink: '/some/facebook/link',
  mailLink: '/some/mail/link',
  copyrightYear: '2020',
  legalName: 'FK-JKE Design AS'
}
API.parameters = {
  docs: {
    source: {
      code: 
  `<Footer 
    instagramLink="/some/instagram/link"
    facebookLink="/some/facebook/link"
    mailLink="/some/mail/link"
    copyrightYear="2020"
    legalName="FK-JKE Design AS"
/>`
      }
    }
}
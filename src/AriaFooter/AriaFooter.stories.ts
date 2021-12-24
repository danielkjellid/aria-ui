import { Meta, Story } from '@storybook/vue3'
import AriaFooter from './AriaFooter.vue'
import { FooterProps } from './types'

export default {
  title: 'Menus/Footer',
  component: AriaFooter,
  parameters: {
    viewMode: 'docs'
  }
} as Meta

const Template: Story<FooterProps> = (args: FooterProps) => ({
  components: { AriaFooter },
  setup() {
    return { args }
  },
  template: '<aria-footer v-bind="args" />'
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
  `<aria-footer 
    instagramLink="/some/instagram/link"
    facebookLink="/some/facebook/link"
    mailLink="/some/mail/link"
    copyrightYear="2020"
    legalName="FK-JKE Design AS"
/>`
      }
    }
}
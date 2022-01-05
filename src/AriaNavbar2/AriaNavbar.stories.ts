import { Meta, Story } from '@storybook/vue3'
import AriaNavbar from './AriaNavbar.vue'

export default {
  title: 'Menus/Navbar2',
  component: AriaNavbar,
  parameter: {
    viewMode: 'docs'
  },
} as Meta

const Template: Story<any> = (args: any) => ({
  components: { AriaNavbar },
  setup() {
    return { args }
  },
  template: '<div class="relative h-96"><aria-navbar v-bind="args"></aria-navbar></div>'
})

export const API = Template.bind({})
API.args = {
  menuItems: [
    {
      name: 'Catalog',
      slug: 'catalog',
      activatesSubMenu: true,
    }, 
    {
      name: 'About us',
      slug: 'about-us',
      tag: 'a',
      activatesSubMenu: false,
    },
    {
      name: 'Contact',
      slug: 'contact',
      tag: 'a',
      activatesSubMenu: false,
      active: true
    }
  ],
  subMenuItems: [
    {
      id: 1,
      name: "Fliser",
      slug: "fliser",
      children: [
        {
          id: 1,
          name: "Alle fliser",
          slug: "1-alle-fliser",
          ordering: 1
        },
        {
          id: 2,
          name: "Bad",
          slug: "1-bad",
          ordering: 2
        },
        {
          id: 3,
          name: "Kjøkken",
          slug: "1-kjokken",
          ordering: 3
        },
        {
          id: 4,
          name: "Stue, gang og oppholdsrom",
          slug: "1-stue-gang-og-oppholdsrom",
          ordering: 4
        },
        {
          id: 5,
          name: "Utendørs",
          slug: "1-utendors",
          ordering: 5
        },
        {
          id: 6,
          name: "Fliseheller",
          slug: "1-fliseheller",
          ordering: 6
        },
        {
          id: 7,
          name: "Mosaikk",
          slug: "1-mosaikk",
          ordering: 7
        },
        {
          id: 8,
          name: "Spesialflis",
          slug: "1-spesialflis",
          ordering: 8
        }
      ]
    },
    {
      id: 3,
      name: "Innredning",
      slug: "innredning",
      children: [
        {
          id: 26,
          name: "All innredning",
          slug: "3-all-innredning",
          ordering: 1
        },
        {
          id: 27,
          name: "Servanter",
          slug: "3-servanter",
          ordering: 2
        },
        {
          id: 32,
          name: "Frittstående servanter",
          slug: "3-frittstaende-servanter",
          ordering: 3
        },
        {
          id: 28,
          name: "Moduler",
          slug: "3-moduler",
          ordering: 3
        },
        {
          id: 29,
          name: "Vannklosetter",
          slug: "3-vannklosetter",
          ordering: 4
        },
        {
          id: 30,
          name: "Badekar",
          slug: "3-badekar",
          ordering: 5
        },
        {
          id: 31,
          name: "Dusj",
          slug: "3-dusj",
          ordering: 6
        },
        {
          id: 33,
          name: "Speil og speilskap",
          slug: "3-speil-og-speilskap",
          ordering: 8
        }
      ]
    },
    {
      id: 5,
      name: "Belysning",
      slug: "belysning",
      children: [
        {
          id: 17,
          name: "All belysning",
          slug: "5-all-belysning",
          ordering: 1
        },
        {
          id: 18,
          name: "Gulvlamper",
          slug: "5-gulvlamper",
          ordering: 2
        },
        {
          id: 19,
          name: "Bordlamper",
          slug: "5-bordlamper",
          ordering: 3
        },
        {
          id: 20,
          name: "Vegglamper",
          slug: "5-vegglamper",
          ordering: 4
        },
        {
          id: 21,
          name: "Taklamper",
          slug: "5-taklamper",
          ordering: 5
        },
        {
          id: 22,
          name: "Baderomsbelysning",
          slug: "5-baderomsbelysning",
          ordering: 6
        }
      ]
    },
    {
      id: 6,
      name: "Armatur",
      slug: "armatur",
      children: [
        {
          id: 23,
          name: "Alle armaturer",
          slug: "6-alle-armaturer",
          ordering: 1
        },
        {
          id: 24,
          name: "Bad",
          slug: "6-bad",
          ordering: 2
        },
        {
          id: 25,
          name: "Kjøkken",
          slug: "6-kjokken",
          ordering: 3
        }
      ]
    },
    {
      id: 3,
      name: "Innredning",
      slug: "innredning",
      children: [
        {
          id: 26,
          name: "All innredning",
          slug: "3-all-innredning",
          ordering: 1
        },
        {
          id: 27,
          name: "Servanter",
          slug: "3-servanter",
          ordering: 2
        },
        {
          id: 32,
          name: "Frittstående servanter",
          slug: "3-frittstaende-servanter",
          ordering: 3
        },
        {
          id: 28,
          name: "Moduler",
          slug: "3-moduler",
          ordering: 3
        },
        {
          id: 29,
          name: "Vannklosetter",
          slug: "3-vannklosetter",
          ordering: 4
        },
        {
          id: 30,
          name: "Badekar",
          slug: "3-badekar",
          ordering: 5
        },
        {
          id: 31,
          name: "Dusj",
          slug: "3-dusj",
          ordering: 6
        },
        {
          id: 33,
          name: "Speil og speilskap",
          slug: "3-speil-og-speilskap",
          ordering: 8
        }
      ]
    },
  ]
}
API.parameters = {
  backgrounds: { default: 'dark' },
}
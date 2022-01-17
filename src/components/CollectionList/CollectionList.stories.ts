import { Meta, Story } from '@storybook/vue3'
import ACollectionList from './CollectionList.vue'
import ACollectionListItem from './CollectionListItem.vue'
import { CollectionListItemProps } from './types'

export default {
  title: 'UI Elements/Collection List',
  component: ACollectionListItem,
  parameter: {
    viewMode: 'docs',
  },
} as Meta

const Template: Story<CollectionListItemProps> = (args: CollectionListItemProps) => ({
  components: { ACollectionList, ACollectionListItem },
  setup() {
    return { args }
  },
  template: `
<a-collection-list>
  <a-collection-list-item 
    v-bind="args" 
    title="CollectionListItem" 
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit vehicula sodales.
    Vestibulum sit amet velit vitae urna tincidunt aliquet ut vitae arcu."
  />
</a-collection-list>`,
})

export const API = Template.bind({})
API.parameters = {
  docs: {
    source: {
      code: `<a-collection-list>
  <a-collection-list-item 
    title="CollectionListItem" 
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit vehicula sodales.
    Vestibulum sit amet velit vitae urna tincidunt aliquet ut vitae arcu."
    :loading="false"
    :reverse="false"
    :images={...}
  />
</a-collection-list>`,
    },
  },
}

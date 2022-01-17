import { App as Application } from 'vue'
import CollectionList from './CollectionList.vue'
import CollectionListItem from './CollectionListItem.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, CollectionList)
    registerComponent(instance, CollectionListItem)
  },
}

use(Plugin)

export default Plugin

export { CollectionList as ACollectionList, CollectionListItem as ACollectionListItem }

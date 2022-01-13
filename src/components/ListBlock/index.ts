import { App as Application } from 'vue'
import ListBlock from './ListBlock.vue'
import ListBlockItem from './ListBlockItem.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, ListBlock)
    registerComponent(instance, ListBlockItem)
  },
}

use(Plugin)

export default Plugin

export { ListBlock as AListBlock, ListBlockItem as AListBlockItem }
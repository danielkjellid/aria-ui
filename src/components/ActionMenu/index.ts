import { App as Application } from 'vue'
import ActionMenu from './ActionMenu.vue'
import ActionMenuSection from './ActionMenuSection.vue'
import ActionMenuItem from './ActionMenuItem.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, ActionMenu)
    registerComponent(instance, ActionMenuSection)
    registerComponent(instance, ActionMenuItem)
  },
}

use(Plugin)

export default Plugin

export {
  ActionMenu as AActionMenu,
  ActionMenuSection as AActionMenuSection,
  ActionMenuItem as AActionMenuItem,
}

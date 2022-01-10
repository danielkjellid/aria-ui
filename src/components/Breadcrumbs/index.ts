import { App as Application } from 'vue'
import Breadcrumbs from './Breadcrumbs.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Breadcrumbs)
  }
}

use(Plugin)

export default Plugin

export { Breadcrumbs as ABreadcrumbs }
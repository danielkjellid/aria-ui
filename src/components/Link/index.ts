import { App as Application } from 'vue'
import Link from './Link.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Link)
  },
}

use(Plugin)

export default Plugin

export { Link as ALink }

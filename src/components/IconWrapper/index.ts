import { App as Application } from 'vue'
import IconWrapper from './IconWrapper.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, IconWrapper)
  },
}

use(Plugin)

export default Plugin

export { IconWrapper as AIconWrapper }

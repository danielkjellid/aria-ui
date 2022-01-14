import { App as Application } from 'vue'
import Text from './Text.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Text)
  },
}

use(Plugin)

export default Plugin

export { Text as AText }

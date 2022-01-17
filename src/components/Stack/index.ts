import { App as Application } from 'vue'
import Stack from './Stack.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Stack)
  },
}

use(Plugin)

export default Plugin

export { Stack as AStack }

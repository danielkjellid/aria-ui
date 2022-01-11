import { App as Application } from 'vue'
import Button from './Button.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Button)
  },
}

use(Plugin)

export default Plugin

export { Button as AButton }

import { App as Application } from 'vue'
import Input from './Input.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Input)
  }
}

use(Plugin)

export default Plugin

export { Input as AInput }
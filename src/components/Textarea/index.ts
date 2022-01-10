import { App as Application } from 'vue'
import Textarea from './Textarea.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Textarea)
  }
}

use(Plugin)

export default Plugin

export { Textarea as ATextarea }
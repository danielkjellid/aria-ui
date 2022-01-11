import { App as Application } from 'vue'
import Checkbox from './Checkbox.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Checkbox)
  },
}

use(Plugin)

export default Plugin

export { Checkbox as ACheckbox }

import { App as Application } from 'vue'
import Select from './Select.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Select)
  },
}

use(Plugin)

export default Plugin

export { Select as ASelect }

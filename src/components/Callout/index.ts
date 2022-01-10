import { App as Application } from 'vue'
import Callout from './Callout.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Callout)
  }
}

use(Plugin)

export default Plugin

export { Callout as ACallout }
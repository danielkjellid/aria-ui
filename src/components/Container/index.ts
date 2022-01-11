import { App as Application } from 'vue'
import Container from './Container.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Container)
  },
}

use(Plugin)

export default Plugin

export { Container as AContainer }

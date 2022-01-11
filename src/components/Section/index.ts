import { App as Application } from 'vue'
import Section from './Section.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Section)
  },
}

use(Plugin)

export default Plugin

export { Section as ASection }

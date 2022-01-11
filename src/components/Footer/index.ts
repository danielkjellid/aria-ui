import { App as Application } from 'vue'
import Footer from './Footer.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Footer)
  },
}

use(Plugin)

export default Plugin

export { Footer as AFooter }

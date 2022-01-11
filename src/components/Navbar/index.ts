import { App as Application } from 'vue'
import Navbar from './Navbar.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Navbar)
  },
}

use(Plugin)

export default Plugin

export { Navbar as ANavbar }

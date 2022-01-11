import { App as Application } from 'vue'
import Image from './Image.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Image)
  },
}

use(Plugin)

export default Plugin

export { Image as AImage }

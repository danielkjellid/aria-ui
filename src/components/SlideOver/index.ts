import { App as Application } from 'vue'
import SlideOver from './SlideOver.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, SlideOver)
  },
}

use(Plugin)

export default Plugin

export { SlideOver as ASlideOver }

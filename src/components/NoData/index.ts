import { App as Application } from 'vue'
import ANoData from './NoData.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, ANoData)
  },
}

use(Plugin)

export default Plugin

export { ANoData }

import { App as Application } from 'vue'
import SkeletonLoader from './SkeletonLoader.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, SkeletonLoader)
  },
}

use(Plugin)

export default Plugin

export { SkeletonLoader as ASkeletonLoader }

import { App as Application } from 'vue'
import Notification from './Notification.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Notification)
  }
}

use(Plugin)

export default Plugin

export { Notification as ANotification }
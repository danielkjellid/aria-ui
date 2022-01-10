import { App as Application } from 'vue'
import Message from './Message.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Message)
  }
}

use(Plugin)

export default Plugin

export { Message as AMessage }
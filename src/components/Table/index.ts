import { App as Application } from 'vue'
import Table from './Table.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Table)
  }
}

use(Plugin)

export default Plugin

export { Table as ATable }
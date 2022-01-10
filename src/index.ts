import { App as Application } from 'vue'

import '../static/css/tailwind.css'
import * as components from './components'

import { merge } from './utils/helpers'
import config, { ConfigType, setOptions, setVueInstance } from './utils/config'
import { use, registerComponentProgrammatic } from './utils/plugins'

import configComponent from './utils/configComponent'

const AriaUI = {
  install(instance: Application, options = {} as ConfigType) {
    setVueInstance(instance)
    // Options
    setOptions(merge(options, config, true))
    // Components
    for (let componentKey in components) {
      // @ts-ignore
      instance.use(components[componentKey]) 
    }
    // Config component
    registerComponentProgrammatic(instance, 'config', configComponent)

    instance.config.globalProperties.$ariaUI.globalNoticeInterval = null
  }
}

use(AriaUI)

export default AriaUI

// export all components as vue plugin
export * from './components'

// export all helpers
export * from './utils/helpers'

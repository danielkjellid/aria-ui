import config, { ConfigType, setOptions } from './config'
import { merge } from './helpers'

export default {
  getOptions() {
    return config
  },
  setOptions(options: ConfigType) {
    setOptions(merge(config, options, true))
  }
}
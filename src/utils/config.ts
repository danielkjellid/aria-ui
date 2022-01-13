/* eslint import/no-mutable-exports: "off" */
import { App as Application } from 'vue'

export interface ConfigType {
  defaultHomePath: string
  defaultLinkTag: string
  defaultBreadcrumbTag: string
}

let config: ConfigType = {
  defaultHomePath: '/',
  defaultLinkTag: 'a',
  defaultBreadcrumbTag: 'a',
}

export { config as default }

export const setOptions = (options: ConfigType) => {
  config = options
}

export let VueInstance: Application

export const setVueInstance = (instance: Application) => {
  VueInstance = instance
}

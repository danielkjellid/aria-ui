import { App as Application } from 'vue'

export interface ConfigType {
  defaultLinkTags: string[]
  defaultBreadcrumbTag: string
}

let config: ConfigType = {
  defaultLinkTags: [
    'a',
    'button',
    'input',
    'router-link',
    'nuxt-link',
    'n-link',
    'RouterLink',
    'NuxtLink',
    'NLink',
  ],
  defaultBreadcrumbTag: 'a',
}

export { config as default }

export const setOptions = (options: ConfigType) => {
  config = options
}

export const setVueInstance = (instance: Application) => {
  VueInstance = instance
}

export let VueInstance: Application

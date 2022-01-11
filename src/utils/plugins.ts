import { Component, Plugin, App as Application } from 'vue'

export const use = (plugin: Plugin) => {
  if (typeof window !== 'undefined' && (window as any).Vue) {
    ;(window as any).Vue.use(plugin)
  }
}

export const registerComponent = (
  instance: Application,
  component: Component
) => {
  if (component.name) {
    instance.component(component.name, component)
  }
}

export const registerComponentProgrammatic = (
  instance: Application,
  property: string,
  component: Component
) => {
  if (!instance.config.globalProperties.$ariaUI)
    instance.config.globalProperties.$ariaUI = {}

  instance.config.globalProperties.$ariaUI[property] = component
}

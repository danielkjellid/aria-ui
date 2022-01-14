/* eslint import/prefer-default-export: "off" */

/**
 * Merge function to replace Object.assign with deep merging possibility
 */
const isObject = (item: any) => typeof item === 'object' && !Array.isArray(item)
const mergeFn = (target: any, source: any, deep = false) => {
  if (deep || !Object.assign) {
    const isDeep = (prop: string) =>
      isObject(source[prop]) &&
      target !== null &&
      Object.prototype.hasOwnProperty.call(target, prop) &&
      isObject(target[prop])
    const replaced: any = Object.getOwnPropertyNames(source)
      .map((prop) => ({
        [prop]: isDeep(prop) ? mergeFn(target[prop], source[prop], deep) : source[prop],
      }))
      .reduce((a, b) => ({ ...a, ...b }), {})

    return {
      ...target,
      ...replaced,
    }
  }
  return Object.assign(target, source)
}

export const merge = mergeFn

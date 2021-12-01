<template>
  <component
    :is="type"
    :to="to"
    :active-class="activeClass"
    :type="buttonType"
    class="inline-flex items-center flex-shrink-0 transition duration-150 ease-in-out"
    :class="renderClasses()"
  >
    <slot>Button</slot>
  </component>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'AriaButton',
  props: {
    // designates the button as icon - round and flat
    icon: {
      type: Boolean,
      required: false,
      default: false
    },
    // applies the light theme variant to the button, usually used as a secondary action
    light: {
      type: Boolean,
      required: false,
      default: false,
    },
    // will decide wether the button is set as <button> or <nuxt-link> as well as decide the route
    to: {
      type: [String, Object],
      required: false,
      default: null
    },
    activeClass: {
      type: String,
      required: false,
      default: null
    },
    // sets the button type e.g. submit, button etc
    buttonType: {
      type: String,
      required: false,
      default: 'button'
    },
    // removes button styling, padding and hover state
    plain: {
      type: Boolean,
      required: false,
      default: false
    },
    // render button as white text with white borders and transparent background
    outlined: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup(props) {

    // set the button as <button> or <nuxt-link> dependant on props passed
    const type = computed(() => {
      if (props.to) {
        return 'nuxt-link'
      }
      return 'button'
    })

    // render correct style base on props
    const renderClasses = (): string => {
      if (props.icon) {
        if (props.plain && props.light) return 'appearance-none text-white hover:text-gray-300'
        if (props.light) return 'appearance-none rounded-full p-2 hover:bg-brand-100 text-brand-400'
        if (props.plain) return 'appearance-none text-brand-700 hover:text-brand-900'

        return 'appearance-none rounded-full p-2 hover:bg-brand-900'
      }

      // button is styled as a normal button
      if (props.plain) return 'appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 focus:border-transparent rounded-sm'
      if (props.light) return 'appearance-none  hover:bg-brand-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 inline-flex justify-center px-4 py-2 text-sm font-semibold text-brand-700 bg-white border border-brand-300 rounded-md shadow-sm'
      if (props.outlined) return 'text-sm appearance-none font-semibold leading-5 rounded-md px-4 py-2 text-white bg-transparent border border-white hover:bg-black hover:bg-opacity-25 focus:outline-none focus:bg-opacity-25 focus:bg-black focus:shaow-outline-brand active:bg-black active:bg-opacity-25'

      // default style
      return 'appearance-none hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 inline-flex justify-center px-4 py-2 text-sm font-semibold text-white bg-brand-800 border border-brand-900 rounded-md shadow-sm'

    }

    return {
      type,
      renderClasses
    }
  }
}
</script>
<template>
  <component
    :is="element"
    :to="to"
    class="focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center text-sm font-semibold leading-5 border rounded-md shadow-sm appearance-none cursor-pointer"
    :class="[
      fluid ? 'w-full' : 'w-auto',
      {
        'hover:bg-brand-900 focus:ring-brand-800 text-white bg-brand-800 border-brand-900': variant === 'primary',
        'hover:bg-red-800 focus:ring-red-800 text-white bg-red-700 border-red-800': variant === 'primaryDanger',
        'hover:bg-brand-100 focus:ring-brand-800 text-brand-700 bg-white border-brand-300': variant === 'secondary',
        'hover:bg-red-100 focus:ring-red-600 text-red-600 bg-white border-red-500': variant === 'secondaryDanger',
        'hover:bg-black hover:bg-opacity-25 focus:ring-white focus:bg-opacity-25 text-white bg-transparent border-white': variant === 'outlined',
        'px-3 py-1.5': size === 's',
        'px-4 py-2': size === 'm',
        'px-5 py-3': size === 'l',
        'self-auto': !alignSelf || alignSelf === 'auto',
        'self-start': alignSelf === 'start',
        'self-end': alignSelf === 'end',
        'self-center': alignSelf === 'center',
        'self-stretch': alignSelf === 'stretch',
        'self-baseline': alignSelf === 'baseline'
      }
    ]"
  >
    <div v-if="leftIcon" class="mr-2 -ml-1">
      <slot name="leftIcon" />
    </div>
    <slot>Button</slot>
    <div v-if="loadingState && loadingState !== 'initial' || rightIcon" class="flex items-center ml-2 -mr-1">
      <slot name="rightIcon" />
      <div v-if="loadingState === 'loading' && !rightIcon" class="flex items-center w-5 h-5">
        <svg 
          :class="
            {
              'text-white': variant === 'primary' || variant === 'primaryDanger' || variant === 'outlined',
              'text-brand-700': variant === 'secondary',
              'text-red-600': variant === 'secondaryDanger'
            }
          "
          class="animate-spin w-4 h-4 text-white" 
          xmlns="http://www.w3.org/2000/svg" fill="none" 
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
      <ExclamationCircleIcon 
        v-else-if="loadingState === 'error' && !rightIcon"
        :class="
          {
            'text-white': variant === 'primary' || variant === 'primaryDanger' || variant === 'outlined',
            'text-brand-700': variant === 'secondary',
            'text-red-600': variant === 'secondaryDanger'
          }
        "
        class="w-5 h-5 text-white" 
      />
      <CheckCircleIcon 
        v-else-if="loadingState === 'success' && !rightIcon" 
        :class="
          {
            'text-white': variant === 'primary' || variant === 'primaryDanger' || variant === 'outlined',
            'text-brand-700': variant === 'secondary',
            'text-red-600': variant === 'secondaryDanger'
          }
        "
        class="w-5 h-5 text-white" 
      />
    </div>
  </component>
</template>

<script lang="ts">
import { computed, PropType, defineComponent } from '@vue/runtime-core'
import { ButtonSize, ButtonVariant, ButtonLoadingState, ButtonAlignSelf } from './types'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'AButton',
  components: {
    CheckCircleIcon,
    ExclamationCircleIcon
  },
  props: {
    /**
    * Button size.
    */
    size: {
      required: false,
      default: 'm',
      type: String as PropType<ButtonSize>
    },
    /**
     * The button variant.
     */
    variant: {
      required: false,
      default: 'primary',
      type: String as PropType<ButtonVariant>
    },
    /**
    * Url path, redirects a user on click to given path.
    */
    to: {
      required: false,
      type: String
    },
    /**
    * To be used in submission forms where we want to visualize the current state of
    * the submission.
    */
    loadingState: {
      required: false,
      default: 'initial',
      type: String as PropType<ButtonLoadingState>
    },
    /**
    * Give the button width: 100%.
    */
    fluid: {
      required: false,
      default: false,
      type: Boolean
    },
    /**
    * Flexbox `align-self`.
    */
    alignSelf: {
      required: false,
      default: 'center',
      type: String as PropType<ButtonAlignSelf>
    }
  },
  setup(props, { slots }) {
    // Render element either as nuxt-link or button based on
    // if the to prop is given.
    // const element = computed(() => {
    //   if (props.to) return 'nuxt-link'
    //   return 'button'
    // })

    const element = 'button'

    const rightIcon = computed(() => !!slots.rightIcon)
    const leftIcon = computed(() => !!slots.leftIcon)

    return {
      element,
      rightIcon,
      leftIcon
    }
  }
})
</script>
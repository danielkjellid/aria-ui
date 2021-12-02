<template>
  <section>
    <article class="image-full-container relative overflow-hidden">
      <div class="table-cell align-middle">
        <img
          :src="imageObj.images.images_1536x860"
          alt="Decorative background image"
          class="absolute bottom-0 left-0 right-0 object-cover w-full h-full"
          :srcset="`${imageObj.images.image_512x512} 512w,
                    ${imageObj.images.image_640x275} 640w,
                    ${imageObj.images.image_1024x1024} 1024w,
                    ${imageObj.images.image_1024x575} 1024w,
                    ${imageObj.images.image_1536x860} 1536w,
                    ${imageObj.images.image_2048x1150} 2048w`"
        >
        <div v-if="imageObj.images.apply_filter" class="opacity-20 absolute inset-0 bg-black" />
        <div class="absolute bottom-0 left-0 right-0 flex items-center justify-center h-full px-4">
          <div class="text-center">
            <slot>
              <h2 class="text-2xl font-medium text-white">{{ imageObj.name }}</h2>
            </slot>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 mb-8 text-center">
          <Button icon light plain @click="onNavigateToContent">
            <ChevronDownIcon class="hover:text-gray-300 animate-bounce-slow w-12 h-12 text-white" />
          </Button>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import Button from '../Button/Button.vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { ImageHeaderType } from './types'

export default {
  name: 'AriaImageHeader',
  components: {
    Button,
    ChevronDownIcon
  },
  props: {
    imageObj: {
      type: Object as PropType<ImageHeaderType>,
      required: false,
      default: {
        name: 'Name',
        images: {
          apply_filter: false,
          image_512x512: require('../../static/images/default_512x512.jpeg'),
          image_640x275: require('../../static/images/default_640x275.jpeg'),
          image_1024x1024: require('../../static/images/default_1024x1024.jpeg'),
          image_1024x575: require('../../static/images/default_1024x575.jpeg'),
          image_1536x860: require('../../static/images/default_1536x860.jpeg'),
          image_2048x1150: require('../../static/images/default_2048x1150.jpeg'),
        }
      }
    }
  },
  setup(props, { emit }) {
    const onNavigateToContent = (): void => {
      emit('navigateToContent')
    }

    return {
      onNavigateToContent
    }
  }
}
</script>

<style scoped>
  .image-full-container {
    height: 375px;
    width: 100%;
  }

  @media (min-width: 640px) {
    .image-full-container {
      height: 330px;
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .image-full-container {
      height: 370px;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    .image-full-container {
      height: 575px;
      width: 100%;
    }
  }

  @media (min-width: 1536px) {
    .image-full-container {
      height: 860px;
      width: 100%;
    }
  }

  @media (min-width: 2048px) {
    .image-full-container {
      height: 1150px;
      width: 100%;
    }
  }
</style>

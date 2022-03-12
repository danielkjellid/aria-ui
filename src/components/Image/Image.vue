<template>
  <a-skeleton-loader
    v-if="loading"
    :loading="loading"
    class="image-full-container relative col-span-2 overflow-hidden"
  />
  <article
    v-else
    class="relative overflow-hidden"
    :class="
      width === 'full'
        ? 'col-span-2 image-full-container'
        : 'col-span-2 sm:col-span-1 image-half-container'
    "
  >
    <!-- The image itself. -->
    <div class="table-cell align-middle">
      <img
        v-if="width === 'full'"
        class="absolute inset-0 object-cover w-full h-full"
        :src="imageObj.image1536x860"
        :alt="`Få inspirasjon og veiledning rundt ${name} hos oss, med fokus på bærekraft og ro.`"
        :srcset="`${imageObj.image512x512} 512w,
                  ${imageObj.image640x275} 640w,
                  ${imageObj.image1024x1024} 1024w,
                  ${imageObj.image1024x575} 1024w,
                  ${imageObj.image1536x860} 1536w,
                  ${imageObj.image2048x1150} 2048w`"
      />
      <img
        v-else
        class="object-cover w-full w-full"
        :src="imageObj.image1024x1024"
        :alt="`Få inspirasjon og veiledning rundt ${name} hos oss, med fokus på bærekraft og ro.`"
        :srcset="`${imageObj.image512x512} 512w,
                  ${imageObj.image1024x1024} 1024w`"
      />
    </div>
    <!-- Filter overlay -->
    <div v-if="imageObj.applyFilter" class="opacity-20 absolute inset-0 bg-black" />
    <!-- Vertically and horizontally centered text (name) -->
    <div
      v-if="name"
      class="absolute bottom-0 left-0 right-0 flex items-center justify-center h-full px-4"
    >
      <div class="text-center">
        <h2 class="text-3xl font-medium text-white">{{ name }}</h2>
      </div>
    </div>
    <!-- Action aligned horizontally centered towards the bottom of the image. -->
    <!-- Defaults to a chevron bouncing up and down that navigates to content on click. -->
    <div class="absolute bottom-0 left-0 right-0 mb-8 text-center">
      <slot>
        <button @click="onNavigateToContent">
          <ChevronDownIcon class="hover:text-gray-300 animate-bounce-slow w-12 h-12 text-white" />
        </button>
      </slot>
    </div>
  </article>
</template>

<script lang="ts">
import { PropType, defineComponent } from '@vue/runtime-core'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { ImageWidth, ImageType } from './types'
import ASkeletonLoader from '../SkeletonLoader/SkeletonLoader.vue'

import image512x512 from '../../../static/images/default_512x512.jpeg'
import image640x275 from '../../../static/images/default_640x275.jpeg'
import image1024x1024 from '../../../static/images/default_1024x1024.jpeg'
import image1024x575  from '../../../static/images/default_1024x575.jpeg'
import image1536x860  from '../../../static/images/default_1536x860.jpeg'
import image2048x1150 from '../../../static/images/default_2048x1150.jpeg'

export default defineComponent({
  name: 'AImage',
  components: {
    ChevronDownIcon,
    ASkeletonLoader,
  },
  props: {
    /**
     * Name of the image.
     */
    name: {
      required: false,
      type: String,
    },
    /**
     * If the image is currently loading. True when a request is pending.
     */
    loading: {
      required: false,
      default: false,
      type: Boolean,
    },
    /**
     * If the image should be display as half or full width.
     */
    width: {
      required: false,
      default: 'full',
      type: String as PropType<ImageWidth>,
    },
    /**
     * Images to display. Uses srcset to toggle between the sizes 2048x1150,
     * 1536x860, 1024x575, 1024x1024, 640x275 and 512x512.
     */
    images: {
      required: false,
      type: Object as PropType<ImageType>,
    },
  },
  setup(props, { emit }) {
    const onNavigateToContent = (): void => {
      emit('on-navigate-to-content')
    }

    const defaultImageObj = {
      applyFilter: false,
      image512x512,
      image640x275,
      image1024x1024,
      image1024x575,
      image1536x860,
      image2048x1150,
    }

    const imageObj: ImageType = props.images ? props.images : defaultImageObj

    return {
      onNavigateToContent,
      imageObj
    }
  },
})
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

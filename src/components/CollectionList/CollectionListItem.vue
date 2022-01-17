<template>
  <div class="lg:grid-cols-3 lg:gap-16 grid content-center grid-cols-1 gap-4">
    <div
      class="image-container shrink-0 lg:col-span-2 relative col-span-1 overflow-hidden rounded-md"
      :class="reverse ? 'lg:order-2 order-1' : 'order-1'"
    >
      <img
        v-if="!loading"
        :src="images.image660x400"
        alt=""
        class="absolute inset-0 object-cover w-full h-full"
        :srcset="`${images.image500x305} 500w,
                ${images.image660x400} 660w,
                ${images.image850x520} 850w`"
      />
      <a-skeleton-loader v-else :loading="loading" class="image-container" />
    </div>
    <div
      class="lg:self-center self-start order-1 col-span-1"
      :class="reverse ? 'order-2 lg:order-1' : 'order-2'"
    >
      <div class="flex items-center justify-between mt-4">
        <a-text v-if="!loading" tag="h1" variant="title4">{{ title }}</a-text>
        <a-skeleton-loader v-else :loading="loading" height="h-6" />
        <slot>
          <a-link v-if="!loading" tag="a" href="#" class="lg:hidden">Read more</a-link>
        </slot>
      </div>
      <div>
        <a-text v-if="!loading" variant="body2" class="mt-2 mb-4" color="text-gray-700">
          {{ description }}.
        </a-text>
        <div v-else class="mt-2 mb-4">
          <a-skeleton-loader :loading="loading" />
          <a-skeleton-loader :loading="loading" width="w-3/4" />
          <a-skeleton-loader :loading="loading" />
          <a-skeleton-loader :loading="loading" width="w-1/2" />
        </div>
      </div>
      <slot>
        <a-link v-if="!loading" tag="a" href="#" class="lg:inline-flex hidden">Read more</a-link>
        <a-skeleton-loader v-else :loading="loading" width="w-1/3" class="lg:inline-flex hidden" />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import ASkeletonLoader from '../SkeletonLoader/SkeletonLoader.vue'
import ALink from '../Link/Link.vue'
import AText from '../Text/Text.vue'
import { ImageType } from './types'

import image500x305 from '../../../static/images/default_500x305.jpeg'
import image660x400 from '../../../static/images/default_660x400.jpeg'
import image850x520 from '../../../static/images/default_850x520.jpeg'

export default {
  name: 'ACollectionListItem',
  components: { ASkeletonLoader, ALink, AText },
  props: {
    /**
     * Title of the item.
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * Description of item, placed bellow title.
     */
    description: {
      type: String,
      required: true,
    },
    /**
     * If the image is currently loading. Should be when an async request is pending.
     */
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Flips item block horizontally, putting text to the right and image to the left.
     */
    reverse: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Images to display. Uses srcset to toggle between the sizes 850x520,
     * 660x400 and 500x305.
     */
    images: {
      type: Object as PropType<ImageType>,
      required: true,
      default: {
        image500x305,
        image660x400,
        image850x520,
      },
    },
  },
}
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 250px;
}

@media (min-width: 640px) {
  .image-container {
    height: 300px;
  }
}

@media (min-width: 768px) {
  .image-container {
    height: 350px;
  }
}

@media (min-width: 1024px) {
  .image-container {
    height: 400px;
    width: 100%;
    max-width: 850px;
  }
}

@media (min-width: 1280px) {
  .image-container {
    height: 520px;
    width: 100%;
    max-width: 850px;
  }
}
</style>

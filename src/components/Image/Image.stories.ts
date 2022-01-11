import { Meta, Story } from '@storybook/vue3'
import AImage from './Image.vue'
import AButton from '../Button'
import { ImageProps, ImageWidth } from './types'

const widths: ImageWidth[] = ['full', 'half']

export default {
  title: 'UI Elements/Image',
  component: AImage,
  parameter: {
    viewMode: 'docs',
  },
  argTypes: {
    width: {
      options: widths,
      defaultValue: 'full',
      table: {
        type: {
          summary: widths.join(',').replace(/,/g, ' | '),
        },
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<ImageProps> = (args: ImageProps) => ({
  components: { AImage },
  setup() {
    return { args }
  },
  template:
    '<div class="sm:grid-cols-2 grid grid-cols-1 gap-0"><a-image v-bind="args" /></div>',
})

const TwoHalfWidthImagesTemplate: Story<ImageProps> = (args: ImageProps) => ({
  components: { AImage, AButton },
  setup() {
    return { args }
  },
  template:
    '<div class="sm:grid-cols-2 grid grid-cols-1 gap-0"><a-image width="half"><a-button variant="outlined">AImage 1</a-button></a-image><a-image width="half"><a-button variant="outlined">AImage 2</a-button></a-image></div>',
})

export const API = Template.bind({})
API.args = { name: 'Example' }
API.parameters = {
  docs: {
    source: {
      code: `<a-image 
  name="Example"
  width="full"
  :loading="false"
  :image="{applyFilter: false, imageXs: 'some/image/path.jpeg'...}"
  @onNavigateToContent="someMethod"
/>`,
    },
  },
}

export const ExampleWithImage = Template.bind({})
ExampleWithImage.args = {
  name: 'With images!',
  image: {
    applyFilter: false,
    imageXs: 'https://source.unsplash.com/random',
    imageSm: 'https://source.unsplash.com/random',
    imageMd: 'https://source.unsplash.com/random',
    imageLg: 'https://source.unsplash.com/random',
    imageXl: 'https://source.unsplash.com/random',
    image2xl: 'https://source.unsplash.com/random',
  },
}
ExampleWithImage.parameters = {
  docs: {
    source: {
      code: `<a-image 
  name="With images!"
  width="full"
  :loading="false"
  :image: {applyFilter: false, imageSm: 'https://source.unsplash.com/random'...}"
  @onNavigateToContent="someMethod"
/>`,
    },
  },
}

export const TwoHalfWidthImages = TwoHalfWidthImagesTemplate.bind({})
TwoHalfWidthImages.parameters = {
  docs: {
    source: {
      code: `
<div class="sm:grid-cols-2 grid grid-cols-1 gap-0">
  <a-image 
    name="With images!"
    width="full"
    :loading="false"
    :image: {applyFilter: false, imageSm: 'https://source.unsplash.com/random'...}"
    @onNavigateToContent="someMethod"
  >
    <a-button variant="outlined">AImage 1</a-button>
  </AImage>
  <a-image 
    name="With images!"
    width="full"
    :loading="false"
    :image: {applyFilter: false, imageSm: 'https://source.unsplash.com/random'...}"
    @onNavigateToContent="someMethod"
  >
    <a-button variant="outlined">AImage 2</a-button>
  </AImage>
</div>`,
    },
  },
}
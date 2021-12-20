import { Meta, Story } from '@storybook/vue3'
import Image from './Image.vue'
import Button from '../Button/Button.vue'
import { ImageProps, ImageWidth } from './types'

const widths: ImageWidth[] = [
  'full',
  'half'
]

export default {
  title: 'UI Elements/Image',
  component: Image,
  parameter: {
    viewMode: 'docs'
  },
  argTypes: {
    width: {
      options: widths,
      defaultValue: 'full',
      table: {
        type: {
          summary: widths.join(',').replace(/,/g, ' | ')
        }
      }
    },
    name: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta

const Template: Story<ImageProps> = (args: ImageProps) => ({
  components: { Image },
  setup() {
    return { args }
  },
  template: '<div class="sm:grid-cols-2 grid grid-cols-1 gap-0"><Image v-bind="args" /></div>'
})

const TwoHalfWidthImagesTemplate: Story<ImageProps> = (args: ImageProps) => ({
  components: { Image, Button },
  setup() {
    return { args }
  },
  template: '<div class="sm:grid-cols-2 grid grid-cols-1 gap-0"><Image width="half"><Button variant="outlined">Image 1</Button></Image><Image width="half"><Button variant="outlined">Image 2</Button></Image></div>'
})

export const API = Template.bind({})
API.args = { name: 'Example' }
API.parameters = {
  docs: {
      source: {
        code: 
`<Image
  name="Example"
  width="full"
  :loading="false"
  :image="{applyFilter: false, imageXs: 'some/image/path.jpeg'...}"
  @onNavigateToContent="someMethod"
/>`
    }
  }
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
    }
}
ExampleWithImage.parameters = {
  docs: {
    source: {
      code: 
`<Image
  name="With images!"
  width="full"
  :loading="false"
  :image: {applyFilter: false, imageSm: 'https://source.unsplash.com/random'...}"
  @onNavigateToContent="someMethod"
/>`
    }
  }
}

export const TwoHalfWidthImages = TwoHalfWidthImagesTemplate.bind({})
TwoHalfWidthImages.parameters = {
  docs: {
    source: {
      code: 
`
<div class="sm:grid-cols-2 grid grid-cols-1 gap-0">
  <Image
    name="With images!"
    width="full"
    :loading="false"
    :image: {applyFilter: false, imageSm: 'https://source.unsplash.com/random'...}"
    @onNavigateToContent="someMethod"
  >
    <Button variant="outlined">Image 1</Button>
  </Image>
  <Image
    name="With images!"
    width="full"
    :loading="false"
    :image: {applyFilter: false, imageSm: 'https://source.unsplash.com/random'...}"
    @onNavigateToContent="someMethod"
  >
    <Button variant="outlined">Image 2</Button>
  </Image>
</div>`
    }
  }
}


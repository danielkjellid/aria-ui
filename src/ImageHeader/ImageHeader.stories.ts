import { Meta, Story } from '@storybook/vue3'
import ImageHeader from './ImageHeader.vue'
import { ImageHeaderProps } from './types'

export default {
  title: 'UI Elements/ImageHeader',
  component: ImageHeader,
  parameters: {
    viewMode: 'docs'
  }
} as Meta

const Template: Story<ImageHeaderProps> = (args: ImageHeaderProps) => ({
  components: { ImageHeader },
  setup() {
    return { args }
  },
  template: '<ImageHeader v-bind="args" />'
})

export const API = Template.bind({})
API.parameters = {
  docs: {
      source: {
        code: 
`<ImageHeader 
  :imageObj="{ name: 'Name', images: {applyFilter: false, image_512x512: 'some/image/path.jpeg'...}}"
  @onNavigateToContent="someMethod"
/>`
    }
  }
}

export const ExampleWithImage = Template.bind({})
ExampleWithImage.args = {
  imageObj: {
    name: 'With image!',
    images: {
      apply_filter: false,
      image_512x512: 'https://source.unsplash.com/random',
      image_640x275: 'https://source.unsplash.com/random',
      image_1024x1024: 'https://source.unsplash.com/random',
      image_1024x575: 'https://source.unsplash.com/random',
      image_1536x860: 'https://source.unsplash.com/random',
      image_2048x1150: 'https://source.unsplash.com/random',
    }
  },
}
ExampleWithImage.parameters = {
  docs: {
    source: {
      code: 
`<ImageHeader 
  :imageObj="{ name: 'With image!', images: {applyFilter: false, image_512x512: 'https://source.unsplash.com/random'...}}"
  @onNavigateToContent="someMethod"
/>`
    }
  }
}

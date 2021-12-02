export interface ImageHeaderImageType {
  apply_filter: boolean
  image_512x512: string
  image_640x275: string
  image_1024x1024: string
  image_1024x575: string
  image_1536x860: string
  image_2048x1150: string
}

export interface ImageHeaderType {
  name: string
  images: ImageHeaderImageType
}

export interface ImageHeaderProps {
  imageObj: ImageHeaderType
}
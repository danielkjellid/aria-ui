export type ImageWidth = 'half' | 'full'
export interface ImageType {
  applyFilter: boolean
  imageXs: string // 512x512
  imageSm: string // 640x275
  imageMd: string // 1024x1024
  imageLg: string // 1024x575
  imageXl: string // 1536x860
  image2xl: string // 2048x1150
}

export interface ImageProps {
  name?: string
  loading?: boolean
  width?: ImageWidth
  image: ImageType
}

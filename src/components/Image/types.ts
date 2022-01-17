export type ImageWidth = 'half' | 'full'
export interface ImageType {
  applyFilter: boolean
  image512x512: string // 512x512
  image640x275: string // 640x275
  image1024x1024: string // 1024x1024
  image1024x575: string // 1024x575
  image1536x860: string // 1536x860
  image2048x1150: string // 2048x1150
}

export interface ImageProps {
  name?: string
  loading?: boolean
  width?: ImageWidth
  image: ImageType
}

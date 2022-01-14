export type LoaderShape = 'square' | 'circle'

export interface SkeletonLoaderProps {
  loading: boolean
  animated?: boolean
  height?: string
  width?: string
  shape?: LoaderShape
  count?: number
}

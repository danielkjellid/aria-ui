export type MaxWidthOptions = | 'none' | 'prose' | 'xs' | 'sm' | 'md' | 'xl' | '2xl'

export interface ContainerProps {
  as?: string
  xPadding?: string | undefined | null
  yPadding?: string | undefined | null
  maxWidth?: MaxWidthOptions
}
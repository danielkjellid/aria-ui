export type Direction = 'vertical' | 'horizontal'
export type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type JustifyContent = 'left' | 'right' | 'center' | 'between' | 'around' | 'evenly'
export type AlignItems = 'top' | 'bottom' | 'center' | 'baseline' | 'stretch'

export interface StackProps {
  tag?: string
  direction?: Direction
  spacing?: Spacing
  justifyContent?: JustifyContent
  alignItems?: AlignItems
}

export type TextAlignment = 'center' | 'left' | 'right' | 'stretch'
export type TextVariant =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'title5'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'

export interface TextProps {
  tag: string
  variant: TextVariant
  muted?: boolean
  alignment?: TextAlignment
  prose?: boolean
}

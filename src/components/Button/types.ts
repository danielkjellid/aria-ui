export type ButtonVariant =
  | 'primary'
  | 'primaryDanger'
  | 'secondary'
  | 'secondaryDanger'
  | 'outlined'
export type ButtonSize = 's' | 'm' | 'l'
export type ButtonLoadingState = 'initial' | 'loading' | 'error' | 'success'
export type ButtonAlignSelf = 'auto' | 'left' | 'right' | 'center' | 'stretch' | 'baseline'

export interface ButtonProps {
  size?: ButtonSize
  variant?: ButtonVariant
  to?: string
  loadingState?: ButtonLoadingState
  fluid?: boolean
  alignSelf?: ButtonAlignSelf
}

export type ButtonVariant =
  | 'primary'
  | 'primaryDanger'
  | 'secondary'
  | 'secondaryDanger'
  | 'outlined'
export type ButtonSize = 's' | 'm' | 'l'
export type ButtonLoadingState = 'initial' | 'loading' | 'error' | 'success'
export type ButtonAlignSelf = 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline'

export interface ButtonProps {
  size?: ButtonSize
  variant?: ButtonVariant
  to?: string
  loadingState?: ButtonLoadingState
  fluid?: boolean
  alignSelf?: ButtonAlignSelf
}

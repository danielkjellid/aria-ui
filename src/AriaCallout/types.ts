export type CalloutVariant = | 'success' | 'info' | 'warning' | 'danger'
export interface CalloutProps {
  message?: string
  variant?: CalloutVariant
  context: string[]
}
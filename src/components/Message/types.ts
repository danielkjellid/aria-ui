export type MessageVariant = | 'success' | 'info' | 'warning' | 'danger'
export interface MessageProps {
  display: boolean
  variant: MessageVariant
}
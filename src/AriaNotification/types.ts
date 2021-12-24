export type NotificationVariant = | 'success' | 'info' | 'warning' | 'danger'
export interface NotificationProps {
  variant?: NotificationVariant
  display?: boolean
  title: string
  subtitle?: string
}
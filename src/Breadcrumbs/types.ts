export interface BreadcrumbType {
  text: string
  href: string
  disabled?: boolean
}

export interface BreadcrumbsType {
  breadcrumbs: BreadcrumbType[]
}
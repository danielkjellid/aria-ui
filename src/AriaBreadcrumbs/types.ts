export interface BreadcrumbType {
  text: string
  href: string
  current?: boolean
}

export interface BreadcrumbsType {
  breadcrumbs: BreadcrumbType[]
}
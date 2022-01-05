export interface SubMenuItemChild {
  id: number
  name: string
  slug: string
  ordering: number
}

export interface SubMenuItem {
  id: number
  name: string
  slug: string
  children: SubMenuItemChild[]
}

export interface MenuItem {
  name: string
  slug: string
  tag?: string
  activatesSubMenu?: boolean
}
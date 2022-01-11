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
  active?: boolean
}

export interface AuthenticatedUser {
  firstName: string
  fullName: string
  avatarColor: string
  initial: string
  email: string
  isAuthenticated: boolean
  permissions: string[]
  groupPermissions: string[]
  isStaff: boolean
  isSuperuser: boolean
  hasConfirmedEmail: boolean
}

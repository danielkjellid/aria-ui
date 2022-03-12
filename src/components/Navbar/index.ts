import { App as Application } from 'vue'
import Navbar from './Navbar.vue'
import FlyoutMenu from "./FlyoutMenu.vue"
import MobileMenu from "./MobileMenu.vue"
import NavbarItem from "./NavbarItem.vue"
import NavbarItemFlyout from "./NavbarItemFlyout.vue"

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(instance: Application) {
    registerComponent(instance, Navbar)
    registerComponent(instance, NavbarItem)
    registerComponent(instance, NavbarItemFlyout)
  },
}

use(Plugin)

export default Plugin

export { Navbar as ANavbar }
export { NavbarItem as ANavbarItem }
export { NavbarItemFlyout as ANavbarItemFlyout }

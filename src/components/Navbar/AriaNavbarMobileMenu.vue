<template>
  <div>
    <div class="lg:hidden fixed inset-y-0 top-0 right-0 z-40 flex" role="dialog" aria-modal="true">
      <transition enter-active-class="transition-opacity duration-300 ease-linear" enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300 ease-linear" leave-class="opacity-100" leave-to-class="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" @click="closeMenu" />
      </transition>
      <transition enter-active-class="transition duration-300 ease-in-out transform" enter-class="translate-x-full" enter-to-class="-translate-x-0" leave-active-class="transition duration-300 ease-in-out transform" leave-class="-translate-x-0" leave-to-class="translate-x-full">
        <div class="relative flex flex-col w-screen max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
          <div class="flex items-center justify-between px-4 pt-5 pb-2">
            <h1 class="font-medium text-gray-900">Meny</h1>
            <div>
              <button @click="closeMenu" type="button" class="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md">
                <span class="sr-only">Close menu</span>
                <XIcon class="w-6 h-6" />
              </button>
            </div>
          </div>

          <div class="mt-2">
            <div class="px-4 pt-5 pb-6 space-y-12">
              <div class="gap-y-10 gap-x-6 grid items-start grid-cols-1">
                <div class="gap-y-10 gap-x-6 grid grid-cols-1">
                  <div v-for="subMenuItem in subMenuItems" :key="subMenuItem.id">
                    <p class="font-medium text-gray-900">
                      {{ subMenuItem.name }}
                    </p>
                    <ul role="list" aria-labelledby="mobile-featured-heading-0" class="mt-6 space-y-6">
                      <li v-for="child in subMenuItem.children" :key="child.id" class="flex">
                        <a :href="`/category/${subMenuItem.slug}/?subcategory=${child.slug}`" class="text-gray-600">
                          {{ child.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="px-4 py-6 space-y-6 border-t border-gray-200">
            <div class="flow-root">
              <a href="#" class="block p-2 -m-2 font-medium text-gray-900">Company</a>
            </div>

            <div class="flow-root">
              <a href="#" class="block p-2 -m-2 font-medium text-gray-900">Stores</a>
            </div>
          </div>

          <div v-if="!authenticatedUser || !authenticatedUser.isAuthenticated" class="px-4 py-6 space-y-6 border-t border-gray-200">
            <div class="flow-root">
              <a href="#" class="block p-2 -m-2 font-medium text-gray-900">Opprett en konto</a>
            </div>
            <div class="flow-root">
              <a href="#" class="block p-2 -m-2 font-medium text-gray-900">Logg inn</a>
            </div>
          </div>
          <div v-else class="px-4 pt-6 space-y-6 border-t border-gray-200">
            <div>
              <div class="flow-root">
                <button @click="mobileUserMenuActive = !mobileUserMenuActive" type="button" class="group flex items-center justify-between w-full">
                  <div class="flex items-center">
                    <div style="background-color: #60a5fa" class="flex items-center justify-center w-10 h-10 rounded-full">
                      <span class="text-sm text-white">D</span>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium leading-6 text-left text-gray-800">
                        Daniel Example
                      </p>
                      <span class="text-sm leading-5 text-gray-600">daniel@example.com</span>
                    </div>
                  </div>
                  <div>
                    <span class="sr-only">Open user menu</span>
                    <ChevronDownIcon v-if="!mobileUserMenuActive" class="group-hover:text-gray-600 w-6 h-6 text-gray-400" />
                    <ChevronUpIcon v-else class="group-hover:text-gray-600 w-6 h-6 text-gray-400" />
                  </div>
                </button>
                <transition enter-active-class="transition duration-200 ease-out" enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition duration-150 ease-in" leave-class="opacity-00" leave-to-class="opacity-0">
                  <ul v-show="mobileUserMenuActive" role="list" aria-labelledby="user-heading-0" class="mt-6 space-y-6">
                    <li class="flex">
                      <a href="#" class="text-gray-600"> Din konto </a>
                    </li>

                    <li class="flex">
                      <a href="#" class="text-gray-600"> Innstillinger </a>
                    </li>

                    <li class="flex">
                      <a href="#" class="text-gray-600"> Logg ut </a>
                    </li>
                  </ul>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { XIcon } from '@heroicons/vue/outline'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/solid'
import { defineComponent, PropType, ref } from '@vue/runtime-core'
import { AuthenticatedUser, SubMenuItem, MenuItem } from './types'

export default defineComponent({
  name: 'AriaNavbarMobileMenu',
  components: {
    ChevronDownIcon,
    ChevronUpIcon,
    XIcon,
  },
  props: {
    menuItems: {
      required: true,
      type: Array as PropType<MenuItem[]>,
    },
    subMenuItems: {
      required: true,
      type: Array as PropType<SubMenuItem[]>,
    },
    authenticatedUser: {
      required: false,
      type: Object as PropType<AuthenticatedUser>,
      default: undefined,
    },
  },
  setup(_, { emit }) {
    const mobileUserMenuActive = ref<boolean>(false)

    const closeMenu = () => {
      emit('on-close-menu')
    }

    return { mobileUserMenuActive, closeMenu }
  },
})
</script>

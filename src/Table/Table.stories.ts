import { Meta, Story } from '@storybook/vue3'
import Table from './Table.vue'
import { TableProps } from './types'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
  title: 'UI Elements/Table',
  component: Table,
  parameter: {
    viewMode: 'docs'
  },
} as Meta

const Template: Story<TableProps> = (args: TableProps) => ({
  components: { Table },
  setup() {
    return { args }
  },
  template: '<Table v-bind="args" />'
})

const TemplateWithSlots: Story<TableProps> = (args: TableProps) => ({
  components: { Table, CheckCircleIcon, XCircleIcon },
  setup() {
    return { args }
  },
  template: '<Table v-bind=args><template #profile="{ item }"><div class="flex items-center"><div :style="`background-color: ${item.profile.avatar_color}`" class="flex items-center justify-center w-6 h-6 mr-2 text-xs text-white rounded-full">{{item.profile.initial}}</div>{{ item.profile.full_name }}</div></template><template #is_active="{ item }"><div v-if="item.is_active" class="flex items-center"><CheckCircleIcon class="h-5 w-5 text-green-400 mr-2" />Active</div><div v-else class="flex items-center"><XCircleIcon class="h-5 w-5 text-red-400 mr-2" />Inactive</div></template><template #action="{ item }"><a href="#" class="hover:bg-gray-200 flex items-center px-4 py-2 text-sm text-gray-800">View user</a><a href="#" class="hover:bg-gray-200 flex items-center px-4 py-2 text-sm text-gray-800">Edit user</a></template></Table>'
})

export const API = Template.bind({})
API.args = {
  headers: [
    { text: 'Id', value: 'id' },
    { text: 'Name', value: 'name' },
    { text: 'Email', value: 'email' },
    { text: 'Date joined', value: 'dateJoined' },
    { text: '', value: 'actions' },
  ],
  items: [
    { id: 1, name: 'Firstname Lastname', email: 'example@example.com', dateJoined: '20.04.2021'},
    { id: 2, name: 'Firstname Lastname', email: 'example@example.com', dateJoined: '20.04.2021'},
    { id: 3, name: 'Firstname Lastname', email: 'example@example.com', dateJoined: '20.04.2021'},
  ],
  meta: {
    currentPage: '1',
    totalPages: '20',
    currentRange: '1-3',
    totalInstances: '60'
  },
  showTableActions: true,
  showPagination: true,
  showSearchbar: true,
  searchbarPlaceholder: 'Search name, email or phone number'
}
API.parameters = {
  docs: {
    source: {
      code: `<Table 
  :headers=[ { text: 'Id', value: 'id' }, { text: 'Name', value: 'name' }, { text: 'Email', value: 'email' }, { text: 'Date joined', value: 'dateJoined' }, { text: '', value: 'actions' }, ]
  :items=[ { id: 1, name: 'Firstname Lastname', email: 'example@example.com', dateJoined: '20.04.2021'}, { id: 2, name: 'Firstname Lastname', email: 'example@example.com', dateJoined: '20.04.2021'}, { id: 3, name: 'Firstname Lastname', email: 'example@example.com', dateJoined: '20.04.2021'}, ]
  :meta={ currentPage: '1', totalPages: '20', currentRange: '1-3', totalInstances: '60' }
  showTableActions
  showPagination
  showSearchbar
  searchbarPlaceholder="Search name, email or phone number"
  @onSearch="searchMethod"
  @onPrevious="previousPageMethod"
  @onNext="nextPageMethod"
/>`,  
    }
  }
}

export const WithSlots = TemplateWithSlots.bind({})
WithSlots.args = {
  headers: [
    { text: 'Id', value: 'id' },
    { text: 'Name', value: 'name' },
    { text: 'Email', value: 'email' },
    { text: 'Active', value: 'active' },
    { text: 'Date joined', value: 'dateJoined' },
    { text: '', value: 'actions' },
  ],
  items: [
    { 
      id: 1, 
      profile: {
        full_name: 'Barack Obama',
        initial: 'B',
        avatar_color: '#60A5FA'
      },
      email: 'barack@example.com',
      is_active: true,
      date_joined: '24. March 2021 12:27'     
    },
    { 
      id: 2, 
      profile: {
        full_name: 'Cristiano Ronaldo',
        initial: 'C',
        avatar_color: '#FBBF24'
      },
      email: 'cristiano@example.com',
      is_active: false,
      date_joined: '24. March 2021 12:27'     
    },
    { 
      id: 3, 
      profile: {
        full_name: 'Elvis Presley',
        initial: 'E',
        avatar_color: '#F472B6'
      },
      email: 'elvis@example.com',
      is_active: true,
      date_joined: '24. March 2021 12:27'     
    }
  ],
  meta: {
    currentPage: '1',
    totalPages: '20',
    currentRange: '1-3',
    totalInstances: '60'
  },
  showTableActions: true,
  showPagination: true,
  showSearchbar: true,
  searchbarPlaceholder: 'Search name, email or phone number'
}
WithSlots.parameters = {
  docs: {
    source: {
      code: `<Table 
  :headers=[ { text: 'Id', value: 'id' }, { text: 'Name', value: 'name' }, { text: 'Email', value: 'email' }, { text: 'Active', value: 'active' }, { text: 'Date joined', value: 'dateJoined' }, { text: '', value: 'actions' }, ]
  :items=[ { id: 1, profile: { full_name: 'Barack Obama', initial: 'B', avatar_color: '#60A5FA' }, email: 'barack@example.com', is_active: true, date_joined: '24. March 2021 12:27' }, { id: 2, profile: { full_name: 'Cristiano Ronaldo', initial: 'C', avatar_color: '#FBBF24' }, email: 'cristiano@example.com', is_active: false, date_joined: '24. March 2021 12:27' }, { id: 3, profile: { full_name: 'Elvis Presley', initial: 'E', avatar_color: '#F472B6' }, email: 'elvis@example.com', is_active: true, date_joined: '24. March 2021 12:27' } ]
  :meta={ currentPage: '1', totalPages: '20', currentRange: '1-3', totalInstances: '60' }
  showTableActions
  showPagination
  showSearchbar
  searchbarPlaceholder="Search name, email or phone number"
  @onSearch="searchMethod"
  @onPrevious="previousPageMethod"
  @onNext="nextPageMethod"
>
  <template #profile="{ item }">
    <div class="flex items-center">
      <div :style="\`background-color: \${item.profile.avatar_color}\`" class="flex items-center justify-center w-6 h-6 mr-2 text-xs text-white rounded-full">{{item.profile.initial}}</div>
      {{ item.profile.full_name }}
    </div>
  </template>
  <template #is_active="{ item }">
    <div v-if="item.is_active" class="flex items-center">
      <CheckCircleIcon class="h-5 w-5 text-green-400 mr-2" />
      Active
    </div>
    <div v-else class="flex items-center">
      <XCircleIcon class="h-5 w-5 text-red-400 mr-2" />
      Inactive
    </div>
  </template>
  <template #action="{ item }">
    <a href="#" class="hover:bg-gray-200 flex items-center px-4 py-2 text-sm text-gray-800">View user</a>
    <a href="#" class="hover:bg-gray-200 flex items-center px-4 py-2 text-sm text-gray-800">Edit user</a>
  </template>
</Table>`,  
    }
  }
}
import { Meta, Story } from '@storybook/vue3'
import AActionMenu from './ActionMenu.vue'
import AActionMenuItem from './ActionMenuItem.vue'
import AActionMenuSection from './ActionMenuSection.vue'
import {
  PencilIcon,
  DuplicateIcon,
  ArchiveIcon,
  ArrowCircleRightIcon,
  UserAddIcon,
  HeartIcon,
  TrashIcon,
} from '@heroicons/vue/solid'
import { ActionMenuProps, MenuAlignment } from './types'

const alignments: MenuAlignment[] = ['center', 'left', 'right']

export default {
  title: 'Menus/Action Menu',
  component: AActionMenu,
  parameter: {
    viewMode: 'docs',
  },
  argTypes: {
    alignment: {
      options: alignments,
      defaultValue: 'm',
      table: {
        type: {
          summary: alignments.join(',').replace(/,/g, ' | '),
        },
      },
    },
    width: {
      description: 'Tailwind width class that sets width of pop up.',
      control: {
        type: 'text',
      },
    },
    default: {
      description: 'Controller content, typically an icon.',
      control: {
        type: 'text',
      },
    },
    items: {
      description: 'Section to add `a-action-menu-item`s',
    },
  },
} as Meta

const Template: Story<ActionMenuProps> = (args: ActionMenuProps) => ({
  components: { AActionMenu, AActionMenuItem, AActionMenuSection },
  setup() {
    return { args }
  },
  template: `<div class="h-48">
      <a-action-menu v-bind="args">
        Click me to open menu
        <template #items>
          <a-action-menu-section>
            <a-action-menu-item tag="a" href="#">Option 1</a-action-menu-item>
            <a-action-menu-item tag="a" href="#">Option 2</a-action-menu-item>
            <a-action-menu-item tag="a" href="#">Option 3</a-action-menu-item>
          </a-action-menu-section>
        </template>
      </a-action-menu>
    </div>`,
})

const TemplateWithSections: Story<ActionMenuProps> = (args: ActionMenuProps) => ({
  components: { AActionMenu, AActionMenuItem, AActionMenuSection },
  setup() {
    return { args }
  },
  template: `<div class="h-80">
      <a-action-menu v-bind="args">
        Action menu with sections (click me)
        <template #items>
          <a-action-menu-section>
            <a-action-menu-item tag="a" href="#">Option 1</a-action-menu-item>
            <a-action-menu-item tag="a" href="#">Option 2</a-action-menu-item>
            <a-action-menu-item tag="a" href="#">Option 3</a-action-menu-item>
          </a-action-menu-section>
          <a-action-menu-section>
            <a-action-menu-item tag="a" href="#">Option 4</a-action-menu-item>
            <a-action-menu-item tag="a" href="#">Option 5</a-action-menu-item>
            <a-action-menu-item tag="a" href="#">Option 6</a-action-menu-item>
          </a-action-menu-section>
        </template>
      </a-action-menu>
    </div>`,
})

const TemplateWithSectionsAndIcons: Story<ActionMenuProps> = (args: ActionMenuProps) => ({
  components: {
    AActionMenu,
    AActionMenuItem,
    AActionMenuSection,
    PencilIcon,
    DuplicateIcon,
    ArchiveIcon,
    ArrowCircleRightIcon,
    UserAddIcon,
    HeartIcon,
    TrashIcon,
  },
  setup() {
    return { args }
  },
  template: `<div class="h-96">
      <a-action-menu v-bind="args">
        Action menu with sections and icons (click me)
        <template #items>
          <a-action-menu-section>
            <a-action-menu-item tag="a" href="#">
              <PencilIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
              Edit
            </a-action-menu-item>
            <a-action-menu-item tag="a" href="#">
              <DuplicateIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
              Duplicate
            </a-action-menu-item>
          </a-action-menu-section>
          <a-action-menu-section>
            <a-action-menu-item tag="a" href="#">
              <ArchiveIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
              Archive
            </a-action-menu-item>
            <a-action-menu-item tag="a" href="#">
              <ArrowCircleRightIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
              Move
            </a-action-menu-item>
            <a-action-menu-item tag="a" href="#">
              <UserAddIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
              Share
            </a-action-menu-item>
          </a-action-menu-section>
          <a-action-menu-section>
            <a-action-menu-item tag="a" href="#">
              <HeartIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
              Add to favorites
            </a-action-menu-item>
            <a-action-menu-item tag="a" href="#">
              <TrashIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
              Delete
            </a-action-menu-item>
          </a-action-menu-section>
        </template>
      </a-action-menu>
    </div>`,
})

export const Basic = Template.bind({})
Basic.parameters = {
  docs: {
    source: {
      code: `<a-action-menu>
  Click me to open menu
  <template #items>
    <a-action-menu-section>
      <a-action-menu-item tag="a" href="#">Option 1</a-action-menu-item>
      <a-action-menu-item tag="a" href="#">Option 2</a-action-menu-item>
      <a-action-menu-item tag="a" href="#">Option 3</a-action-menu-item>
    </a-action-menu-section>
  </template>
</a-action-menu>`,
    },
  },
}

export const WithSections = TemplateWithSections.bind({})
WithSections.parameters = {
  docs: {
    description: {
      story: '`a-action-menu-item` can also be divided into multiple different sections.',
    },
    source: {
      code: `<a-action-menu>
  Action menu with sections (click me)
  <template #items>
    <a-action-menu-section>
      <a-action-menu-item tag="a" href="#">Option 1</a-action-menu-item>
      <a-action-menu-item tag="a" href="#">Option 2</a-action-menu-item>
      <a-action-menu-item tag="a" href="#">Option 3</a-action-menu-item>
    </a-action-menu-section>
    <a-action-menu-section>
      <a-action-menu-item tag="a" href="#">Option 4</a-action-menu-item>
      <a-action-menu-item tag="a" href="#">Option 5</a-action-menu-item>
      <a-action-menu-item tag="a" href="#">Option 6</a-action-menu-item>
    </a-action-menu-section>
  </template>
</a-action-menu>`,
    },
  },
}

export const WithSectionAndIcons = TemplateWithSectionsAndIcons.bind({})
WithSectionAndIcons.parameters = {
  docs: {
    description: {
      story: '`a-action-menu-item` may also contain icons.',
    },
    source: {
      code: `<a-action-menu v-bind="args">
  Action menu with sections and icons (click me)
  <template #items>
    <a-action-menu-section>
      <a-action-menu-item tag="a" href="#">
        <PencilIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
        Edit
      </a-action-menu-item>
      <a-action-menu-item tag="a" href="#">
        <DuplicateIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
        Duplicate
      </a-action-menu-item>
    </a-action-menu-section>
    <a-action-menu-section>
      <a-action-menu-item tag="a" href="#">
        <ArchiveIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
        Archive
      </a-action-menu-item>
      <a-action-menu-item tag="a" href="#">
        <ArrowCircleRightIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
        Move
      </a-action-menu-item>
      <a-action-menu-item tag="a" href="#">
        <UserAddIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
        Share
      </a-action-menu-item>
    </a-action-menu-section>
    <a-action-menu-section>
      <a-action-menu-item tag="a" href="#">
        <HeartIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
        Add to favorites
      </a-action-menu-item>
      <a-action-menu-item tag="a" href="#">
        <TrashIcon class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
        Delete
      </a-action-menu-item>
    </a-action-menu-section>
  </template>
</a-action-menu>`,
    },
  },
}

import SampleComponent from './SampleComponent.vue';

export default {
  title: 'Button/SampleComponent',
  component: SampleComponent
}

const Template = (args: any) => ({
  components: { SampleComponent },
  setup() {
    return {args}
  },
  template: '<SampleComponent />'
})

export const Primary = Template.bind({})

// @ts-ignore
Primary.args = {
  label: 'Button'
}
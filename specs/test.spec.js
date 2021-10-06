import { mount, shallowMount } from '@vue/test-utils'
import List from '@/list'
import TestComponent from '@/test'

test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    // set props for component
    propsData: {
      // value: 'test'
      value: 'vue-jest'
    }
  })
  // is result html equal to snapshot specs/__snapshots__/test.spec.js.snap
  expect(wrapper.html()).toMatchSnapshot()
})

// npm run test specs/test/spec/js        -- run the test
// npm run -- -u specs/test/spec/js       -- just update the snapshot



test('ListComponent Shallow', () => {
  console.log(mount(List).html())
  console.log(shallowMount(List).html())
})

/*

mount also runs nested components

<div>
  <ul>
    <li><strong>Iron Man</strong></li>
    <li><strong>Avengers</strong></li>
    <li><strong>Infitinity War</strong></li>
  </ul>
</div>


shallowMount runs only the component, no childs

<div>
  <ul>
    <listitem-stub movie="Iron Man"></listitem-stub>
    <listitem-stub movie="Avengers"></listitem-stub>
    <listitem-stub movie="Infitinity War"></listitem-stub>
  </ul>
</div>
*/
import { mount, shallowMount } from '@vue/test-utils'
import List from '@/list'
import TestComponent from '@/test'
import Vue from 'vue'



test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    // set props for component
    propsData: {
      // value: 'test'
      value: 'vue-jest'
    }
  })
  // is result html equal to snapshot specs/__snapshots__/test.spec.js.snap
  expect(wrapper).toMatchSnapshot()
})

// npm run test specs/test                      -- run the test
// npm run test -- -u specs/test                -- just update the snapshot



test('ListComponent Shallow', () => {
  console.log(mount(List))
  console.log(shallowMount(List))
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



test('ListComponent', async () => {
  const wrapper = mount(List)
  // get data() value from component
  const movies = wrapper.vm.marvelMovies

  // set data() for component
  wrapper.setData({
    marvelMovies: [
      ...movies,
      'Endgame'
    ]
  })

  // render the component
  await Vue.nextTick()

  expect(wrapper).toMatchSnapshot()
})

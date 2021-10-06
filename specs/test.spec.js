import { mount } from '@vue/test-utils'
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

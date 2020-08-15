import { mount } from '@vue/test-utils'

import { AppHeader } from '@/components'

const product = {
  id: 1,
  name: 'Şampuan',
  price: '13',
  currency: 'TRY',
  image:
    'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321'
}

describe('Testing Cart Badge', () => {
  it('should be cart badge is 1', () => {
    const wrapper = mount(AppHeader, {
      computed: {
        list() {
          return [product]
        }
      }
    })
    const badge = wrapper.find('span')
    expect(badge.attributes('data-count')).toContain('1')
  })
})

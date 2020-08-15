import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import { Card } from '@/components/'
import Store from '../../src/store'
import Basket from '../../src/store/basket'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({ ...Store, modules: { basket: Basket } })

const product = {
  id: 1,
  name: 'Şampuan',
  price: '13',
  currency: 'TRY',
  image:
    'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321'
}

describe('Testing Store Actions', () => {
  it('call store actions "addToBasket", and cart count should be 1', () => {
    store.dispatch('basket/addToBasket', product)
    expect(store.state.basket.list.length).toBe(1)
  })

  it('call store actions "removeFromBasket", and cart count should be 0', () => {
    store.dispatch('basket/removeFromBasket', product)
    expect(store.state.basket.list.length).toBe(0)
  })

  it('calls store action "resetBasket"', () => {
    store.dispatch('basket/resetBasket')
    expect(store.state.basket.list.length).toBe(0)
  })
})

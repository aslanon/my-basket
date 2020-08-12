import Vue from 'vue'

export const getListings = () =>
  Vue.$client.get('https://nonchalant-fang.glitch.me/listing')

/**
 * @param {Array} orderList
 * orderList e.g. [{"id":1,"amount":3}]
 */
export const submitOrder = orderList =>
  Vue.$client.post('https://nonchalant-fang.glitch.me/order', orderList)

<template>
  <div class="wrapper">
    <h5>MY CARD ({{ list.length }})</h5>
    <hr />
    <div class="page-order">
      <div class="grid grid__column  --c2">
        <card
          v-for="(product, index) in list"
          :key="index + '-card'"
          :item="product"
        ></card>
      </div>
      <div class="grid grid__row">
        <h2>🧾 Payment</h2>
        <hr />
        <h1>{{ totalPayment }} {{ list ? list[0].currency : '' }}</h1>
        <div class="grid grid__column  --c2 --col-gap-l">
          <button
            @click="handleClickContinueShopping()"
            class="button --outline"
          >
            Continue Shopping
          </button>
          <button class="button__warn">
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Card } from '@/components'

export default {
  name: 'Basket',
  computed: {
    ...mapState('basket', ['list']),
    totalPayment() {
      return this.list
        .map(a => parseFloat(a.price))
        .reduce((a, b) => a + b)
        .toFixed(2)
    }
  },
  methods: {
    handleClickContinueShopping() {
      this.$router.go(-1)
    }
  }
}
</script>

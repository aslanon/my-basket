<template>
  <div class="wrapper">
    <span v-if="list.length">
      <h5>MY CARD ({{ list.length }})</h5>
      <hr />
    </span>
    <div class="page-order">
      <div class="grid grid__column  --c1">
        <card
          class="card-order"
          v-for="(product, index) in list"
          @onChange="handleChangeBasketItem"
          :key="index + '-card'"
          :item="product"
        ></card>
      </div>
      <div class="grid grid__row">
        <h2>🧾 Payment</h2>
        <hr />
        <h1 v-if="list.length">
          {{ totalPayment }} {{ list ? list[0].currency : '' }}
        </h1>
        <div class="grid grid__column  --c2 --col-gap-l">
          <button
            @click="handleClickContinueShopping()"
            class="button --outline"
          >
            Continue Shopping
          </button>
          <button
            @click="handleClickPayment()"
            v-if="list.length"
            class="button__warn"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Card } from '@/components'
import { submitOrder } from '@/services/api'

export default {
  name: 'Basket',
  computed: {
    ...mapState('basket', ['list']),
    totalPayment() {
      return this.list
        .map(a => parseFloat(a.price * a.amount))
        .reduce((a, b) => a + b)
        .toFixed(2)
    }
  },
  data() {
    return {
      isSubmitting: false
    }
  },
  methods: {
    ...mapActions({
      resetBasket: 'basket/resetBasket',
      addToBasket: 'basket/addToBasket'
    }),
    handleClickContinueShopping() {
      this.$router.go(-1)
    },
    async handleClickPayment() {
      let payload = [...this.list].map(p => ({
        id: p.id,
        amount: p.amount || 1
      }))

      this.isSubmitting = true

      try {
        await submitOrder(payload)
        this.resetBasket()
        this.$router.push({ name: 'Main' })
      } catch (error) {
        // errror
      }

      this.isSubmitting = false
    },
    handleChangeBasketItem(data) {
      this.addToBasket(data)
    }
  }
}
</script>

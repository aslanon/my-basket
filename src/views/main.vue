<template>
  <div class="grid grid__column">
    <card
      v-for="(product, index) in products"
      :key="index + '-card'"
      :item="product"
      :loading="isLoading"
    ></card>
  </div>
</template>

<script>
import { getListings } from '@/services/api'
import { Card } from '@/components'

export default {
  name: 'Main',
  data() {
    return {
      isLoading: true,
      products: Array(9).fill(1) // for dummay image
    }
  },
  methods: {
    async getProducts() {
      try {
        this.isLoading = true
        let { data } = await getListings()
        if (data)
          this.products = [...data].map(p => ({
            ...p,
            amount: 1
          }))
      } catch (error) {
        // console.log(error)
      }
      this.isLoading = false
    }
  },
  created() {
    this.getProducts()
  }
}
</script>

<template>
  <div class="grid grid__column">
    <card></card>
  </div>
</template>

<script>
import { getListings } from '@/services/api'
import { Card } from '@/components'

export default {
  name: 'Main',
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    async getProducts() {
      try {
        this.isLoading = true
        let { data } = await getListings()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
      this.isLoading = false
    }
  },
  created() {
    this.getProducts()
  }
}
</script>

<template>
  <div class="card">
    <div v-if="loading" class="card__dummy">
      📦
    </div>
    <template v-if="!loading">
      <button
        v-if="routeName == 'Basket'"
        @click="removeItemFromCard()"
        class="card__remove button --text"
      >
        Remove
      </button>
      <img :src="item.image" :alt="item.name" class="card__image" />
      <p class="card__title">
        {{ item.name }}
      </p>
      <span class="card__footer">
        <span class="card__footer__text">
          <h2>
            {{ (item.price * amount).toFixed(2) }}
            <span>{{ item.currency }}</span>
          </h2>
        </span>
        <button
          v-if="routeName == 'Main'"
          @click="handleClickAddBasket()"
          class="button__warn"
          id="add-to-basket"
        >
          ADD BASKET
        </button>

        <span v-if="routeName == 'Basket'" class="flex flex__row">
          <button
            @click="updateAmount(-1)"
            :disabled="amount == 1"
            class="button --outline"
          >
            -
          </button>
          <input
            type="number"
            value="1"
            min="0"
            step="1"
            v-model="amount"
            readonly
          />
          <button @click="updateAmount(1)" class="button --outline">+</button>
        </span>
      </span>
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Card',
  props: {
    item: {
      type: [Object, Number],
      default: () => ({})
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    routeName() {
      if (this.$route) return this.$route.name
      return 'Main'
    }
  },
  data() {
    return {
      amount: this.item.amount || 1
    }
  },
  methods: {
    ...mapActions({
      addToBasket: 'basket/addToBasket'
    }),
    handleClickAddBasket() {
      this.$notify({
        title: '👋',
        text: 'Product added to cart.'
      })
      this.addToBasket(this.item)
    },
    handleInputAmount() {
      this.$emit('onChange', { ...this.item, amount: this.amount })
    },
    updateAmount(value) {
      this.amount += value
      this.handleInputAmount()
    },
    removeItemFromCard() {
      this.$emit('onRemove', this.item)
    }
  }
}
</script>

<style></style>

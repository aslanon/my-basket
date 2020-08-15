<template>
  <div class="card">
    <div v-if="loading" class="card__dummy">
      📦
    </div>
    <template v-if="!loading">
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
        >
          ADD BASKET
        </button>

        <span class="flex flex__row">
          <button>-</button>
          <input
            v-if="routeName == 'Basket'"
            @input="handleInputAmount"
            type="number"
            value="1"
            min="0"
            step="1"
            v-model="amount"
          />
          <button>+</button>
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
      return this.$route.name
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
      this.addToBasket(this.item)
    },
    handleInputAmount(e) {
      this.$emit('onChange', { ...this.item, amount: this.amount })
    }
  }
}
</script>

<style></style>

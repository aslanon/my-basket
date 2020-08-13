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
            {{ item.price }}
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

        <input
          v-if="routeName == 'Basket'"
          @input="handleInputAmount"
          type="number"
          value="1"
          min="0"
          step="1"
        />
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
  methods: {
    ...mapActions({
      addBasket: 'basket/addBasket'
    }),
    handleClickAddBasket() {
      this.addBasket(this.item)
    },
    handleInputAmount(e) {
      console.log(e)
    }
  }
}
</script>

<style></style>

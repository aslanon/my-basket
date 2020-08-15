<template>
  <nav>
    <h1 @click="routerPush('Main')" class="logo">
      {{ appName }}
    </h1>
    <div class="flex center">
      <span @click="routerPush('Basket')" class="nav__item flex__item">
        🧺 Cart {{ list.length ? `(${list.length})` : '' }}
      </span>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import { APP_NAME } from '@/constants'

export default {
  name: 'AppHeader',
  computed: {
    ...mapState('basket', ['list'])
  },
  data() {
    return {
      appName: APP_NAME
    }
  },
  methods: {
    routerPush(name) {
      this.$router.push({ name })
    }
  }
}
</script>

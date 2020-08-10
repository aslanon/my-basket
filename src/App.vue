<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/stylesheet/style';
</style>

<script>
export default {
  mounted() {
    this.$store.dispatch('onur')
  }
}
</script>

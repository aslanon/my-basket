<template>
  <div id="app" class="app-layout">
    <app-header></app-header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { AppHeader } from '@/components'

export default {
  name: 'App'
}
</script>

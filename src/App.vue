<template>
  <div id="app" class="app-layout">
    <notifications classes="auth-notification" position="bottom right" />
    <app-header></app-header>
    <router-view />
  </div>
</template>

<script>
import { AppHeader } from '@/components'

export default {
  name: 'App'
}
</script>

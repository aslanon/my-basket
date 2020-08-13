<template>
  <nav>
    <h1>
      {{ appName }}
    </h1>
    <span>
      <input placeholder="Search..." type="text" />
    </span>
    <div class="flex center">
      <span class="nav__item flex__item">
        🧺 Cart
      </span>
    </div>
  </nav>
</template>

<script>
import { APP_NAME } from '@/constants'

export default {
  name: 'AppHeader',
  data() {
    return {
      appName: APP_NAME
    }
  }
}
</script>

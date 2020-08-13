<template>
  <div class="card">
    {{ item.name }}
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      default: () => ({
        currency: 'TRY',
        id: 3,
        image:
          'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdis-fircasi.jpeg?v=1561027551798',
        name: 'Diş Fırçası',
        price: '19.95'
      })
    }
  }
}
</script>

<style></style>

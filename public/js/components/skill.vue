<template>
  <div class="c-item">
    <h4 class="c-item__title">{{ item.label }}</h4>
    <p class="c-item__description">{{ item.description }}</p>
  </div>
</template>

<script>
  module.exports = {
    props: ['item'],
  }
</script>

<style scoped>
</style>
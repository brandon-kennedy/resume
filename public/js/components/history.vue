<template>
  <div class="c-item">
    <h2 class="c-item__title">{{ item.title }}, {{ item.employer }}</h2>
    <h3 class="c-item__subtitle">{{ item.start }} - {{ item.end }}</h3>
    <p class="c-itme__description">{{ item.description }}</p>
  </div>
</template>

<script>
  module.exports = {
    props: ['item'],
  }
</script>

<style scoped>  
</style>
<template>
  <li class="c-list__item">
    <a :href="item.href" target="_blank">{{ item.label }}</a>
  </li>
</template>

<script>
  module.exports = {
    props: ['item'],
  }
</script>

<style scoped>
</style>

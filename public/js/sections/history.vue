<template>
  <div class="c-history">
    <h2 class="c-heading">
      <span>Employment History</span>
    </h2>

    <history-item
      name="history-item"
      v-for="history_item in history"
      v-bind:item="history_item"
    />
  </div>
</template>

<script>
  module.exports = {
    props: ['history'],
    components: {
      'history-item': httpVueLoader('../components/history.vue'),
    },
  }
</script>

<style scoped>  
</style>
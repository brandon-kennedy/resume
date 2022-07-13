<template>
  <div class="c-example">
    <h4 class="c-heading c-heading--sub">
      <span>{{ item.title }}</span>
    </h4>
    
    <ul class="c-list c-list--inline">
      <example
        name="example"
        v-for="link in item.links"
        v-bind:item="link"
      />
    </ul>
  </div>
</template>

<script>
  module.exports = {
    props: ['item'],
    components: {
      'example': httpVueLoader('./example.vue'),
    },
  }
</script>

<style scoped>
  .c-example + .c-example {
    margin-top: 2.7rem;
  }
</style>
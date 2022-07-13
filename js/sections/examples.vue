<template>
  <div class="c-examples">
    <h2 class="c-heading">
      <span>Work Examples</span>
    </h2>

    <example-group
      v-for="group in examples"
      v-bind:item="group"
    />
  </div>
</template>

<script>
  module.exports = {
    props: ['examples'],
    components: {
      'example-group': httpVueLoader('../components/example-group.vue'),
    },
  }
</script>

<style scoped>
  .c-example + .c-example {
    margin-top: 2.7rem;
  }
</style>
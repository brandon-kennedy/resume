<template>
  <div class="c-skills">
    <h2 class="c-heading">
      <span>Skills</span>
    </h2>

    <skill
      name="skill"
      v-for="item in skills"
      v-bind:item="item"
    />
  </div>
</template>

<script>
  module.exports = {
    props: ['skills'],
    components: {
      'skill': httpVueLoader('../components/skill.vue'),
    },
  }
</script>

<style scoped>
  .c-example + .c-example {
    margin-top: 2.7rem;
  }
</style>
<template>
  <div class="c-personal">
    <h2 class="c-heading">
      <span>Details</span>
    </h2>

    <p>{{ item.location }}</p>
    
    <p>
      <a class="c-email"
        :href="`mailto:${ item.email }?subject=We Love You And Want to Give You Money!`"
      >
        {{ item.email }}
      </a>
    </p>
    
    <p>
      <a class="c-phone"
        :href="`tel:${ item.phone.raw }`"
      >
        {{ item.phone.display }}
      </a>
    </p>
  </div>
</template>

<script>
  module.exports = {
    props: ['item'],
  }
</script>

<style scoped>
</style>

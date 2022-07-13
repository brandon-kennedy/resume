<template>
  <div class="c-header">
    <div class="c-header__image">
      <img class="c-image" :src="item.image"/>
    </div>
    <div class="c-header__content t-primary">
      <h1 class="c-header__name">{{ item.name }}</h1>
    </div>
  </div>
</template>

<script>
  module.exports = {
    props: ['item'],
  }
</script>

<style scoped>
  .c-header {
    display: grid;
    grid-gap: 0.3375rem;
    grid-template-areas: 'header-image, header-content';
  }
  @media screen and (min-width: 0px) {
    .c-header {
      grid-template-columns: 1fr 2fr;
    }
  }
  @media screen and (min-width: 576px) {
    .c-header {
      grid-template-columns: 1fr 3fr;
    }
  }
  @media screen and (min-width: 992px) {
    .c-header {
      grid-template-columns: 1fr 4fr;
    }
  }
  
  .c-header__image {
    grid-area: 'header-image';
  }
  
  .c-header__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-area: 'header-content';
    margin-top: 0;
    padding: 1.35rem;
  }
  
  .c-header__name {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
  }
  @media screen and (min-width: 0px) {
    .c-header__name {
      font-size: 7vw;
      max-width: 7em;
    }
    .c-header__title {
      font-size: 3vw;
    }
  }
  @media screen and (min-width: 576px) {
    .c-header__title {
      font-size: 0.85rem;
    }
  }
  @media screen and (min-width: 768px) {
    .c-header__name {
      font-size: 3rem;
    }
  }
  
  .c-header__title {
    font-weight: 600;
    margin-top: 0.3375em;
  }
</style>
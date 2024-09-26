<template>
  <div class="catalog__wrapper">
    <p class="catalog__title">{{ title }}</p>
    <AImage src="url"></AImage>
    <p>{{ name }}</p>
    <p>{{ brand }}</p>
    <p>{{ price }}</p>
  </div>
</template>
  
<script>
  export default {
    name: 'ACatalog',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
  
<style scoped>
</style>
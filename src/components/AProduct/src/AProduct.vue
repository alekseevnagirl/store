<template>
    <div class="product__wrapper">
      <AImage :src="productData.url"></AImage>
      <p>{{ productData.title }}</p>
      <p>{{ productData.brand }}</p>
      <p>{{ productData.regular_price.value }}</p>
    </div>
  </template>
  
<script>
  export default {
    name: 'AProduct',
    props: {
      productData: {
        type: Object,
        default: {}
      }
    }
  }
</script>
  
<style scoped>
.product__wrapper {
  display: block;
}
</style>
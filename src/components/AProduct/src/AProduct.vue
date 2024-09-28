<template>
    <div class="product__wrapper">
      <AImage :src="productData.image" class="product__image"></AImage>
      <p>{{ productData.title }}</p>
      <p>{{ productData.brandName }}</p>
      <p>{{ currencySign(productData.regular_price.currency) }} {{ productData.regular_price.value }}</p>
    </div>
  </template>
  
<script>
  export default {
    name: 'AProduct',
    props: {
      productData: {
        type: Object,
        default: {}
      },
      brandData: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
      }
    },
    methods: {
      currencySign(currency) {
        if (currency && currency === 'USD') {
          return '$';
        }
        else {
          return '';
        }
      }
    }
  }
</script>
  
<style scoped>
.product__wrapper {
  display: block;
}
.product__image {
  /*border: 1px solid black;*/
}
</style>
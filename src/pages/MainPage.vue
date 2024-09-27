<template>
  <div class="mainPage__wrapper">
    <ACatalog title="Catalog" :catalogData="products"></ACatalog>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MainPage',
  data() {
    return {
      products: [],
      brands: []
    }
  },
  mounted() {
    axios.get('products.json')
    .then(response => {
      this.products = response.data;
      console.log('products', this.products);
    })
    .catch(error => {
      console.error(error);
    });

    axios.get('brands.json')
    .then(response => {
      this.brands = response.data;
      console.log('brands', this.brands);
    })
    .catch(error => {
      console.error(error);
    });

  }
}
</script>

<style>
.mainPage__wrapper {
  padding: 20px 5%;
}</style>
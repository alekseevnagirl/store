<template>
  <div class="mainPage__wrapper">
    <ACatalog title="Catalog" 
      :productsData="products" 
      :brandsData="brands">
    </ACatalog>
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
    })
    .catch(error => {
      console.error(error);
    });

    axios.get('brands.json')
    .then(response => {
      this.brands = response.data;
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
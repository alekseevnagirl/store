<template>
  <div class="mainPage__wrapper">
    <ACatalog title="Catalog" 
      :productsData="products" 
      :filtersData="filters">
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
      brands: [],
      filters: []
    }
  },
  mounted() {
    axios.get('brands.json')
    .then(response => {
      this.brands = response.data;
      this.filters = [
        { defaultFilter: 'All Brands', data: this.brands }
      ];
    })
    .catch(error => {
      console.error(error);
    });

    axios.get('products.json')
    .then(response => {
      this.products = response.data;
      this.products.forEach((product) => {
        this.brands.forEach((brand) => {
          if (product.brand === brand.id)
            product.brandName = brand.title;
        })
      })
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
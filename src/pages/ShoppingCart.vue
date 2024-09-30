<template>
  <div class="cartPage__wrapper">
    <ACart title="Shopping Cart" :productsData="productsData"></ACart>
  </div>
</template>

<script>
  import store from '../store';
  export default {
    data() {
      return {
        productsData: []
      }
    },
    mounted() {
      this.productsData = store.state.cart;
    }
  }
</script>

<style>
.cartPage__wrapper {
  padding: 20px 5%;
}
</style>

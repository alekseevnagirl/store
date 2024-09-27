<template>
  <div class="catalog__wrapper">
    <p class="catalog__title">{{ title }}</p>

    <div class="catalog__content">
      <div v-for="(item, index) in catalogData" 
        :key="index">
        <AProduct :productData="item"></AProduct>
      </div>
    </div>
  </div>
</template>
  
<script>
import AProduct from '@/components/AProduct/src/AProduct.vue';

  export default {
    name: 'ACatalog',
    props: {
      title: {
        type: String,
        default: ''
      },
      catalogData: {
        type: Array,
        default: []
      }
    }
  }
</script>
  
<style scoped>
.catalog__wrapper {
  display: block;
}
.catalog__content {
  display: flex;
}
</style>
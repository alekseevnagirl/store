<template>
  <div class="catalog__wrapper">
    <p class="catalog__title">{{ title }}</p>

    <div class="catalog__content">
      <div class="catalog__filters">
        gdjohlfkxdko
      </div>

      <div class="catalog__products">
        <div v-for="(item, index) in catalogData" 
          :key="index">
          <AProduct :productData="item"></AProduct>
        </div>
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
  display: flex
}
.catalog__filters {
  width: 30%;
}
.catalog__products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
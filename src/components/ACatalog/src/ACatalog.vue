<template>
  <div class="catalog__wrapper">

    <div class="catalog__content">
      <div class="catalog__filters">
        <p>All Brands</p>
      </div>

      <div>
        <p class="catalog__title">{{ title }}</p>

        <div class="catalog__products">
          <div v-for="(item, index) in productsData" 
            :key="index">
            <AProduct :productData="item" 
              :brandData="brandsData[item.brand - 1]">
            </AProduct>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'ACatalog',
    props: {
      title: {
        type: String,
        default: ''
      },
      productsData: {
        type: Array,
        default: []
      },
      brandsData: {
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
.catalog__title {
  font-size: 32px;
  margin: 0 0 12px 0;
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
  gap: 20px;
}
</style>
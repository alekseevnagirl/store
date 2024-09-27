<template>
  <div class="catalog__wrapper">

    <div class="catalog__content">
      <div v-for="(filter, filterIndex) in filtersData" 
        :key="filterIndex"
        class="catalog__filters">
        <AFilter :filterData="filter"
          @selectedFilter="selectedFilter">
        </AFilter>
      </div>

      <div class="catalog__products__wrapper">
        <p class="catalog__title">{{ title }}</p>

        <div class="catalog__products">
          <div v-for="(product, productIndex) in productsData" 
            :key="productIndex">
            <AProduct v-if="product.brand === filterId || filterId === 0"
              :productData="product">
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
      filtersData: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        filterId: 0
      }
    },
    methods: {
      selectedFilter(filterId) {
        this.filterId = filterId;
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
  display: flex;
  width: 100%;
}
.catalog__filters {
  flex: 1 1 20%;
}
.catalog__products__wrapper {
  flex: 1 1 80%;
}
.catalog__products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}
</style>
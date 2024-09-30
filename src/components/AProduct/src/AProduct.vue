<template>
    <div class="product__wrapper">
      <AImage :src="productData.image"></AImage>
      <p>{{ productData.title }}</p>
      <p>{{ productData.brandName }}</p>
      <p>{{ currencySign(productData.regular_price.currency) }}{{ productData.regular_price.value }}</p>

      <div v-if="productData.configurable_options !== undefined">
        <div v-for="(option, optionIndex) in productData.configurable_options">

          <div v-if="option.attribute_code === 'color'">
            <div class="product__colors">
              <div v-for="(item, itemIndex) in option.values">
                <div :style="{ backgroundColor: item.value }" class="product__color"></div>
              </div>
            </div>
            
          </div>

          <div v-if="option.attribute_code === 'size'">

          </div>

        </div>
      </div>
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
.product__colors {
  display: flex;
  gap: 20px;
}
.product__color {
  width: 30px; 
  height: 20px;
}
</style>
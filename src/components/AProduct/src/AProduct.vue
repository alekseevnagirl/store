<template>
    <div class="product__wrapper">
      <AImage :src="productData.image"></AImage>
      <p>{{ productData.title }}</p>
      <p>{{ productData.brandName }}</p>
      <p>{{ currencySign(productData.regular_price.currency) }}{{ productData.regular_price.value }}</p>

      <div v-if="productData.configurable_options !== undefined">
        <div v-for="(option, optionIndex) in productData.configurable_options">

          <div v-if="option.attribute_code === 'color'">
            <div class="product__options">
              <div v-for="(item, itemIndex) in option.values">
                <div :style="{ backgroundColor: item.value }" class="product__option"></div>
              </div>
            </div>
          </div>

          <div v-if="option.attribute_code === 'size'">
            <div class="product__options">
              <div v-for="(item, itemIndex) in option.values">
                <div class="product__option">{{ item.label }}</div>
              </div>
            </div>
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
.product__options {
  display: flex;
  gap: 20px;
  margin: 5px;
}
.product__option {
  width: 30px; 
  height: 20px;
  text-align: center;
  border: 2px solid #000;
}
.product__option:hover {
  border: 2px solid #ffdd00;
}
.product_option:focus {
  border: 2px solid #ffdd00;
}
</style>
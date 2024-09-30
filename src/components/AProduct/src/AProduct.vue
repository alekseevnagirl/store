<template>
    <div class="product__wrapper">
      <div v-if="productData.type === 'simple'">
        <AImage :src="productData.image"></AImage>
      </div>

      <div v-else>
        <AImage :src="selectedProductSrc(productData)"></AImage>
      </div>

      <p>{{ productData.title }}</p>
      <p>{{ productData.brandName }}</p>
      <p>{{ currencySign(productData.regular_price.currency) }}{{ productData.regular_price.value }}</p>

      <div v-if="productData.type === 'configurable'">
        <div v-for="(option, optionIndex) in productData.configurable_options">

          <div v-if="option.attribute_code === 'color'">
            <div class="product__options">
              <div v-for="(item, itemIndex) in option.values">
                <button :style="{ backgroundColor: item.value }" 
                  class="product__option"
                  @click="addColor(item)">
                </button>
              </div>
            </div>
          </div>

          <div v-if="option.attribute_code === 'size'">
            <div class="product__options">
              <div v-for="(item, itemIndex) in option.values">
                <div class="product__option">{{ setSize(item.label) }}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <AButton title="Add"
        @click="addProductToCart(productData)"
        class="product__add">
      </AButton>
    </div>
  </template>
  
<script>
  import store from '../../../store';

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
        currentColor: 0,
        currentSize: 0,
        currentColorValueIndex: ''
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
      },
      addProductToCart(product) {
        if (product.quantity === undefined) {
          product.quantity = 0;
        }
        product.quantity = product.quantity + 1;
        store.commit('addProductToCart', product);
        store.commit('removeDuplicates');
      },
      addColor(item) {
        this.currentColorValueIndex = item.value_index;
      },
      setSize(size) {
        return size;
      },
      selectedProductSrc(product) {
        if (this.currentColorValueIndex !== '') {
          let src = '';
          product.variants.forEach((variant) => {
            variant.attributes.forEach((option) => {
              if (option.value_index === this.currentColorValueIndex && option.code === 'color') {
                src = '/images' + variant.product.image;
              }
            })
          });
          return src;
        }
        else {
          let src = '/images' + product.image;
          return src;
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
.product__add {
  border: 2px solid #fff;
  width: fit-content;
}
.product__add:hover {
  cursor: pointer;
  border: 2px solid #ffdd00;
}
.product__add:focus {
  border: 2px solid #ffdd00;
}
</style>
<template>
    <div>
        <p class="cart__title">
            {{ title }}
        </p>

        <div>
          <table class="cart__table">
            <tr>
              <td class="cart__table__title"
                width="60%">
                Item
              </td>
              <td class="cart__table__title"
                width="11%">
                Price
              </td>
              <td class="cart__table__title"
                width="11%">
                Qty
              </td>
              <td class="cart__table__title"
                width="11%">
                Total
              </td>
              <td></td>
            </tr>

            <tr v-for="(product, productIndex) in productsData">
              <td>
                <p class="cart__table__product__name">
                  <AImage :src="product.image" class="cart__table__product__image"></AImage>
                  {{ product.brandName }} / {{ product.title }}
                </p>
              </td>

              <td class="cart__table__product">
                <p>
                  {{ currencySign(product.regular_price.currency) }}{{ product.regular_price.value }}
                </p>
              </td>

              <td class="cart__table__product">
                <input type="number" :value="product.quantity" min="1" step="1" @change="updateQuantity($event, product)">
              </td>

              <td class="cart__table__product">
                <p>
                  {{ currencySign(product.regular_price.currency) }}{{ parseFloat((product.regular_price.value * product.quantity).toFixed(2)) }}
                </p>
              </td>

              <td class="cart__table__product">
                <button class="cart__table__delete"
                  @click="removeProductFromCart(product)">
                  <AIcon src="trash"
                    height="20px">
                  </AIcon>
                </button>
              </td>
            </tr>
          </table>

        </div>

        <div class="cart__total">
          <p>Subtotal: {{ currency }}{{ getSubtotal(productsData) }}</p>
          <AButton title="Checkout"></AButton>
        </div>
    </div>
  </template>

  <script>
  import store from '../../../store';

  export default {
    name: 'ACart',
    props: {
        title: {
          type: String,
          default: ''
        },
        productsData: {
          type: Array,
          default: []
        }
    },
    data() {
      return {
        currency: ''
      }
    },
    methods: {
      currencySign(currency) {
        if (currency && currency === 'USD') {
          this.currency = '$';
        }
        else {
          this.currency = '';
        }
        return this.currency;
      },
      removeProductFromCart(product) {
        event.preventDefault();
        store.commit('removeProductFromCart', product);
      },
      updateQuantity(event, product) {
        product.quantity = parseInt(event.target.value);
        store.commit('updateProductInCart', product);
      },
      getSubtotal(productsData) {
        let sum = 0;
        productsData.forEach((product) => {
          sum = sum + (product.quantity * product.regular_price.value);
        })
        sum = sum.toFixed(2);
        return sum;
      }
    }
  }
  </script>
  
<style scoped>
  .cart__title {
    font-size: 32px;
    margin: 0 0 12px 0;
  }
  .cart__table {
    width: 100%;
  }
  .cart__table td {
    border-bottom: 1px solid black;
    padding: 5px;
  }
  .cart__table__title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  .cart__table__product__name {
    display: flex;
    align-items: center;
  }
  .cart__table__product {
    text-align: center;
  }
  .cart__table__product__image >>> .image {
    height: 100px;
  }
  .cart__table__delete {
    border: none;
    background: none;
  }
  .cart__table__product input {
    max-width: 40px;
  }
  .cart__total {
    display: block;
    text-align: right;
    font-weight: bold;
    font-size: 32px;
  }
</style>
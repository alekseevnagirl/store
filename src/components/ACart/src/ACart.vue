<template>
    <div>
        <p class="cart__title">
            {{ title }}
        </p>

        <div>
          <table>
            <tr>
              <td>Item</td>
              <td>Price</td>
              <td>Qty</td>
              <td>Total</td>
            </tr>

            <tr v-for="(product, productIndex) in productsData">
              <td>
                <p>
                  {{ product.brandName }}
                </p>
              </td>

              <td>
                
                <p>
                  {{ product.regular_price.value }}
                </p>
              </td>

              <td>
                <p>
                  {{ product.quantity }}
                </p>
              </td>

              <td>
                <p>
                  {{ product.regular_price.value * product.quantity }}
                </p>
              </td>
            </tr>
          </table>

        </div>
    </div>
  </template>

  <script>
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
    }
  }
  </script>
  
<style scoped>
  .cart__title {
    font-size: 32px;
    margin: 0 0 12px 0;
  }
</style>
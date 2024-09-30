import { createStore } from 'vuex'

const store = createStore({
  state: {
    cart: []
  },
  mutations: {
    addProductToCart(state, product) {
      state.cart.push(product)
    },
    removeProductFromCart(state, product) {
      state.cart = state.cart.filter(item => item !== product)
    },
    updateProductInCart(state, product) {
      const index = state.cart.findIndex(item => item.id === product.id)
      if (index !== -1) {
        state.cart[index] = product
      }
    },
    removeDuplicates(state) {
      state.cart = [...new Map(state.cart.map(item => [item.id, item])).values()]
    }
  }
})

export default store

<template>
    <div class="header__wrapper">
        <nav v-if="$route.name === 'main'"
            class="header__main">
            <router-link to="/">
                <AIcon src="logo"></AIcon>
            </router-link>
            <router-link to="/cart"
                class="header__main__icon">
                <AIcon src="cart" 
                  height="34px" >
                </AIcon>
                <span>{{ cartCount }}</span>
            </router-link>
        </nav>

        <nav v-else
            class="header__cart">
            <router-link to="/">
                <AIcon src="logo"></AIcon>
            </router-link>
        </nav>
    </div>
  </template>
  
  <script>
  import store from '../../../store';
  export default {
    name: 'Header',
    props: {
    },
    computed: {
      cartCount() {
        let count = 0;
        store.state.cart.forEach((product) => {
          count = count + product.quantity;
        })
        return count;
      }
    }
  }
  </script>
  
<style scoped>
  .header__wrapper {
    padding: 20px 5%;
  }
  .header__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__cart {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header__main__icon {
    position: relative;
    padding: 5px 15px 0 0;
  }
  .header__main__icon span {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    color: #000;
    background-color: #fff;
    border-radius: 20px;
    padding: 3px;
    border: 2px solid #000;
    font-weight: bold;
    min-width: 15px;
    text-align: center;
  }
</style>
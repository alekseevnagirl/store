<template>
    <div>
        <div v-if="pageType === 'main'">
            <nav>
                <router-link to="/">
                    Home
                </router-link> |
                <router-link to="/cart">
                    ShoppingCart
                </router-link>
            </nav>
        </div>

        <div v-else>
            <nav>
                <router-link to="/">
                    <AIcon src="logo"></AIcon>
                </router-link>
            </nav>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    props: {
    }
  }
  </script>
  
  <style scoped>
  </style>
<template>
    <div class="header__wrapper">
        <nav v-if="$route.name === 'main'"
            class="header__main">
            <router-link to="/">
                <AIcon src="logo"></AIcon>
            </router-link>
            <router-link to="/cart">
                <AIcon src="cart" height="34px"></AIcon>
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
  export default {
    name: 'Header',
    props: {
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
</style>
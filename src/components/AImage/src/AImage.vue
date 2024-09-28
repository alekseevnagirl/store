<template>
    <div class="image__wrapper">
      <img :src="src" class="image"/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AImage',
    props: {
      src: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
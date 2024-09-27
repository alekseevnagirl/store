<template>
    <div class="image__wrapper">
      <img :src="src" class="image" :width="width"/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AImage',
    props: {
      src: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: 'auto'
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
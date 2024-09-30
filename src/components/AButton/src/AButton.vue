<template>
    <div>
      <button class="button">
          {{ title }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AButton',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  .button {
    background: none;
    font-size: 18px;
    padding: 10px 30px;
  }
  </style>
<template>
    <div>
      <button>
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
  </style>
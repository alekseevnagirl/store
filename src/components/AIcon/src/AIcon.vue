<template>
    <div>
        <a :href="href">
            <img :src="fullSrc"/>
        </a>
    </div>
  </template>
    
  <script>
    export default {
      name: 'AIcon',
      props: {
        href: {
            type: String,
            default: ''
        },
        src: {
            type: String,
            default: ''
        }
      },
      data() {
        return {
            fullSrc: ''
        }
      },
      mounted() {
        this.fullSrc = '~@/assets/images/icons/' + this.src + '.png';
      }
    }
  </script>
    
  <style scoped>
  </style>
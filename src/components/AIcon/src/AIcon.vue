<template>
    <div>
        <a :href="href">
            <img :src="fullSrc" :height="height"/>
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
        },
        height: {
          type: String,
          default: 'auto'
        }
      },
      data() {
        return {
            fullSrc: ''
        }
      },
      mounted() {
        this.fullSrc = 'images/icons/' + this.src + '.png';
      }
    }
  </script>
    
  <style scoped>
  </style>
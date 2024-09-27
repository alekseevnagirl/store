<template>
  <div>
    <button class="filter__button"
      @click="filterOut(0)">
      {{ filterData.defaultFilter }}
    </button>
    <div v-for="(data, dataIndex) in filterData.data"
      key="dataIndex">
      <button class="filter__button"
        @click="filterOut(data.id)">
        {{ data.title }}
      </button>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'AFilter',
    props: {
      filterData: {
        type: Object,
        default: {}
      }
    },
    methods: {
      filterOut(id) {
        this.$emit('selectedFilter', id);
      }
    }
  }
</script>
  
<style scoped>
  .filter__title {
    font-size: 24px;
    margin: 0 0 20px 0;
  }
  .filter__button {
    border: none;
    background: none;
    font-size: 18px;
    padding: 0;
    margin: 0 0 10px 0;
  }
  .filter__button:hover {
    cursor: pointer;
  }
  .filter__button:focus {
    text-decoration: underline;
  }
</style>
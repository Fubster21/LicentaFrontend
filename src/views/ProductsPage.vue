<template>
    <div>
      <ProductTable />
    </div>
  </template>
  
  <script>
  import ProductTable from '../components/ProductTable.vue';
  
  export default {
    name: 'ProductsPage',
    components: {
      ProductTable,
    },
  };
  </script>
  
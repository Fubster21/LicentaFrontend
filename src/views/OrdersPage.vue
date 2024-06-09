<template>
    <div>
      <OrderTable />
    </div>
  </template>
  
  <script>
  import OrderTable from '../components/OrderTable.vue';
  
  export default {
    name: 'OrdersPage',
    components: {
      OrderTable,
    },
  };
  </script>
  
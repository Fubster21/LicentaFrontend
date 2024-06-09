<template>
    <div>
      <h2>Order List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>User</th>
            <!-- Add other order fields here -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.date }}</td>
            <td>{{ order.status }}</td>
            <td>{{ order.user.username }}</td>
            <!-- Add other order fields here -->
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import orderService from '../services/orderService';
  
  export default {
    data() {
      return {
        orders: [],
      };
    },
    async created() {
      try {
        const response = await orderService.getAllOrders();
        this.orders = response.data;
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    },
  };
  </script>
  
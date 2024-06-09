<template>
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <!-- Add other product fields here -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stockQuantity }}</td>
            <!-- Add other product fields here -->
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import productService from '../services/productService';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    async created() {
      try {
        const response = await productService.getAllProducts();
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  };
  </script>
  
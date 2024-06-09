<template>
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <!-- Add other user fields here -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <!-- Add other user fields here -->
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import userService from '../services/userService';
  
  export default {
    data() {
      return {
        users: [],
      };
    },
    async created() {
      try {
        const response = await userService.getAllUsers();
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  };
  </script>
  
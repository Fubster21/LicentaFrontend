<template>
  <header>
    <h1>Welcome to My Project</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
        <li><router-link to="/orders">Orders</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderSite',
};
</script>

<style>
header {
  text-align: center;
  padding: 1em 0;
  background-color: #3eaf7c;
  color: white;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 1em;
}
</style>

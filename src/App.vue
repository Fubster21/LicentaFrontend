<template>
  <div id="app">
    <HeaderSite />
    <router-view />
    <FooterSite />
  </div>
</template>

<script>
import HeaderSite from './components/HeaderSite.vue';
import FooterSite from './components/FooterSite.vue';

export default {
  components: {
    HeaderSite,
    FooterSite,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

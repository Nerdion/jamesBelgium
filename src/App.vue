<template>
  <div id="app">
    <mainNavbar/>
    <router-view/>
  </div>
</template>

<script>

import mainNavbar from './components/Navbar.vue'
export default {
  name: "App",
  components: {mainNavbar},
};

</script>

<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.css");
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
</style>

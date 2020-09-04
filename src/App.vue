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

<style lang="scss">
@import url("../node_modules/bootstrap/dist/css/bootstrap.css");
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.authBox {
    padding-top:5vh;
    position:absolute;
    height: 80%;
}

.authBox > div.row > div {
    border: 1px black solid;
    border-radius : 5px;
    box-sizing: border-box;
    padding:2rem;
    background-color:white;
}
</style>

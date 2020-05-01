<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img alt="Vue logo" src="@/assets/logo.png" />
      </router-link>
      <br />
      <router-link to="/Map">Map</router-link>|
      <router-link to="/suppliers">Liste</router-link>|
      <router-link to="/supplier">fournisseurs</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created: function() {
    this.$store.dispatch('getSuppliers');
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

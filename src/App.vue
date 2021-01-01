<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>  |
      <router-link to="/about">About</router-link> |
      <router-link to="/skillset" >Skillset</router-link> |
      <router-link to="portfolio">Portfolio</router-link>
      <!-- <router-link to="/contact">Contact</router-link> -->
    </div>
    <hr id="hr">
      <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-shadow: 1px 1px 2px #808080; 
}

#nav {
  padding-top: 30px;
  font-size: 1.2em;
  font-weight: bold;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#hr{
  width: 95vw;
  margin-top: 20px;
  margin-bottom: 35px;
  border: solid 1px ;
}
</style>

<script>

export default {
  name: "#app"
}
</script>
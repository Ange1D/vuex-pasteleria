<template>
  <nav>
    <router-link to="/">Pasteleria</router-link> |
    <router-link to="/pastelero">Pastelero</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: red;
}

*{
    background-color: #ffe1e4;
    text-align: center;
}

h1{
    color: red;
    text-align: center;
    font-size: 40px;
}

.btnStyle{
    color: white;
    background-color: red;
}

.inputStyle{
    background-color: white;
    color: black;
}

table, th, td {
    border: 1px solid;
    background-color: white;
    align-self: center;
  }

img{
  width: 150px;
}  
</style>

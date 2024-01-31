<template>
   <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/google">Google</router-link> |
      <router-link to="/youtube">Youtube</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/pokedex/1">Pokedex</router-link>
   </nav>
   <router-view />
</template>

<style>
body {
   background-color: #030303;
   color: #f5f5dc;
}

#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
}

nav {
   padding: 30px;
}

nav a {
   color: #ececbb;
}

nav a:hover {
   font-weight: bold;
}

nav a.router-link-exact-active {
   font-weight: bold;
   color: #42b983;
}
</style>

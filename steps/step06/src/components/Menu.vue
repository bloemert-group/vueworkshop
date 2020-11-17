<template>
  <div id="menu">
    <img width="25%" src="../assets/logo.png"><br/>
    <router-link :to="{ path: '/agenda'}" class="menu-btn">Agenda</router-link>
    <router-link :to="{ path: '/appointments'}" class="menu-btn">Appointments</router-link>
    <hr/>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style>
body {
  background-color: rgba(2, 21, 49, 0.95);
  color: #FFF;
}
#menu {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.menu-btn {
    color: white;
    margin: 7px;
    background-color: #bc9550;
    border-radius: 5px;
    padding: 7px;
}
</style>

<template>
  <header class="heading">
    <nav>
      <router-link to="home" class="logo">RayXu6</router-link>

      <ul class="nav-list">
        <li><router-link to="/myself">关于我</router-link></li>
        <li><router-link to="/sr">速通</router-link></li>
        <li><router-link to="/tas">TAS</router-link></li>
        <li><router-link to="/ld">榜单</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style>
*{
  margin: 0;
  padding: 0;
}

p{
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}
p:hover{
  opacity: 0.7;
}

.logo{
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 4px;
}

nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "system-ui",-apple-system, 'Helvetica',Arial, sans-serif;
  background: #f89df1;
  height: 6vh;
  opacity: 0.6;
}

.nav-list{
  list-style: none;
  display: flex;
}

.nav-list li{
  letter-spacing: 3px;
  margin-left: 32px;
}


.heading{
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
}

</style>
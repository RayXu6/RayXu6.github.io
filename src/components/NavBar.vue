<template>
  <header class="heading">
    <nav>
      <p class="logo">RayXu6</p>

      <ul class="nav-list">
        <li><p>主页</p></li>
        <li><p>关于我们</p></li>
        <li><p>联系我们</p></li>
        <li><p>意见</p></li>
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
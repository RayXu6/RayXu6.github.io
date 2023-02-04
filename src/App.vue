<script setup lang="ts">

import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="main">
    <NavBar></NavBar>
  </div>

</template>

<style>
  .main{
    background-image: url("./assets/background.png");
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.8;
  }
</style>

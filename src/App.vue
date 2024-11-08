<template>
  <div>
    <h3>Home page</h3>
    <hr>
    <VueCookies></VueCookies>
  </div>
</template>

<script setup lang='ts'>
import VueCookies from './components/VueCookies.vue';

</script>

<style lang='scss' scoped>
@import '/src/assets/main.scss';

div {
  padding: 20px;
  background: $bg-color;

  h3 {
    margin: 0;
  }

}
</style>

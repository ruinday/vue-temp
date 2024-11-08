<template>
  <div>
    <button @click="login">login</button>
    <p>{{ account }}</p>
    <button @click="logout">logout</button>
  </div>
</template>

<script setup lang='ts'>
import { onBeforeMount } from 'vue';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies()
let account: string

onBeforeMount(() => {
  if (cookies.get('user')) {
    account = cookies.get('user')
  }
})

const login = () => {
  cookies.set('user', 'Alan')
  location.reload()
}
const logout = () => {
  cookies.remove('user')
  location.reload()
}


</script>

<style lang='scss' scoped></style>

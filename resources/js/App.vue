<template>
  <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/create">Create</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name : "App"
}
</script>

<style scoped>
  div router-link{
    color : green;
  }
</style>
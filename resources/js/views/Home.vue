<template>
  <div>
      <ul v-for="user in users" :key="user.id">
          <li><router-link :to="{name : 'detail', params : {id : user.id}}">{{user.nama}}</router-link></li>
      </ul>
  </div>
</template>

<script>
export default {
    name : "Home",
    data() {
        return {
            users: []
        }
    },
    mounted () {
        fetch('/users')
            .then(response => response.json())
            .then(json => this.users = json)
    },
}
</script>

<style>

</style>
<template>
  <div>
      <router-link to="/create">Tambah</router-link>
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
        this.getUser()
    },
    methods: {
        async getUser() {
            let response = await fetch('/users')
            let result = await response.json()

            return this.users = result
        }
    },
}
</script>

<style>

</style>
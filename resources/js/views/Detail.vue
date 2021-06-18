<template>
    <div>
        <h1>{{result.nama}}</h1>
        <p>{{result.jabatan}}</p>
    </div>
</template>

<script>
export default {
    name : "Detail",
    data() {
        return {
            result: []
        }
    },
    mounted () {
        fetch(`/users/${this.$route.params.id}`)
            .then(response => response.json())
            .then(json => (this.result = json))
    },
}
</script>

<style>

</style>
<template>
    <div>
        <h1>{{result.nama}}</h1>
        <p>{{result.jabatan}}</p>
        <button class="btn btn-danger" @click="hapus">Delete</button>
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
    methods: {
        async hapus() {
            let q = confirm("Yakin Ingin Menghapusnya ?")

            if (q) {
                let response = await axios.delete("/users/delete/" + this.$route.params.id)

                if(response.status === 200){
                    console.log("Data Berhasil Dihapus")
                }   
            }
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
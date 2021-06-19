<template>
  <div>
      <div class="card p-4" style="width:35rem">
        <form @submit="input">
            <div class="mb-3">
                <label for="">Nama</label>
                <input type="text" class="form-control" name="nama" v-model="forms.nama">
                <label for="" v-if="notification.nama" class="text-danger">{{notification.nama[0]}}</label>
            </div>
            <div class="mb-3">
                <label for="">NIP</label>
                <input type="tel" v-on:keyup="dash" class="form-control" name="nip" v-model="forms.nip" maxlength="21">
                <label for="" v-if="notification.nip" class="text-danger">{{notification.nip[0]}}</label>
            </div>
            <div class="mb-3">
                <label for="">Bidang</label>
                <input type="text"  name="bidang" class="form-control" v-model="forms.bidang">
                <label for="" v-if="notification.bidang" class="text-danger">{{notification.bidang[0]}}</label>
            </div>
            <div class="mb-3">
                <label for="">Jabatan</label>
                <select name="jabatan" class="form-control" v-model="forms.jabatan">
                    <option name="jabatan">Kasubid</option>
                    <option name="jabatan">Kasubag</option>
                </select>
                <label for="" v-if="notification.jabatan" class="text-danger">{{notification.jabatan[0]}}</label>
            </div>
            <div class="mb-3">
                <label for="">Golongan</label>
                <input type="text" name="golongan" class="form-control" v-model="forms.golongan">
                <label for="" v-if="notification.golongan" class="text-danger">{{notification.golongan[0]}}</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
    name : "create",
    data() {
        return {
            forms: {
                id : null,
                nama : "",
                nip : null,
                bidang: "",
                jabatan : "",
                golongan : "",
                agenda_id : null
            },
            notification : [],
        }
    },
    methods: {
        async input(e) {
            e.preventDefault();

            try{
                let response = await axios.post('/users/create', this.forms)
                alert("Pegawai Berhasil Dibuat")
                this.$router.push({name : "home"})
            }catch(err) {
                this.notification = err.response.data.errors
            }        
        },
        dash(){
            if(this.forms.nip.length === 8){
                this.forms.nip += "-"
            }
            else if(this.forms.nip.length == 15){
                this.forms.nip += "-"
            }
            else if(this.forms.nip.length == 17){
                this.forms.nip += "-"
            }
        }
    },

}
</script>

<style>

</style>
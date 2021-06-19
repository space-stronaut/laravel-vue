<template>
  <div>
      {{notification}}
      <div class="card p-4" style="width:35rem">
        <form @submit="input">
            <div class="mb-3">
                <label for="">Nama</label>
                <input type="text" class="form-control" name="nama" v-model="forms.nama">
            </div>
            <div class="mb-3">
                <label for="">NIP</label>
                <input type="tel" v-on:keyup="dash" class="form-control" name="nip" v-model="forms.nip" maxlength="21">
            </div>
            <div class="mb-3">
                <label for="">Bidang</label>
                <input type="text"  name="bidang" class="form-control" v-model="forms.bidang">
            </div>
            <div class="mb-3">
                <label for="">Jabatan</label>
                <select name="jabatan" class="form-control" v-model="forms.jabatan">
                    <option name="jabatan">Kasubid</option>
                    <option name="jabatan">Kasubag</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="">Golongan</label>
                <input type="text" name="golongan" class="form-control" v-model="forms.golongan">
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
            notification : "",
        }
    },
    methods: {
        async input(e) {
            e.preventDefault();

            let response = await axios.post('/users/create', this.forms)

            try {
                this.notification = "Pegawai Berhasil Dibuat"
            } catch (error) {
                console.log(error)
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
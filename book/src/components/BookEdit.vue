<template>
  <div class="col-sm-8 offset-sm-2">
    <h1>Edit file</h1>
    <form @submit.prevent="">
      <input class="form-input" type="text" v-model='judul'><br>
      <input class="form-input" type="text" v-model='tahun_terbit'><br>
      <input class="form-input" type="text" v-model='deskripsi'><br>
      
      <button class="btn btn-success" v-on:click="update">Save</button>
      <button class="btn btn-danger" v-on:click="clear">Clear</button>
      <button class="btn btn-warning" v-on:click="kembali">Kembali</button>
      <br>
      <br>
      <div v-if="loading">
        Loading....
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'BookSave',
    data(){
      return{
        judul:'',
        tahun_terbit:null,
        deskripsi:'',
        id:'',
        loading:false
      }
    },
    methods:{
      update:function(){
        let data = {
          judul:this.judul,
          tahun_terbit:this.tahun_terbit,
          deskripsi:this.deskripsi
        }
        axios.put('http://localhost:5000/book/'+this.id,data).then((res)=>{
          if(res.status==200){
            this.$router.push('/')
          }
        }).catch((error)=>{
          console.log(error)
        });
      },
      clear:function(){
        this.judul=''
        this.tahun_terbit=null
        this.deskripsi=''
      },
      kembali:function(){
        this.$router.push('/')
      }
    },
    created(){
      this.id = this.$route.params.id
      axios.get('http://localhost:5000/bookid/'+this.id).then((res)=>{
        if(res.status==200){
          this.judul = res.data.judul
          this.tahun_terbit=res.data.tahun_terbit
          this.deskripsi = res.data.deskripsi
        }
      },(error)=>{
          console.log(error)
      });
    }
}
</script>


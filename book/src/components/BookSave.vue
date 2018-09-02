<template>
  <div class="col-sm-8 offset-sm-2">
    <form @submit.prevent="">
      <input class="form-input" type="text" v-model='judul'><br>
      <input class="form-input" type="text" v-model='tahun_terbit'><br>
      <input class="form-input" type="text" v-model='deskripsi'><br>
      
      <button class="btn btn-success" v-on:click="save">Save</button>
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
        loading:false
      }
    },
    methods:{
      save:async function(){
        let book = {judul:this.judul, tahun_terbit:this.tahun_terbit,deskripsi:this.deskripsi}
        axios.post('http://localhost:5000/book',book,{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then((res)=>{
          this.loading = true
          this.loading=false
          this.$router.push('/')
    
        }).catch((error)=>{
          if(error.response.status==401){
            console.log(localStorage.getItem('refresh'))
            console.log('_____________')
            axios.get('http://localhost:5000/user/refresh/token', {headers:{Authorization:'Bearer '+localStorage.getItem('refresh')}}).then((res)=>{
              //console.log(res)
              localStorage.setItem('token', res.data.token)
            })
          }
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
    }
}
</script>


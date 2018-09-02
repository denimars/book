<template>
  <div>
    <div class="col-sm-8 offset-sm-2">
    <div class="jumbotron">
      <h1>testing bootstrap on vue</h1>
      <p>{{msg}}</p>
      <router-link to="/book">Tambah Data</router-link>/
      <router-link to="/logout">Logout</router-link>
      <br>
      <br>
      {{user}}
    </div>
    <ul>
      <li v-for="books in book">
        <router-link v-bind:to="'/book/'+books.id">{{books.judul}}</router-link> <button v-on:click="hapus(books.id)" class="btn btn-danger">Hapus</button>
      </li>
    </ul>

  </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Book",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      book:[],
      user:localStorage.getItem('user')
    };
  },
  methods:{
    hapus:function(id){
      axios.delete('http://localhost:5000/book/'+id,{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then((res)=>{
        if(res.status==200){
          axios.get('http://localhost:5000/book',{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then((res)=>{
            this.book = res.data
          },(error)=>{
            console.log(error)
          });
        }
      }, (error)=>{
        console.log(error);
      })
    }
  },
  created(){
    //localStorage.clear()
    axios.get('http://localhost:5000/book',{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(res=>{
      this.book = res.data
    }).catch(error=>{
      if(error.response.status==401){
        axios.get('http://localhost:5000/user/refresh/token',{headers:{Authorization:'Bearer '+localStorage.getItem('refresh')}}).then((res)=>{
          localStorage.setItem('token',res.data.token)
        }).catch(error=>{
          localStorage.clear()
          this.$routes.push('/login')
        })
      }
    })
  }
    
  

};
</script>

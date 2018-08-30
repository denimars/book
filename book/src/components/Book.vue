<template>
  <div>
    <div class="col-sm-8 offset-sm-2">
    <div class="jumbotron">
      <h1>testing bootstrap on vue</h1>
      <p>{{msg}}</p>
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
      book:[]
    };
  },
  methods:{
    hapus:function(id){
      axios.delete('http://localhost:5000/book/'+id).then((res)=>{
        if(res.status==200){
          axios.get('http://localhost:5000/book').then((res)=>{
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
    axios.get('http://localhost:5000/book').then((res)=>{
      this.book = res.data
    },(error)=>{
      console.log(error)
    });
  }
};
</script>

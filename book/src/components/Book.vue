<template>
  <div>
    <div class="col-sm-8 offset-sm-2">
    <div class="jumbotron">
      <h1>testing bootstrap on vue</h1>
      <p>{{msg}}</p>
    </div>
    <ul>
      <li v-for="books in book">
        <router-link to='/book'>{{books.judul}}</router-link>
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
  created(){
    axios.get('http://localhost:5000/book').then((res)=>{
      this.book = res.data
    },(error)=>{
      console.log(error)
    });
  }
};
</script>

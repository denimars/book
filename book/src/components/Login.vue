<template>
  <div class="col-sm-8 offset-sm-2">
    <center><h1>Testing Login</h1></center>
    <form @submit.prevent="">
      <label class="control-label">Username</label>
      <input type="text" class="form-control" v-model="username">
      <label class="control-label">Password</label>
      <input type="password" class="form-control" v-model="password">
      <button class="btn btn-success" v-on:click="login">Login</button>
      <button class="btn btn-danger" v-on:click="clear">Clear</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Login',
  data(){
    return{
      username:'',
      password:''  
    }
  },
  methods:{
    login:function(){
      console.log('testing')
      if(this.password.length > 0){
        axios.post('http://localhost:5000/user/login',{
          username:this.username,
          password:this.password
        }).then((res)=>{
          let  is_admin = res.data.admin
          console.log(is_admin)
          console.log(res.data.access_token)
          console.log(res.data.refresh_token)
          localStorage.setItem('admin',res.data.admin)
          localStorage.setItem('user',this.username)
          localStorage.setItem('token',res.data.access_token)
          localStorage.setItem('refresh', res.data.refresh_token)
          console.log(this.$route.params.nextUrl)
          if(localStorage.getItem('token')!=null){
            if(this.$route.params.nextUrl!=null){
              this.$router.push(this.$route.params.nextUrl)
            }else{
              if(is_admin){
                this.$router.push('/book')
              }else{
                this.$router.push('/')
              }
            }
          }
        }).catch((error)=>{
          if(error.response.status==403){
            alert('user atau password salahe')
          }
        })
      }
    },
    clear:function(){
      this.username=''
      this.password=''
    }
  },
}
</script>

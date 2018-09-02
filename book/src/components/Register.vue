<template>
    <div class="col-sm-8 offset-sm-2">
        <center>Register</center>
        <form @submit.prevent="">
            <label>Username</label>
            <input type="text" class="form-control" v-model="username">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password">
            <label>Password Required</label>
            <input type="password" class="form-control" v-model="passwordcek">
            <label>Status</label>
            <select v-model="test_data" class="form-control">
               <option v-for="option in options" v-bind:value="option.data">
                 {{ option.status }}
                </option>
            </select>
            <button class="btn btn-success" v-on:click="register">Register</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Register',
  data(){
    return{
      username:'',
      name:'',
      password:'',
      passwordcek:'',
      options:[
        {status:'admin', data:true},
        {status:'user', data:false}
      ],
      test_data:true
    }
  },
  methods:{
    register:function(){
      if(this.password===this.passwordcek){
        axios.post('http://localhost:5000/user/register',{username:this.username, name:this.name, password:this.password, admin:this.test_data}).then((res)=>{
         if(res.status==200){
           localStorage.setItem('admin', this.test_data)
           localStorage.setItem('user', this.username)
           localStorage.setItem('token',res.data.access_token)
           localStorage.setItem('refresh', res.data.refresh_token)
           this.$router.push('/')
         }
        }).catch(error=>{
          alert(error.response.data.msg)
        })
      }else{
        alert('nooooo')
      }
    }
  }
}
</script>


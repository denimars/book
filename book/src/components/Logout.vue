<template>
</template>

<script>
import axios from 'axios'
export default {
  name:'Logout',
  created(){
    axios.get('http://localhost:5000/user/logout',{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then((res)=>{
      if (res.status==200){
        axios.get('http://localhost:5000/user/logout/refresh', {headers:{Authorization:'Bearer '+localStorage.getItem('refresh')}}).then((res)=>{
          localStorage.clear()
          this.$router.push('/login')
        }).catch(error=>{
          console.log(error)
        })
      }
    }).catch(error=>{
      console.log(error)
    })
  }
}
</script>

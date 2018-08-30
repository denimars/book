<template>
  <div>
    <Head/>
    testing saja {{msg}}
  </div>
</template>


<script>

import Head from './Head'

export default {
  name:'HelloWorld',
  components:{
    Head
  },
  data(){
    return{
      msg:'haiiii'
    }
  }
}
</script>



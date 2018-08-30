<template>
  <div>
      <h1>{{msg}}</h1>
      <li v-for="user in users">
          {{user.firstname}} {{user.lastname}}
      </li>
      <input type="text" v-model="input_val"><br/>
      <input type="text" v-model="input_val2"><br/>
      
      Input value: <span v-text="input_val"></span>
      <br/>
      <button v-on:click="coba()">Testing</button>

      <div v-text="counter"></div>

      <div>
          Finish: {{balik}}
      </div>
  </div>
</template>

<script>
export default {
    name:"Testing",
    data (){
        return{
            msg:'testing',
            users: [
                {firstname:'deni', lastname:'marswandi'}
            ],
            input_val:0,
            input_val2:0,
            counter:this.input_val
        }
    },
    methods:{
        coba:function(){
            console.log('saya di klik');
            this.msg = 'ayam bakar';
            console.log(this.counter);
            this.counter = parseInt(this.input_val) + parseInt(this.input_val2)
        }
    },

    computed:{
        balik:function(){
            return this.msg.split('').reverse().join('');
        }
    }
    
}
</script>
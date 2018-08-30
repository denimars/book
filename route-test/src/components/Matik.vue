<template>
  <div>
    <center>
      <Head/>
    </center>
    <div class="matik">
      <div class="col-sm-8 offset-sm-2">
        <input class="form-control" type="number" v-model="pertama"/><br>
        <input type="radio" value="+" v-model="oprasi"><label>+</label>
        <input type="radio" value="-" v-model="oprasi"><label>-</label>
        <input type="radio" value="*" v-model="oprasi"><label>*</label>
        <input type="radio" value="/" v-model="oprasi"><label>/</label>
        <input class="form-control" type="number" v-model="kedua">
        <input class="form-control" type="number" v-model="hitung" readonly="readonly"/>
        <button class="btn btn-danger" v-on:click="clear">Clear</button>
        <label>hasil: {{format(hitung)}}</label>
      </div>      
    </div>
  </div>
</template>

<script>
import Head from "./Head";
export default {
  name: "Matik",
  components: {
    Head
  },
  data() {
    return {
      pertama: 0,
      kedua: 0,
      oprasi:''
    };
  },
  methods:{
      clear:function(){
          this.pertama=0;
          this.kedua=0;
      },
      format: function(value){
      let val = (value/1).toFixed(2).replace('.',',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  },
  computed: {
    hitung: function() {
      let hasil=0;
      if(this.oprasi!==''){
        switch(this.oprasi){
          case '+':
            hasil= parseInt(this.pertama) + parseInt(this.kedua);
            break;
          case '-':
            hasil = parseInt(this.pertama) - parseInt(this.kedua);
            break;
          case '*':
            hasil = parseInt(this.pertama) * parseInt(this.kedua);
            break;
          default:
            hasil = parseInt(this.pertama) / parseInt(this.kedua);
            break;
        }
        if(isNaN(hasil)){
          return 0;
        }
        return hasil;
      }
      return hasil;
    },
  },
  created(){
    console.log('just testing');
  }
};
</script>
<style>
  .matik{
    padding-top: 50px;
  }
</style>


<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Testing/>
    <div>
      {{cek_saja}}
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Testing from './components/Testing'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Testing
  },
  data(){
    return{cek_saja:'ayam bakar'}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

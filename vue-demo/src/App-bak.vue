<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
<!--    <h1>Hello Vue</h1>-->
<!--    {{msg}}-->
<!--    <MyHeader></MyHeader>-->
<!--      <MyContent :Mytitle="msg" :btnfn="FCfn"></MyContent>-->
        <MyContent :Mytitle="msg" @newName="msg=$event"></MyContent>
<!--    <MyBottom></MyBottom>-->

<!--    &lt;!&ndash;局部注册&ndash;&gt;-->
<!--    <header></header>-->
  </div>
</template>

<script>
  // import header from './components/Header'

  export default {
    name: 'app',
    data(){
      return {
        msg:'我是董朋 我要学前端VUE'
      }
    },
    methods:{
      FCfn:function (m) {
        this.msg = m;
      }
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

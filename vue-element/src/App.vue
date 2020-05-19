<template>
  <div id="app">
<!--    <row/>-->
    <container/>
  </div>
</template>

<script>
  import row from './myVue/Row.vue'
  import container from './myVue/Container'
  export default {
      // name: 'dpVue',    //可写可不写
      components:{
        row,
        container
      }
  }
</script>

<!--<style>-->
<!--#app {-->
<!--  font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->

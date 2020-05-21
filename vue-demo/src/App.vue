<!-- <template>
   <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template> -->

<!-- <script>
export default {
  name: 'App'
}
</script> -->

<template>
  <div id="app">
<!--    <d-p></d-p>-->
<!--    <MyHeader></MyHeader>-->
<!--    <sub-app :myName="name" :ffn="changeName"></sub-app> &lt;!&ndash;给子组件赋值 调子组件方法&ndash;&gt;-->
    <sub-app :myName="name" @newName="name=$event"></sub-app>
  </div>
</template>

<script>
  /*本地注册组件*/
  import aa from './components/Demo1'
  import sub1 from './components/Sub1'
  export default {
    data(){
      return{
        name:'flying'
      }
    },
    methods:{
      changeName:function(name) {
        this.name = name
      }
    },
    components: {
      // 'd-p': aa
      subApp:sub1
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

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
    <d-p></d-p>
  </div>
</template>

<script>
import aa from './components/Demo1'
export default {
  name: 'App',
  components: {
    'd-p': aa
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

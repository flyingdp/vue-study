<template>
  <div>
    <h1>{{myName}}</h1>
    <button type="button" @click="doClick()">点我</button>
  </div>
</template>

<script>
    export default{
      name: "Content",
      props:{
        'myName':{
          type:String,
          required:true,
          default:'XX'
        },
        ffn:{
          type:Function
        }
    },
    methods:{
      doClick(){
        // this.ffn("I am flying");
        this.$emit('newName','Hello JS')
      }
    }
    }
</script>

<style scoped>

</style>

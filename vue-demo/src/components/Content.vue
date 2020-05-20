<template>
  <div>
      商品列表<br>
      {{Mytitle}}<br>
<!--      <button type="button" @click="btnfn('Hello Java')">点我</button>-->
      <button type="button" @click="doClick">点我</button>
  </div>
</template>

<script>
    export default {
        name: "Content",
        props:{
          'Mytitle':{
            type:String,
            required:true,
            default:'XX'
          },
          'btnfn':{
            type:Function
          }
        },
      methods:{
          doClick(){
            this.$emit('newName','Hello JS')
          }
      }
    }
</script>

<style scoped>

</style>

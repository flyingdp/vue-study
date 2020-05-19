<template>
 <div id="app">

<!--   <el-row>-->
<!--     &lt;!&ndash;span:代表分为24栏&ndash;&gt;-->
<!--     <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>-->
<!--   </el-row>-->

<!--   <el-row :gutter="4"> &lt;!&ndash;gutter属性是设置方块之间距离==>分栏间隔&ndash;&gt;-->
<!--     &lt;!&ndash;offset属性调整方块的偏移位置&ndash;&gt;-->
<!--     <el-col :span="6" :offset="2"><div class="grid-content bg-purple"></div></el-col>-->
<!--     <el-col :span="6" :offset="6"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--   </el-row>-->

<!--   <el-row :gutter="20">-->
<!--     <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
<!--     <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>-->
<!--   </el-row>-->
<!--   <el-row :gutter="20">-->
<!--     <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>-->
<!--     <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>-->
<!--   </el-row>-->
<!--   <el-row :gutter="20">-->
<!--     <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>-->
<!--   </el-row>-->




  <!--
    对齐方式:
    row组件的type="flex"启动flex布局，再通过row组件的justify属性调整排版方式，属性值分别有:
    justify=center 居中对齐
    justify=start 左对齐
    justify=end 右对齐
    justify=space-between 空格间距在中间对齐
    justify=space-around 左右各占半格空格对齐
  -->
<!--   <el-row type="flex" class="row-bg" justify="center">-->
<!--     <el-col :span="10"><div class="grid-content bg-purple"/></el-col>-->
<!--   </el-row>-->

   <el-row type="flex" class="row-bg">
     <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
     <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
     <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
   </el-row>
   <el-row type="flex" class="row-bg" justify="center">
     <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
     <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
     <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
   </el-row>
   <el-row type="flex" class="row-bg" justify="end">
     <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
     <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
     <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
   </el-row>
   <el-row type="flex" class="row-bg" justify="space-between">
     <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
     <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
     <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
   </el-row>
   <el-row type="flex" class="row-bg" justify="space-around">
     <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
     <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
     <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
   </el-row>

   <!-- <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>-->



 </div>
</template>

<script>
    // new Vue().$mount('#app')
</script>

<style>
  .el-row {
    margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  </style>


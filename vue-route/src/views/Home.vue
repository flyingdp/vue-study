<template>
  <div>
   <h1>欢迎来到首页</h1>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>商品管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="/productList">商品列表</router-link></el-menu-item>
              <!--传参第一种方式-->
<!--              <el-menu-item index="1-2"><router-link to="/productInfo/1">商品信息</router-link></el-menu-item>-->
              <!--传参第二种方式-->
              <el-menu-item index="1-2"><router-link :to="{name:'productInfo',params: {id:333}}">商品信息</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item><router-link to="/logout">退出</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main>
          <router-view></router-view>
<!--          <el-table :data="users">-->
<!--            <el-table-column prop="uid" label="用户Id" width="140"/>-->
<!--            <el-table-column prop="name" label="姓名" width="120"/>-->
<!--            <el-table-column prop="age" label="年龄"/>-->
<!--          </el-table>-->
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
    export default {
        name: "Home",
        data(){
          return{

          }
        },
      methods:{
          logout:function () {
              //回到登录页面
              this.$router.push('/logout')
          }
      }
    }
</script>

<style scoped>

</style>

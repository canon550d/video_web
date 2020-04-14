<template>
  <div id="app">
    <!-- img src="./assets/logo.png" -->
    
    <el-container>
      <el-header>
        <el-row :gutter="20"><el-col :span="16" :offset="4">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2"><router-link to="/drama">电视剧</router-link></el-menu-item>
          <el-menu-item index="3">电影</el-menu-item>
        </el-menu>
        </el-col></el-row>
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="16" :offset="4"><div class="grid-content bg-purple">
            <router-view @callBackInfo="handleInfo" />
          </div></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      'activeIndex': '1'
    }
  },
  methods:{
    handleInfo(data){
      this.activeIndex=data;
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
  //margin-top: 60px;
}
</style>

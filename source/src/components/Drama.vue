<template>
<div>
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>电视剧</el-breadcrumb-item>
</el-breadcrumb>

<el-row :gutter="20">
  <el-col :span="6" v-for="(d,index) in list" :key="index">
    <el-card :body-style="{ padding: '0px' }">
    <router-link to="/todo">
      <img :src="d.img" class="image">
      <div style="padding: 14px;">
        <span>{{d.desc}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </router-link>
    </el-card>
  </el-col>
</el-row>

</div>
</template>


<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      'list': [],
      currentDate: new Date()
    };
  },
  created () {
    this.$emit('callBackInfo','2');
  },
  mounted () {
    axios
      .get('/static/drama.json')
      .then(response => {
        this.list = response.data.list;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>
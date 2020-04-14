<template>
<div>
111111111111111
<el-row :gutter="20">
  <el-col :span="6" v-for="d in list" >
    <el-card :body-style="{ padding: '0px' }">
      <img :src="d.img" class="image">
      <div style="padding: 14px;">
        <span>{{d.desc}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
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
  mounted () {
    axios
      .get('http://localhost/test/vue/drama.json')
      .then(response => {
        this.list = response.data.result.list;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>
<template>
<div>
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>电视剧</el-breadcrumb-item>
  <el-breadcrumb-item>{{videoInfo.name}}</el-breadcrumb-item>
</el-breadcrumb>

<div>
<el-image style="width: 200px; height: auto"
    :src="videoInfo.cover"
    fit="cover">
</el-image>
</div>

<div>
{{videoInfo.name}}剧情简介 · · · · · ·
</div>

<div>
{{videoInfo.desc}}
</div>

  <div>资源下载</div>
  <el-table :data="videoInfo.list" style="width: 100%">
    <el-table-column prop="name">
    </el-table-column>
    <el-table-column prop="zimu">
      <template slot-scope="scope">
        <router-link :to="scope.row.zimu">字幕</router-link>
      </template>
    </el-table-column>
    <el-table-column prop="baiduPan">
      <template slot-scope="scope">
        <el-link type="primary" :href="scope.row.magnet" target="_blank">百度网盘</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="ucPan">
      <template slot-scope="scope">
        <el-link type="primary" :href="scope.row.magnet" target="_blank">UC网盘</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="ucPan">
      <template slot-scope="scope">
        <el-link type="primary" :href="scope.row.magnet" target="_blank">磁力下载</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="ed2k">
      <template slot-scope="scope">
        <el-link type="primary" :href="scope.row.ed2k" target="_blank">电驴下载</el-link>
      </template>
    </el-table-column>
  </el-table>

</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'play',
  data () {
    return {
      videoInfo:{}
    }
  },
  created () {
    this.$emit('callBackInfo','2');
  },
  mounted () {
    axios
      .get('/static/view.json?id='+this.$route.params.id)
      .then(response => {
        this.videoInfo = response.data.result;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 }
</script>
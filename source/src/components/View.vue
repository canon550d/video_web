<template>
<div>
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>电视剧</el-breadcrumb-item>
  <el-breadcrumb-item>{{videoInfo.name}}</el-breadcrumb-item>
</el-breadcrumb>

<el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="4"><div class="grid-content bg-purple">
    <el-image style="width: 200px; height: auto"
      :src="videoInfo.cover"
      fit="cover">
    </el-image>
  </div></el-col>
  <el-col :span="15"><div class="grid-content bg-purple-light">
    <span class="actor">
      <span class="pl">主演</span>: 
      <span class="attrs">
        <span v-for="(actor,index) in videoInfo.actor">
          <span v-if="index>0">/{{actor}}</span>
          <span v-else>{{actor}}</span>
        </span>
        <a href="javascript:;" class="more-actor" title="更多主演">更多...</a>
      </span>
    </span><br>
    <span class="pl">类型:</span> <span property="v:genre">{{videoInfo.type}}</span><br>
    <span class="pl">制片国家/地区:</span> {{videoInfo.contory}}<br>
    <span class="pl">语言:</span> {{videoInfo.langue}}<br>
    <span class="pl">首播:</span> <span property="v:initialReleaseDate" content="2020-01-17(韩国)">{{videoInfo.firstWatch}}</span><br>
    <span class="pl">单集片长:</span> {{videoInfo.watchTime}}<br>
    <span class="pl">又名:</span> {{videoInfo.localName}}<br>
  </div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">
    <el-row>
      <el-col :span="6"><span style="font-size:30px;">{{cao}}</span>
      </el-col>
      <el-col :span="18">
        <el-rate
          v-model="videoInfo.point"
          disabled
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
        来点啥
      </el-col>
    </el-row>
  </div></el-col>
</el-row>

<div style="margin-top:20px;color:green;">
{{videoInfo.name}}剧情简介 · · · · · ·
</div>

<div style="margin-top:20px;">
{{videoInfo.desc}}
</div>

  <div>资源下载</div>
  <el-table :data="videoInfo.list" style="width: 100%">
    <el-table-column prop="name">
    </el-table-column>
    <el-table-column prop="zimu">
      <template slot-scope="scope">
        <el-link type="primary" :href="scope.row.zimu" target="_blank">字幕</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="baiduPan">
      <template slot-scope="scope">
        <el-link type="primary" :href="scope.row.baiduPan" target="_blank">百度网盘</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="ucPan">
      <template slot-scope="scope">
        <el-link type="primary" :href="scope.row.ucPan" target="_blank">UC网盘</el-link>
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

<style>
.el-breadcrumb{margin-bottom:20px;}
</style>

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
  computed: {
    cao: function () {
      return this.videoInfo.point*2;
    }
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
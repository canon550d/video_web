<template>
<div>
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">电视剧</a></el-breadcrumb-item>
  <el-breadcrumb-item>我的事说来话长</el-breadcrumb-item>
  <el-breadcrumb-item>视频详情</el-breadcrumb-item>
</el-breadcrumb>


  <div>
    <video v-bind:src="src" controls="controls"></video>
  </div>{{$route.params.id}}

</div>
</template>

<script>
export default {
  name: 'play',
  data () {
    return {
      src: './static/DJI_0035.MP4'
    }
  },
  created () {
    if (this.$route.query.src != '') {
      this.src = this.$route.query.src;
    }
  },
  methods: {
    goBack() {
      this.$router.push({path:'/'})
      console.log('go back');
    }
  }
}
</script>

<style>
video{width:100%;}
</style>

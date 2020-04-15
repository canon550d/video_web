<template>
<div>

<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">电视剧</a></el-breadcrumb-item>
  <el-breadcrumb-item>我的事说来话长</el-breadcrumb-item>
  <el-breadcrumb-item>视频列表</el-breadcrumb-item>
</el-breadcrumb>

  <el-table
      :data="list"
      style="width: 100%">
    <el-table-column
        prop="id"
        label="ID"
        width="180">
    </el-table-column>
    <el-table-column label="封面">
      <template slot-scope="scope">
        <el-image style="width: 100px; height: 100px"
          :src="'http://localhost/play/'+ scope.row.img"
          fit="cover">
        </el-image>
      </template>
    </el-table-column>
    <el-table-column
        prop="src"
        label="视频地址"
        width="180">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleView(scope.$index, scope.row)">查看</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="block">
  
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>


</div>


</template>

<script>
import axios from 'axios';

export default {
  name: 'todo',
  data () {
    return {
      'pages':{'records':0, 'prevPage':1, 'page':1, 'nextPage':1, 'lastPage':1, 'limit':20},
      'list': []
    }
  },
  created () {
    this.$emit('callBackInfo','2');
  },
  mounted () {
    axios
      .get('/static/list.json')
      .then(response => {
        this.list = response.data.list;
      })
      .catch(function (error) {
        console.log(error);
      });this.$emit('change','3');
  },
  methods: {
    handleView(index, row) {
        console.log(index, row);
        this.$router.push({path:'/play', query:{id: row.id,  src: row.src}})
    },
    handleEdit(index, row) {
        console.log(index, row);
    },
    handleDelete(index, row) {
        console.log(index, row);
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }
  }
}
</script>


<style>

</style>
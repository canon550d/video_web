import Vue from 'vue'
import Router from 'vue-router'
import Drama from '@/components/Drama'
import List from '@/components/List'
import Play from '@/components/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/drama',
      name: 'Drama',
      component: Drama
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/list/list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: 'HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  linkActiveClass: 'active'
})

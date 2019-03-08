import Vue from 'vue'
import Router from 'vue-router'
import BeenList from '@/components/beenlist/List.vue'
import Cart from '@/components/cart/Cart.vue'
import GoodsInfo from '@/components/GoodsInfo.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/list' },
    { path: '/list', component: BeenList },
    { path: '/cart', component: Cart },
    { path: '/goodsinfo/:id', component: GoodsInfo },

    { path: '/login', component: Login }
  ],

  linkActiveClass: 'active'
})

// 导航守卫：
// router.beforeEach((to, from, next) => {
//   // to表示：要去的路由对象
//   // from表示：要离开的路由对象
//   // next表示：执行下一步操作，必须要调用这个方法
//   //  如果不掉用这个方法，路由就一直处于等待中，不会显示路由对应的组件内容

//   console.log('导航守卫 我知道你从哪里来，要到哪里去')
//   // next()

//   // 如果是 /login（登录页面），直接调用 next()，就展示登录页面内容了
//   // if (to.path === '/login') {
//   //   next()
//   // } else {
//   //   // 判断用户是否登录：
//   //   //  此处假设登录成功后，用户信息被存储到 cookie 中
//   //   if (document.cookie.indexOf('session_id') > 0) {
//   //     // 如果有用户名就进行下一步操作
//   //     next()
//   //   } else {
//   //     // 没有登录
//   //     next({ path: '/login' })
//   //   }
//   // }
// })

/*
  1 在登录页面输入用户名和密码
  2 点击登录按钮，发送ajax请求，将用户名和密码传递给服务器的登陆接口
  3 服务器的登陆接口根据传递过来用户名和密码，到数据库中查询有没有该用户
  4 如果有该用户，就将用户信息存储到 session 中
  5 将 session_id 存储到cookie中（服务器通过 SetCookie 的响应头告诉浏览器，让浏览器来存储session_id到cookie中）
  6 每个页面跳转的时候，都会经过设置好的导航守卫，进行 登录状态 的判断
*/

export default router

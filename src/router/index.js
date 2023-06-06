import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import adetails from '../views/details.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/Home',
  },
  {
    path:'/Home',
    name:'Home',
    component:Home
  },
  {
    path:'/circle',
    name:'circle',
    component:()=>import("../views/circle.vue")
  },
  {
    path:'/bookshelf',
    name:'bookshelf',
    component:()=>import("../views/bookshelf.vue")
  },
  {
    path:'/my',
    name:'my',
    component:()=>import("../views/my.vue")
  },
  //详情
  {
    path:'/adetails',
    name:'adetails',
    component:adetails,
  },
  // 会员
  {
    path:'/vip',
    name:'vip',
    component:()=>import("../views/vip.vue")
  },
  //充值
  {
    path:'/recharge',
    name:'recharge',
    component:()=>import("../views/recharge.vue")
  },
  //看漫画
  {
    path:'/look',
    name:'look',
    component:()=>import("../views/look.vue")
  },
  // 历史
  {
    path:'/history',
    name:'history',
    component:()=>import("../views/history.vue")
  },
  //下载
  {
    path:'/download',
    name:'download',
    component:()=>import("../views/download.vue")
  },
  //搜索
  {
    path:'/search',
    name:'search',
    component:()=>import("../views/search.vue")
  },
  //搜索列表
  {
    path:'/searchList',
    name:'searchList',
    component:()=>import("../views/searchList.vue")
  },
  {
    path:'/login',
    name:'login',
    component:()=>import("../views/login.vue")
  }
]

const router = new VueRouter({
  routes,
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginIn from '@/components/LoginIn'
import Public from '@/components/Public'
import Sign from '@/components/Sign'
import Vmap from '@/components/Vmap'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/login',
      name:'LoginIn',
      component:LoginIn
    },
    {
      path:'/public',
      name:'Public',
      component:Public
    },
    {
      path:'/sign',
      name:'Sign',
      component:Sign
    },
    {
      path:'/map',
      name:'Vmap',
      component:Vmap
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import MeetView  from './views/Meet.vue'
import SearchView  from './views/Search.vue'
import MessageView  from './views/Message.vue'
import VipView  from './views/Vip.vue'

import MyInfoView  from './views/MyInfo.vue'
import MainPannel  from './views/myinfo/mainpanel.vue'
import profileSetPannel  from './views/myinfo/profileset'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/meet'
    },
    {
      path: '/meet',
      name: 'meet',
      component: MeetView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/message',
      name: 'message',
      component: MessageView
    },
    {
      path: '/vip',
      name: 'vip',
      component: VipView
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: MyInfoView,
      children:[
        {
          path: '',
          name: 'mainpannel',
          redirect: '/myinfo/main'
        },
        {
          path: 'main',
          name: 'mainpannel',
          component: MainPannel
        },
        {
          path: 'profileset',
          name: 'profileset',
          component: profileSetPannel
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

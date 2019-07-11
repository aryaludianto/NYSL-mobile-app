import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../src/components/Chat.vue'
// import schedule from '../src/components/schedule.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/',
      name: 'schedule',
      component: () => import('../src/components/schedule.vue')
    }
  ]
})

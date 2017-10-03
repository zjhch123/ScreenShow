import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/launch',
      name: 'launch',
      component: Hello
    },
    {
      path: '/index',
      name: 'index',
      component: Hello
    },
    {
      path: '/photo',
      name: 'photo',
      component: Hello
    },
    {
      path: '/savePhoto',
      name: 'savePhoto',
      component: Hello
    },
    {
      path: '/sharePhoto',
      name: 'sharePhoto',
      component: Hello
    },
    {
      path: '/cloud',
      name: 'cloudTakePhoto',
      component: Hello
    }
  ]
})

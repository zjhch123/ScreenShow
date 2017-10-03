import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Launch from '@/components/Launch'
import Index from '@/components/Index'
import Photo from '@/components/Photo/Index'
import Take from '@/components/Photo/Take'
import Save from '@/components/Photo/Save'
import Share from '@/components/Photo/Share'
import Cloud from '@/components/Cloud'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/launch',
      component: Launch
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/photo',
      component: Photo,
      children: [
        {
          path: '',
          component: Take
        },
        {
          path: 'save',
          component: Save
        },
        {
          path: 'share',
          component: Share
        }
      ]
    },
    {
      path: '/cloud',
      component: Cloud
    }
  ]
})

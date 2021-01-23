import Vue from 'vue'
import Router from 'vue-router'
import ViewModelMaker from './components/ViewModelMaker.vue'
import Announcement001 from './components/Announcement001.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'ViewModelMaker',
        component: ViewModelMaker
    },
    {
        path: '/announcement001',
        name: 'Announcement001',
        component: Announcement001
      }
  ]
})
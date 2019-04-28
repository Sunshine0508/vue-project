import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    }, {
      path: '/',
      component:resolve =>require(['../views/common/Home.vue'],resolve),
      meta:{title:'自述文件'},
      children:[{
        path: '/dashboard',
        component: resolve => require(['../views/page/Dashboard.vue'], resolve),
        meta: { title: '系统首页' }
      }, {
        path: '/form',
        component: resolve => require(['../views/page/BaseForm.vue'], resolve),
        meta: { title: '基本表单' }
      },{
        // 富文本编辑器组件
        path: '/editor',
        component: resolve => require(['../views/page/VueEditor.vue'], resolve),
        meta: { title: '富文本编辑器' }
      },]
    },
    {
      path: '/login',
      component: resolve => require(['../views/page/Login.vue'], resolve)
    },
  ]
})

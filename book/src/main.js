// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import routes from './routes'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){
    if(localStorage.getItem('token')==null){
      next({
        path:'/login',
        params:{nextUrl: to.fullPath}
      })
    }else{
      //let user = JSON.parse(localStorage.getItem('user'))
      
      if(to.matched.some(record=>record.meta.is_admin)){
        if(localStorage.getItem('admin')){
          next()
        }else{
          next({name:'book'})
        }
      }else{
        next()
      }
    }
  }else if(to.matched.some(record=>record.meta.guest)){
    if(localStorage.getItem('token')==null){
      next()
    }else{
      next({name:'book'})
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

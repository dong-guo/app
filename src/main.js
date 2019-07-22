import Vue from 'vue'
import App from './App.vue'
// import router from './router'   //自带
import Skip from './views/Skip' 
import VueRouter from 'vue-router'
import Home from './views/Home'
import HelloWorld from './views/HelloWorld'
//接口引入
import axios from "axios"

Vue.config.productionTip = false
Vue.use(VueRouter)
//接口注册
Vue.prototype.$axios = axios;

//配置路由
const router = new VueRouter({
  routes:[
    // {path:"/",component:Home},
    {path:"/",component:HelloWorld},
    {path:"/Skip",component:Skip},
    {path:"/Home",component:Home}
  ],
  mode:"history"
})


new Vue({
  router,
  // routers,
  render: h => h(App)
}).$mount('#app')

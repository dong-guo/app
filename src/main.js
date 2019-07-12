import Vue from 'vue'
import App from './App.vue'
// import router from './router'   //自带
import Skip from './views/Skip' 
import VueRouter from 'vue-router'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'


Vue.config.productionTip = false
Vue.use(VueRouter)

//配置路由
const router = new VueRouter({
  routes:[
    // {path:"/",component:Home},
    {path:"/",component:HelloWorld},
    {path:"./views/Skip",component:Skip},
    {path:"/Home",component:Home}
  ],
  mode:"history"
})


new Vue({
  router,
  // routers,
  render: h => h(App)
}).$mount('#app')

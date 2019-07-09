import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Skip from './components/skip' （跳转放弃）
// import VueRouter from 'vue-router';

Vue.config.productionTip = false

// const routes =[
//   {path:'/',components:App},
//   {path:'/Skip',components:skip}
// ]

// const routers = new VueRouter({
//   routes
// })

new Vue({
  router,
  // routers,
  render: h => h(App)
}).$mount('#app')

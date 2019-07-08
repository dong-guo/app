<template>
  <div id="app">
    <app-header></app-header>
    <users v-bind:users="users"></users>
    <app-footer v-bind:users="users"></app-footer>
  </div>
</template>



<script>
//局部注册组件
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

export default{
  name:'app',
  data(){
    return{
      users:[
            {name:"Henrry1",position:"web开发",show:false},
            {name:"Henrry2",position:"web开发",show:false},
            {name:"Henrry3",position:"web开发",show:false},
            {name:"Henrry4",position:"web开发",show:false},
            {name:"Henrry5",position:"web开发",show:false},
            {name:"Henrry6",position:"web开发",show:false},
            {name:"Henrry7",position:"web开发",show:false},
            {name:"Henrry8",position:"web开发",show:false}
        ]
     
    }
  },
  components:{
      "users":Users,
      "app-header":Header,
      "app-footer":Footer
  }
}
</script>



<style scoped>
   h1{
     color:purple;
   }
</style>

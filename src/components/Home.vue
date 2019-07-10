<template>
  <div id="home">
    <app-header v-bind:title="title">
    </app-header>
    <users v-bind:users="users"></users>
    <app-footer v-bind:users="users"></app-footer>
  </div>
</template>



<script>
//局部注册组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'
// import Skip from './Skip'

export default{
  name:'home',
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
        ],
        title:"传递一个值，(number string boolean)"
     
    }
  },
  components:{
      "users":Users,
      "app-header":Header,
      "app-footer":Footer,
      // "skip":Skip
  }
}
</script>



<style scoped>
  *{
     margin:0 0;
     padding:0 0;
  }
   h1{
     color:purple;
   }
</style>
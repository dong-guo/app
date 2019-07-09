<template>
<div class="users">
  <h1>Hello Users</h1>
  <ul>
     <li v-for="user in users" 
         v-on:click="user.show=!user.show">
         <h2>{{user.name}}</h2>
         <h3 v-show="user.show">{{user.position}}</h3>
     </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'users',
  props:['users'], 
  data(){
    return{
        //放到app.vue
        // users:[
        //     {name:"Henrry1",position:"web开发",show:false},
        //     {name:"Henrry2",position:"web开发",show:false},
        //     {name:"Henrry3",position:"web开发",show:false},
        //     {name:"Henrry4",position:"web开发",show:false},
        //     {name:"Henrry5",position:"web开发",show:false},
        //     {name:"Henrry6",position:"web开发",show:false},
        //     {name:"Henrry7",position:"web开发",show:false},
        //     {name:"Henrry8",position:"web开发",show:false}
        // ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users{
    width:100%;
    max-width:1200px;
    margin:40px auto;
    padding:0 20px;
    box-sizing:border-box;
}
ul{
    display:flex;
    flex-wrap:wrap;
    list-style-type:none;
    padding:0;
}
li{
  flex-grow:1;
  flex-basis:200px;
  text-align:center;
  padding:30px;
  border:1px dotted #222;
  margin:10px;
  background:url(../assets/logo.png) no-repeat;
  background-size:100% 100%;
}
</style>
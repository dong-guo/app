<template>
  <div id="app">
    <router-view></router-view>
    <button>
    <ul>
      <li><router-link to="/skip">跳转</router-link></li>
    </ul>
    </button>
  </div>
</template>



<script>
//局部注册组件


export default{
  name:'app',
  data(){
    return{
    
    }
  }
  
}
</script>



<style scoped>
   h1{
     color:purple;
   }
   li{
    list-style-type:none;
   }
   a{
     text-decoration:none;
     margin-left:-40px;
     line-height:20px;

   }
   button{
     display:inline-block;
     width:80px;
     height:40px;
     border-radius:5px;
   }
</style>

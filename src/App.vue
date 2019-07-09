<template>
  <div id="app">
    <router-view></router-view>
  
    
      <ul>
        <li>
          <router-link to="/skip">
              <button>跳转</button>
          </router-link>
        </li>
      </ul>
    
  
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
   *{
     margin:0 0;
     padding:0 0;
   }
   h1{
     color:purple;
   }
   li{
    list-style-type:none;
    width:100%;
   }
   a{
     text-decoration:none;
   }
   button{
     width:100%;
     height:40px;
     border-radius:5px;

   }
</style>

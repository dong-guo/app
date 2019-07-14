<template>
  <footer>
      <div class="foot">
        <ul>
           <li>
             <router-link to="./skip">
                <button>跳转</button>
             </router-link>
           </li>
        </ul>
        <p>{{copyright}}</p>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data(){
    return{
        copyright:"Copyright 2019 vue Demo"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0 0;
  padding:0 0;
}
footer{
    background-color:blanchedalmond;
    padding:2px;
    border-radius:10px;
    height:100px;
}
p{
    color:chartreuse;
    text-align:center;
    margin:10px auto;
    font-size:20px;
    font-weight:600;
}

.foot{
    width:100%;
    max-width:1200px;
    margin:10px auto;
    /* padding:0 5px; */
    box-sizing:border-box;
  
}
li{
    list-style-type:none;
    width:100%;
    
   }
   a{
     text-decoration:none;
     display:inline-block;
     line-height:30px;
     width:100%;
   }
   button{
     width:100%;
     height:30px;
     border-radius:10px;
     outline:none;
     background-color:darkseagreen;
   }
 
</style>
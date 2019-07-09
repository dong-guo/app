<template>
  <footer>
      <div class="foot">
        <ul>
           <li v-for="user in users" 
               v-on:click="user.show=!user.show">
             <h2>{{user.name}}</h2>
             <h3 v-show="user.show">{{user.position}}</h3>
         </li>
        </ul>
        <p>{{copyright}}</p>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  props:['users'],
  data(){
    return{
        copyright:"Copyright 2019 vue Demo"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
    background:#222;
    padding:6px;
}
p{
    color:lightgreen;
    text-align:center;
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
  border:1px dotted yellow;
  margin:10px;
  background:url(../assets/logo.png) no-repeat;
  background-size:100% 100%;
}
.foot{
    width:100%;
    max-width:1200px;
    margin:40px auto;
    padding:0 20px;
    box-sizing:border-box;
}

</style>